function initMap() {

 
  
  var input = document.getElementById('pac-input');
  
    var options = {
      types: ['establishment']
    };
  
    
    
    var autocomplete = new google.maps.places.Autocomplete(input, options);
    
    console.log(input);
  
    autocomplete.setFields(['place_id', 'geometry', 'name', 'formatted_address', 'formatted_phone_number', 'opening_hours', 'website', 'photos']);
  
    autocomplete.addListener('place_changed', placechange);
  
    function placechange() {
  
      var place = autocomplete.getPlace();
      var photos = place.photos;
  
      document.getElementById('place_name').textContent = place.name;
      document.getElementById('place_id').textContent = place.place_id;
      document.getElementById('place_address').textContent = place.formatted_address;
      document.getElementById('phone_no').textContent = place.formatted_phone_number;
    //   document.getElementById('open_time').textContent = place.opening_hours.weekday_text[0];
    //   document.getElementById('open_now').textContent = place.opening_hours.open_now;
      document.getElementById('photo').src = photos[0].getUrl();
      document.getElementById('photo').style = "width:50%;";
      document.getElementById('website').textContent = place.website;
  
  
    }
}