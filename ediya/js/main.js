gsap.registerPlugin(ScrollTrigger);

$(function () {
	$(".gnb .menu li").on({
		mouseenter: function () {
			$("header").addClass("on");
		},
		mouseleave: function () {},
	});

	$("header").mouseleave(function () {
		$("header").removeClass("on");
	});

	$(".new .contents .inner article ul li").click(function () {
		$(".new .contents .inner article ul li").removeClass("on");
		$(this).addClass("on");

		$(".new .contents article .img_box img").removeClass("on");
		$(".new .contents article .content .title h3").removeClass("on");
		$(".new .contents article .content .text_box p").removeClass("on");

		if (
			$(".new .contents .inner article ul li:nth-of-type(1)").hasClass(
				"on"
			)
		) {
			$(".new .contents article .img_box img:nth-of-type(1)").addClass(
				"on"
			);
			$(
				".new .contents article .content .title h3:nth-of-type(1)"
			).addClass("on");
			$(
				".new .contents article .content .text_box p:nth-of-type(1)"
			).addClass("on");
		} else if (
			$(".new .contents .inner article ul li:nth-of-type(2)").hasClass(
				"on"
			)
		) {
			$(".new .contents article .img_box img:nth-of-type(2)").addClass(
				"on"
			);
			$(
				".new .contents article .content .title h3:nth-of-type(2)"
			).addClass("on");
			$(
				".new .contents article .content .text_box p:nth-of-type(2)"
			).addClass("on");
		} else if (
			$(".new .contents .inner article ul li:nth-of-type(3)").hasClass(
				"on"
			)
		) {
			$(".new .contents article .img_box img:nth-of-type(3)").addClass(
				"on"
			);
			$(
				".new .contents article .content .title h3:nth-of-type(3)"
			).addClass("on");
			$(
				".new .contents article .content .text_box p:nth-of-type(3)"
			).addClass("on");
		}
	});

	$(".company .inner article .img_box .text .txt_box").mouseenter(
		function () {
			$(".company .inner article .img_box .text .txt_box").removeClass(
				"on"
			);
			$(this).addClass("on");
			$(".company .inner article .img_box img").removeClass("on");
			$(".company .inner article .img_box img").removeClass("on2");

			if (
				$(
					".company .inner article .img_box .text .txt_box:nth-of-type(1)"
				).hasClass("on")
			) {
				$(
					".company .inner article .img_box img:nth-of-type(1)"
				).addClass("on");
				$(
					".company .inner article .img_box img:nth-of-type(1)"
				).addClass("on2");
			} else if (
				$(
					".company .inner article .img_box .text .txt_box:nth-of-type(2)"
				).hasClass("on")
			) {
				$(
					".company .inner article .img_box img:nth-of-type(2)"
				).addClass("on");
				$(
					".company .inner article .img_box img:nth-of-type(2)"
				).addClass("on2");
			} else if (
				$(
					".company .inner article .img_box .text .txt_box:nth-of-type(3)"
				).hasClass("on")
			) {
				$(
					".company .inner article .img_box img:nth-of-type(3)"
				).addClass("on");
				$(
					".company .inner article .img_box img:nth-of-type(3)"
				).addClass("on2");
			}
		}
	);

	$(".company .inner article .img_box").mouseleave(function () {
		$(".company .inner article .img_box img").removeClass("on2");
	});
});

const Swiper3 = new Swiper(".drink", {
	autoplay: true,
	autoplaySpeed: 1000,
	speed: 2000,
	loop: true,
	navigation: {
		prevEl: ".arrow .left",
		nextEl: ".arrow .right",
	},
	effect: "fade",
	on: {
		slideChange: function () {
			$(".signature .inner article .title li").removeClass("on");
			$(".signature .inner article .title li")
				.eq(this.realIndex)
				.addClass("on");
			$(".signature .inner article .text p").removeClass("on");
			$(".signature .inner article .text p")
				.eq(this.realIndex)
				.addClass("on");
		},
	},
});

const t2 = gsap
	.timeline({
		scrollTrigger: {
			trigger: ".beans",
			start: "left 50%",
			end: "right 30% ",
			markers: false,
		},
	})
	.fromTo(
		".bean .coffee",
		{ x: -100, opacity: 0 },
		{ x: 0, opacity: 1, duration: 1 },
		0
	)
	.fromTo(
		".bean .text h3",
		{ x: 80, opacity: 0 },
		{ x: 0, opacity: 1, duration: 1 },
		0.35
	)
	.fromTo(
		".bean .text p",
		{ x: 80, opacity: 0 },
		{ x: 0, opacity: 1, duration: 1 },
		0.5
	)
	.fromTo(
		".bean .text .more",
		{ x: 80, opacity: 0 },
		{ x: 0, opacity: 1, duration: 1 },
		0.75
	);

const t3 = gsap
	.timeline({
		scrollTrigger: {
			trigger: ".mix",
			start: "left 30%",
			end: "right 50% ",
			markers: false,
		},
	})
	.fromTo(
		".mix .text h3",
		{ x: -100, opacity: 0 },
		{ x: 0, opacity: 1, duration: 1 },
		0.35
	)
	.fromTo(
		".mix .text p",
		{ x: -100, opacity: 0 },
		{ x: 0, opacity: 1, duration: 1 },
		0.5
	)
	.fromTo(
		".mix .text .more",
		{ x: -100, opacity: 0 },
		{ x: 0, opacity: 1, duration: 1 },
		0.75
	);

const swiper = new Swiper(".main-slide", {
	autoplay: true,
	autoplaySpeed: 1000,
	speed: 2000,
	direction: "horizontal",
	loop: true,
});

const t4 = gsap
	.timeline({
		scrollTrigger: {
			trigger: ".new",
			start: "left 30%",
			end: "right 50% ",
			markers: false,
		},
	})

	.fromTo(
		".new .contents .inner article .blue",
		{ x: -100, opacity: 0 },
		{ x: 0, opacity: 1, duration: 1 },
		0.75
	)
	.fromTo(
		".content",
		{ x: 100, opacity: 0 },
		{ x: 0, opacity: 1, duration: 1 },
		0.5
	)
	.fromTo(
		".new .contents .inner article ul",
		{ opacity: 0 },
		{ opacity: 1, duration: 1 },
		0.85
	)
	.fromTo(
		".content .title",
		{ x: 100, opacity: 0 },
		{ x: 0, opacity: 1, duration: 1 },
		0.9
	)
	.fromTo(
		".content .title .text_box p.on",
		{ x: 100, opacity: 0 },
		{ x: 0, opacity: 1, duration: 1 },
		1.5
	)
	.fromTo(
		".new .contents article .img_box",
		{ opacity: 0 },
		{ opacity: 1, duration: 1 },
		0.5
	);

const swiper2 = new Swiper(".swiper", {
	autoplay: true,
	autoplaySpeed: 1000,
	speed: 2000,
	loop: true,
	navigation: {
		prevEl: "swiper-button-prev",
		nextEl: ".arrow .right",
	},
	on: {
		slideChange: function () {
			$(".best .contents .inner article .right .con").removeClass("on");
			$(".best .contents .inner article .right .con")
				.eq(this.realIndex)
				.addClass("on");
		},
	},
});

const swiper4 = new Swiper(".section-slide", {
	autoplay: true,
	autoplaySpeed: 2000,
	speed: 3500,
	direction: "horizontal",
	loop: true,
	slidesPerView: "auto",
});

$(function () {
	$(".company .inner article .text .text_box").mouseenter(function () {
		$(".company .inner article .text .text_box").removeClass("on");
		$(this).addClass("on");
		$(".company .inner article .img_box img").removeClass("on");
		$(".company .inner article .text .text_box").removeClass("on");
		if (
			$(
				".company .inner article .text .text_box:nth-of-type(1)"
			).hasClass("on")
		) {
		} else if (
			$(
				".company .inner article .text .text_box:nth-of-type(2)"
			).hasClass("on")
		) {
		} else if (
			$(
				".company .inner article .text .text_box:nth-of-type(3)"
			).hasClass("on")
		) {
		}
	});
});
