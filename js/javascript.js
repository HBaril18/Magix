const applyStyles = iframe => {
	let styles = {
		fontColor : "#333",
		backgroundColor : "rgba(87, 41, 5, 0.2)",
		fontGoogleName : "Luckiest Guy",
		fontSize : "20px",
		hideIcons : false,
		inputBackgroundColor : "light grey",
		inputFontColor : "blue",
		height : "700px",
		padding: "5px",
		memberListFontColor : "#ff00dd",
		borderColor : "black",
		memberListBackgroundColor : "white",
	}
	
	setTimeout(() => {
		iframe.contentWindow.postMessage(JSON.stringify(styles), "*");	
}, 100);
}
