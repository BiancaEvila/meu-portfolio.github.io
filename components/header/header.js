//Componente de cabeçalho

const isIndex = document.URL.includes("index.html");

// Cria a tag link com CSS do header
const linkCss = document.createElement("link");
linkCss.setAttribute("rel", "stylesheet");
linkCss.setAttribute(
  "href",
  `${!isIndex ? "../" : ""}components/header/header.css`
);
document.getElementsByTagName("head")[0].appendChild(linkCss);

// Define o HTML do cabeçalho, usando a função
// isIndex para ajustar o href de acordo com o a página.
// Exemplo: Na página Home o href é index.html e os
// outros hrefs tem pages/ para acessar as outras páginas
document.getElementById("header").innerHTML =
  ' <header class="header"> ' +
  "  <div class='logo'><a href='" +
  (!isIndex ? "../" : "") +
  "index.html'>Bianca Évila</a></div> " +
  '  <nav class="menu"> ' +
  "    <ul> " +
  "      <li class='menu-item' ><a href='" +
  (!isIndex ? "../" : "") +
  "index.html'>Home</a></li> " +
  "      <li class='menu-item' ><a href='" +
  (isIndex ? "pages/" : "") +
  "formacao.html'>Formação</a></li> " +
  "      <li class='menu-item' ><a href='" +
  (isIndex ? "pages/" : "") +
  "portfolio.html'>Portfólio</a></li>" +
  "      <li class='menu-item' ><a href='" +
  (isIndex ? "pages/" : "") +
  "sobreMim.html'>Sobre mim</a></li> " +
  "      <li class='menu-item' ><a href='" +
  (isIndex ? "pages/" : "") +
  "contato.html'>Contato</a></li> " +
  "    </ul> " +
  "  </nav> " +
  "</header>  ";

// Código do item de menu ativo
// Explicação:
// items: Todos os items do menu definidos do HTML acima que contém a classe .menu-item
// getPathName: Função que recebe uma URI e retorna somente o nome da página
// currentPage: Nome da página da URI em que se está
const items = document.querySelectorAll(".menu-item");
const getPathName = (el) =>
  el.split("/")[el.split("/").length - 1].split(".")[0];
const currentPage = getPathName(document.URL);

// Usa o localStorage do navegador para armazenar o nome da página atual
localStorage.setItem("active", currentPage);

// Faz uma busca em todos os itens do menu pelo item que tem
// o mesmo nome que está no localStorage
// se encontrar adiciona a classe .active-item a esse item.
items.forEach((el) => {
  if (getPathName(el.firstChild.href) === localStorage.getItem("active")) {
    el.classList.add("active-item");
  }
});
