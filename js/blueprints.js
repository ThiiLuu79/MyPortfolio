/*
File to import all the reusable components in multiple pages.
Also contains customizable components for the home page.
Custom elements are created to do so.

This file includes :
** Home page elements
 - Intro (my-intro)
 - About (my-about)
 - Projects (my-projects)
 - Education (my-education)

** Custom elements
 - Head 
 - Header (my-header)
 - Navigation menu (my-navbar)
 - Go top button (go-top)
 - Go back button (go-back)
 - Footer (my-footer)

 *** See custom.js for more informations about the variable used.
*/

//** Home page elements
//INTRO
class MyIntro extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="intro" id = "home">
      <h2 class = "section__title section__title--intro">Hi, my name is <strong class="name"><b>${user.full_name}</b></strong> </h2>
      <p class = "section__subtitle section__subtitle--intro">${user.title}</p>
      <img src = "img/home/pfp.jpg" alt="home picture" width = 500 class="intro__img">
    </section>
    `
  }
}
customElements.define('my-intro', MyIntro);

//ABOUT
class MyAbout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="block" id ="about">
      <h2 class = "section__title section__title--block">About me</h2>
      <p class = "section__subtitle section__subtitle--block">${user.country}</p>

      <div class = "block__body">
        <p class="block__content">${about.p1}</p>
        <br>
        <p>${about.p2}</p>
        <br>

        <a href="experiences.html">
          <button class="pushable">
            <span class="front">
              Working experiences
            </span>
          </button>
        </a>
        <br><br>

      </div>
      <img src = "img/home/about_img.jpg" alt="about image" width="500" class="block__img">
    </section>
    `
  }
}
customElements.define('my-about',MyAbout);

//PROJECTS
class MyProjects extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class = "my-projects" id = "projects">
      <h2 class = "section__title section__title--projects">See my projects</h2>
      <p class = "section__subtitle section__subtitle--projects">Hover over the images to see the project type</p>

      <div class = "portfolio">

        <!-- Websites -->
        <a href = "websites.html" class = "portfolio__item">
          <div class="project__container">
            <img src = "img/home/web.jpg" alt="web-project cover" width="900" class = "portfolio__img project__img">
            <div class="project__box">
              <p class="project__text">${project1.name}</p>
            </div>
          </div>
        </a>

        <!-- Games -->
        <a href = "games.html" class = "portfolio__item">
          <div class="project__container">
            <img src = "img/home/games.jpg" alt="game-project cover" width="900" class = "portfolio__img project__img">
            <div class="project__box">
              <p class="project__text">${project2.name}</p>
            </div>
          </div>
        </a>

        <!-- Art Gallery -->
        <a href = "art.html" class = "portfolio__item">
          <div class="project__container">
            <img src = "img/home/art_gallery.jpg" alt="art-project cover" width="900" class = "portfolio__img project__img">
            <div class="project__box">
              <p class="project__text">${project3.name}</p>
            </div>
          </div>
        </a>
      </section>
    `
  }
}
customElements.define('my-projects', MyProjects);

//EDUCATION
class MyEducation extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
    <section id = "education">
      <div class="content_wrap">
        <div>
          <h2 class = "section__title section__title--education"><b>Education</b></h2>
          <br>
          <h3>${school1.name} - ${school1.location}</h3>
          <p>${school1.program}, ${school1.duration}</p>
          <br>
          <h3>${school2.name} - ${school2.location}</h3>
          <p>${school2.program}, ${school2.duration}</p>
          <br>
          <h3>LinkedIn Learning</h3>
          <!-- Course list -->
          <ul class="linkedin__learning__list">
            <li class="course_item">
              <a href="https://www.linkedin.com/learning/wordpress-5-essential-training/" class="linkedin_course" target="_blank">WordPress Training, 2022</a>
              <img class="certificate" src="img/home/certificates/wp_certificate.jpg" alt="wordpress certificate">
            </li>
            <li class="course_item">
              <a href="https://www.linkedin.com/learning/sass-essential-training-15630917" class="linkedin_course" target="_blank">SASS Training, 2022</a>
              <img class="certificate" src="img/home/certificates/sass_certificate.jpg" alt="sass certificate">
            </li>
            <li class="course_item">
              <a href="https://www.linkedin.com/learning/bootstrap-4-essential-training" class="linkedin_course" target="_blank">Bootstrap Training, 2022</a>
              <img class="certificate" src="img/home/certificates/bootstrap_certificate.jpg" alt="bootstrap certificate">
            </li>
            <li class="course_item">
              <a href="https://www.linkedin.com/learning/paths/learn-css" class="linkedin_course" target="_blank">CSS Learning Path, 2022</a>
              <img class="certificate" src="img/home/certificates/css_certificate.jpg" alt="css certificate">
            </li>
          </ul>
        </div>
      </div>
    </section>
    `
  }
}
customElements.define('my-education',MyEducation);

//** Custom elements
//HEAD
document.querySelector('meta[name="description"]').setAttribute("content", headInfo.description);
document.querySelector('meta[name="keywords"]').setAttribute("content", headInfo.keywords);
document.querySelector('meta[name="author"]').setAttribute("content", headInfo.author);
//Title
var t = document.querySelector('title');
t.innerHTML = headInfo.title;

//HEADER
class MyHeader extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
      <header id="top">
        <h3 class = "header__title tm">${user.initials}'s<strong class="portfolio"><b>portfolio</b></strong> </h3>
      </header>
      `
  }
}
customElements.define('my-header',MyHeader);

//NAVBAR
class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Navigation menu-->
        <button class = "nav-toggle" aria-label = "toggle navigation">
          <span class="hamburger"></span>
        </button>
        <nav class = "nav">
          <ul class = "nav__list">
            <li class = "nav__item" ><a href = "index.html#home" class="nav__link">Home</a></li>
            <div class="drop_about">
              <li class = "nav__item" ><a href = "index.html#about" class="nav__link">About me</a></li>
              <!-- Down arrow button -->
              <button class="button">
                <!-- Arrow -->
                <div class="dropbtn button__arrow" onclick="myFuncExp()"></div>
              </button>
            </div>
            <div id = "myDropdownExp" class="dropdown-content drop_exp">
              <a href="experiences.html">Working experiences</a>
            </div>
            <div class="drop_projects">
              <li class = "nav__item" ><a href = "index.html#projects" class="nav__link">My projects</a></li>
              <!-- Down arrow button -->
              <button class="button">
                  <!-- Arrow -->
                  <div class="dropbtn button__arrow" onclick="myFunc()"></div>
              </button>
            </div>
            <div id = "myDropdown" class="dropdown-content">
              <a href="websites.html">${project1.name}</a>
              <a href="games.html">${project2.name}</a>
              <a href="art.html">${project3.name}</a>
            </div>
            <li class = "nav__item" ><a href = "index.html#education" class="nav__link">Education</a></li>
            <li class = "nav__item" ><a href = "#contact" class="nav__link">Contact</a></li>
          </ul>
        </nav>
        `
    }
}
customElements.define('my-navbar', MyNavbar);

//GO TOP BUTTON
class GoTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <a href="#top" class="go__top">
      <div class="button__arrow"></div>
    </a>
    `
  }
}
customElements.define('go-top',GoTop);

//GO BACK BUTTON
class GoBack extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="go__back">
          <div class="button__arrow"></div>
          <a href="index.html">Go back to home page</a>
        </div>
        `
    }
}
customElements.define('go-back',GoBack);

//FOOTER
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer" id="contact">
          <h2 class="keep_in_touch">Let's keep in touch!</h2>
          <!-- Social links -->
          <a href ="mailto:${user.email}" class = "footer-link">${user.email}</a>
    
          <div class="wrapper">
    
                <a href="${link1.url}"  target="_blank">
                  <div class="icon linkedin">
                    <div class="tooltip">LinkedIn</div>
                    <span><i class="fab fa-linkedin"></i></span>
                  </div>
                </a>
    
                <a href="${link2.url}" target="_blank">
                  <div class="icon github">
                    <div class="tooltip">Github</div>
                    <span><i class="fab fa-github"></i></span>
                  </div>
                </a>
                <a href="${link3.url}" target="_blank">
                  <div class="icon instagram">
                    <div class="tooltip">Instagram</div>
                    <span><i class="fab fa-instagram"></i></span>
                  </div>
                </a>
                <a href="${link4.url}" target="_blank">
                  <div class="icon facebook">
                    <div class="tooltip">Facebook</div>
                    <span><i class="fab fa-facebook"></i></span>
                  </div>
                </a>
          </div>
          <small class="copyright">&copy; Copyright ${start_year} - <span id="currentYear"></span> ${user.full_name} - ALL RIGHT RESERVED</small>
        </footer>
        `
    }
}
customElements.define('my-footer',MyFooter);