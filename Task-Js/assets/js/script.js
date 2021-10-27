document.getElementById("firstopen").click();

function openPage(pageName, element, color) {
    let imagetext = document.getElementsByClassName("image-text");
    let buttonclick = document.getElementsByClassName("button-click");
    for (i = 0; i < imagetext.length; i++) {
        imagetext[i].style.display = "none";
    }
    for (i = 0; i < buttonclick.length; i++) {
        buttonclick[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    element.style.backgroundColor = color;
}