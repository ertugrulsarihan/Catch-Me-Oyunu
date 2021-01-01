 var boxx = document.querySelector("#square");

 var point, res;
 point = 0;
 boxx.addEventListener("mouseover", upup, 250);


 function upup() {
     var position;
     positionX = Math.floor(Math.random() * 600) + 1;
     positionY = Math.floor(Math.random() * 600) + 1;
     console.log(position);
     boxx.style.top = positionY + "px";
     boxx.style.left = positionX + "px";
     boxx.style.right = positionX + "px";
     boxx.style.bottom = positionY + "px";
 }

 boxx.addEventListener("click", catc1);

 function catc1() {
     res = document.querySelector("#result");
     point += 1;
     res.innerHTML = point;
     if (point == 15) {
         alert(point + "kez tıkladın!Ve kazandın.");
         point = 0;
     }
 }








 // boxx

 // var circle = document.querySelector(".circle");
 // var moveBy = 25;
 // window.addEventListener('load', () => {

 //     circle.style.position = 'relative';
 //     circle.style.left = 0;
 //     circle.style.top = 325;
 //     console.log(circle.style.left);
 // });


 // window.addEventListener('keyup', (e) => {
 //     switch (e.key) {
 //         case 'ArrowLeft':
 //             circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
 //             break;
 //         case 'ArrowRight':
 //             circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
 //             break;
 //         case 'ArrowUp':
 //             circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
 //             break;
 //         case 'ArrowDown':
 //             circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
 //             break;

 //     }
 // });