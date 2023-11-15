const action = (type, uid, targetuid) => {
    
    let formData = new FormData;
    formData.append("type", type);
    formData.append("uid", uid);
    formData.append("targetuid", targetuid);
    
    fetch("ajaxGame.php", {
        method : "POST",
        body: formData
    })

    .then(response => response.json())
    .then(data => {
        
    });
}