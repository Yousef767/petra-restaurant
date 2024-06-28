let btns = document.querySelectorAll('.tybtn');
btns.forEach((e)=>{
  e.addEventListener('click',()=>{
    btns.forEach((e)=>{
      e.classList.remove('active');
    })
    e.classList.add('active');
  })
})