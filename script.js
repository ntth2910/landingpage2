const header = document.querySelector('header');
let menu = document.querySelector('#burger_icon');
let navbar = document.querySelector('.navbar');

menu.onclick =()=>{
menu.classList.toggle('fa-xmark');
navbar.classList.toggle('open')
}