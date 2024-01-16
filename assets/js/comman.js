
// navbar menu js file...
let navbarmenu = document.querySelector('.navbar');

let sidemenu =document.querySelectorAll('.nav-link');
let navcollapse = document.querySelector('.navbar-collapse.collapse');
let backontop = document.querySelector('#backtop');

let sections = document.querySelectorAll('section');

// sidemenu.forEach(function(a){
//   a.addEventListener("click",function(){
//     navcollapse.classList.remove('show');
//   })
// })


window.onscroll = () => {
  
  if(window.scrollY > 150){
    navbarmenu.classList.add('active');
    backontop.classList.add('active');
  }else{
    navbarmenu.classList.remove('active');
    backontop.classList.remove('active');

  }
  sections.forEach(sec => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let idnum = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      sidemenu.forEach(links => {
      links.classList.remove('active');
      document.querySelector('.nav-item .nav-link[href*= ' + idnum + ']').classList.add('active');
      });
    };
  });
}

//Navbar Menu active js...
// $(document).on("click",".nav-link", function () { 
//   $(".nav-link").removeClass('active');
//   $(this).addClass("active");
// });
 
// mobile menu dropdown metis scripts......
// $(document).ready(function () {
//   $('#mobile-menu-active').metisMenu();

// });



// slider section js file...

$('.hero-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    var carousel = e.relatedTarget;
    $('#counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
  }).owlCarousel({
    items: 1,
    loop:true,
    autoplay: true,
    autoplayTimeout: 4000,
    margin:10,
    dots:false,
    nav:true,
    navText : ['<span><i class="fas fa-long-arrow-alt-left"></i></span>','<span class="darkbtn"><i class="fas fa-long-arrow-alt-right"></span>']
  });