var selector = document.querySelector(".cat");

function def() {
  document.querySelector("#root").style.display = "block";
  document.querySelector("#web").style.display = "none";
}

function web() {
  document.querySelector("#root").style.display = "none";
  document.querySelector("#web").style.display = "block";
}
