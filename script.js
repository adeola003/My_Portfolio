// Dynamic mobile menu
const menuIcon = document.querySelector('.hamb');
const menu = document.queryselector('.sections');
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
const emailInput = document.querySeelector('#mail');
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
// 1- creating the project section with js
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
            <button class="see-proj-btn fst-btn">See this project &rArr;</button>
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
            <button class="see-proj-btn sec-btn">See this project &rArr;</button>
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
            <button class="see-proj-btn thd-btn">See this project &rArr;</button>
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
            <button class="see-proj-btn frth-btn">See this project &rArr;</button>
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
            <button class="see-proj-btn fth-btn">See this project &rArr;</button>
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
            <button class="see-proj-btn sth-btn">See this project &rArr;</button>
    </div>
</div>
`;
//2- Creating the popup window
//2-1 Storings cards informations
const buttons = []

const projectCards = [
  {
    id: 1,
    class: "project-card one",
    image: "./assets/projects/project_1.svg",
    title: "Complex hydraulic systems models",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.`,
    skills: {
      skill1: "HTML/CSS",
      skill2: "Ruby on rails",
      skill3: "Javascript"
    },
    liveLink: "#",
    sourceLink: "https://github.com/adeola003"
  },
  {
    id: 2,
    class: "project-card two",
    image: "./assets/projects/project_2.svg",
    title: "Hydraulic head loss calculator online",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna 
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet,
     consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.`,
    skills: {
      skill1: "HTML/CSS",
      skill2: "Ruby on rails",
      skill3: "Javascript"
    },
    liveLink: "#",
    sourceLink: "https://github.com/adeola003"
  },
  {
    id: 3,
    class: "project-card three",
    image: "./assets/projects/project_3.svg",
    title: "Online scientific calculator",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
     ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
      minim veniam, quis nostrud exercitation ullamco laboris nisi.`,
    skills: {
      skill1: "HTML/CSS",
      skill2: "Ruby on rails",
      skill3: "Javascript"
    },
    liveLink: "#",
    sourceLink: "https://github.com/adeola003"
  },
  {
    id: 4,
    class: "pproject-card four",
    image: "./assets/projects/project_4.svg",
    title: "Professional Portfolio",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
     do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
     ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip 
     ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation ullamco laboris nisi.`,
    skills: {
      skill1: "HTML/CSS",
      skill2: "Ruby on rails",
      skill3: "Javascript"
    },
    liveLink: "#",
    sourceLink: "https://github.com/adeola003"
  },
  {
    id: 5,
    class: "project-card five",
    image: "./assets/projects/project_5.svg",
    title: "Currency converter",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.`,
    skills: {
      skill1: "HTML/CSS",
      skill2: "Ruby on rails",
      skill3: "Javascript"
    },
    liveLink: "#",
    sourceLink: "https://github.com/adeola003"
  },
  {
    id: 6,
    class: "project-card six",
    image: "./assets/projects/project_6.svg",
    title: "Visit counter",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
    veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.`,
    skills: {
      skill1: "HTML/CSS",
      skill2: "Ruby on rails",
      skill3: "Javascript"
    },
    liveLink: "#",
    sourceLink: "https://github.com/adeola003"
  }
];

// Get all project buttons
const projectButtons = document.querySelectorAll(".see-proj-btn");
const popSection = document.getElementsByClassName("pop-window")[0];
console.log(popSection)

// Loop through project buttons and add event listeners
projectButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    console.log("Button clicked")
    const projectDetails = document.createElement("div");
    projectDetails.classList.add("project-details");
    projectDetails.innerHTML = `
      <div>
        <button class="close-button">X</button>
        <h2>${projectCards[index].title}</h2>
        <img src="${projectCards[index].image}" alt="${projectCards[index].title}">
        <p>${projectCards[index].details}</p>
        <h3>Skills Used:</h3>
        <ul>
          <li>${projectCards[index].skills.skill1}</li>
          <li>${projectCards[index].skills.skill2}</li>
          <li>${projectCards[index].skills.skill3}</li>
        </ul>
        <a href="${projectCards[index].liveLink}" target="_blank">Live Site</a>
        <a href="${projectCards[index].sourceLink}" target="_blank">Source Code</a>
      </div>
      <div>
      <a href="#" ><img class="img1" src="./assets/projects/project_1.svg" alt="My first project"></a>
      <a href="#" ><img class="img2" src="./assets/projects/project_2.svg" alt="My second project"></a>
      <a href="#" ><img class="img3" src="./assets/projects/project_3.svg" alt="My third project"></a>
      <a href="#" ><img class="img4" src="./assets/projects/project_4.svg" alt="My fourth project"></a>
      <a href="#" ><img class="img5" src="./assets/projects/project_5.svg" alt="My fifth project"></a>
      <a href="#" ><img class="img6" src="./assets/projects/project_6.svg" alt="My sixth project"></a>
      </div>
    `;
    console.log(projectDetails);
    popSection.appendChild(projectDetails);

    // Add event listener to close button
    const closeButton = projectDetails.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
      projectDetails.remove();
    });
  });
});


