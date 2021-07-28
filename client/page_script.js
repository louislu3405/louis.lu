function switchYear(el) {
    var years_li = document.getElementsByClassName('about-years');
    var years_p = document.getElementsByClassName('about-years-p'); 
    console.log(years_p);
    var years_pBox = document.getElementsByClassName('about-years-desbox');
    for (var i = 0; i < years_li.length; i++) {
        year = years_li[i];
        year_p = years_p[i];
        year_pBox = years_pBox[i]
        // remove years bold font size and image bullet
        year.classList.remove('selected-years');
        // year.style.height = "auto";
        // show/hide paragaph and reset height
        console.log(years_p);
        year_p.classList.remove('about-years-p-selected');
        year_pBox.classList.remove('about-years-desbox-selected');
        if (years_li[i] == el) {
            year_p.classList.add('about-years-p-selected');
            year_pBox.classList.add('about-years-desbox-selected');
        }
    }
    el.classList.add('selected-years');
    // el.style.height = "100px";
}
// About geojson data
var about_geojson = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[121.53762817382814,25.045170158679838]}},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-113.67641687393188,48.79747892957555]}},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-76.94013118743896,38.987634705293424]}}]}

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
    el.className = 'about-marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
});

