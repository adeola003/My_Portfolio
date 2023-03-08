const menuIcon = document.querySelector('.hamb');
const menu = document.querySelector('.sections');
const menuLinks = document.querySelectorAll('.sections li a');

const isActiveClassExisted = (element) => element.classList.contains('active');

const refreshIcon = () => {
  if (isActiveClassExisted(menu)) {
    menuIcon.setAttribute('src', 'assets/ic_cross.png');
  } else {
    menuIcon.setAttribute('src', 'assets/ic_menu.svg');
  }
};
export const openMenu = () => {
  menu.classList.toggle('active');
  refreshIcon();
};

export const closeMenu = () => {
  menu.classList.remove('active');
  refreshIcon();
};

menuIcon.addEventListener('click', openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});