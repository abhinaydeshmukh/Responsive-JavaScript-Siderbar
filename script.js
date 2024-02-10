let sidebar = document.querySelector(".sidebar");
let menuBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

menuBtn.addEventListener("mouseover", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); // calling the function (optional)
});

searchBtn.addEventListener("mouseover", () => { 
  sidebar.classList.toggle("open");
  menuBtnChange(); // calling the function (optional)
});

menuBtn.addEventListener("mouseout", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); // calling the function (optional)
});

searchBtn.addEventListener("mouseout", () => { 
  sidebar.classList.toggle("open");
  menuBtnChange(); // calling the function (optional)
});

// Following are the code to change sidebar button (optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    menuBtn.classList.replace("bx-menu", "bx-menu-alt-right"); // replacing the icons class
  } else {
    menuBtn.classList.replace("bx-menu-alt-right", "bx-menu"); // replacing the icons class
  }
}
