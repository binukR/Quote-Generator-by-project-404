let quote = document.getElementById('quote');
let btn = document.getElementById('btn');
let author = document.getElementById('author');

const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url).then((data) => data.json()).then((item) => {
        console.log(item.content);
        words = item.content;
        quote.innerText = item.content;
        author.innerText = item.author;
    });
};

function copy(copyid){
    let inputElement = document.createElement("input");
    inputElement.type = "text";
    let copyText = document.getElementById(copyid).innerHTML;
    inputElement.value = copyText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    swal("Success!", "Your Quote has been copied", "success");
}


var loader = document.getElementById('preloader');

window.addEventListener("load", function(){
    loader.style.display = "none";
});

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);