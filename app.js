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
    btn.style.backgroundColor = "inherit";
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
inputText.style.backgroundColor = "black";
inputText.style.color = "white";


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
    prev.style.backgroundColor = e.target.value;
    body.style.backgroundColor = e.target.value;
})
inputColor.style.backgroundColor = "black";
inputColor.style.color = "white";



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
blobNope.style.backgroundColor = "black";
blobNope.style.color = "white";

//generateCards
const generateCards = ()=>{
    let card =prev.cloneNode(true);
    card.backgroundSize="100%";
    card.style.position ="relative";
    card.style.border = "solid 2px";
    card.style.borderRight = "solid 4px";
    card.style.margin="10px 20px";
    
    let closeBtn = document.createElement("img");
    closeBtn.src = "./assets/images/icon_delete.png";
    closeBtn.style.height = "50px";
    closeBtn.style.position="absolute";
    closeBtn.style.right="-20px";
    closeBtn.style.top="-20px";
    closeBtn.addEventListener("click",()=>card.remove())
    card.append(closeBtn);
    dispCard.insertBefore(card,dispCard.children[0]);
 }



//capture
let capture = document.createElement('button');
capture.style.backgroundImage = "url(/assets/images/camera.png)";
capture.style.width = "2rem";
capture.style.height = "2rem";
capture.style.backgroundSize = "100%";
capture.style.backgroundRepeat = "no-repeat";
capture.style.backgroundColor = "inherit";

capture.addEventListener('click',generateCards);


inputControls.append(inputText);
inputControls.append(inputColor);
blobNope.append(blob);
blobNope.append(blobtext);
blobNope.append(nope);
blobNope.append(nopetext);
inputControls.append(blobNope);
controls.append(inputControls);
controls.append(capture);
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


/*
--------------------------------------------------------------
displayCards
--------------------------------------------------------------
*/

let dispCard= document.createElement("div");
root.append(dispCard);
dispCard.style.display = "flex";
dispCard.style.flexWrap = "wrap";
dispCard.style.justifyContent = "space-around";


/*
--------------------------------------------------------------
Footer
--------------------------------------------------------------
*/

let footerEle = ["♥Credits:","Polaroid","TV","Traitor","Fall-Guy","Radio"];
let footer = document.createElement('footer');
footer.style.justifyContent = "center"
footer.style.wordSpacing = '0.5rem';
footer.style.flexWrap = "wrap";
footer.style.display = "flex";
footer.style.bottom= "10px";
footer.style.width = "100%";
footerEle.forEach((items,index)=>{
    if(index == 0){
     a = document.createElement("p");
    }
    else{
     a = document.createElement("a");
        a.addEventListener('mouseover',(e)=>{
            e.target.style.borderBottom = "2px solid black";
        })
        a.addEventListener('mouseout',(e)=>{
            e.target.style.borderBottom = "0px";
        })
        a.href = "#";
        a.target = "_blank";
        a.style.textDecoration = "none";
        a.style.color = "black";
        a.style.marginLeft = "1em";
    }
    a.innerText = items;
    footer.appendChild(a);
})
root.append(footer);