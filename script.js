// Dynamic mobile menu
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

// Contact form validation
const form = document.querySelector('.frm');
const emailInput = document.querySelector('#mail');
const errorMessage = document.querySelector('#error-message');

form.addEventListener('submit', (event) => {
  const emailValue = emailInput.value;
  if (emailValue === emailValue.toLowerCase()) {
    errorMessage.style.display = 'none';
  } else {
    event.preventDefault();
    errorMessage.style.display = 'flex';
  }
});

// Popup window
//creating the project section with js
const section = document.getElementById("projects");
const projectsElements = document.createElement("projects-list");
section.appendChild(projectsElements);
projectsElements.innerHTML = `
<h2 class="proh2">Projects</h2>
<div class="project-card one">
    <a href="assets\projects\project_1.svg"><img class="cards-img" src="./assets/projects/project_1.svg" alt="My first project"></a>
    <div class="project-card-info">
        <h3>
            Complex hydraulic systems models
        </h3>
            <ul class="tag-list">
                <li class="tags">HTML/CSS</li>
                <li class="tags">Ruby on rails</li>
                <li class="tags">Javascript</li>
            </ul>
            <button class="see-proj-btn">See this project &rArr;</button>
    </div>
</div>
<div class="project-card two">
    <a href="#"><img class="cards-img" src="./assets/projects/project_2.svg" alt="My second project"></a>
    <div class="project-card-info deskno">
        <h3>
            Hydraulic head loss calculator online
        </h3>
            <ul class="tag-list">
                <li class="tags">HTML/CSS</li>
                <li class="tags">Ruby on rails</li>
                <li class="tags">Javascript</li>
            </ul>
            <button class="see-proj-btn">See this project &rArr;</button>
    </div>
</div>
<div class="project-card three">
    <a href="#"><img class="cards-img" src="./assets/projects/project_3.svg" alt="My third project"></a>
    <div class="project-card-info deskno">
        <h3>
            Online scientific calculator
        </h3>
            <ul class="tag-list">
                <li class="tags">HTML/CSS</li>
                <li class="tags">Ruby on rails</li>
                <li class="tags">Javascript</li>
            </ul>
            <button class="see-proj-btn">See this project &rArr;</button>
    </div>
</div>
<div class="project-card four">
    <a href="#"><img class="cards-img" src="./assets/projects/project_4.svg" alt="My fourth project"></a>
    <div class="project-card-info deskno">
        <h3>
            Professional Portfolio
        </h3>
            <ul class="tag-list">
                <li class="tags">HTML/CSS</li>
                <li class="tags">Ruby on rails</li>
                <li class="tags">Javascript</li>
            </ul>
            <button class="see-proj-btn">See this project &rArr;</button>
    </div>
</div>
<div class="project-card deskreduce five">
    <a href="#"><img class="cards-img" src="./assets/projects/project_5.svg" alt="My fifth project"></a>
    <div class="project-card-info">
        <h3>
            Currency converter
        </h3>
            <ul class="tag-list">
                <li class="tags">HTML/CSS</li>
                <li class="tags">Ruby on rails</li>
                <li class="tags">Javascript</li>
            </ul>
            <button class="see-proj-btn">See this project &rArr;</button>
    </div>
</div>
<div class="project-card deskno six">
    <a href="#"><img class="cards-img" src="./assets/projects/project_6.svg" alt="My sixth project"></a>
    <div class="project-card-info">
        <h3>
            Visit counter
        </h3>
            <ul class="tag-list">
                <li class="tags">HTML/CSS</li>
                <li class="tags">Ruby on rails</li>
                <li class="tags">Javascript</li>
            </ul>
            <button class="see-proj-btn">See this project &rArr;</button>
    </div>
</div>
`








// const projectCards = [
//   {
//     id: one,
//     class: "project-card one",
//     image: "#",
//     title: "Complex hydraulic systems models",
//     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
//     skills: {
//       skill1: "HTML/CSS",
//       skill2: "Ruby on rails",
//       skill3: "Javascript"
//     },
//     liveLink: "#",
//     sourceLink: "https://github.com/adeola003"
//   },
//   {
//     id: two,
//     class: "project-card two",
//     image: "#",
//     title: "Hydraulic head loss calculator online",
//     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
//     skills: {
//       skill1: "HTML/CSS",
//       skill2: "Ruby on rails",
//       skill3: "Javascript"
//     },
//     liveLink: "#",
//     sourceLink: "https://github.com/adeola003"
//   },
//   {
//     id: three,
//     class: "project-card three",
//     image: "#",
//     title: "Online scientific calculator",
//     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
//     skills: {
//       skill1: "HTML/CSS",
//       skill2: "Ruby on rails",
//       skill3: "Javascript"
//     },
//     liveLink: "#",
//     sourceLink: "https://github.com/adeola003"
//   },
//   {
//     id: four,
//     class: "pproject-card four",
//     image: "#",
//     title: "Professional Portfolio",
//     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
//     skills: {
//       skill1: "HTML/CSS",
//       skill2: "Ruby on rails",
//       skill3: "Javascript"
//     },
//     liveLink: "#",
//     sourceLink: "https://github.com/adeola003"
//   },
//   {
//     id: five,
//     class: "project-card five",
//     image: "#",
//     title: "Currency converter",
//     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
//     skills: {
//       skill1: "HTML/CSS",
//       skill2: "Ruby on rails",
//       skill3: "Javascript"
//     },
//     liveLink: "#",
//     sourceLink: "https://github.com/adeola003"
//   },
//   {
//     id: six,
//     class: "project-card six",
//     title: "Visit counter",
//     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
//     skills: {
//       skill1: "HTML/CSS",
//       skill2: "Ruby on rails",
//       skill3: "Javascript"
//     },
//     liveLink: "#",
//     sourceLink: "https://github.com/adeola003"
//   }
// ]

