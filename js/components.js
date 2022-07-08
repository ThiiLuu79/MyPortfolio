/*
File to import all the reusable components in multiple pages.
Custom elements are created to do so.
This file includes :
 - Head (my-head)
 - Navigation menu (my-navbar)
 - Header (my-header)
 - Go back button (go-back)
 - Footer (my-footer)
*/

//HEAD
class MyHead extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>tm's portfolio</title>

      <!-- Links -->
      <link rel="stylesheet" href="css/style.css">
      <link rel="icon" href="img/home/portfolio_logo.png">
      <link rel="stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
      <link rel="stylesheet"
      href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
      integrity="sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc=" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,900|Source+Sans+Pro:300,900&display=swap" rel="stylesheet">
    </head>
    `
  }
}
customElements.define('my-head', MyHead);
//HEAD

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
              <a href="websites.html">Websites</a>
              <a href="games.html">Games</a>
              <a href="art.html">Art gallery</a>
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
          <h3 class = "header__title tm">tm's<strong class="portfolio"><b>portfolio</b></strong> </h3>
        </header>
        <!--Go top button-->
        <a href="#top" class="go__top">
          <div class="button__arrow"></div>
        </a>
        `
    }
}
customElements.define('my-header',MyHeader);
//HEADER

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
          <a href ="mailto:the-minh.luong.1@ens.etsmtl.ca" class = "footer-link">the-minh.luong.1@ens.etsmtl.ca</a>
    
          <div class="wrapper">
    
                <a href="https://www.linkedin.com/in/tmluong19/"  target="_blank">
                  <div class="icon linkedin">
                    <div class="tooltip">LinkedIn</div>
                    <span><i class="fab fa-linkedin"></i></span>
                  </div>
                </a>
    
                <a href="https://github.com/ThiiLuu79" target="_blank">
                  <div class="icon github">
                    <div class="tooltip">Github</div>
                    <span><i class="fab fa-github"></i></span>
                  </div>
                </a>
                <a href="https://www.instagram.com/thiiluu/" target="_blank">
                  <div class="icon instagram">
                    <div class="tooltip">Instagram</div>
                    <span><i class="fab fa-instagram"></i></span>
                  </div>
                </a>
                <a href="https://www.facebook.com/theminh.luong" target="_blank">
                  <div class="icon facebook">
                    <div class="tooltip">Facebook</div>
                    <span><i class="fab fa-facebook"></i></span>
                  </div>
                </a>
          </div>
          <small class="copyright">&copy; Copyright 2021 - <span id="currentYear"></span> The Minh Luong - ALL RIGHT RESERVED</small>
        </footer>
        `
    }
}
customElements.define('my-footer',MyFooter);
//FOOTER