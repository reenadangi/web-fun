function initMap() {
    // $("#myPhoto").hide();
    var options = {
        zoom: 4,
        center: {
            lat: 41.881832,
            lng: -87.623177
        }
    }
    var map = new google.maps.Map(document.getElementById('map'), options);
  
    //chicago

    var marker = new google.maps.Marker({
        position: {
            lat: 41.881832,
            lng: -87.623177
        },
        map: map
    });
    //London
    var markerLondon = new google.maps.Marker({
        position: {
            lat: 51.5074,
            lng: 0.1278
        },
        map: map
    });
   
   
    // var places = new google.maps.places.PlacesService.getDetails("ChIJ7cv00DwsDogRAMDACa2m4K8");
        // "ChIJ7cv00DwsDogRAMDACa2m4K8");
    //Deadsea
    var markerDeadsea = new google.maps.Marker({
        position: {
            lat: 31.5590,
            lng: 35.4732
        },
        map: map
    });

    
    var contentStringChicago =
        '<div id="x">' + '<h1>Chicago</h1>' + '<img class="photo" src="Image/Chicago1.JPG" alt="chicago">' +
        '</div>' + '<div id="y"><p><b>Windy City</b></p> <p>hdgdgdhjhjl</P>  <p>Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, it has a skyline punctuated by skyscrapers such as the iconic John Hancock Center, 1,451-ft. Willis Tower (formerly the Sears Tower) and the neo-Gothic Tribune Tower. </p>' +
        '</div>';

        var contentStringLondon =
        '<div id="x">' + '<h1>London</h1>' + '<img class="photo" src="Image/London.JPG" alt="London">' +
        '</div>' + '<div id="y"><p><b>City of Queen</b></p> <p>hdgdgdhjhjl</P>  <p>Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, it has a skyline punctuated by skyscrapers such as the iconic John Hancock Center, 1,451-ft. Willis Tower (formerly the Sears Tower) and the neo-Gothic Tribune Tower. </p>' +
        '</div>';
        var contentStringDeadSea =
        '<div id="x">' + '<h1>Dead Sea</h1>' + '<img class="photo" src="Image/deadsea.JPG" alt="London">' +
        '</div>' + '<div id="y"><p><b>City of Queen</b></p> <p>hdgdgdhjhjl</P>  <p>Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, it has a skyline punctuated by skyscrapers such as the iconic John Hancock Center, 1,451-ft. Willis Tower (formerly the Sears Tower) and the neo-Gothic Tribune Tower. </p>' +
        '</div>';

        var infowindow = new google.maps.InfoWindow({
        content: contentStringChicago
    });

    var infowindowLondon = new google.maps.InfoWindow({
        content: contentStringLondon
    });

    var infowindowDeadsea = new google.maps.InfoWindow({
        content: contentStringDeadSea
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
        // $("#myPhoto").show(200);
    });
    markerLondon.addListener('click', function () {
        infowindowLondon.open(map, markerLondon);
        // $("#myPhoto").show(200);
    });
    markerDeadsea.addListener('click', function () {
        infowindowDeadsea.open(map, markerDeadsea);
        // $("#myPhoto").show(200);
    });


    var input = "chicagoUSA Fastball, Wiley Road, Schaumburg, IL, USA";
  
    var options = {
      types: ['establishment']
    };
  
    var autocomplete = new google.maps.places.Autocomplete(input, options);
    console.log(autocomplete);
  

    // var service = new google.maps.places.PlacesService(document.getElementById('map1'));
    // console.log(service);

    // service.getDetails({
    //     placeId: "ChIJT_x1AIOB0IkRhcd1YOHXJXk",
    //     function(place, status) {
    //         console.log(status)
    //         if (status == google.maps.places.PlacesServiceStatus.OK) {
    //           console.log(place)
    //         }
    //     }
    //    });
    // var place_details= service.getDetails({
    //     placeId: 'ChIJ7cv00DwsDogRAMDACa2m4K8'
    //     });
        

}