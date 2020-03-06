<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Place Search</title>
    <link rel="stylesheet" href="css/placesearch.css" />
    <!-- Latest compiled and minified CSS -->
    <script src="libs/jquery-3.4.1.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAC9uJbDkVAVXfKALyaigk71zOA8Sd6g7o&libraries=places"></script>
    <link rel="stylesheet" @media (min-width: @screen-md-min)  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <script src="js/placesearch.js"></script> 
</head>
<body>
    <div id="locationField"><input id="autocomplete" placeholder="Enter a Place or Address" type="text" /></div>
    <div id="map"></div>
    <div id="pano"></div>
    <div class="container-fluid">
        <div class="row" style="overflow: scroll; width: 1200px; height: 500px;">
            <table class="table table-responsive">
                <tr>
                    <td><div id="streetView" style="text-align:right"></div></td>
                </tr>
                <tr>
                    <td><div id="streetView" style="text-align:right"></div></td>
                </tr>
                <tr>
                    <td><div id="placeInfo" ></div></td>
                    <td><div id="reviews" ></div></td>
                </tr>
            </table>
        </div>
    </div>
</body>
</html>
