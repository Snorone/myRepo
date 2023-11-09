document.body.style.margin = "5rem";
document.body.style.textAlign = "center";

for (let i = 0; i < 5; i++) {
  const myH1 = document.createElement("h1");
  document.body.appendChild(myH1);

  let myText = "Rad " + [i + 1];
  myH1.innerText = myText;
  let mySize = [i + 1];

  myH1.style.color = `hsl(240, 90%, 70%)`;
  myH1.style.fontSize = `${[i]}rem`;
  const myColor = 100 + i * (100 / 4);
  myH1.style.backgroundColor = `hsl(${myColor}, 90%, 87%)`;
  if (i < 1) {
    myH1.style.fontSize = "0.65rem";
  }
}

const myBorder = "solid";
const myBorderColor = "black";
const myBorderSize = "1px";

const myDiv = document.createElement("div");

myDiv.style.border = `${myBorder} ${myBorderColor} ${myBorderSize}`;
myDiv.style.backgroundColor = `hsl(202, 90%, 100%)`;
myDiv.style.display = "flex";
myDiv.style.justifyContent = "space-evenly";

myDiv.style.paddingTop = "4rem";
myDiv.style.paddingBottom = "4rem";

document.body.appendChild(myDiv);

const myDiv1 = document.createElement("div");
myDiv.appendChild(myDiv1);
const myDiv2 = document.createElement("div");
myDiv.appendChild(myDiv2);
const myDiv3 = document.createElement("div");
myDiv.appendChild(myDiv3);

myDiv1.style.border = `solid hsl(240, 60%, 80%) 0.6rem`;
myDiv1.style.width = "2.5rem";
myDiv2.style.border = `solid hsl(240, 60%, 80%) 0.6rem`;
myDiv2.style.width = "2.5rem";
myDiv3.style.border = `solid hsl(240, 60%, 80%) 0.6rem`;
myDiv3.style.width = "2.5rem";

for (i = 0; i < 10; i++) {
  const myP = document.createElement("p");
  myDiv1.appendChild(myP);

  myP.innerText = [i];
  myP.style.backgroundColor = "black";
  myP.style.margin = "0px";
  myP.style.textAlign = "left";
  myP.style.color = "white";
  myP.style.width = "2.5rem";
  if ([i] == 4) {
    myP.style.backgroundColor = `hsl(240, 60%, 80%)`;
  } else if ([i] % 2 == 1) {
    myP.style.backgroundColor = "white";
    myP.style.color = "black";
  }
}

const myNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (i = myNumber.length - 1; i >= 0; i--) {
  const myNumberParagraph = document.createElement("p");
  myDiv2.appendChild(myNumberParagraph);
  myNumberParagraph.innerText = myNumber[i];
  myNumberParagraph.innerText = [i];
  myNumberParagraph.style.backgroundColor = "black";
  myNumberParagraph.style.margin = "0px";
  myNumberParagraph.style.textAlign = "center";
  myNumberParagraph.style.color = "white";
  myNumberParagraph.style.width = "2.5rem";
  if ([i] == 8) {
    myNumberParagraph.style.backgroundColor = `hsl(240, 60%, 80%)`;
  } else if ([i] % 2 == 1) {
    myNumberParagraph.style.backgroundColor = "white";
    myNumberParagraph.style.color = "black";
  }
}

const numbers = [
  "ett",
  "två",
  "tre",
  "fyra",
  "fem",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
];

for (i = 0; i < numbers.length; i++) {
  const myNumberP = document.createElement("p");
  myDiv3.appendChild(myNumberP);
  myNumberP.innerText = numbers[i];

  myNumberP.style.backgroundColor = `hsl(240, 60%, 80%)`;
  myNumberP.style.margin = "0px";
  myNumberP.style.textAlign = "right";
  myNumberP.style.color = "white";
  myNumberP.style.width = "2.5rem";
  if ([i] % 2 == 0) {
    myNumberP.style.backgroundColor = "black";
  } else if ([i] < 5 || [i] > 5) {
    myNumberP.style.backgroundColor = "white";
    myNumberP.style.color = "black";
  }
}
