let email = "bagas@gmail.com";
let phone = "98979989898";
let recent = "Lomba Gambar";
let most = "Pidato";

let profileSection = document.querySelectorAll(".change-field");

function toggleEdit() {
	profileSection.forEach(e => {
		e.disabled = !e.disabled;
	});
}
