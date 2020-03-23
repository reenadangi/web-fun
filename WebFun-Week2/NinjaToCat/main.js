$("img").click(function () { 
    // console.log("image is clicked");
     console.log('data-alt-src value is', $(this).attr('data-alt-src'));
    var temp=  $(this).attr('src');   
     $(this).attr('src', $(this).attr('data-alt-src'));
     $(this).attr('data-alt-src',temp);

});
$("button").click(function(){
alert("clicked");
$.get("https://api.github.com/users/reena", displayName)
// Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
function displayName(data) {
  console.log(data);
}

});