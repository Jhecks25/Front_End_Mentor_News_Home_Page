

let openMenu = document.querySelector(".svg-file");
let closeMenu = document.querySelector(".svg-close");
let dropDownMenu = document.querySelector(".dropdown-menu");



let addEvents = (menuButton, toggleMenu) => {
	menuButton.addEventListener('click', toggleMenu);
}

let openDropDownMenu = (evt) => {
    dropDownMenu.style.display = "block";
}

addEvents(openMenu, openDropDownMenu);

 let closeDropDownMenu = (evt) => {
 	dropDownMenu.style.display = "";
 }

addEvents(closeMenu, closeDropDownMenu);
