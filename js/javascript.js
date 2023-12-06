const applyStyles = iframe => {
	let styles = {
		fontColor : "#FFFFFF",
		backgroundColor : "rgba(65, 65, 65, 0.3)",
		fontGoogleName : "Oswald",
		fontSize : "20px",
		hideIcons : true,
		inputBackgroundColor : "light grey",
		inputFontColor : "white",
		height : "500px",
		padding: "5px",
		memberListFontColor : "#FFFFFF",
		border: "none",
		memberListBackgroundColor : "rgba(65, 65, 65, 0.3)",
	}
	
	setTimeout(() => {
		iframe.contentWindow.postMessage(JSON.stringify(styles), "*");	
}, 100);
}
