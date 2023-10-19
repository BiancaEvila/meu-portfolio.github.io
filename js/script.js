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
