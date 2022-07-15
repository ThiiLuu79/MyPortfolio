/*
File to import all the reusable components in multiple pages.
Custom elements are created to do so.
This file includes :
 - Navigation menu (my-navbar)
 - Header (my-header)
 - Go back button (go-back)
 - Footer (my-footer)
*/

//CONSTANTS
//Personnal informations
const full_name = "The Minh Luong";
const initials = "tm";
const email = "the-minh.luong.1@ens.etsmtl.ca";
const linkedin_link = "https://www.linkedin.com/in/tmluong19/";
const github_link = "https://github.com/ThiiLuu79";
const instagram_link = "https://www.instagram.com/thiiluu/";
const facebook_link = "https://www.facebook.com/theminh.luong";
//Projects
const project1 = "Websites";
const project2 = "Games";
const project3 = "Art Gallery";
//Copyright
const start_year = "2021";
//CONSTANTS

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
              <a href="websites.html">${project1}</a>
              <a href="games.html">${project2}</a>
              <a href="art.html">${project3}</a>
            </div>
            <li class = "nav__item" ><a href = "index.html#education" class="nav__link">Education</a></li>
            <li class = "nav__item" ><a href = "#contact" class="nav__link">Contact</a></li>
          </ul>
        </nav>
        `
    }
}
customElements.define('my-navbar', MyNavbar);
//NAVBAR

//HEADER
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header id="top">
          <h3 class = "header__title tm">${initials}'s<strong class="portfolio"><b>portfolio</b></strong> </h3>
        </header>
        `
    }
}
customElements.define('my-header',MyHeader);
//HEADER

//GO TOP BUTTON
class GoTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!--Go top button-->
    <a href="#top" class="go__top">
      <div class="button__arrow"></div>
    </a>
    `
  }
}
customElements.define('go-top',GoTop);
//GO TOP BUTTON

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
//GO BACK BUTTON

//FOOTER
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer" id="contact">
          <h2 class="keep_in_touch">Let's keep in touch!</h2>
          <!-- Social links -->
          <a href ="mailto:${email}" class = "footer-link">${email}</a>
    
          <div class="wrapper">
    
                <a href="${linkedin_link}"  target="_blank">
                  <div class="icon linkedin">
                    <div class="tooltip">LinkedIn</div>
                    <span><i class="fab fa-linkedin"></i></span>
                  </div>
                </a>
    
                <a href="${github_link}" target="_blank">
                  <div class="icon github">
                    <div class="tooltip">Github</div>
                    <span><i class="fab fa-github"></i></span>
                  </div>
                </a>
                <a href="${instagram_link}" target="_blank">
                  <div class="icon instagram">
                    <div class="tooltip">Instagram</div>
                    <span><i class="fab fa-instagram"></i></span>
                  </div>
                </a>
                <a href="${facebook_link}" target="_blank">
                  <div class="icon facebook">
                    <div class="tooltip">Facebook</div>
                    <span><i class="fab fa-facebook"></i></span>
                  </div>
                </a>
          </div>
          <small class="copyright">&copy; Copyright ${start_year} - <span id="currentYear"></span> ${full_name} - ALL RIGHT RESERVED</small>
        </footer>
        `
    }
}
customElements.define('my-footer',MyFooter);
//FOOTER