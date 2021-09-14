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

// controls.style.flexBasis = "50%";
// controls.style.width = "50vw";
// controls.style.margin = '10rem';

controls.style.textAlign = 'left';
controls.append(text1);
controls.append(text2);


//prevImg Function
let prevImg = document.createElement('img');
prevImg.src = '';
const createImage = (e) => {
    if(prevImg.src.slice(-(e.target.value.length)) != e.target.value){
        prevImg.src = e.target.value;
        prevImg.style.width = "250px";
        let allButtons = document.querySelectorAll("button")
        allButtons.forEach((button) => {
            button.style.backgroundColor = "inherit";
            button.style.color = "black";
        });
        e.target.style.backgroundColor = 'black';
        e.target.style.color = "white";
    }
    else{
        prevImg.src = ""
        e.target.style.backgroundColor = "inherit"
        e.target.style.color = "black"
    }
}

//buttons
let buttons = {
    "Polaroid" : "/assets/images/polaroid.png" ,
    "TV" : "/assets/images/tv.png",
    "Traitor" : "/assets/images/among-us.png",
    "Fall Guy" : "/assets/images/fall-guy-01.png",
    "Radio" : "/assets/images/radio-02.png"
}
let divButtons = document.createElement('div');
Object.keys(buttons).forEach(name => {
    let btn = document.createElement("button")
    btn.innerText = name;
    btn.value = buttons[name];
    btn.addEventListener("click" , createImage )
    divButtons.append(btn)
  });
controls.append(divButtons);

//other controls
let inputControls = document.createElement('div');
let inputText = document.createElement('input');
let inputColor = document.createElement('select');
let blobNope = document.createElement('span');


//inputText
let valueOnImage = document.createElement('p');
inputText.setAttribute('placeholder','Name your Bling!');
inputText.value = ""
valueOnImage.innerText = "Stuff"
inputText.addEventListener("keyup", () => {
    valueOnImage.innerText = inputText.value
    if(valueOnImage.innerText == "")
        valueOnImage.innerText = "Stuff"
});

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
let blobtext = document.createElement('span');
blobtext.innerText = 'Blob';
nope.type = 'radio';
nope.name = 'blobNope';
nope.value = 'nope';
let nopetext = document.createElement('span');
nopetext.innerText = 'Nope';
blob.addEventListener('click',(e)=>{prev.style.backgroundImage = "url(./assets/images/blob.png)"})
nope.addEventListener('click',(e)=>{prev.style.backgroundImage = ""})


inputControls.append(inputText);
inputControls.append(inputColor);
blobNope.append(blob);
blobNope.append(blobtext);
blobNope.append(nope);
blobNope.append(nopetext);
inputControls.append(blobNope);
controls.append(inputControls);
outerDiv.append(controls);
/*
--------------------------------------------------------------
Preview
--------------------------------------------------------------
*/
let prev =  document.createElement('div')

prev.style.display = 'flex';
prev.style.flexDirection = 'column';
prev.style.alignItems = 'center';
prev.style.backgroundSize = "100%";
prev.style.backgroundRepeat = "no-repeat";
prev.style.minHeight = "400px";
prev.style.minWidth = "400px";
prev.style.justifyContent = 'space-between';
prev.style.paddingBottom = '100px'

prevImg.style.alignItems = 'center';

valueOnImage.style.margin = "1rem";
// prev.style.flexBasis = "50%";
// prev.style.width = "50vw";
// prev.style.margin = '10rem 5rem';

prev.append(valueOnImage);
prev.append(prevImg);
outerDiv.append(prev);
