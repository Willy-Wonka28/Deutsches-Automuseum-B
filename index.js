document.addEventListener("DOMContentLoaded", clickRate)

function clickRate() {
    let counter = 0;
    document.querySelector("#menu0").addEventListener("click", function () {
        counter++;
        if (counter === 1){
            showMaterials();
        }
        if (counter === 2){
            hideMaterials();
            counter = 0
        }
    });
}


function hideMaterials() {
    var materialContainer = document.getElementById("menu_list");
    var materials = materialContainer.querySelectorAll(".materials");

    // Hide materials
    for (var i = 0; i < materials.length; i++) {
        materials[i].style.visibility = "hidden";
        materials[i].style.fontSize = "0";
        materials[i].style.padding = "0";
    }
}

function showMaterials() {
    var materialContainer = document.getElementById("menu_list");
    var materials = materialContainer.querySelectorAll(".materials");

    // Show materials
    for (var i = 0; i < materials.length; i++) {
        materials[i].style.visibility = "visible";
        materials[i].style.fontSize = "calc(1.1vw + 8px)";
        materials[i].style.padding = "calc(1vw + 2px)";
    }

}

