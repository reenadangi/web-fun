function initMap() {
  console.log("this is init")
  console.log("love maps",test)

  //This function will init map
  //Latt and Long of an locations user have visited- replace with database values
  var arr = [[],[]];
 
  // arr=[
  //   [51.509865, -0.118092],
  //   [43.651070, -79.347015]
  // ]
  console.log("len",arr.length)
  // var locationArr = [
  //   [41.881832, -87.623177],
  //   [51.509865, -0.118092],
  //   [43.651070, -79.347015],
  //   [21.17429, -86.84656],
  //   [13.736717, 100.523186],
  //   [1.290270, 103.851959],
  //   [28.644800, 77.216721],
  //   [48.864716, 2.349014],
  //   [31.559029, 35.473190],
  //   [37.983810, 23.727539],
  //   [25.0582294, -77.3430634]
  // ]
  //Center London - as center of location
  //Thiw would not change as it is center of map 
  var options = {
    zoom: 2,
    center: {
      lat: 51.509865,
      lng: -0.118092
    },
    styles: [{
        elementType: 'geometry',
        stylers: [{
          color: '#242f3e'
        }]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [{
          color: 'white'
        }]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [{
          color: 'white'
        }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          color: '#668cff'
        }]
      }
    ]
  }
  //Getting map from map api
  var map = new google.maps.Map(document.getElementById('map'), options);
  var placeId = "ChIJ7cv00DwsDogRAMDACa2m4K8"
  console.log(placeId)

//lets say we have a place id and we are using place id to get latt, long
//******************** */

var service = new google.maps.places.PlacesService(map);
  var request_1 = {
    placeId: placeId
  };
  var coord1,coord2

  service.getDetails(request_1, function (results, status) {
    console.log(status);
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      console.log(results.name)
      console.log(results.geometry.location.lat())
      console.log("this is lng",results.geometry.location.lng())
      // arr[0][0]=results.geometry.location.lat()
      // arr[0][1]=results.geometry.location.lng()
      coord1=results.geometry.location.lat()
      coord2=results.geometry.location.lng()
      addMarker(coord1,coord2,map)
      // console.log("in getDetails",arr[0][0],arr[0][1])
      for (var item in results) {
        console.log("item : " + item);
      }
    }
  });
  // arr[0][0]=coord1;
  // arr[0][1]=coord2;
  

  // console.log("hello from array",arr[0][0],arr[0][1])
//******************* */  
  // Arrays.asList(Place.Field.ID, Place.Field.NAME);
  // console.log(placeFields)

  // var markerArr=[];
  // for(var i=0;i<locationArr.length;i++)
  // {
  //     markerArr[i] = new google.maps.Marker({
  //         position: {
  //             lat: locationArr[i][0],
  //             lng: locationArr[i][1]
  //         },
  //         icon: image,
  //         animation: google.maps.Animation.DROP,
  //         map: map
  //     });
  //     markerArr[i].addListener('click', function () {
  //       showDetails( map,markerArr[i],"ChIJ7cv00DwsDogRAMDACa2m4K8");
  //   });
  // }

  // var marker = new google.maps.Marker({
  //     position: {
  //         lat: locationArr[0][0],
  //         lng: locationArr[0][1]
  //     },
  //     animation: google.maps.Animation.DROP,
  //     icon: image,
  //     map: map
  // });

  // marker.addListener('click', function () {
  //     showDetails( map,marker,"ChIJ7cv00DwsDogRAMDACa2m4K8");
  // });

  //Add marker to each location 
  // for (var i = 0; i < arr.length; i++) {
  //   console.log(arr[i][1])
  //   addMarker(arr[0][0], arr[i][1], map);

  // }
  console.log("after add marker")
}

function addMarker(x, y, map) {
  //find place_id with given x & y , right now its hard coded
  //find place_id using place api 
  place_id = "ChIJ7cv00DwsDogRAMDACa2m4K8";
  // get street address with place _id


  var image = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
  var marker = new google.maps.Marker({
    position: {
      lat: x,
      lng: y
    },
    animation: google.maps.Animation.DROP,
    icon: image,
    map: map
  });
  marker.addListener('click', function () {
    showDetails(map, marker, place_id);
  });

}

function showDetails(map, marker, place_id) {
  console.log("marker", marker);
  var placeService = new google.maps.places.PlacesService(map)
  var contentStringChicago = '';
  var service = new google.maps.places.PlacesService(map);

  var request_1 = {
    placeId: place_id
  };

  service.getDetails(request_1, function (results, status) {
    console.log(status);

    contentStringChicago = '<div id="x">' + '<h1>' + results.name + '</h1>' + '<img class="photo" src="' + results.photos[0].getUrl() + '" alt="chicago">' +
      '</div>' + '<div id="y"><p><b>' + results.formatted_address + '</b></p> <p>' + results.website + '</P><a href="">My Gallery</a></div>';

    if (status == google.maps.places.PlacesServiceStatus.OK) {
      console.log("contentStringChicago** :" + contentStringChicago);
      for (var item in results) {
        console.log("item : " + item);

      }

    }
    var infowindow = new google.maps.InfoWindow({
      content: contentStringChicago
    });


    infowindow.open(map, marker);

  });

}