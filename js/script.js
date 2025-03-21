const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");
navToggle && navToggle.addEventListener("click", () => {
	navMenu.classList.add("show-menu")
}), navClose && navClose.addEventListener("click", () => {
	navMenu.classList.remove("show-menu")
});
const navLink = document.querySelectorAll(".nav-link");

function linkAction(e) {
	let t = e.currentTarget.getAttribute("href"),
		l = window.location.pathname;
	if (t === l) {
		e.preventDefault();
		return
	}
	navMenu.classList.remove("show-menu")
}
navLink.forEach(e => e.addEventListener("click", linkAction)), document.addEventListener("DOMContentLoaded", function() {
	let e = window.location.pathname;
	navLink.forEach(t => {
		let l = t.getAttribute("href");
		("/" === e || "/index.html" === e) && "#home" === l ? t.classList.add("active-link") : l === e ? t.classList.add("active-link") : t.classList.remove("active-link")
	})
});
const skillsContent = document.getElementsByClassName("skills-container-content"),
	skillsHeader = document.querySelectorAll(".skills-container-header");

function toggleSkills() {
	let e = this.parentNode.className;
	for (i = 0; i < skillsContent.length; i++) skillsContent[i].className = "skills-container-content skills-close";
	"skills-container-content skills-close" === e && (this.parentNode.className = "skills-container-content skills-open")
}
skillsHeader.forEach(e => {
	e.addEventListener("click", toggleSkills)
});
const modalViews = document.querySelectorAll(".services-modal"),
	modalBtns = document.querySelectorAll(".services-button"),
	modalCloses = document.querySelectorAll(".services-modal-close");
let modal = function(e) {
	modalViews[e].classList.add("active-modal")
};
modalBtns.forEach((e, t) => {
	e.addEventListener("click", () => {
		modal(t)
	})
}), modalCloses.forEach(e => {
	e.addEventListener("click", () => {
		modalViews.forEach(e => {
			e.classList.remove("active-modal")
		})
	})
});
var swiperPortfolio = new Swiper(".portfolio-container", {
	cssMode: !0,
	loop: !0,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: !0
	}
});
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
	let e = window.pageYOffset;
	sections.forEach(t => {
		let l = t.offsetHeight,
			s = t.offsetTop - 50;
		sectionId = t.getAttribute("id"), e > s && e <= s + l ? document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link") : document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link")
	})
}

function scrollHeader() {
	let e = document.getElementById("header");
	this.scrollY >= 80 ? e.classList.add("scroll-header") : e.classList.remove("scroll-header")
}

function scrollUp() {
	let e = document.getElementById("scroll-up");
	this.scrollY >= 560 ? e.classList.add("show-scroll") : e.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollActive), window.addEventListener("scroll", scrollHeader), window.addEventListener("scroll", scrollUp);
const themeButton = document.getElementById("theme-button"),
	darkTheme = "dark-theme",
	iconTheme = "fa-sun",
	selectedTheme = localStorage.getItem("selected-theme"),
	selectedIcon = localStorage.getItem("selected-icon"),
	getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light",
	getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";
selectedTheme && (document.body.classList["dark" === selectedTheme ? "add" : "remove"](darkTheme), themeButton.classList["fa-moon" === selectedIcon ? "add" : "remove"](iconTheme)), themeButton.addEventListener("click", () => {
	document.body.classList.toggle(darkTheme), themeButton.classList.toggle(iconTheme), localStorage.setItem("selected-theme", getCurrentTheme()), localStorage.setItem("selected-icon", getCurrentIcon())
});