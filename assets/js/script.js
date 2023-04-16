
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

     // ẩn hiện menu
    const items = document.getElementById('header-nav_unit');
    const sub = document.getElementById('navbar_list_sub');
    const navbarSub = document.getElementById('navbar_sub');
    //  items.addEventListener('mouseover', function() {
    //      if (sub.style.display === 'none'){
    //          sub.style.display = 'flex';
    //          items.style.background = '#f2f2f2'
    //          items.style.color = 'red'
    //      } else {
    //          sub.style.display = 'none';
    //          items.style.background = 'none'
    //          items.style.color = '#333'
    //      }
    //  });

    //  const logo = document.getElementById('logo');

    //  if (logo) {
    //     logo.onclick = function() {
    //         window.location.href = "index.html";
    //       };
    //     };
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