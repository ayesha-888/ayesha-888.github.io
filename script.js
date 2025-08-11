function invertColors() {
  document.body.classList.toggle("inverted");

  if (document.body.classList.contains("inverted")) {
    localStorage.setItem("mode", "inverted");
  } else {
    localStorage.setItem("mode", "normal");
  }
}

window.onload = function () {
  if (localStorage.getItem("mode") === "inverted") {
    document.body.classList.add("inverted");
  }
}
document.getElementById("invertBtn").addEventListener("click", invertColors);
