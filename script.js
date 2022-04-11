function check(color) {
    if (color === "black") {
        document.getElementById('Shirt_image').src = 'images/black.png'
    }
    if (color === "purple") {
        document.getElementById('Shirt_image').src = 'images/purple.png'
    }
    if (color === "green") {
        document.getElementById('Shirt_image').src = 'images/green.png'
    }
    if (color === "yellow") {
        document.getElementById('Shirt_image').src = 'images/yellow.png'
    }
    if (color === "gray") {
        document.getElementById('Shirt_image').src = 'images/gray.png'
    }
}
function text(text){
    var x = document.getElementById('Text_Text').value;
    document.getElementById("text_Img").innerHTML = x;
}
// function bold(){
//     var x = document.getElementById('Text_Text').value;
//     let result = document.getElementById("text_Img").innerHTML = x;
//     document.getElementById("text_Img").innerHTML = result.bold();
// }
let flag = 0 ;

function bold(){
    var x = document.getElementById('Text_Text').value;
    if(flag === 0){
    document.getElementById("text_Img").style.fontWeight ="bold"; 
    flag = 1;
    }
    else{
        document.getElementById("text_Img").style.fontWeight ="normal";
        flag = 0;
    }
}

let italic_flag =0;
function italic() {
    if (  italic_flag === 0){
    var x = document.getElementById('Text_Text').value;
    document.getElementById("text_Img").style.fontStyle ="italic"; 
    italic_flag =1;
    }
    else{
        document.getElementById("text_Img").style.fontStyle ="normal";
        italic_flag =0;
    }
}

function alignleft(){
    var x = document.getElementById('Text_Text').value;
    document.getElementById("text_Img").style.textAlign ="left";
}
function aligncenter(){
    var x = document.getElementById('Text_Text').value;
    document.getElementById("text_Img").style.textAlign ="center";
}
function alignright(){
    var x = document.getElementById('Text_Text').value;
    document.getElementById("text_Img").style.textAlign ="right";
}
function color(){
   var colors= document.getElementById('favcolor').value;
//    console.log(colors);
   var x = document.getElementById('Text_Text').value;
   document.getElementById("text_Img").style.color =colors;
}
function sizeup() {
    let x =  50;
    var font = document.getElementById('Text_Text').style.fontSize = x;
    // document.getElementById("fontup").style.fontSize =value;
}


// function sizedown() {
//     var font= document.getElementById('fontup').value;
//     console.log(font);


// }

// Changing Font Size 
function fontsize(value) {
    let w = document.getElementById('text_Img');
    let style = window.getComputedStyle(w, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);

    if (value == "plus") {
        w.style.fontSize = (fontSize + 2) + 'px';
    }
    if (value == "minus") {
        w.style.fontSize = (fontSize - 2) + 'px';
    }
    if (value == "custom") {
        let sizee = document.getElementById('custom').value;
        let fu = parseFloat(sizee);
        w.style.fontSize = (fu) + 'px';
        valueTobeDisplayed = fu;
    }
    document.getElementById('custom').value = valueTobeDisplayed;
}