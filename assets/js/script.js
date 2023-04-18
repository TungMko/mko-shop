
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    }
    )
}
if (close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

// logo
const logo = document.getElementById('logo');

if (logo) {
  logo.onclick = function() {
  window.location.href = "index.html";
  };
  };

     // ẩn hiện menu
    const items = document.getElementById('header-nav_unit');
    const sub = document.getElementById('navbar_list_sub');
    const navbarSub = document.getElementById('navbar_sub');

    items.addEventListener("mouseenter", function(event) {
        sub.style.display = "flex";
      });
    
    items.addEventListener("mouseleave", function(event) {
        sub.style.display = "none";
      });
    sub.addEventListener("mouseenter", function(event) {
        sub.style.display = "flex";
      });
    sub.addEventListener("mouseleave", function(event) {
        sub.style.display = "none";
      });