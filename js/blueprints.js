/*
File to import all the reusable components in multiple pages.
Custom elements are created to do so.

This file includes :
 - Header (my-header)
 - Navigation menu (my-navbar)
 - Go top button (go-top)
 - Go back button (go-back)
 - Footer (my-footer)

 *** See custom.js for more informations about the variable used.
*/

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
            <li class = "nav__item" ><a href = "${indexRed}" class="nav__link">Home</a></li>
            <div class="drop_about">
              <li class = "nav__item" ><a href = "${aboutRed}" class="nav__link">About me</a></li>
              <!-- Down arrow button -->
              <button class="button">
                <!-- Arrow -->
                <div class="dropbtn button__arrow" onclick="showDropdown('myDropdownExp','show')"></div>
              </button>
            </div>
            <div id = "myDropdownExp" class="dropdown-content drop_exp">
              <a href="${workRed}">Working experiences</a>
            </div>
            <div class="drop_projects">
              <li class = "nav__item" ><a href = "${csRed}" class="nav__link">Projects</a></li>
              <!-- Down arrow button -->
              <button class="button">
                  <!-- Arrow -->
                  <div class="dropbtn button__arrow" onclick="showDropdown('myDropdown','show')"></div>
              </button>
            </div>
            <div id = "myDropdown" class="dropdown-content">
              <a href="${academicRed}">${academicPro.name}</a>
              <a href="${personalRed}">${personalPro.name}</a>
              <hr>
              <a href="${drawingRed}">${drawPro.name}</a>
              <a href="${photoRed}">${photoPro.name}</a>
            </div>
            <li class = "nav__item" ><a href = "${educationRed}" class="nav__link">Education</a></li>
            <li class = "nav__item" ><a href = "${contactRed}" class="nav__link">Contact</a></li>
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
          <a href="../index.html">Go back to home page</a>
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
    
                <a href="${linkedin.url}"  target="_blank">
                  <div class="icon linkedin">
                    <div class="tooltip">LinkedIn</div>
                    <span><i class="fab fa-linkedin"></i></span>
                  </div>
                </a>
    
                <a href="${github.url}" target="_blank">
                  <div class="icon github">
                    <div class="tooltip">Github</div>
                    <span><i class="fab fa-github"></i></span>
                  </div>
                </a>
                <a href="${instagram.url}" target="_blank">
                  <div class="icon instagram">
                    <div class="tooltip">Instagram</div>
                    <span><i class="fab fa-instagram"></i></span>
                  </div>
                </a>
                <a href="${facebook.url}" target="_blank">
                  <div class="icon facebook">
                    <div class="tooltip">Facebook</div>
                    <span><i class="fab fa-facebook"></i></span>
                  </div>
                </a>
          </div>
          <small class="copyright">&copy; Copyright <span id="portfolioTimePeriod"></span> ${user.full_name} - ALL RIGHTS RESERVED</small>
        </footer>
        `
    }
}
customElements.define('my-footer',MyFooter);