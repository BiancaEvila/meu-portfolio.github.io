const isIndex = document.URL.includes("index.html");
const linkCss = document.createElement("link");
linkCss.setAttribute("rel", "stylesheet");
linkCss.setAttribute(
  "href",
  `${!isIndex ? "../" : ""}components/header/header.css`
);
document.getElementsByTagName("head")[0].appendChild(linkCss);

document.getElementById("header").innerHTML =
  ' <header class="container header"> ' +
  '  <ul class="container cabecalho"> ' +
  "    <li>Bianca Évila</li> " +
  "  </ul> " +
  '  <nav class="container menu"> ' +
  "    <ul> " +
  "      <li class='menu-item'><a href='" +
  (!isIndex ? "../" : "") +
  "index.html'>Home</a></li> " +
  "      <li class='menu-item'><a href='" +
  (isIndex ? "pages/" : "") +
  "formacao.html'>Formação</a></li> " +
  '      <li class="menu-item"><a href="' +
  (isIndex ? "pages/" : "") +
  'portfolio.html">Portfólio</a></li>' +
  '      <li class="menu-item"><a href="' +
  (isIndex ? "pages/" : "") +
  'sobreMim.html">Sobre mim</a></li> ' +
  '      <li class="menu-item"><a href="' +
  (isIndex ? "pages/" : "") +
  'contato.html">Contato</a></li> ' +
  "    </ul> " +
  "  </nav> " +
  "</header>  ";

const menuItems = document.getElementsByClassName("menu-item");
const removeActive = (el) => el.classList.remove("active-item");
const addActive = (el) => el.classList.add("active-item");

Array(menuItems).forEach((element) => {
  element.onclick = () => {
    menuItems.forEach((el) => {
      removeActive(el);
    });
    addActive(this);
  };
});
