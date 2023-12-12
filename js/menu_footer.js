const menu = document.getElementById(`menu-bar`);
const rodape = document.getElementById(`rodape`);

menu.insertAdjacentHTML(
  "afterbegin",
  `
    <ul class="menu-nav nav-bar">
        <a class="nav-link-wars" href="/index.html"><li class="perspectiva">FILMES</li></a>
        <a class="nav-link-wars" href="/pages/personagens.html"><li class="perspectiva">PERSONAGENS</li></a>
        <a class="nav-link-wars" href="/pages/planetas.html"><li class="perspectiva">PLANETAS</li></a>
        <a class="nav-link-wars" href="/pages/veiculos.html"><li class="perspectiva"> VEÍCULOS</li></a>
        <a class="nav-link-wars" href="/pages/naves.html"><li class="perspectiva">NAVES</li></a>
    </ul>
`
);

rodape.insertAdjacentHTML(
  "afterbegin",
  `
    <ul class="nav justify-content-center pb-3 mb-3 border-color">
      <li class="nav-item"><a href="/index.html"" class="nav-link-wars px-2 footer-txt">Filmes</a></li>
      <li class="nav-item"><a href="/pages/personagens.html" class="nav-link-wars px-2 footer-txt">Personagens</a></li>
      <li class="nav-item"><a href="/pages/planetas.html" class="nav-link-wars px-2 footer-txt">Planetas</a></li>
      <li class="nav-item"><a href="/pages/veiculos.html" class="nav-link-wars px-2 footer-txt">Veículos</a></li>
      <li class="nav-item"><a href="/pages/naves.html" class="nav-link-wars px-2 footer-txt">Naves</a></li>
    </ul>
    <p class="text-center footer-txt">© 2023 Grupo Poderoso, Inc</p>
  `
);
