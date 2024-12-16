function renderContent() {
	let jsonContent;
	fetch("./scripts/content.json").then((res) => {
		return res.json()
	}).then((res) => {
		jsonContent = res.jsonContent;
	})
	document.addEventListener('DOMContentLoaded', function() {
		const mainEl = document.getElementById('main');
		jsonContent?.map((section) => {
			const sectionEl = document.createElement('section');
			sectionEl.id = section.section;
			sectionEl.className = 'section';
			const h2El = document.createElement('h2');
			h2El.innerHTML = section.section + ' ' + section.emoji;
			sectionEl.appendChild(h2El);
			section.items.map((item) => {
				const itemEl = document.createElement('div');
				itemEl.className = 'item';
				Object.keys(item).map((key) => {
					const pEl = document.createElement('p');
					pEl.innerHTML = `${key}: ${item[key]}`;
					itemEl.appendChild(pEl);
				});
				sectionEl.appendChild(itemEl);
			});
			mainEl.appendChild(sectionEl);
		}
		);
	});
}
renderContent();
