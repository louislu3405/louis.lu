function switchYear(el) {
    var years_li = document.getElementsByClassName('about-years');
    var years_p = document.getElementsByClassName('about-years-p'); 
    var years_pBox = document.getElementsByClassName('about-years-desbox');
    for (var i = 0; i < years_li.length; i++) {
        year = years_li[i];
        // remove years bold font size and image bullet
        year.classList.remove('selected-years');
        year.style.height = "auto";
        var yearHeight = year.offsetHeight;
        years_pBox[i].style.height = yearHeight + "px";
        // show/hide paragaph and reset height
        years_p[i].style.display = "none"
        if (years_li[i] == el) {
            years_p[i].style.display = "block";
            years_pBox[i].style.height = "auto";
        }
    }
    el.classList.add('selected-years');
    el.style.height = "100px";
}

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

map.on('load', function () {
    map.addSource('some id', {
        type: 'geojson',
        data: {"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[121.53762817382814,25.045170158679838]}},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-113.67641687393188,48.79747892957555]}},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-76.94013118743896,38.987634705293424]}}]}
    });

    map.addLayer({
        'id': 'year-locations',
        'type': 'circle',
        'source': 'some id',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
        },
        'filter': ['==', '$type', 'Point']
    });
});


