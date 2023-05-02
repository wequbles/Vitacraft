function openCity(evt, teamTabName) {
	var i, team__tab, team__btn;
	team__tab = document.getElementsByClassName("team__tab");
	for (i = 0; i < team__tab.length; i++) {
		team__tab[i].style.display = "none";
	}
	team__btn = document.getElementsByClassName("team__btn");
	for (i = 0; i < team__btn.length; i++) {
		team__btn[i].className = team__btn[i].className.replace(" active", "");
	}
	document.getElementById(teamTabName).style.display = "block";
	evt.currentTarget.className += " active";
}