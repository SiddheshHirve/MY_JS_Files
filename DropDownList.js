// let drop = document.querySelector('.container');
// drop.addEventListener('click', function() {
//   document.querySelector('.ops').classList.toggle('active');
// });
// let prathm = document.querySelectorAll('.ooo');
// drop.addEventListener("click",() => {
//   prathm.forEach((cwit) => { 
//     setTimeout(function() {
//       cwit.style.marginLeft = "0px";
//     }, 500);
//   });
// }); 
let drop = document.querySelector('.container');
let prathm = document.querySelectorAll('.ooo');

drop.addEventListener("click", () => {
  prathm.forEach((cwit, index) => { 
    setTimeout(function() {
        if (cwit.style.marginLeft === "0px") {
            cwit.style.marginLeft = "100%";
        }else{
            cwit.style.marginLeft = "0px";
        }
    }, index * 500); // Increasing delay for each element
  });
});
