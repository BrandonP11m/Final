document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

const fade = document.querySelector('img');
fade.addEventListener('click', toggleBlur);

function toggleBlur() {
  this.classList.toggle('blur');
}