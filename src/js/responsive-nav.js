// *************************************
//
//   Responsive nav
//   -> Initialize responsive-nav.js
//
// *************************************

var nav = responsiveNav(".Navigation", {
    label    : "Menu",       // String: Label for the navigation toggle
    insert   : "before",     // String: Insert the toggle before or after the navigation
    navClass : "Navigation", // String: Default CSS class. If changed, you need to edit the CSS too!
});
