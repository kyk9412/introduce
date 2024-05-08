const familysite = document.querySelectorAll(".family_site")[0];
const test = document.querySelectorAll(".family_site_list")[0];
familysite.onclick = () => {
	console.log("family_site_list");
	if (test.style.display === "block") {
		test.style.display = "none";
	} else {
		test.style.display = "block";
	}
};

const mainSwiper = new Swiper(".main_slide", {
	autoplay: true,
	autoplaySpeed: 2000,
	speed: 1000,
	direction: "horizontal",
	loop: true,

	on: {
		slideChange: function () {
			let activeIndex = this.activeIndex;

			let textBoxes = document.querySelectorAll(
				".swiper-slide .text_box"
			);
			textBoxes.forEach(function (textBox) {
				textBox.style.display = "none";
			});

			setTimeout(function () {
				let activeTextBox = document.querySelector(
					".swiper-slide:nth-child(" +
						(activeIndex + 1) +
						") .text_box"
				);
				activeTextBox.style.display = "block";
			}, 800);
		},
	},
});

const eventSwiper = new Swiper(".main_promotion", {
	autoplay: true,
	autoplaySpeed: 500,
	speed: 500,
	direction: "horizontal",
	loop: true,
	slidesPerView: 4,
	pagination: {
		el: ".swiper-pagination",
	},
});

const itemSwiper = new Swiper(".BR_items", {
	autoplay: true,
	autoplaySpeed: 2000,
	speed: 1500,
	direction: "horizontal",
	loop: true,
	// pagination: {
	// 	el: ".swiper-pagination",
	// },
});

const itemSwiper2 = new Swiper(".BR_items_m", {
	autoplay: true,
	autoplaySpeed: 2000,
	speed: 2000,
	direction: "horizontal",
	loop: true,
	slidesPerView: 2,
	spaceBetween: 20,
	breakpoints: {
		320: {
			slidesPerView: 1.8,
		},
		375: {
			slidesPerView: 2.3,
		},
	},
});

const benefitSwiper = new Swiper(".BR_Benefit_contents", {
	autoplay: true,
	autoplaySpeed: 2000,
	speed: 1500,
	direction: "horizontal",
	loop: true,
	breakpoints: {
		320: {
			slidesPerView: 2.1,
			spaceBetween: 20,
		},
		481: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
	},
});
