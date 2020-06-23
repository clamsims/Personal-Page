function showMenu() {
  var x = document.getElementById("menuList");
  if (x.className === "menu") {
    x.className += " menuon";
  } else {
    x.className = "menu";
  }
}
