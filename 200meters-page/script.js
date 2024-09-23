// 需要給一個記憶體空間 imgPreloadArr 暫存
const imgPreloadArr = [];
// 前端緩存函式
function frontendPreload() {
  // 用一個陣列存放所有要預加載的圖片路徑
  const imgSrcArr = ["img/img1.png", "img/img2.png", "img/img3.png"];

  // 使用 for 迴圈遍歷每張圖片路徑
  for (let i = 0; i < imgSrcArr.length; i++) {
    // 步驟 1. 建立實體化圖片
    const img = new Image();
    // 步驟 2. 給予 src 屬性，這裡使用的是當前遍歷的圖片路徑
    img.src = imgSrcArr[i];
    // 步驟 3. 將已緩存的圖片存放在記憶體中
    imgPreloadArr.push(img);
  }
}
// 執行該函式
frontendPreload();

let imgBeChanged = document.querySelector(".change");
let mainTitle = document.querySelector(".main-title");
let paragraph = document.querySelector(".intro-paragraph");
let txtWrapper = document.querySelector(".txt-wrapper");
let circle = document.querySelector(".circle");
let body = document.querySelector("body");
let item = document.querySelectorAll(".item");

// 設定變換圖片函式
function changeImg(newSrc) {
  imgBeChanged.classList.add("fade-out");
  setTimeout(() => {
    imgBeChanged.src = newSrc;
    imgBeChanged.classList.remove("fade-out");
  }, 1500);
}

// 設定變換標題顏色函式
function changeTxtColor(newClr) {
  txtWrapper.classList.add("fade-out");
  setTimeout(() => {
    mainTitle.style.color = newClr;
    txtWrapper.classList.remove("fade-out");
  }, 1000);
}

// 設定切換圖片時的圓型大小函式
function circleGrow(newclr) {
  circle.style.background = newclr;
  circle.classList.add("grow");
  body.style.overflow = "hidden";
  circle.addEventListener("transitionend", () => {
    console.log("f");
    circle.classList.remove("grow");
    body.style.overflow = "visible";
  });
}

// 設定切換文字內容函式
item.forEach((e) => {
  e.addEventListener("click", () => {
    setTimeout(() => {
      if (e.classList.contains("item1")) {
        mainTitle.innerHTML = "Main Title1";
        paragraph.innerHTML =
          "Main Title1 dolor sit amet consectetur adipisicing elit. Odit consequuntur voluptate nemo vitae ut ratione, quidem sapiente voluptatum et reprehenderit.";
      } else if (e.classList.contains("item2")) {
        mainTitle.innerHTML = "Main Title2";
        paragraph.innerHTML =
          "Main Title2 dolor sit amet consectetur adipisicing elit. Odit consequuntur voluptate nemo vitae ut ratione, quidem sapiente voluptatum et reprehenderit.";
      } else if (e.classList.contains("item3")) {
        mainTitle.innerHTML = "Main Title3";
        paragraph.innerHTML =
          "Main Title3 dolor sit amet consectetur adipisicing elit. Odit consequuntur voluptate nemo vitae ut ratione, quidem sapiente voluptatum et reprehenderit.";
      }
    }, 1000);
  });
});
