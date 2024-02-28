let textToDecode = document.getElementById("textToDecode");
let textDecoded = document.getElementById("textDecoded");

function encoderFunction() {
    const text = textToDecode.value
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
    textDecoded.textContent = text
    return text
}

function decoderFunction() {
    const text = textToDecode.value
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
    textDecoded.textContent = text
    return text
}

function diplayCopyConteiner(str) {
    if (str !== "") {
        document.getElementById("container__noTextFound").style.display = "none"
        document.getElementById("container__copy").style.display = "flex"
    } else {
        document.getElementById("container__noTextFound").style.display = "flex"
        document.getElementById("container__copy").style.display = "none"

    }
}


function copyTextButton() {
    let text = document.getElementById("textDecoded").innerHTML;
    navigator.clipboard.writeText(text)
}

function encoderButton() {
    encoderFunction()
    diplayCopyConteiner(encoderFunction())
}

function decoderButton() {
    decoderFunction()
    diplayCopyConteiner(decoderFunction())
}

