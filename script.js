'use strict';

const mobileNav = document.querySelector('.hamburger');
const navBar = document.querySelector('.navbar');
const d = new Date();
const year = d.getFullYear();
const copyRight = document.querySelector('.copyright');

console.log(mobileNav.classList);
console.log(navBar.classList);

mobileNav.addEventListener('click', function () {
  navBar.classList.toggle('active');
});

navBar.addEventListener('click', function () {
  navBar.classList.toggle('active');
});

copyRight.textContent = `${year}`;
