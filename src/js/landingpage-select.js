// *************************************
//
//   Create landingpage select box
//   -> For seo purposes
//
// *************************************

jQuery(document).ready(function($) {

  /* Get the window's width, and check whether it is narrower than 480 pixels */
  var windowWidth = $(window).width();
  if (windowWidth <= 480 || true) {

    /* Clone our navigation(s) */
    var counter = 0;
    $('#menu-footermenu').each(function() {
      var mainNavigation = $(this).clone();

      /* Replace unordered list with a "select" element to be populated with options,
        and create a variable to select our new empty option menu */
      $(this).html('<select class="menu menu-' + counter + '"></select>');
      var selectMenu = $('select.menu-' + counter);
      $(selectMenu).append('<option value="#">-- Selecteer --</option>');

      /* Navigate our nav clone for information needed to populate options */
      $(mainNavigation).children('li').each(function() {

        /* Get top-level link and text */
        var href = $(this).children('a').attr('href');
        var text = $(this).children('a').text();

        /* Append this option to our "select" */
        $(selectMenu).append('<option value="' + href + '">' + text + '</option>');

        /* Check for "children" and navigate for more options if they exist */
        if ($(this).children('ul').length > 0) {
          $(this).children('ul').children('li').each(function() {

            /* Get child-level link and text */
            var href2 = $(this).children('a').attr('href');
            var text2 = $(this).children('a').text();

            /* Append this option to our "select" */
            $(selectMenu).append('<option value="' + href2 + '">--- ' + text2 + '</option>');
          });
        }
      });
      counter++;
    });
  }

  /* When one of our select menu's is changed, change the window location to match the value of the selected option. */
  $('select.menu').change(function() {
    window.location = this.options[this.selectedIndex].value;
  });
});
