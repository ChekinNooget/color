var colorsToMatch = []
var colorDiff = []
var scores = []
var resize
var colorsHex = []
var resize

function getVariables() {
	resize = 1
	colorsHex = [
		"#9400D3",
		"#4B0082",
		"#0000FF",
		"#00FF00",
		"#FFFF00",
		"#FF7F00",
		"#FF0000",
		"#000000",
		"#FFFFFF",
	]
	colorsHex = []
	var colorPicker = document.querySelectorAll(".color-picker")
	colorsHex[0] = colorPicker[0].value
	colorsHex[1] = colorPicker[1].value
	colorsHex[2] = colorPicker[2].value
}
function hexToRgb(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: null
}
function getRGBFromHex() {
	for (let i = 0; i < colorsHex.length; i++) {
		colorsToMatch[i] = hexToRgb(colorsHex[i])
	}
}
var img
var ctx
var c
function getCanvas() {
	c = document.querySelector("#myCanvas")
	var temp = document.querySelector("#myImage")
	img = temp.cloneNode()
	c.height = img.height * resize
	c.width = img.width * resize
	ctx = c.getContext("2d", { willReadFrequently: true })
	var imgData = ctx.getImageData(0, 0, c.width, c.height)
	ctx.webkitImageSmoothingEnabled = false
	ctx.mozImageSmoothingEnabled = false
	ctx.imageSmoothingEnabled = false
	ctx.drawImage(img, 0, 0, img.width * resize, img.height * resize)
}
function drawPixel(context, x, y, color) {
	var roundedX = Math.round(x)
	var roundedY = Math.round(y)
	context.fillStyle = color || "#000"
	context.fillRect(roundedX, roundedY, resize, resize)
}

function changeColor() {
	var data
	var imageData
	for (let i = 0; i < img.width; i++) {
		for (let j = 0; j < img.height; j++) {
			data = ctx.getImageData(i * resize, j * resize, 1, 1).data
			imageData = [data[0], data[1], data[2]]
			for (let k = 0; k < colorsHex.length; k++) {
				colorDiff[0] = Math.abs(colorsToMatch[k].r - imageData[0])
				colorDiff[1] = Math.abs(colorsToMatch[k].g - imageData[1])
				colorDiff[2] = Math.abs(colorsToMatch[k].b - imageData[2])
				scores[k] = Math.max(...colorDiff) //gets smallest difference in rgb value
			}
			drawPixel(
				ctx,
				i * resize,
				j * resize,
				colorsHex[scores.indexOf(Math.min(...scores))] //smallest difference
			)
		}
	}
}

function colorButtonPressed() {
	getVariables()
	hexToRgb()
	getRGBFromHex()
	getCanvas()
	changeColor()
}
