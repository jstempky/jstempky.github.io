//@ts-check

/**
	* Renders single element 
	* @param {string} el - The element to be rendered
	* @param {string} innerText - The innerText to be displayed
	* @param {string} [className] - Element class (optional)
	* @param {string} [id] - Element id (optional)
	* @returns {void} The sum of the two numbers.
 */
function renderEl(el, innerText, className, id) {
	const element = document.createElement(el)

	element.innerText = innerText
	if (className) element.className = className;
	if (id) element.id = id;
	const mainEl = document.getElementById('main');

	mainEl?.appendChild(element);
}

function renderContent() {
	let jsonContent;
	fetch("./scripts/content.json").then((res) => {
		return res.json()
	}).then((res) => {
		jsonContent = res.jsonContent;
	})
	document.addEventListener('DOMContentLoaded', function() {


		const mainEl = document.getElementById('main');

		jsonContent?.map((/** @type {{ section: string; emoji: string; items: any[]; }} */ section) => {
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
					pEl.innerHTML = `<span class="key">${key}:</span> ${item[key]}`;
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
