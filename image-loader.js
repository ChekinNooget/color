//https://medium.com/@miguelznunez/how-to-upload-and-preview-an-image-with-javascript-749b92711b91
const input = document.querySelector("input")
const output = document.querySelector("output")
let imagesArray = []
input.addEventListener("change", () => {
	const file = input.files
	imagesArray[0] = file[0]
	displayImages()
})
function displayImages() {
	let images = ""
	imagesArray.forEach((image, index) => {
		images += `<div class="image">
                <img src="${URL.createObjectURL(
									image
								)}" alt="image" id="myImage">
              </div>`
	})
	output.innerHTML = images
}
