let imgBeChanged = document.querySelector(".change");
let colorBeChanged = document.querySelector(".main-title");
let txtWrapper = document.querySelector(".txt-wrapper");
function changeImg(newSrc) {
  imgBeChanged.classList.add("fade-out");
  setTimeout(() => {
    imgBeChanged.src = newSrc;
    imgBeChanged.classList.remove("fade-out");
  }, 500);
}

function changeTxtColor(newClr) {
  txtWrapper.classList.add("fade-out");
  setTimeout(() => {
    colorBeChanged.style.color = newClr;
    txtWrapper.classList.remove("fade-out");
  }, 500);
}
