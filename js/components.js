export const Header = {
  render: (customClass = "") => {
    return `
     <header class="header-wrapper ${customClass} id ="header">
     <div class="header-container ${customClass}">
                    <span class="logo">
                      <img id="root-Главная" src="./assets/icons/logo.png" alt="logo" />
                    </span>
                    <ul class="nav-menu" id="header-nav-menu">
                      <li><a  class="nav-menu-item" href="#main">Главная</a></li>
                      <li><a  class="nav-menu-item" href="#direction">Направления</a></li>
                      <li><a  class="nav-menu-item" href="#timetable">Расписание</a></li>
                      <li><a  class="nav-menu-item" href="#price">Цены</a></li>
                      <li><a  class="nav-menu-item" href="#lk_user">ЛК клиента</a></li>
                      <li><a  class="nav-menu-item" href="#contacts"> Контакты</a></li>
                      <li><a  class="nav-menu-item" href="#admin">Администратор</a></li>
                    </ul>
                    <div class="burger-menu" id="burger-menu">
                      <span class="burger-menu-logo">
                        <img src="./assets/icons/logo.png" alt="logo" />
                      </span>

                      <div class="burger-menu-btn" id="burger-menu-btn">
                        <span class="burger-menu-lines"></span>
                      </div>

                      <div class="burger-menu-nav">
                        <div class="separator"></div>

                        <ul class=" burger-nav-menu" id="burger-nav-menu">
                          <li><a  class="nav-menu-item-burger" href="#main">Главная</a></li>
                          <li><a  class="nav-menu-item-burger" href="#direction">Направления</a></li>
                          <li><a  class="nav-menu-item-burger" href="#timetable">Расписание</a></li>
                          <li><a  class="nav-menu-item-burger" href="#price">Цены</a></li>
                          <li><a  class="nav-menu-item-burger" href="#lk_user">ЛК клиента</a></li>
                          <li><a  class="nav-menu-item-burger" href="#contacts"> Контакты</a></li>
                           
                        </ul>
                      </div>

                      <div class="burger-menu-overlay" id="burger-menu-overlay"></div>
                    </div>
                  </div>

     </header>
     `;
  },
};

export const Content = {
  render: (customClass = "") => {
    return `<div class="content ${customClass}" id="content"></div>`;
  },
};

export const Footer = {
  render: (customClass = "") => {
    return `
      <footer class="footer ${customClass} ">
        <div class="footer-wrapper">
          <div class="footer-container">
            <div class="footer-map">
              <img
                class="footer-logo"
                src="./assets/icons/logo.png"
                width="90px"
                height="90px"
                alt="logo"
              />

              <div class="footer-navigation">
                <h3>Навигация</h3>
                <div class="links">
                  <span id="timetable" class="footer-navigation-item"
                    >Расписание</span
                  >
                  <span id="direction" class="footer-navigation-item">
                    Направления</span
                  >
                  <span id="price" class="footer-navigation-item">Цены</span>
                </div>

                <div class="chevron">
                  <span class="up material-icons blue">keyboard_arrow_up</span>
                  <span class="down material-icons blue">keyboard_arrow_down</span>
                </div>
              </div>

              <div class="footer-service">
                <h3>Контакты</h3>
                <div class="links">
                  <span class="footer_links_item"
                    ><i class="material-icons blue">call</i
                    ><a href="tel:+37529161616">+37529161616</a>
                  </span>

                  <span class="footer_links_item"
                    ><i class="material-icons blue">mail_outline</i
                    ><a href="mailto:um_studio@gmail.com"
                      >um_studio@gmail.com</a
                    ></span
                  >
                  <span class="footer_links_item"
                    ><i class="material-icons blue">place</i
                    ><a href="https://goo.gl/maps/5cCZpoBtQ7UQN3dR9" target="_blank"
                      >ул. Докутович 47, Гомель</a
                    >
                  </span>
                </div>

                <div class="chevron">
                  <span class="up material-icons blue">keyboard_arrow_up</span>
                  <span class="down material-icons blue">keyboard_arrow_down</span>
                </div>
              </div>

              <div class="follow-us">
                <h3>Мы в социальный сетях</h3>
                <div class="lg">
                  <span>
                    <a href="https://www.instagram.com/_ym_studio/" target="_blank"
                      >Instagram</a
                    >
                  </span>
                </div>
                <div class="sm">
                  <a href="https://www.instagram.com/_ym_studio/" target="_blank"><img
                    class="up"
                    src="./assets/icons/instagram.svg"
                    alt="instagramm"
                  /></a>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </footer>
    `;
  },
};
