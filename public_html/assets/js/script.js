const categoryTitle = document.querySelectorAll(".category-title");
const allCategoryPosts = document.querySelectorAll(".all");

for (let i = 0; i < categoryTitle.length; i++) {
	categoryTitle[i].addEventListener(
		"click",
		filterPosts.bind(this, categoryTitle[i]),
	);
}

function filterPosts(item) {
	console.log(item);
	changeActivePosition(item);
	for (let i = 0; i < allCategoryPosts.length; i++) {
		if (allCategoryPosts[i].classList.contains(item.attributes.id.value)) {
			allCategoryPosts[i].style.display = "block";
		} else {
			allCategoryPosts[i].style.display = "none";
		}
	}
}

function changeActivePosition(activeItem) {
	for (let i = 0; i < categoryTitle.length; i++) {
		categoryTitle[i].classList.remove("active");
	}
	activeItem.classList.add("active");
}

function getTitle(node) {
	return node.children[1].children[1].childNodes[0].data;
}

const Searchbar = document.querySelector(".form-control");
console.log(allCategoryPosts[0].children[1].children[1].childNodes[0].data);

const filterSearch = () => {
	console.log(Searchbar.value);
	var item = Searchbar.value == "" ? "all" : Searchbar.value;
	// filterPosts(Searchbar.value);

	for (let i = 0; i < allCategoryPosts.length; i++) {
		if (
			allCategoryPosts[i].classList.contains(item) ||
			getTitle(allCategoryPosts[i]).toLowerCase().includes(Searchbar.value)
		) {
			allCategoryPosts[i].style.display = "block";
		} else {
			allCategoryPosts[i].style.display = "none";
		}
	}
};

$(document).ready(() => {
	$("#search-content").click(() => {
		$(".search-wrapper").toggleClass("show");
	});
});

console.log(categoryTitle);
