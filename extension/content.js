console.log("BlinkerFluid loaded.")
const match = document.querySelector(".d2l-fileviewer-pdf-pdfjs") //Find the PDF embed
if (match != null) {
	const location = match.getAttribute("data-location") //PDF embed has an attribute with the link to the file itself, relative from this origin.
	console.log("BlinkerFluid will use: "+ location) //Incase the buttons don't work, this makes it easy to find the file's URL in the console.

	const controlsMatch = document.querySelector("body > div > div.d2l-popup-printdownload") //This is the row with the print button
	const controlsPrinter = controlsMatch.children[0].children[0] //This is the print button itself

	// controlsMatch.removeChild(controlsPrinter)
	controlsMatch.innerHTML = `<div class="modernized-row"></div>` //Wipe the row and replace it with our flexbox, so we can have multiple buttons (the row is done with float: right)
	controlsMatch.childNodes[0].appendChild(controlsPrinter) //Re-add the print button incase anyone uh wants to print. I've never wanted to so I have no idea if this works.
	
	//I'm too lazy to manually make these soooo this holder is used to inflate elements from strings via innerHTML
	const newButtonHolder = document.createElement("div")
	
	newButtonHolder.innerHTML = `<d2l-button-subtle icon="tier1:download" onclick="" text="Download" type="button"></d2l-button-subtle>` //Wow, webcomponents! You can find the icons you can use at https://github.com/BrightspaceUI/core/blob/main/components/icons/catalogue.md#tier1
	const downloadButton = newButtonHolder.children[0]
	controlsMatch.childNodes[0].appendChild(downloadButton)
	downloadButton.addEventListener("click", ()=>{
		const downloadLink = document.createElement("a")
		downloadLink.href = location
		downloadLink.setAttribute("download", "")
		downloadLink.click() //Yes, this is how you literally programmatically download something.
	})

	newButtonHolder.innerHTML = `<d2l-button-subtle icon="tier1:new-window" onclick="" text="Open" type="button"></d2l-button-subtle>`
	const openButton = newButtonHolder.children[0]
	controlsMatch.childNodes[0].appendChild(openButton)
	openButton.addEventListener("click", ()=>{
		const downloadLink = document.createElement("a")
		downloadLink.href = location
		// downloadLink.setAttribute("download", "") //Uh well yes this is how opening works.
		downloadLink.setAttribute("target", "_blank") //Good practice and also this is required because we're in an iframe.
		downloadLink.click()
	})

} else {
	console.log("Could not find file viewer, nevermind.")
}