// 需要給一個記憶體空間 imgPreloadArr 暫存
const imgPreloadArr = [];
// 前端緩存函式
function frontendPreload() {
  // 用一個陣列存放所有要預加載的圖片路徑
  const imgSrcArr = [
    "img/IMG_0322.PNG",
    "img/IMG_0323.PNG",
    "img/IMG_0324.PNG",
    "img/IMG_0325.png",
  ];

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

let listBg = document.querySelectorAll(".bg");
let listTab = document.querySelectorAll(".tab");
let titleBanner = document.querySelector(".banner h1");

// window.addEventListener("scroll", (event) => {
//   /*scrollY is the web scrollbar position (pixel)*/
//   let top = this.scrollY;
//   /*index is the order of classes bg (0,1,2,3,4,5,6,7,8)
//     When scrolling the web, the classes bg scroll down,
//     the bigger the index, the faster the movement
//     */
//   listBg.forEach((bg, index) => {
//     if (index != 0 && index != 8) {
//       bg.style.transform = `translateY(${(top * index) / 2}px)`;
//     } else if (index == 0) {
//       bg.style.transform = `translateY(${top / 3}px)`;
//     }
//   });
//   titleBanner.style.transform = `translateY(${(top * 4) / 2}px)`;

//   /* parallax scroll in tab
//     when tab's position is less than 550 px
//     from scrollbar position add active class to animate
//     and vice versa
//     */
//   listTab.forEach((tab) => {
//     if (tab.offsetTop - top < 550) {
//       tab.classList.add("active");
//     } else {
//       tab.classList.remove("active");
//     }
//   });
// });
