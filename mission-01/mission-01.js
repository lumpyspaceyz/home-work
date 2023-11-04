"use strict";
let productBtn_01 = document.querySelector("#product_01");
productBtn_01.addEventListener("click", function () {
  if (productBtn_01.parentElement.classList.contains("is-active")) {
    productBtn_01.parentElement.classList.remove("is-active");
  } else productBtn_01.parentElement.classList.add("is-active");

  console.log("productBtn_01 click");
});

let productBtn_03 = document.querySelector("#product_03");
productBtn_03.addEventListener("click", function () {
  if (productBtn_03.parentElement.classList.contains("is-active")) {
    productBtn_03.parentElement.classList.remove("is-active");
  } else productBtn_03.parentElement.classList.add("is-active");
  console.log("productBtn_03 click");
});
