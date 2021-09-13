/*
--------------------------------------------------------------
Your code goes in this file
--------------------------------------------------------------
*/
let body = document.querySelector('body');

let root = document.querySelector("#root");
root.style.fontFamily = "Montserrat"

/*
--------------------------------------------------------------
Header
--------------------------------------------------------------
*/
let head = document.createElement('header');
head.innerText = "BLING!"; 
head.style.display = 'flex';
head.style.justifyContent = 'center';
head.style.margin = '30px';
head.style.fontWeight = 'bold';
head.style.fontSize = '35px';
head.style.textShadow = '3px 3px rgb(230, 158, 5)';

root.append(head);

/*
--------------------------------------------------------------
Outer Div
--------------------------------------------------------------
*/
let outerDiv = document.createElement('div');
outerDiv.classList.add('outerDiv');
outerDiv.style.display = 'flex';
outerDiv.style.justifyContent = 'space-around';
outerDiv.style.flexWrap = 'wrap';
root.append(outerDiv);

/*
--------------------------------------------------------------
Controls
--------------------------------------------------------------
*/
let controls = document.createElement('div');
let text1 = document.createElement('p');
let text2 = document.createElement('H1');
text1.innerText = 'Sizzle your Life';
text2.innerText = 'Make a Card';

controls.style.textAlign = 'left';
controls.append(text1);
controls.append(text2);

//buttons
let buttons = {
    "Polaroid" : "./assets/images/polaroid.png" ,
    "TV" : "./assets/images/tv.png",
    "Traitor" : "./assets/images/among-us.png",
    "Fall Guy" : "./assets/images/fall-guy-01.png",
    "Radio" : "./assets/images/radio-02.png"
}
let divButtons = document.createElement('div');
Object.keys(buttons).forEach(name => {
    let btn = document.createElement("button")
    btn.innerText = name;
    btn.value = buttons[name];
    //btn.addEventListener("click" , createImage )
    divButtons.append(btn)
  });
controls.append(divButtons);

//other controls
let inputControls = document.createElement('div');
let inputText = document.createElement('input');
let inputColor = document.createElement('select');
let blobNope = document.createElement('div');


//inputText
inputText.setAttribute('placeholder','Name your Bling!');

//inputColor
const colors = [
    "Snow",
    "Gold",
    "DodgerBlue",
    "LightSalmon",
    "LightCoral",
    "LightPink",
    "OrangeRed",
    "Tomato",
    "DarkOrchid",
    "SpringGreen",
    "Thistle"
];
colors.forEach(color => {
    let option =  document.createElement('option');
    option.value = color;
    option.innerText = color;
    inputColor.append(option);
})
inputColor.addEventListener('change',(e)=>{
    body.style.backgroundColor = e.target.value;
})

//blobNope
let blob = document.createElement('input');
let nope = document.createElement('input');
blob.type = 'radio';
blob.name = 'blobNope';
blob.value = 'blob';
blob.innerText = 'Blob';
nope.type = 'radio';
nope.name = 'blobNope';
nope.value = 'nope';
nope.innerText = 'Nope';



inputControls.append(inputText);
inputControls.append(inputColor);
blobNope.append(blob);
blobNope.append(nope);
inputControls.append(blobNope);
controls.append(inputControls);
outerDiv.append(controls);
/*
--------------------------------------------------------------
Preview
--------------------------------------------------------------
*/
let prev =  document.createElement('div')

outerDiv.append(prev);
