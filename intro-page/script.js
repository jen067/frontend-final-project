// 需要給一個記憶體空間 imgPreloadArr 暫存
const imgPreloadArr = [];
// 前端緩存函式
function frontendPreload() {
  // 若有 4 張圖，用 for 迴圈遍歷
  for (let i = 0; i < 3; i++) {
    // 步驟 1. 建立實體化圖片
    const img = new Image();
    // 步驟 2. 給予 src 屬性，這裡要替換成你的圖片路徑
    img.src = `{img/img1.png,img/img2.png,img/img3.png}`;
    // 步驟 3. 緩存放在記憶體
    imgPreloadArr.push(img);
  }
}
// 執行該函式
frontendPreload();

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
