// pc 헤더 스크롤
document.addEventListener("scroll", function () {
	var header = document.querySelector("header.pc-header");
	if (window.scrollY > 50) {
		header.classList.add("active");
	} else {
		header.classList.remove("active");
	}
});

// 모바일 헤더 스크롤
document.addEventListener("scroll", function () {
	var mbheader = document.querySelector("header.mb-header");
	if (window.scrollY > 50) {
		mbheader.classList.add("active");
	} else {
		mbheader.classList.remove("active");
	}
});

document.addEventListener("DOMContentLoaded", function () {
	const menuButton = document.querySelector(".mb-header-menu-button");
	const header = document.querySelector(".mb-header");

	menuButton.addEventListener("click", function () {
		if (header.classList.contains("mb-header--menu")) {
			header.classList.remove("mb-header--menu");
		} else {
			header.classList.add("mb-header--menu");
		}
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const menuLinks = document.querySelectorAll(".site-menu__link");

	menuLinks.forEach(function (link) {
		link.addEventListener("click", function () {
			const activeItem = document.querySelector(
				".site-menu__item--active"
			);

			document
				.querySelectorAll(".site-menu__item")
				.forEach(function (item) {
					item.classList.remove("site-menu__item--active");
				});

			this.parentNode.classList.add("site-menu__item--active");

			if (activeItem) {
				activeItem.classList.remove("site-menu__item--active");
			}
		});
	});
});
