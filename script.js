let sidebar = document.querySelector(".sidebar");
let menuBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

// Check if the sidebar state is stored in localStorage and apply it
if (localStorage.getItem("sidebarOpen") === "true") {
  sidebar.classList.add("open");
  menuBtnChange();
}

menuBtn.addEventListener("mouseover", () => {
  toggleSidebar();
});

searchBtn.addEventListener("mouseover", () => {
  toggleSidebar();
});

menuBtn.addEventListener("mouseout", () => {
  toggleSidebar();
});

searchBtn.addEventListener("mouseout", () => {
  toggleSidebar();
});

function toggleSidebar() {
  sidebar.classList.toggle("open");
  menuBtnChange();

  // Store the current sidebar state in localStorage
  localStorage.setItem("sidebarOpen", sidebar.classList.contains("open"));
}

function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    menuBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    menuBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}

function navigateTo(page) {
  page = page || '/pages/home';

  fetch(page + '.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('main-content').innerHTML = data;
    })
    .catch(error => console.error('Error loading page', error));
}

// Load the page based on the current hash or default to home
function loadCurrentPage() {
  const currentPage = window.location.hash || '/pages/home';
  navigateTo(currentPage);
}

// Refresh the current page content on hashchange
window.addEventListener('hashchange', loadCurrentPage);

// Initial load
loadCurrentPage();
