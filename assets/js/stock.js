let stock1 = document.getElementById('stock1');
let stock2 = document.getElementById('stock2');

stock1.addEventListener('input',()=>{
  stock2.checked = false;
})
stock2.addEventListener('input',()=>{
  stock1.checked = false;
})