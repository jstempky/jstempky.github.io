document.addEventListener('DOMContentLoaded', () => {
	const dropdownToggle = document.getElementById('dropdownToggle');
	const dropdownMenu = document.getElementById('dropdownMenu');
	console.log("loaded dropdown scrip");

	dropdownToggle.addEventListener("click", () => {
		const isMenuVisible = dropdownMenu.style.display === "block";
		dropdownMenu.style.display = isMenuVisible ? "none" : "block";
	});
	document.addEventListener("click", (event) => {
		if (!event.target.closest('.mobile-nav-buttons') || event.target.id ==="menuButton") {
			dropdownMenu.style.display = 'none'
		}
	});
});

