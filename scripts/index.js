const jsonContent = [
	{
		section: "education",
		emoji: "🎓",
		items: [
			{
				college: "Western Michigan University",
				degree: "B.S.E. in Industrial & Entrepreneurial Engineering",
				graduation: "December 2014"
			},
		]
	},
	{
		section: "work",
		emoji: "💼",
		items: [
			{
				title: "Senior Consultant - Software Engineering",
				company: "Inspire11",
				duration: "July 2024 - Present",
				location: "Chicago, IL (Remote)",
			},
			{
				title: "Software Engineer",
				company: "Integral",
				duration: "March 2020 - July 2024",
				location: "Royal Oak, MI (Remote)",
			},
		]
	},
	{
		section: "skills",
		emoji: "💻",
		items: [

			{
				"backend languages": "JavaScript/TypeScript, Python, SQL",
				tools: "React/React-Native, Node.js, Flask, Docker",
				cloud: "AWS, GCP",
			},
		]
	},
	{
		section: "projects",
		emoji: "🚀",
		items: [
			{
				name: "Portfolio",
				description: "Personal website to showcase my work",
				tech: "React, HTML, CSS",
			},
		]
	},
	{
		section: "contact",
		items: [
			{
				email: "test@email.com",
			},
		]
	},

]

function renderContent() {
	document.addEventListener('DOMContentLoaded', function() {
		const mainEl = document.getElementById('main');
		jsonContent.map((section) => {
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
