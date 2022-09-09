let input = document.getElementById("input-text");

input.addEventListener('input',function(){
    let inputText = this.value;
    let inputLength = inputText.length;
    document.getElementById("char").innerHTML = inputLength;

    //removing white spaces
    let splitInput = inputText.split(" ").join("").length;
    document.getElementById("simpchar").innerHTML = splitInput;

    //for words
    inputText = inputText.trim();
    let words = inputText.split(" ");
    let cleanList = words.filter(function (x) {
        return x != "";
    })
    document.getElementById("words").innerHTML = cleanList.length;
})

// for copy button 
let copybtn = document.getElementById("copybtn");

copybtn.addEventListener("click", function () {
    let copytext = document.getElementById("input-text");
    copytext.select();
    copytext.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copytext.value);
})
