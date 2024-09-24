const main = document.querySelector("main");
const submarine = document.querySelector(".submarine");

window.onload = function () {
  const sourcePage = localStorage.getItem("sourcePage");
  const targetPage = localStorage.getItem("targetPage");
  setTimeout(() => submarine.classList.add("move"), 500);
  console.log("Source Page: " + sourcePage);
  console.log("Target Page: " + targetPage);
  console.log("../" + targetPage + "/index.html");
  setTimeout(function () {
    if (targetPage == "index.html") window.location.href = "../" + targetPage;
    else if (targetPage == "100meters-page")
      window.location.href = "../" + targetPage + "/index.html";
    else if (targetPage == "200meters-page")
      window.location.href = "../" + targetPage + "/index.html";
    else if (targetPage == "300meters-page")
      window.location.href = "../" + targetPage + "/index.html";
    else if (targetPage == "400meters-page")
      window.location.href = "../" + targetPage + "/index.html";
  }, 4000);
};

// setTimeout("location.href='../300meters-page/index.html'", 4000);
