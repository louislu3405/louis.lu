function switchYear(el) {
    var years_li = document.getElementsByClassName('about-years');
    var years_p = document.getElementsByClassName('about-years-p');
    for (var i = 0; i < years_li.length; i++) {
        year = years_li[i];
        year.classList.remove('selected-years');
        year.style.height = "auto";
        years_p[i].style.display = "none"
        if (years_li[i] == el) {
            years_p[i].style.display = "block";
        }
    }
    el.classList.add('selected-years');
    el.style.height = "100px";
}