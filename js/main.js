let slider = document.getElementById('myRange')
let color =
	'linear-gradient(90deg, #FFD700 1%, #FF4500 ' +
	slider.value +
	'%, #E6E6E6 ' +
	slider.value +
	'%)'

slider.style.background = color

slider.oninput = function () {
	color =
		'linear-gradient(90deg, #FFD700 1%, #FF4500 ' +
		this.value +
		'%, #E6E6E6 ' +
		this.value +
		'%)'
	this.style.background = color
}

function showContent(num) {
	let x = document.getElementsByClassName('tabcontent')
	for (let i = 0; i < x.length; i++) {
		x[i].style.display = 'none'
	}
	document.getElementById('content' + num).style.display = 'block'
}

showContent(1)

let collapse = document.querySelectorAll('.collapse')
collapse.forEach(item => {
	item.addEventListener('click', () => {
		item.querySelector('.wrapper').classList.toggle('open')
		item.querySelector('.collapse__content img').classList.toggle('rotate')
		// wrapper.classList.toggle("open")
		// img.classList.toggle("rotate")
	})
})

