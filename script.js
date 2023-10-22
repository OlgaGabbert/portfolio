class MyNavBar extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const imgSrc = this.getAttribute('imgSrc');
        const myNavbar = document.createElement('my-navbar');
        myNavbar.innerHTML = `
        <style>
            my-navbar {
                text-align: center;
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
            }

            img {
              height: 100px;
              width: 100px;
            }
            ul {
                list-style-type: none;
                display: flex;
                gap: 40px;
               }
               a {
                text-decoration: none;
                color: #1e5f95;
               }
            </style>
    <ul>
      <li><a href='../index.html'><img src="${imgSrc}" alt="Logo" class="logo"></a></li>
      <li>
        <a href="../projects/projects.html">My Projects</a>
      </li>
      <li><a href="./contact/contact.html">Contact</a></li>
    </ul>
        `;
        shadowRoot.appendChild(myNavbar);
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
                gap: 100px;
                flex-wrap: wrap;
                max-width: 1000px;
                mid-width: 500px;
                margin-bottom: 20px; 
            }

            a {
                text-decoration: none;
                color: #1e5f95;
            }

            a:hover {
                font-weight: bold;
            }

            </style>
        <div class="project">
        <h2>Project 1: Project Name</h2>
        <p>Description of Project 1.</p>
        <a href="project1.html">View Project</a>
      </div>
    
      <div class="project">
        <h2>Project 2: Project Name</h2>
        <p>Description of Project 2.</p>
        <a href="project2.html">View Project</a>
      </div>
      <div class="project">
        <h2>Project 3: Project Name</h2>
        <p>Description of Project 3.</p>
        <a href="project3.html">View Project</a>
      </div>
      <div class="project">
        <h2>Project 4: Project Name</h2>
        <p>Description of Project 4.</p>
        <a href="project4.html">View Project</a>
      </div>
      <div class="project">
        <h2>Project 5: Project Name</h2>
        <p>Description of Project 5.</p>
        <a href="project5.html">View Project</a>
      </div>
      <div class="project">
        <h2>Project 6: Project Name</h2>
        <p>Description of Project 6.</p>
        <a href="project6.html">View Project</a>
      </div>
        `;
        shadowRoot.appendChild(myProjects);
    }
}
customElements.define('my-projects', MyProjects);


class MyFooter extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });

        const footer = document.createElement('footer');
        footer.innerHTML = `
            <style>
            footer {
                background: linear-gradient(135deg, #ffffff, #3498db);
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
            <a href="./contact/contact.html">Contact me</a>
            </div>
        `;

        shadowRoot.appendChild(footer);
    }
}

customElements.define('my-footer', MyFooter);
