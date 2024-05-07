gsap.registerPlugin(ScrollTrigger);

$(function () {
	const t1 = gsap
		.timeline({
			scrollTrigger: {
				trigger: ".slider_bar",
				start: "top 100%",
				end: "bottom -10%",
				scrub: 1,
				// pin:true,
				markers: false,
			},
		})
		.fromTo(".slider_bar h2", { x: 0 }, { x: "-100vh", duration: 10 }, 0);

	const t2 = gsap
		.timeline({
			scrollTrigger: {
				trigger: ".hot_deal",
				start: "top 60%",
				end: "bottom 0 ",
				// scrub: 1,
				// pin:true,
				markers: false,
			},
		})
		.fromTo(
			".hot_deal .deal .sale1",
			{ y: 0 },
			{ y: -100, opacity: 1, duration: 1 },
			0
		)
		.fromTo(
			".hot_deal .deal .sale2",
			{ y: 0 },
			{ y: -100, opacity: 1, duration: 1 },
			0.5
		);

	$("header .inner .menu_btn").click(function () {
		$(".gnb").addClass("on");
	});
	$(".gnb .close").click(function () {
		$(".gnb").removeClass("on");
	});

	$(".gnb li").on({
		mouseenter: function () {
			$(this).children(".sub").stop().slideDown();
		},
		mouseleave: function () {
			$(this).children(".sub").stop().slideUp();
		},
	});

	$(".open").click(function () {
		$(this).children(".modal").fadeIn(750);
		$("body").append("<div class='black'></div>");
	});

	$("body").click(function (e) {
		if (e.target.className === "close" || e.target.className === "black") {
			$(".modal").fadeOut(750);
			$(".black").remove();
		}
	});
});

const popup = document.querySelector("#popup");
popup.addEventListener("click", (e) => {
	window.open(
		"img/kakao_customer.png",
		"kakao",
		"width=465, height=700,top=300,left=500"
	);
});

const swiper = new Swiper(".slide", {
	autoplay: true,
	autoplaySpeed: 1000,
	speed: 2500,
	direction: "horizontal",
	loop: true,
	navigation: {
		nextEl: ".arrow_right",
	},
});

// scroll Event
$(document).scroll(function () {
	let s = $(document).scrollTop();
	$(".posNum").text(s);

	if (s > 1) {
		$("header").addClass("on");
	} else {
		$("header").removeClass("on");
	}
});
