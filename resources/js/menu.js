function showMenu(){
  document.getElementById("linkList").classList.toggle("menuOn")
}

const menuItem = document.querySelectorAll(".menuItem")

menuItem.forEach(
  function(menuItem) {
    menuItem.addEventListener("click", showMenu)
  }
)
