const submarine = document.querySelector(".submarine");

window.onload = function () {
  setTimeout(() => submarine.classList.add("move"), 500);
  const sourcePage = localStorage.getItem("sourcePage");
  const targetPage = localStorage.getItem("targetPage");
  // console.log("Source Page: " + sourcePage);
  // console.log("Target Page: " + targetPage);
  // console.log("../" + targetPage + "/index.html");
  setTimeout(function () {
    if (targetPage == "200meters-page") {
      // 跳轉到目標頁面
      window.location.href = "../" + targetPage + "/index.html";
    } else if (targetPage == "index.html") {
      window.location.href = "../" + targetPage;
    }
  }, 4000);
};

// setTimeout("location.href='../300meters-page/index.html'", 4000);
