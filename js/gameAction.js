const action = (type, uid, targetuid) => {

    let formData = new FormData;
    formData.append("type", type);
    formData.append("uid", uid);
    formData.append("targetuid", targetuid);

    fetch("ajaxGame.php", {
        method: "POST",
        body: formData
    })

        .then(response => response.json())
        .then(data => {
            //MESSAGE DE L'API
            if (typeof data !== "object") {
                document.querySelector("#messageJeu").innerText = data;
            }
            else{
                document.querySelector("#messageJeu").innerText = "carte joué";
            }
            setTimeout(() => {
                document.querySelector("#messageJeu").innerText = "";
            }, 1500);
        });
}