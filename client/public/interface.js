var selector = document.querySelector(".cat");

function def() {
  document.querySelector("#root").style.display = "block";
  document.querySelector("#web").style.display = "none";
  console.log("root");
}

function web() {
  document.querySelector("#root").style.display = "none";
  document.querySelector("#web").style.display = "block";
  console.log("web");
}
