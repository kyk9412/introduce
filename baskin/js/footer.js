const FamilyList = document.querySelectorAll(".family_site_list")[0];
const FamilyBtn = document.querySelectorAll(".family_site_btn")[0];

FamilyBtn.addEventListener("click", function () {
	FamilyList.classList.toggle("on");
	FamilyBtn.classList.toggle("on");
});
