function openCity(evt, storeTabName) {
	var i, store__tab, store__menu__btn;
	store__tab = document.getElementsByClassName("store__tab");
	for (i = 0; i < store__tab.length; i++) {
		store__tab[i].style.display = "none";
	}
	store__menu__btn = document.getElementsByClassName("store__menu__btn");
	for (i = 0; i < store__menu__btn.length; i++) {
		store__menu__btn[i].className = store__menu__btn[i].className.replace(" active", "");
	}
	document.getElementById(storeTabName).style.display = "block";
	evt.currentTarget.className += " active";
}