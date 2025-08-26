function heartNumber(id) {
    const heartValue = document.getElementById(id).innerText;
    return parseInt(heartValue) || 0;
}

let hearts = document.getElementsByClassName("heart");

for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", function () {
        let heartValue = heartNumber("heart-count");
        let heartUp = heartValue + 1;
        document.getElementById("heart-count").innerText = heartUp;
        alert("Number added...");
    });
}

function copyNumber(id) {
    let text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text);
    alert("Copied " + text);
    let copyCount = parseInt(document.getElementById("copy-count").innerText) || 0;
    document.getElementById("copy-count").innerText = copyCount + 1;
}

