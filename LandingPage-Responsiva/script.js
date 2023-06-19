const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

// document.addEventListener('DOMContentLoaded', function() {
//     var perguntas = document.querySelectorAll('.pergunta-titulo');

//     perguntas.forEach(function(pergunta) {
//     pergunta.addEventListener('click', function() {
//         var descricao = this.nextElementSibling;
//         descricao.style.display = (descricao.style.display === 'none') ? 'block' : 'none';
//     });
//     });
// });

function togglePergunta(elemento) {
    elemento.parentElement.classList.toggle('aberta');
    const desc = elemento.nextElementSibling;
    console.log(desc.style.display);
    desc.style.display = desc.style.display === 'none' || desc.style.display === ''  ? 'block' : 'none';
}