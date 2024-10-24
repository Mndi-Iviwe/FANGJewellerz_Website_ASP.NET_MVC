// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.admin-header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelector('#close-edit').onclick = () => {
    document.querySelector('.edit-form-container').style.display = 'none';
    window.location.href = 'Admin.html.php';
};