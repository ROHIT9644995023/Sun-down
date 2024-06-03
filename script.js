const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function Page3Animation(){
    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image");
    elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block";
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none";
})

var elem = document.querySelectorAll(".elem");
elem.forEach(function(e){
    e.addEventListener("mouseenter",function(){
    var image = e.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})
})
}
Page3Animation()

function SwipperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 70,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
      });
}
SwipperAnimation()

