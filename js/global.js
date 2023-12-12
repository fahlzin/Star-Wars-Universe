// Obtém o caminho da página atual
const activePage = window.location.pathname;

// Seleciona todos os links dentro da tag <nav>
const navLinks = document
  .querySelectorAll(`.nav-bar .nav-link-wars`)
  .forEach((link) => {
    // Verifica se o atributo 'href' do link inclui o caminho da página atual
    if (link.href.includes(`${activePage}`)) {
      // Se incluir, adiciona a classe 'active-el' ao link
      link.classList.add(`active-el`);
    }
  });

const botao = document.getElementById(`btn-alert`)

function chamarAlerta() {
  alert(`Que a força esteja com você!`)
}