function switchYear(el) {
    var years_li = document.getElementsByClassName('about-years');
    var years_p = document.getElementsByClassName('about-years-p'); 
    var years_pBox = document.getElementsByClassName('about-years-desbox');
    for (var i = 0; i < years_li.length; i++) {
        year = years_li[i];
        year_p = years_p[i];
        year_pBox = years_pBox[i]
        // remove years bold font size and image bullet
        year.classList.remove('selected-years');
        // show/hide paragaph and reset height
        year_p.classList.remove('about-years-p-selected');
        year_pBox.classList.remove('about-years-desbox-selected');
        if (years_li[i] == el) {
            year_p.classList.add('about-years-p-selected');
            year_pBox.classList.add('about-years-desbox-selected');
        }
    }
    el.classList.add('selected-years');
    
    // change markers on the map
    var marker_id = el.id + "-marker"
    document.getElementById(marker_id).click();
}

function switchPhoto(el) {
    let photo_li = document.getElementsByClassName('about-photo-list-item');
    let photoDes_li = document.getElementsByClassName('about-photo-description');
    for (var i = 0; i < photo_li.length; i++) {
        photo_li[i].classList.remove('about-selected-photo-item');
        if (photoDes_li[i].classList.contains('selected-about-photo-description')){
            photoDes_li[i].classList.remove('selected-about-photo-description');
        }
        if (el == photo_li[i]) {
            photoDes_li[i].classList.add('selected-about-photo-description');
        } 
    }
    el.classList.add('about-selected-photo-item');
}


// About geojson data
var about_geojson = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"class": "about-marker-selected", "relateYear": "year1994"},"geometry":{"type":"Point","coordinates":[121.53762817382814,25.045170158679838]}},{"type":"Feature","properties":{"class": "about-marker", "relateYear": "year2017"},"geometry":{"type":"Point","coordinates":[-113.67641687393188,48.79747892957555]}},{"type":"Feature","properties":{"class": "about-marker", "relateYear": "year2019"},"geometry":{"type":"Point","coordinates":[-76.94013118743896,38.987634705293424]}}]};

// mapbox map
let map = new mapboxgl.Map({
    container: 'map',
    center: [2.06, 41.07],
    zoom: 2,
    style:
    'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoibG91aXMzNDA1IiwiYSI6ImNrY3duZ3JnaDBmdWwycWtkdWVja3h4bnQifQ.MEcSWWH2kKRPUaJ5IjXcfQ'
});

map.addControl(
    new mapboxgl.NavigationControl());

about_geojson.features.forEach(function(marker) {
    
    // create a HTML element for each feature
    var el = document.createElement('div');
    if (marker.properties.class == "about-marker"){
        el.className = 'about-marker';
    } else if (marker.properties.class == "about-marker-selected") {
        el.className = 'about-marker-selected';
    }

    el.id = marker.properties.relateYear + "-marker";

    // change map icon when clicking on the marker
    el.addEventListener('click', function() {
        // change marker
        var selected = document.getElementsByClassName('about-marker-selected')[0];
        selected.classList.replace('about-marker-selected', 'about-marker');

        if (el.classList.contains('about-marker')) {
            el.classList.replace('about-marker', 'about-marker-selected');
        } else {
            el.classList.replace('about-marker-selected', 'about-marker');
        }

        // change about year
        var id = marker.properties.relateYear;
        var year_el = document.getElementById(id);
        switchYear(year_el);
    })

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
});

