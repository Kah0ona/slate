// *************************************
//
//   Navigation dropdown
//   -> Expand/collapse submenus
//
// *************************************

// -------------------------------------
// Toggle .is-hidden class onclick and
// allow only one open menu at a time
// -------------------------------------

jQuery(document).ready(function($) {

  // When a dropdown trigger is clicked
  $('.js-navDropdown').click(function(e) {
    // If the selected dropdown list is not visible
    if ($(this).siblings('.Navigation-list--dropdown').hasClass('is-hidden')) {
      // Hide all dropdown lists, except the selected dropdown and its parents
      $(".Navigation-list--dropdown")
        .addClass('is-hidden');
      // Make the selected dropdown visible
      $(this).siblings('.Navigation-list--dropdown')
        .removeClass('is-hidden');
      // Make its parents visible
      $(this).parents('.Navigation-list--dropdown')
        .removeClass('is-hidden');
      // If the selected dropdown is visible
    } else {
      // Hide the selected dropdown
      $(this).siblings('.Navigation-list--dropdown').addClass('is-hidden');
      // Hide the descendants of the selected dropdown
      $(this).children('.Navigation-list--dropdown').addClass('is-hidden');
    }
  }).click(function(e) {
    // Prevent screen from jumping when clicking a dropdown trigger
    e.preventDefault();
  });
  // Stop clicks on navigation links from bubbling up
  $('.Navigation-link').click(function(e) {
    e.stopPropagation();
  });

});

// -------------------------------------
// All clicks that gets to the document
// will hide all dropdowns
// -------------------------------------

$(document).click(function() {

  $(".Navigation-list--dropdown").addClass('is-hidden');

});
