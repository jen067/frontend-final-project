const fish = document.querySelector(".fish");

window.onload = function () {
  setTimeout(() => fish.classList.add("move"), 500);
};

setTimeout("location.href='../intro-page/index.html'", 4000);
