class MyNavBar extends HTMLElement {
  constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const imgSrc = this.getAttribute('imgSrc');
      const linkSrc = this.getAttribute('linkSrc') || "#";
      const link = this.getAttribute('link') || "#";
      const projectsLink = this.getAttribute('projectsLink') || "#"
      
      shadowRoot.innerHTML = `
      <style>
        .navbar {
          width: 100%;
          height: 60px;
          font-size: 18px;
          position: fixed;
          top: 0;
          display: flex;
          background: linear-gradient(to bottom right, #5ab9e0, #1abc9c);
          margin-bottom: 90px;
        }
        .navbar img {
          height: 100px;
          width: 100px;
        }
        .navbar ul {
          list-style-type: none;
          display: flex;
          gap: 40px;
        }
        .navbar a {
          text-decoration: none;
          color: #1e5f95;
        }
      </style>
       <div class='navbar'>
          <ul>
            <li><a href='${linkSrc}'><img src="${imgSrc}" alt="Logo" class="logo"></a></li>
            <li>
              <a href="${projectsLink}">My Projects</a>
            </li>
            <li><a href="${link}">Contact</a></li>
          </ul>
        </div>
      `;
  }
}
customElements.define('my-navbar', MyNavBar);

class MyProjects extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const myProjects = document.createElement('my-projects');
        myProjects.innerHTML = `
        <style>
    my-projects {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        max-width: 1000px;
        gap: 50px;
        margin-bottom: 20px;
    }

    .project-card {
        border: 1px solid #ddd;
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        padding: 20px;
        text-align: center;
        background-color: #fff;
        margin: 20px;
        transition: transform 0.3s;
        width: 200px; 
        height: 300px; 
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .project-card img {
        max-width: 100%;
        height: auto;
        border-radius: 5px;
    }

    .card-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
  }

    .project-card h3 {
        font-size: 1.5rem;
        margin: 10px 0;
        color: #333;
    }

    .project-card p {
        font-size: 1rem;
        margin: 10px 0;
        color: #666;
    }

    .project-card:hover {
        transform: scale(1.05);
    }

    .project-card a {
        transition: transform 0.3s;
        display: inline-block;
        padding: 10px 20px;
        border: 1px solid #3498db;
        border-radius: 5px;
        transition: background-color 0.3s, border-color 0.3s;
        color: #1e5f95;
        background: linear-gradient(135deg, #ffffff, #3498db);
        text-decoration: none;
        margin-top: 10px;
        transition: background-color 0.3s;
    }

    .project-card a:hover {
        background: linear-gradient(135deg, #ffffff, hsl(209, 75%, 30%));
        border-color: #1e5f95;
        transform: scale(1.05);
    }
</style>

<div class="project-card">
  <div class="card-content">
    <img src="JokesProject.png" alt="Jokes project">
    <h3>Jokes from APIs</h3>
    <p>Description of Project 1.</p>
    <a href="project1/project1.html">Learn more</a>
  </div>
</div>
<div class="project-card">
  <div class="card-content">
    <img src="To-doProject.png" alt="To-do-app">
    <h3>To-do-App</h3>
    <p>Description of Project 2.</p>
    <a href="project2/project2.html">Learn more</a>
  </div>
</div>
<div class="project-card">
  <div class="card-content">
    <img src="JokesProject.png" alt="Project Name">
    <h3>Project 3</h3>
    <p>Description of Project 3.</p>
    <a href="project3/project3.html">Learn more</a>
    </div>
</div>
        `;
        shadowRoot.appendChild(myProjects);
    }
}
customElements.define('my-projects', MyProjects);


class MyFooter extends HTMLElement {
    constructor() {
        super();
        const contactLink = this.getAttribute('contactLink') || "#"
        const shadowRoot = this.attachShadow({ mode: 'open' });

        const footer = document.createElement('footer');
        footer.innerHTML = `
        <style>
          footer {
            background: linear-gradient(to bottom right, #5ab9e0, #1abc9c);
            color: #000;
              padding: 3px;
              text-align: center;
              font-size: 13px;
          }
    
          a {
            text-decoration: none;
            color: #1e5f95;
          }
        </style>
        <div>
          <p>&copy; 2023 Olga Gabbert</p>
          <a href="${contactLink}">Contact me</a>
        </div>
        `;

        shadowRoot.appendChild(footer);
    }
}
customElements.define('my-footer', MyFooter);
