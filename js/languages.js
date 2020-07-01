const english = document.getElementById('english');
const spanish = document.getElementById('spanish');
const products_link = document.getElementById('productsLink');
const about_link = document.getElementById('aboutLink');
const contact_link = document.getElementById('contactLink');
const tour_intro = document.getElementById('tour_intro');
const tour_btn = document.getElementById('tour_btn');
const coffee_section_title = document.getElementById('coffee_section_title');
const coffee_intro = document.getElementById('coffee_intro');
const cherry = document.getElementById('cherry');
const cherry_des = document.getElementById('cherry_des');
const honey = document.getElementById('honey');
const honey_des = document.getElementById('honey_des');
const product_buy_btn = document.getElementById('product_buy_btn');
const about_title = document.getElementById('about-title');
const about_article = document.getElementById('about-article');


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
    tour_intro.innerHTML = `Las cosas saben mejor cuando conoces 
    sus origenes, la experiencias enrriquecen el alma y agudizan 
    los sentidos, revelando matices que antes eran inperceptibles. 
    Por está razón es un placer compartir contigo nuestras tradiciónes, 
    te guiaremos para que puedas experimentar por ti mismo los procesos 
    involucrados en la siembra y cosecha de variedad de cafés artesanales, 
    aprende de las tradiciones compartidas por los arrieros antioqueños 
    y prueba de nuestras mejores catas.`;
    tour_btn.innerHTML = 'Info & Reservas';
    coffee_section_title.innerHTML = 'Nuestro Café';
    coffee_intro.innerHTML = `Tenemos a disposicón cafés especiales tipo 
    <b>Honey</b> y <b>Cherry</b>, procesados con técnicas de cultivo 
    amigables con el medio ambiente, ya que manejamos procesos naturales, 
    sin uso de químicos, pesticidas ni fungicidas.`;
    cherry.innerHTML = 'Café Cherry';
    cherry_des.innerHTML = `Nuestro café tipo <b>Cherry</b> es secado con la 
    pulpa de la corteza del café, la almendra absorbe todo el dulsor del 
    mucilago dando como resultado exquisitas notas frutales y vinosas en su sabor.`;
    honey.innerHTML = 'Café Honey';
    honey_des.innerHTML = `Nuestro café tipo <b>Honey</b> es secado con su miel, 
    en este procesos la almendra absorbe dicha miel y los antioxidantes del 
    mucilago, dando como resultado un agradable dulsor y suavidad en su sabor.`;
    product_buy_btn.innerHTML = 'Comprar ahora';
    about_title.innerHTML = 'Sobre Nosotros';
    about_article.innerHTML = `<p>Nuestra pequeña finca cafetera, se ubicada en 
    el corregimiento de San Sebastián de Palmitas Medellin, donde con esfuerzo y 
    dedicación, ha podido adaptarse para el cultivo y proceso de café de gran 
    calidad y sabor, haciendo así que nuestros visitantes se lleven una muy buena 
    experiencia cafetera.</p>
    <p style="padding-top: 20px;">
    Durante el tour entenderás el esfuerzo y dedicación necesaria para que llegue a
    nuestra mesa una taza del mejor café del mundo y en el proceso te enrriqueserás 
    con nuevas experiencias que darán suerte a nuevos matices en tu paladar.</p>`;
}