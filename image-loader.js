//https://medium.com/@miguelznunez/how-to-upload-and-preview-an-image-with-javascript-749b92711b91
const input = document.querySelector("input")
const output = document.querySelector("output")
let imagesArray = []
input.addEventListener("change", () => {
	const file = input.files
	imagesArray[0] = file[0]
	displayImages()
})
if (localStorage.getItem("color") != null) {
	var temp = localStorage.getItem("color").trim().split(" ")
	for (let i = 0; i < temp.length; i++) {
		addColor(temp[i])
	}
} else {
	addColor("#ff0000")
	addColor("#00ff00")
	addColor("#0000ff")
}
function displayImages() {
	let images = ""
	imagesArray.forEach((image, index) => {
		images += `<div class="image">
			  	<img src="${URL.createObjectURL(image)}" alt="image" id="myImage">
			  </div>`
	})
	output.innerHTML = images;
	document.querySelector(".image").setAttribute("style", `height: ${document.querySelector(".image").firstElementChild.naturalHeight};`)
	document.querySelector(".image").firstChildElement.setAttribute("title", "Open image in new tab")
}

var tempPickers = document.querySelectorAll(".color-picker")

for (let i = 0; i < tempPickers.length; i++) {
	tempPickers[i].addEventListener("input", onColorChanged)
}

function onColorChanged() {
	var tempPickers = document.querySelectorAll(".color-picker")
	for (let i = 0; i < tempPickers.length; i++) {
		tempPickers[i].setAttribute("value", tempPickers[i].value)
	}
	setColorToStorage()
}

function setColorToStorage() {
	var tempPickers = document.querySelectorAll(".color-picker")
	var temp = ""
	for (let i = 0; i < tempPickers.length; i++) {
		temp = temp + tempPickers[i].value + " "
	}
	localStorage.setItem("color", temp)
}
