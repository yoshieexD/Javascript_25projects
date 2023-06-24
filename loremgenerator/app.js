let generateBtn = document.getElementById("generate-btn");
let copyBtn = document.getElementById("copy-btn");
let paraDisplay = document.getElementById("para");
generateBtn.addEventListener("click", generateParas);
copyBtn.addEventListener("click", copyTextToClipboard);


function generateParas() {
    let noOfPara = document.getElementById("no-of-para").value;
    let loremIpsumText = generateLoremIpsum(noOfPara);
    paraDisplay.innerText = loremIpsumText;
}


function generateLoremIpsum(paragraphs) {
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Nisl nisi scelerisque eu ultrices vitae auctor. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Nec nam aliquam sem et. Diam sit amet nisl suscipit adipiscing bibendum est. Sem fringilla ut morbi tincidunt augue interdum. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Magna fermentum iaculis eu non. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. At augue eget arcu dictum varius duis at. Tempor orci dapibus ultrices in. At varius vel pharetra vel. Ipsum dolor sit amet consectetur adipiscing elit. Congue nisi vitae suscipit tellus mauris a diam. Id porta nibh venenatis cras sed felis eget. Convallis aenean et tortor at risus viverra adipiscing. Diam maecenas sed enim ut sem viverra";
    let result = "";
    for (let i = 0; i < paragraphs; i++) {
        result += loremIpsum + "\n\n";
    }
    return result;
}

function copyTextToClipboard() {
    let textToCopy = paraDisplay.innerText;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log("Text copied to clipboard: " + textToCopy);
            alert("Text copied to clipboard!");
        })
        .catch(error => {
            console.error("Error copying text to clipboard:", error);
        });
}