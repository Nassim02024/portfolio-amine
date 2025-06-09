// let menuword = document.querySelector(".menuword");
// let menuicon = document.querySelector(".menuicon");
// let listandicon = document.querySelector(".listandicon");
// let loi = document.querySelectorAll(".loi");
// let press = document.querySelector(".pressul");
// let menuiconimg = document.querySelector(".menuicon img");
// let ull = document.querySelector(".ul");

// if (window.innerWidth > 790) {
//   menuiconimg.style.width = "0";

//   window.addEventListener("scroll", function () {
//     if (this.window.scrollY > 150) {
//       menuiconimg.style.width = "60px";
//       menuiconimg.style.top = "12px";
//       listandicon.style.boxShadow = "0  10px 10px rgba(0, 0, 0, 0.1)";
//       for (let i = 0; i < loi.length; i++) {
//         loi[i].style.fontSize = "30px";
//         loi[i].style.transition = " transform 0.6S";
//       }

//       menuiconimg.classList.add("active");
//       press.classList.add("activpressul");

//       menuicon.onclick = function () {
//         ull.classList.toggle("activeul");
//         menuicon.classList.toggle("activebaimg");
//         document.body.classList.toggle("activebody");
//         // ul.style.transition = 'all 0.5s ease-out'
//       };
//     } else {
//       menuiconimg.style.width = "0";
//       press.classList.remove("activpressul");
//       for (let i = 0; i < loi.length; i++) {
//         loi[i].style.fontSize = "19px";
//         // loi[i].style.transition = 'all 0S';
//       }
//       if (menuiconimg.classList.contains("active")) {
//         menuiconimg.classList.remove("active");
//         listandicon.style.boxShadow = "none";
//         menuicon.classList.remove("activebaimg");
//         ull.classList.remove("activeul");
//       }
//     }
//   });
// } else {
//   menuiconimg.style.width = "0";
//   window.addEventListener("scroll", function () {
//     if (this.window.scrollY > 400) {
//       menuiconimg.style.width = "60px";
//       menuiconimg.style.top = "12px";
//       listandicon.style.boxShadow = "0  10px 10px rgba(0, 0, 0, 0.1)";
//       for (let i = 0; i < loi.length; i++) {
//         loi[i].style.fontSize = "30px";
//         loi[i].style.transition = " transform 0.6S";
//       }

//       menuiconimg.classList.add("active");
//       press.classList.add("activpressul");

//       menuicon.onclick = function opni() {
//         console.log("lf");

//         ull.classList.toggle("activeul");
//         menuicon.classList.toggle("activebaimg");
//         document.body.classList.toggle("activebody");
//         // ul.style.transition = 'all 0.5s ease-out'
//       };
//     } else {
//       menuiconimg.style.width = "0";
//       press.classList.remove("activpressul");
//       for (let i = 0; i < loi.length; i++) {
//         loi[i].style.fontSize = "19px";
//         // loi[i].style.transition = 'all 0S';
//       }
//       if (menuiconimg.classList.contains("active")) {
//         menuiconimg.classList.remove("active");
//         listandicon.style.boxShadow = "none";
//         menuicon.classList.remove("activebaimg");
//         ull.classList.remove("activeul");
//       }
//     }
//   });
// }
// menuword.addEventListener("click", function () {
//   ull.classList.toggle("ulphone");
//   ull.classList.toggle("activeul");
//   press.classList.toggle("activeulforphone");
//   press.classList.remove("activeulforphone");

//   document.body.classList.toggle('menuwordactive')
// });
