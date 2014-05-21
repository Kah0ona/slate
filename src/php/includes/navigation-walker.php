<?php
add_action( 'after_setup_theme', 'navigation_walker_setup' );

function navigation_walker_setup(){

    class Slate_Walker_Nav_Menu extends Walker_Nav_Menu {

      function start_lvl( &$output, $depth ) {
        $indent = str_repeat( "\t", $depth );
        $output .= "\n$indent<ul class='Navigation-list Navigation-list--dropdown is-hidden'>\n";

      }

      function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {

        $indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';

        $li_attributes = '';
        $class_names = $value = '';

        $classes = array();
        $classes[] = ($args->has_children) ? 'Navigation-listItem--hasDropdown' : '';
        $classes[] = ($item->current || $item->current_item_ancestor) ? 'is-active' : '';
        $classes[] = 'Navigation-listItem';

        $class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args ) );
        $class_names = ' class="' . esc_attr( $class_names ) . '"';

        $output .= $indent . '<li' . $value . $class_names . $li_attributes . '>';

        $attributes = ! empty( $item->attr_title ) ? ' title="' . esc_attr( $item->attr_title ) .'"' : '';
        $attributes .= ! empty( $item->target ) ? ' target="' . esc_attr( $item->target ) .'"' : '';
        $attributes .= ! empty( $item->xfn ) ? ' rel="' . esc_attr( $item->xfn ) .'"' : '';
        $attributes .= ! empty( $item->url ) ? ' href="' . esc_attr( $item->url ) .'"' : '';

        $activeClass = ($item->current || $item->current_item_ancestor) ? 'is-active' : '';

        $hasDropdown = '';
        if($args->has_children) {
          $hasDropdown = 'Navigation-link--dropdown js-navDropdown';
        }

        $attributes .= ' class="Navigation-link '.$activeClass.' '.$hasDropdown.'"';
        $item_output = $args->before;
        $item_output .= '<a'. $attributes .'>';
        $item_output .= $args->link_before . apply_filters( 'the_title', $item->title, $item->ID ) . $args->link_after;
        $item_output .= ($args->has_children) ? ' <b class="caret"></b></a>' : '</a>';
        $item_output .= $args->after;

        $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
      }

      function display_element( $element, &$children_elements, $max_depth, $depth=0, $args, &$output ) {

        if ( !$element )
          return;

        $id_field = $this->db_fields['id'];

        //display this element
        if ( is_array( $args[0] ) )
          $args[0]['has_children'] = ! empty( $children_elements[$element->$id_field] );
        else if ( is_object( $args[0] ) )
          $args[0]->has_children = ! empty( $children_elements[$element->$id_field] );
        $cb_args = array_merge( array(&$output, $element, $depth), $args);
        call_user_func_array(array(&$this, 'start_el'), $cb_args);

        $id = $element->$id_field;

        // descend only when the depth is right and there are childrens for this element
        if ( ($max_depth == 0 || $max_depth > $depth+1 ) && isset( $children_elements[$id]) ) {

          foreach( $children_elements[ $id ] as $child ){

            if ( !isset($newlevel) ) {
              $newlevel = true;
              //start the child delimiter
              $cb_args = array_merge( array(&$output, $depth), $args);
              call_user_func_array(array(&$this, 'start_lvl'), $cb_args);
            }
            $this->display_element( $child, $children_elements, $max_depth, $depth + 1, $args, $output );
          }
            unset( $children_elements[ $id ] );
        }

        if ( isset($newlevel) && $newlevel ){
          //end the child delimiter
          $cb_args = array_merge( array(&$output, $depth), $args);
          call_user_func_array(array(&$this, 'end_lvl'), $cb_args);
        }

        //end this element
        $cb_args = array_merge( array(&$output, $element, $depth), $args);
        call_user_func_array(array(&$this, 'end_el'), $cb_args);

      }

    }

}


?>
