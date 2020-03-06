
/*
    Place Search

*/

$(document).ready(function () {
    (function () {
        //set variables and objects
        var coords = { lat: 40.748817, lng: -73.985428 };//static coordinates for page load
        var map = new google.maps.Map(document.getElementById('map'), {//Search Map class at https://developers.google.com/maps/documentation/javascript/3.exp/reference
            center: coords,
            zoom: 10,
            streetViewControl: false
        });
        var panorama;
        var autocomplete;
        var streetViewService = new google.maps.StreetViewService(); //Search StreetViewService class at https://developers.google.com/maps/documentation/javascript/3.exp/reference
        var service = new google.maps.places.PlacesService(map); //Search PlacesServices at https://developers.google.com/maps/documentation/javascript/3.exp/reference
        var streetViewRequest = { location: coords, radius: 50 };//Search nearbySearch() at https://developers.google.com/maps/documentation/javascript/3.exp/reference //load place info and reviews

        //set DOM
        $('#reviews').scroll(function () { });
        $('#placeInfo').scroll(function () { });
        $('#placeInfo').html('Places Info');
        $('#reviews').html('Get Reviews on a Particular Place Using Search Box or Clicking a Place on the Map.');


        autocomplete = new google.maps.places.Autocomplete((//Search AutoComplete at https://developers.google.com/maps/documentation/javascript/3.exp/reference
            document.getElementById('autocomplete')), {
        });

        panorama = new google.maps.StreetViewPanorama(//Search StreetViewPanorama at https://developers.google.com/maps/documentation/javascript/3.exp/reference
            document.getElementById('pano'), {
        });


        //set up autocomplete and map event listeners
        autocomplete.addListener('place_changed', autoSearch);

        //map event listener for click event
        map.addListener('click', function (e) {
            var PlaceSearchRequest = { location: map.center, radius: '500' };//Search (PlaceSearchRequest Object Specification) at https://developers.google.com/maps/documentation/javascript/3.exp/reference
            var StreetViewLocationRequest = { location: e.latLng, radius: 50 }; //Search (StreetViewLocationRequest Object Specification) at https://developers.google.com/maps/documentation/javascript/3.exp/reference
            service.nearbySearch(StreetViewLocationRequest, getNearBySearch);//Search nearbySearch() at https://developers.google.com/maps/documentation/javascript/3.exp/reference
            streetViewService.getPanorama(StreetViewLocationRequest, getStreetView); //Search getPanorama() at https://developers.google.com/maps/documentation/javascript/3.exp/reference
        });

        //search details and set streetview on page load
        service.nearbySearch(streetViewRequest, getNearBySearch);//Search nearbySearch() at https://developers.google.com/maps/documentation/javascript/3.exp/reference //load place info and reviews
        streetViewService.getPanorama(streetViewRequest, getStreetView);//Search getPanorama() at https://developers.google.com/maps/documentation/javascript/3.exp/reference


        //Callback1, Search PlaceResult object specification at https://developers.google.com/maps/documentation/javascript/3.exp/reference
        function getNearBySearch(results, status) {
            if (!(status === "ZERO_RESULTS")) {
                $('#placeInfo').empty();//clear child nodes
                for (var i = 0; i < results.length; i++) {
                    var placeDetailsRequest = { placeId: results[i].place_id }; //Search placeDetailsRequest at https://developers.google.com/maps/documentation/javascript/3.exp/reference
                    service.getDetails(placeDetailsRequest, getPlaceDetails);
                }//end for
            } else {
                $('#placeInfo').html('No Places Info Here.');
                $('#reviews').html('No Reviews Available');
            }
        }//getNearBySearch(results, status)

        //Callback2, Search PlaceResult object specification at https://developers.google.com/maps/documentation/javascript/3.exp/reference
        function getPlaceDetails(place, status) {
            if (place != null) {
                //console.log(place);//obj
                getPlaceInfo(place);
                getReviews(place);
            }
        }//end getPlaceDetails(place, status)

        //Place Information, Search PlaceResult object specification at https://developers.google.com/maps/documentation/javascript/3.exp/reference
        function getPlaceInfo(place) {
            var lat = place.geometry.location.lat().toFixed(6);
            var lng = place.geometry.location.lng().toFixed(6);
            //get location information
            if (place.website) {//website view
                $('#placeInfo').prepend("<br/>" + place.name + "<br/>" + place.adr_address +
                    "<br/>Lat:" + lat + "<br/>Lng: " + lng + "<br/><a href=" + place.website + " target='_blank'>WebSite</a><br/>");
            } else {//non-website view
                $('#placeInfo').prepend("<br/>" + place.name + "<br/>" + place.adr_address +
                    "<br/>Lat:" + lat + "<br/>Lng: " + lng + "<br/>");
            }
        }//getPlaceInfo(place) 

        //Place Reviews, Search PlaceResult object specification at https://developers.google.com/maps/documentation/javascript/3.exp/reference
        function getReviews(place) {//get user reviews about a place
            if (place.reviews) {
                $('#reviews').empty();//clear child nodes
                for (var i = 0; i < place.reviews.length; i++) {
                    var author = place.reviews[i].author_name;
                    var url = place.reviews[i].author_url;
                    var rating = place.reviews[i].rating;
                    var text = place.reviews[i].text;
                    var place_name = place.name;
                    //check for images
                    if (place.reviews[i].profile_photo_url) {//append dom elements using jQuery's append()
                        var pic = place.reviews[i].profile_photo_url;
                        $('#reviews').append('<br/><a href="' + url + '" target="_blank">Author: ' + author + ' Speaks About ' + place.name + '</a><br/><img width="200" height="200" src="' + pic + '"></img>' +
                            '<br/>Rating: ' + rating + ' <br/>Comments: ' + text + '<br/><br/>');
                    } else {
                        $('#reviews').append('<br/><a href="' + url + '" target="_blank">Author: ' + author + ' Speaks About ' + place.name + '</a><br/>Rating: ' + rating + '' +
                            '<br/>Comment: ' + text + '<br/><br/>');
                    }//end if-else
                }//end for
            } else {
                $('#reviews').html('No Reviews Available');//set innerHTML
            }
        }//getReviews(place) 

        //Street view implementation https://developers.google.com/maps/documentation/javascript/examples/streetview-simple
        function getStreetView(data, result) {//get street views
            try {
                if (result === "OK") {
                    var marker = new google.maps.Marker({//Search Marker class at https://developers.google.com/maps/documentation/javascript/3.exp/reference
                        position: data.location.latLng,
                        map: map,
                        title: data.location.description
                    });
                    panorama.setPano(data.location.pano);//Search setPano(pano:string) at https://developers.google.com/maps/documentation/javascript/3.exp/reference
                } else {
                    $("#streetView").html('Street View data not found for this location.');
                }
            }
            catch (e) {
                console.log(e);
            }
        }//getStreetView(data, status) 

        //Modified API AutoComplete() from https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete
        function autoSearch() {
            var place = autocomplete.getPlace();
            var placeId = place.place_id;
            var latLng = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() };
            if (place.geometry) {
                $('#placeInfo').empty();//clear child nodes
                map.panTo(place.geometry.location);
                map.setZoom(10);
                map.setCenter(latLng);//center map based on street view lat/lng

                var marker = new google.maps.Marker({//Search Marker class at https://developers.google.com/maps/documentation/javascript/3.exp/reference
                    position: latLng,
                    map: map,
                    title: place.formatted_address
                });
            } else {
                $('#autocomplete').html('Enter a Place or Address.');
            }
            getPlaceInfo(place); //get place information
            getReviews(place); //get reviews
        }//autoSearch()
    })();
});



/*
    //Goggle Maps JavaScript API
    https://developers.google.com/maps/documentation/javascript/3.exp/reference

    //autocomplete
    https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete

    //street view
    https://developers.google.com/maps/documentation/javascript/examples/streetview-simple


*/
