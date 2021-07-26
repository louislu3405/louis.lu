function switchYear(el) {
    var years = document.getElementsByClassName('about-years');
    for (var i = 0; i < years.length; i++) {
        year = years[i];
        year.classList.remove('selected-years');
    }
    el.classList.add('selected-years');
}