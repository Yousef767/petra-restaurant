let input = document.getElementById('file');
let imgName = document.getElementById('imgName');
input.addEventListener('input',()=>{
  imgName.innerText = input.files[0].name;
})