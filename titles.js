const titles = ['oddhorse', 'حصانغريب', 'страннаялошадь']
let last = 0
setInterval(() => {
	let rand = Math.floor(Math.random() * titles.length)
	while (rand === last) {
		rand = Math.floor(Math.random() * titles.length)
	}
	document.getElementById('title').innerHTML = titles[rand]
	last = rand
}, 3000)
