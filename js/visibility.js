
// Fonction pour basculer la visibilité du div
function toggleVisibility($div) {
    let monDiv = document.getElementById($div);
    if (monDiv.style.display === "none")
        monDiv.style.display = "block";
}

function unToggleVisibility($div) {
    let monDiv = document.getElementById($div);
    if (monDiv.style.display === "block")
        monDiv.style.display = "none";
}

function chatToggleVisibility($div) {
    let monDiv = document.getElementById($div);
    if (monDiv.style.display === "block")
        monDiv.style.display = "none";
    else
        monDiv.style.display = "block";
}