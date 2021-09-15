/*
--------------------------------------------------------------
Your code goes in this file
--------------------------------------------------------------
*/
let body = document.querySelector('body');
body.style.backgroundColor = "snow";
let root = document.querySelector("#root");
root.style.fontFamily = "Montserrat"
root.style.height = "100vh";

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
head.style.fontWeight = '900';
head.style.fontSize = '2rem';
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

text1.style.fontSize = "33px";
text1.style.padding = "50px 0 10px 10px";
text2.style.fontSize = "65px";
text2.style.padding = "10px 0 30px 10px";
text2.style.fontWeight = "bold";


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
    btn.style.fontSize = "16px";
    btn.style.padding = "15px" 
    btn.style.margin = "10px";
    btn.style.borderRadius = "10px";
    btn.style.boxShadow = "5px 3px 3px black";
    btn.style.cursor = "pointer";
    btn.addEventListener("click" , createImage )
    divButtons.append(btn)
  });
divButtons.style.padding = "20px 0 0 10px"; 
controls.append(divButtons);

//other controls
let inputControls = document.createElement('div');
let inputText = document.createElement('input');
let inputColor = document.createElement('select');
let blobNope = document.createElement('span');
inputControls.style.padding = "20px 0 0 10px"; 
inputControls.style.display = "flex";
inputControls.style.flexWrap = "wrap";

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
inputText.style.padding = "15px";
inputText.style.borderRadius = "10px";
inputText.style.margin = "10px";
inputText.style.boxShadow = "5px 3px 3px black";


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
inputColor.style.padding = "15px";
inputColor.style.borderRadius = "10px";
inputColor.style.margin = "10px";
inputColor.style.boxShadow = "5px 3px 3px black";



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
blobNope.style.padding = "15px";
blobNope.style.borderRadius = "10px";
blobNope.style.margin = "10px";
blobNope.style.boxShadow = "5px 3px 3px black";
//blobNope.style.width = "150px";

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
    closeBtn.style.cursor = "pointer";
    closeBtn.addEventListener("click",()=>card.remove())
    card.append(closeBtn);
    dispCard.insertBefore(card,dispCard.children[0]);
 }



//capture
let capture = document.createElement('img');
capture.src= "/assets/images/camera.png";
capture.style.width = "3rem";
capture.style.backgroundColor = "inherit";
capture.style.padding = "10px";
capture.style.borderRadius = "10px";
capture.style.margin = "10px 0 0 20px";
capture.style.border = "1px solid black";
capture.style.boxShadow = "5px 3px 3px black";
capture.style.cursor = "pointer";
capture.addEventListener("mousedown",() => capture.style.backgroundColor = "white");
capture.addEventListener("mouseup",() => capture.style.backgroundColor = "inherit");

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
prev.style.backgroundColor = "snow";
prev.style.backgroundRepeat = "no-repeat";
prev.style.maxHeight = "400px";
prev.style.minWidth = "400px";
prev.style.justifyContent = 'space-between';
prev.style.paddingBottom = '140px'

prevImg.style.alignItems = 'center';


valueOnImage.style.fontSize = "4rem";
valueOnImage.style.fontWeight = "900";
valueOnImage.style.textShadow = "black 2px 2px 2px";
//valueOnImage.style.top = "-15%";
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
footer.style.bottom= "0";
footer.style.width = "100%";
footer.style.marginTop = "200px";
footer.style.fontWeight = "bold";
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