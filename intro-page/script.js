let imgBeChanged = document.querySelector(".change");
let colorBeChanged = document.querySelector(".main-title");
let txtWrapper = document.querySelector(".txt-wrapper");
let circle = document.querySelector(".circle");
let body = document.querySelector("body");
function changeImg(newSrc) {
  imgBeChanged.classList.add("fade-out");
  setTimeout(() => {
    imgBeChanged.src = newSrc;
    imgBeChanged.classList.remove("fade-out");
  }, 1500);
}

function changeTxtColor(newClr) {
  txtWrapper.classList.add("fade-out");
  setTimeout(() => {
    colorBeChanged.style.color = newClr;
    txtWrapper.classList.remove("fade-out");
  }, 1000);
}
console.log("h");
function circleGrow(newclr) {
  console.log("h");
  circle.style.background = newclr;
  circle.classList.add("grow");
  body.style.overflow = "hidden";
  circle.addEventListener("transitionend", () => {
    console.log("f");
    circle.classList.remove("grow");
    body.style.overflow = "visible";
  });
}
