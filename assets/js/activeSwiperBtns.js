let btns = document.querySelectorAll('.mySwiper2 .swiper-slide');
btns.forEach((e)=>{
  e.addEventListener('click',()=>{
    btns.forEach((e)=>{
      e.classList.remove('active');
    })
    e.classList.add('active');
  })
})