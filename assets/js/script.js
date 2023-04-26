
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
// đăng nhập
const loginMobile = document.getElementById('login-mobile--item')
const bagMobile = document.getElementById('store-mobile')

if (loginMobile){
  loginMobile.onclick = function() {
    window.location.href = "login.html"
  }
}
if (bagMobile){
  bagMobile.onclick = function() {
    window.location.href = "login.html"
  }
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


// lọc sản phẩm
    const filterBtns = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.skincare-product-box');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // loại bỏ lớp active của tất cả các nút bộ lọc
        filterBtns.forEach(btn => {
          btn.classList.remove('active');
        });
        // thêm lớp active vào nút bộ lọc đang được click
        btn.classList.add('active');

        // lọc sản phẩm theo bộ lọc được chọn
        const filter = btn.dataset.filter;
        products.forEach(product => {
          if (product.classList.contains(filter)) {
            product.style.display = 'block';
          } else {
            product.style.display = 'none';
          }
        });
      });
    });

// lọc sản phẩm
const filterBtn = document.querySelectorAll('.filter-btn');
const product = document.querySelectorAll('.product-box');

filterBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    // loại bỏ lớp active của tất cả các nút bộ lọc
    filterBtn.forEach(btn => {
      btn.classList.remove('active');
    });
    // thêm lớp active vào nút bộ lọc đang được click
    btn.classList.add('active');

    // lọc sản phẩm theo bộ lọc được chọn
    const filter = btn.dataset.filter;
    product.forEach(product => {
      if (product.classList.contains(filter)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
});

// Thêm sự kiện cuộn trang
var prevScrollpos = window.pageYOffset;
var navMobile = document.getElementById("nav-mobile");
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (navMobile && prevScrollpos > currentScrollPos) {
    navMobile.classList.remove("hidden");
  } else if (navMobile) {
    navMobile.classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
}





