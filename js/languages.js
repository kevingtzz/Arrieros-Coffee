const english = document.getElementById('english');
const spanish = document.getElementById('spanish');
const products_link = document.getElementById('productsLink');
const about_link = document.getElementById('aboutLink');
const contact_link = document.getElementById('contactLink');
const tour_btn = document.getElementById('tour_btn');

english.addEventListener('click', () => {
    set_english();
});

spanish.addEventListener('click', () => {
    set_spanish();
});

function set_spanish() {
    products_link.innerHTML = 'Productos';
    about_link.innerHTML = 'Sobre nosotros';
    contact_link.innerHTML = 'Contacto';
    tour_btn.innerHTML = 'Info & Reservas';
}