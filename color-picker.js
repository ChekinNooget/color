function addColor(color) {
	var pickers = document.getElementById("color-pickers")
	var pickerCount = document.getElementsByClassName("picker-group").length
	var pickerCount = Math.floor(Math.random() * 65535)
	pickers.innerHTML =
		pickers.innerHTML +
		`<div class="picker-group picker-${pickerCount + 1}">
            <input type="color" class="color-picker" value="${color}">
            <div onclick="deleteColor('picker-${
							pickerCount + 1
						}')">&times;</div> 
        </div>`
	console.log(pickers)
	setColorToStorage()
}

function deleteColor(element) {
	document.querySelector(`.${element}`).remove()
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

