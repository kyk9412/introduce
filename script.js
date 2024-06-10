window.onload = function () {
	setTimeout(startLoadingAnimation, 0);
	setTimeout(fadeOutElement, 3000);
	setTimeout(noneElement, 3500);
};

const element = document.getElementById("hiddenElement");
// css 조작 함수
function fadeOutElement() {
	element.style.opacity = 0;
}
function noneElement() {
	element.style.display = "none";
}

// 로딩 바 요소 가져오기
const barElement = document.querySelector(".loading_bar_progress");

// 로딩 바 애니메이션 실행
function startLoadingAnimation() {
	const startTime = Date.now();
	function updateAnimation() {
		const currentTime = Date.now();
		const progress = (currentTime - startTime) / 3000;
		if (progress > 1) progress = 1;
		barElement.style.width = progress * 100 + "%";
		if (progress < 1) requestAnimationFrame(updateAnimation); // 애니메이션 반복
	}
	requestAnimationFrame(updateAnimation);
}

// 스크롤시 소개페이지 글씨 이벤트
let sect2_txt = document.querySelector(".sect2_txt");
window.addEventListener("scroll", function () {
	let value = window.scrollY;
	console.log("scroll", value);
	if (value < 200) {
		sect2_txt.style.animation = "disappear 1s ease-out forwards";
	} else {
		sect2_txt.style.animation = "slide 1s ease-out";
	}
});

let sect2_text4 = document.querySelector(".text_t2");
window.addEventListener("scroll", function () {
	let value = window.scrollY;
	console.log("scroll", value);
	if (value < 300) {
		sect2_text4.style.animation = "disappear 1.2s ease-out forwards";
	} else {
		sect2_text4.style.animation = "slide 1.2s ease-out";
	}
});

// 스크롤시 소개페이지 이미지 이벤트
let profile = document.querySelector(".profile_img1");
window.addEventListener("scroll", function () {
	let value = window.scrollY;
	console.log("scroll", value);
	if (value < 600) {
		profile.style.animation = "fade 1.5s ease-out forwards";
	} else {
		profile.style.animation = "show 2s ease-out";
	}
});

let sect2_ul = document.querySelector("ul");
window.addEventListener("scroll", function () {
	let value = window.scrollY;
	console.log("scroll", value);
	if (value < 200) {
		sect2_ul.style.animation = "disapper2 1.3s ease-out forwards";
	} else {
		sect2_ul.style.animation = "slide2 1.3s ease-out";
	}
});

let observer = new IntersectionObserver((e) => {
	e.forEach((sect4_tit) => {
		if (sect4_tit.isIntersecting) {
			sect4_tit.target.style.opacity = 1;
			sect4_tit.target.style.transform = "rotate(0deg)";
		} else {
			sect5_tit.target.style.opacity = 0;
		}
	});
});

let sect4_tit = document.querySelector(".WebSite h2");
observer.observe(sect4_tit);

const hide = (item) => {
	gsap.set(item, { autoAlpha: 0 });
};

const animate = (item) => {
	let x = 0;
	let y = 0;
	let delay = item.dataset.delay;

	if (item.classList.contains("p")) {
		(y = -100), (x = 0);
	} else if (item.classList.contains("p")) {
		(y = 0), (x = 100);
	} else {
		(y = 100), (x = 0);
	}

	gsap.fromTo(
		item,
		{ autoAlpha: 0, x: x, y: y },
		{
			autoAlpha: 1,
			x: 0,
			y: 0,
			delay: delay,
			duration: 1.25,
			overwrite: "auto",
			ease: "expo",
		}
	);
};

gsap.utils.toArray("p").forEach((item) => {
	hide(item);

	ScrollTrigger.create({
		trigger: item,
		start: "top bottom",
		end: "bottom top",
		markers: false,
		onEnter: () => {
			animate(item);
		},
	});
});
