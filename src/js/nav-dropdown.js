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

$(document).ready(function() {
    $('.Navigation-listItem').click(function(e) {
      if( $(this).children('.Navigation-list--dropdown').hasClass('is-hidden') ){
        $(".Navigation-list--dropdown").addClass('is-hidden');
        $(this).children('.Navigation-list--dropdown').removeClass('is-hidden'); 
      } else {
        $(".Navigation-list--dropdown").addClass('is-hidden');         
      }          
    });
  $('.Navigation-listItem .Navigation-list--dropdown').click(function(e) {
    e.stopPropagation();
  });
});

// -------------------------------------
// Anything that gets to the document
// will hide the dropdown
// -------------------------------------

$(document).click(function(){
  $(".Navigation-list--dropdown").addClass('is-hidden');
});

// -------------------------------------
// Clicks within the dropdown won't make
// it past the dropdown itself
// -------------------------------------

$(".Navigation-listItem--hasDropdown").click(function(e){
  e.stopPropagation();
});
