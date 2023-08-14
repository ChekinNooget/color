function setColorsDefault(){
	localStorage.setItem("color", "#c2c0b3 #000000 #9e9e96 #61626b #975e45 #433233 #f28aa8 #cd4354 #b8221b #7fc4cb #174487 #0f1a74 #dbc38a #eeb82b #fbb124 #fe8575 #f04b1a #d968a5 #7fc45a #57b79c #1f6b37 #3a5f4d #a288ac #4d4382 ")	
}

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

