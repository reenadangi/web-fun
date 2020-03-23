
function attach_handlers()
{
  $("img").click(function () {
    $(this).slideUp();
    console.log("clicked");
  });

  $("img").hover (function () { 
    console.log("Hover", $(this));
    //  $(this).fadeIn();
  });
  
} 
$(document).ready(function () {

  for (var i = 1; i <= 9; i++) {
    $(".wrapper").append("<img src='ninja.png' altsrc='ninja2.png' alt='NinjaImage'>");
  }
  attach_handlers();
  // $(document).on("click", "img", function () {
  //   $(this).slideUp();
  // });

  // $(document).on("mouseover mouseleave", "img", function () {
  //   var temp = $(this).attr('src');
  //   $(this).attr('src', $(this).attr('altsrc'));
  //   $(this).attr('altsrc', temp);
  // });

});

$("#btn-restore").click(function () {
  $("img").show();
});