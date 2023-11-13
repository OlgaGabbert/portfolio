const projects = [
    {
        title: "B",
        description: "This is the description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        technologiesUsed: ["HTML", "CSS", "JavaScript"],
        img: "project1.jpg",
    },
    {
        title: "A",
        description: "Project 2 is all about creating a mobile app for task management.",
        technologiesUsed: ["React", "Firebase"],
        img: "project2.jpg",
    },
    {
        title: "D",
        description: "A web application for online shopping with various categories of products.",
        technologiesUsed: ["Node.js", "Express", "MongoDB"],
        img: "project3.jpg",
    },
    {
        title: "C",
        description: "Developed a personal blog website using the MERN stack.",
        technologiesUsed: ["React", "Node.js", "MongoDB"],
        img: "project4.jpg",
    },
    {
        title: "Z",
        description: "A data visualization project using D3.js for displaying statistical data.",
        technologiesUsed: ["D3.js", "HTML", "CSS"],
        img: "project5.jpg",
    },
];

const cardsContainer = document.querySelector('.cards');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const htmlButton = document.querySelector('.html-button');
const reactButton = document.querySelector('.react-button');
const expressButton = document.querySelector('.express-button');
const carouselContainer = document.querySelector('.carousel-container');
const sortButton = document.querySelector('.sort-button');
let currentCardIndex = 0;

function showCard(index) {
    if (index < 0) {
        index = projects.length - 1;
    } else if (index >= projects.length) {
        index = 0;
    }

    const cards = document.querySelectorAll('.card');
    cards.forEach((card, cardIndex) => {
        if (cardIndex === index) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });

    currentCardIndex = index;
}

prevButton.addEventListener('click', () => {
    showCard(currentCardIndex - 1);
});

nextButton.addEventListener('click', () => {
    showCard(currentCardIndex + 1);
});

projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <p>Technologies Used: ${project.technologiesUsed.join(', ')}</p>
      <img src="${project.img}" alt="${project.title}" />
    `;

    if (index === 0) {
        card.style.display = 'flex';
    } else {
        card.style.display = 'none';
    }

    cardsContainer.appendChild(card);
});

const filterTechnologie = technologie => {
    return projects.filter((project) => {
        return project.technologiesUsed.includes(technologie);
    })
}

const createFilteredCard = projects => {
    carouselContainer.innerHTML = '';
    cardsContainer.style.display = 'none';
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';

    projects.forEach((project) => {
        const card = document.createElement('div');
        card.classList.add('card', 'card-transition');
        card.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <p>Technologies Used: ${project.technologiesUsed.join(', ')}</p>
        <img src="${project.img}" alt="${project.title}" />
      `;
        carouselContainer.appendChild(card);
        setTimeout(() => {
            card.classList.remove('card-transition');
            card.style.opacity = 1;
        }, 10);
    });
}

htmlButton.addEventListener('click', () => {
    const htmlProjects = filterTechnologie('HTML');
    createFilteredCard(htmlProjects);
});

reactButton.addEventListener('click', () => {
    const reactProjects = filterTechnologie('React');
    createFilteredCard(reactProjects);
});

expressButton.addEventListener('click', () => {
    const expressProjects = filterTechnologie('Express');
    createFilteredCard(expressProjects);
});

sortButton.addEventListener('click', () => {
    const sortedProjects = projects.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
    createFilteredCard(sortedProjects);
});


