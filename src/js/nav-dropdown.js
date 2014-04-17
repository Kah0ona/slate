// *************************************
//
//   Navigation dropdown
//   -> Example: http://codepen.io/anon/pen/lkgqx
//
// *************************************

$(document).ready(function() {
    $('.has-dropdown').click(function() {
      $(this).siblings('.dropdown').toggleClass('is-hidden');
    });
});
