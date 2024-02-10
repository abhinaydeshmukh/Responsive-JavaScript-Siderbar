let sidebar = document.querySelector(".sidebar");
let menuBtn = document.querySelector("#btn");
let mainContent = document.getElementById('main-content');

// Check if the sidebar state is stored in localStorage and apply it
if (localStorage.getItem("sidebarOpen") === "true") {
  sidebar.classList.add("open");
  menuBtnChange();
}

// Event listener for hover on the sidebar
sidebar.addEventListener("mouseover", () => {
  if (!sidebar.classList.contains("open")) {
    sidebar.classList.add("hover");
  }
});

// Event listener for mouseout on the sidebar
sidebar.addEventListener("mouseout", () => {
  sidebar.classList.remove("hover");
});

menuBtn.addEventListener("mouseover", () => {
  toggleSidebar();
});


// Function to toggle sidebar
function toggleSidebar() {
  sidebar.classList.toggle("open");
  menuBtnChange();

  // Store the current sidebar state in localStorage
  localStorage.setItem("sidebarOpen", sidebar.classList.contains("open"));
}

// Function to update menu button based on sidebar state
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    menuBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    menuBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}

// Function to navigate to a page
function navigateTo(page) {
  fetch('pages/' + page + '.html')
    .then(response => response.text())
    .then(data => {
      mainContent.innerHTML = data;
      window.location.hash = page;  // Use hash-based URLs
      // Use HTML5 History API to update the URL
      history.pushState({}, '', '/' + page);
        

    })
    .catch(error => console.error('Error loading page', error));
}

// Function to get the current page based on the URL
function getCurrentPage() {
  const path = window.location.pathname;
  return path === '/' ? 'home' : path.replace('.html', '');
}

// Function to highlight the current page in the navigation (optional)
function highlightCurrentPage() {
  const currentPage = getCurrentPage();
  // Update this part based on your navigation structure
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('current-page');
    } else {
      link.classList.remove('current-page');
    }
  });
}

// Event listener for anchor tags with class "nav-link"
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("nav-link")) {
    event.preventDefault();
    const page = event.target.getAttribute("href");
    navigateTo(page);
  }
});

// Load the home page by default or based on the hash
document.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash.substring(1); // Remove the '#' symbol
  navigateTo(hash || 'home');
});
