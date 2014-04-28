// *************************************
//
//   Prepend svg
//   -> Loads the svg icon library
//
// *************************************

$.ajax({
  url:"/wp-content/themes/slate_themename/ico/sprites.svg",
  method: "GET",
  dataType: "html",
  success: function(data) {
    $("body").prepend(data);
  }
})
