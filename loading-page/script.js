const submarine = document.querySelector(".submarine");

window.onload = function () {
  setTimeout(() => submarine.classList.add("move"), 500);
};

setTimeout("location.href='../300meters-page/index.html'", 4000);
