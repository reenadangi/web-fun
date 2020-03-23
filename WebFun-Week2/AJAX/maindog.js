$(document).ready(function(){
console.log("you are funny");
callAPI();

});

function callAPI()
{
    // $.ajax({
    //     url: "https://dog.ceo/api/breeds/image/random",
    //     context: document.body
    //   }).done(function(res) {
    //     console.log(res);
    //     $( "#random-dog" ).css( "background-image", 'url('+res.message +') '   );
    //   });


 $.ajax({
        url: "https://dog.ceo/api/breeds/list/all",
        context: document.body
      }).done(function(res) {
        // console.log(res.message.buhund);
        for(var key in res.message) {
            console.log(key);
            
        }
        // $( "#random-dog" ).css( "background-image", 'url('+res.message +') '   );
      });
      
}