console.log("BlinkerFLuid loaded.")
const match = document.querySelector(".d2l-fileviewer-pdf-pdfjs")
if (match != null) {
	const location = match.getAttribute("data-location")
	console.log(location)

	const controlsMatch = document.querySelector("body > div > div.d2l-popup-printdownload")
	const controlsPrinter = controlsMatch.children[0].children[0]
	// controlsMatch.removeChild(controlsPrinter)
	controlsMatch.innerHTML = `<div class="modernized-row"></div>`
	controlsMatch.childNodes[0].appendChild(controlsPrinter)
	const newButtonHolder = document.createElement("div")
	newButtonHolder.innerHTML = `<d2l-button-subtle icon="tier1:download" onclick="" text="Download" type="button"></d2l-button-subtle>`
	const downloadButton = newButtonHolder.children[0]
	controlsMatch.childNodes[0].appendChild(downloadButton)
	downloadButton.addEventListener("click", ()=>{
		const downloadLink = document.createElement("a")
		downloadLink.href = location
		downloadLink.setAttribute("download", "")
		downloadLink.click()
	})
} else {
	console.log("Could not find file viewer, nevermind.")
}