let heading = document.getElementById("mainHeading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userinput");




let fontSize= 16;


document.getElementById("changeTextBtn").addEventListener("click",
function() {
if(input.value !== ""){
heading.innerHTML =  input.value;
}


});


//CHANGE BACKGROUND COLOUR


document.getElementById("bgColorBtn").onclick = function () {
document.body.style.backgroundColor =
"#" + Math.floor(Math.random() * 16777215).toString(16);
};




//INCREASE FONT SIZE


document.getElementById("fontSizeBtn").addEventListener("click",
function() {


fontSize += 2;
paragraph.style.fontSize = fontSize + "px";
});


//SHOW/HIDE paragraph
document.getElementById("toggleBtn").addEventListener("click", //to hide display none
function() {

if(paragraph.style.display === "none") {
paragraph.style.display = "block";
}

else {
paragraph.style.display = "none";
}

});



//RESET PAGE

document.getElementById("resetBtn").addEventListener("click",
function() {
heading.inner

