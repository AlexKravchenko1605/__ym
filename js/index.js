import { Header, Content, Footer } from "./components.js";
import {
  HomePage,
  TimeTable,
  Price,
  LK_User,
  ErrorPage,
  Admin,
  ListOfPerson,
  Statistics,
  New_Person,
  Admin_timetable,
  Ideas,
} from "./pages.js";
import { sliderFirst, sliderSecond } from "./slider.js";
import {
  sendRequest,
  createListPerson,
  findTable,
  addNewPerson,
} from "./listOfPerson.js";
import { createDiagrams } from "./diagrams.js";
import { to_do_add } from "./to_do.js";
import { preparingPage, lKPageReady } from "./LK.js";
import {
  createCalendar,
  createListPersonForTimetable,
} from "./admin_timetable.js";

const components = {
  header: Header,
  content: Content,
  footer: Footer,
};
const routes = {
  main: HomePage,
  direction: HomePage,
  default: HomePage,
  timetable: TimeTable,
  price: Price,
  lk_user: LK_User,
  contacts: HomePage,
  tabs_1: LK_User,
  tabs_2: LK_User,
  tabs_3: LK_User,
  admin: Admin,
  list_of_person: ListOfPerson,
  statistics: Statistics,
  new_person: New_Person,
  admin_timetable: Admin_timetable,
  ideas: Ideas,
  error: ErrorPage,
};

const mySPA = (function () {
  function ModuleView() {
    let myModuleContainer = null;
    let menu = null;
    let contentContainer = null;
    let routesObj = null;

    this.init = function (container, routes) {
      myModuleContainer = container;
      routesObj = routes;
      menu = myModuleContainer.querySelector("#header-nav-menu");
      contentContainer = myModuleContainer.querySelector("#content");
    };

    this.renderAdminContent = function (pageName) {
      let routeName = "list_of_person";
      if (pageName.length > 0) {
        routeName = pageName in routes ? pageName : "error";
      }

      let container = document.getElementById("admin_content");
      container.innerHTML = routesObj[routeName].render(`${routeName} - page`);
      this.updateColorMenuAdmin(pageName);
    };

    this.renderContent = function (hashPageName) {
      let routeName = "default";

      if (hashPageName.length > 0) {
        routeName = hashPageName in routes ? hashPageName : "error";
      }

      window.document.title = routesObj[routeName].title;
      contentContainer.innerHTML = routesObj[routeName].render(
        `${routeName} - page`
      );
      if (hashPageName === "admin") {
        routesObj[routeName].init(routesObj);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      if (hashPageName === "main") {
        window.document.location.hash = "#main";
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        sliderFirst();
        sliderSecond();
      }
      if (hashPageName === "contacts") {
        sliderFirst();
        sliderSecond();
        window.scrollTo({
          top: 2000,
          behavior: "smooth",
        });
      }
      if (hashPageName === "direction") {
        sliderFirst();
        sliderSecond();
        window.scrollTo({
          top: 1000,
          behavior: "smooth",
        });
      }
      if (hashPageName === "timetable") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      if (hashPageName === "price") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      if (hashPageName === "lk_user") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        lKPageReady();
      }

      this.updateButtons(routesObj[routeName].id);
    };
    // смена цвета ссылок меню  во вкладке администратора
    this.updateColorMenuAdmin = function (pageName) {
      const adminLinks = document.querySelectorAll(".header_links__li");
      for (let link of adminLinks) {
        pageName === link.getAttribute("href").slice(1)
          ? link.classList.add("pink_admin")
          : link.classList.remove("pink_admin");
      }
    };
    this.updateLoader = function (value) {
      document.querySelector(".container_loader").style.display = `${value}`;
    };

    this.updateButtons = function (currentPage) {
      const menuLinks = menu.querySelectorAll(".nav-menu-item");
      for (let link of menuLinks) {
        currentPage === link.getAttribute("href").slice(1)
          ? link.classList.add("pink")
          : link.classList.remove("pink");
      }
    };
    // добавляем класс для burger-menu чтобы открыть его или закрыть.
    this.toggleClass = function (place) {
      if (place.classList.contains("burger-menu-active")) {
        place.classList.remove("burger-menu-active");
      } else {
        place.classList.add("burger-menu-active");
      }
    };
    // добавляем класс для chevron  чтобы открыть их и показать ссылки внутри, либо закрыть.
    this.toggleClassChevron = function (ev, chevron) {
      ev.preventDefault();
      const links = chevron.previousElementSibling;

      if (chevron.classList.contains("toggle")) {
        chevron.classList.remove("toggle");
        links.classList.remove("toggle");
      } else {
        chevron.classList.add("toggle");
        links.classList.add("toggle");
      }
    };

    this.createDiagrams = function (cart) {
      createDiagrams(cart);
    };
  }

  function ModuleModel() {
    let myModuleView = null;

    this.init = function (view) {
      myModuleView = view;
    };

    this.getStatisticInform = function () {
      sendRequest(
        "GET",
        "https://api.jsonbin.io/v3/b/63a7022615ab31599e2404b4/?meta=false"
      ).then((cart) => {
        myModuleView.createDiagrams(cart);
      });
    };
    // загрузка пользователей для возможности добавлениях их в расписании
    this.giveUsersForTimetable = function () {
      sendRequest(
        "GET",
        "https://api.jsonbin.io/v3/b/63a7022615ab31599e2404b4/?meta=false"
      )
        .then(myModuleView.updateLoader("flex"))
        .then((cart) => {
          createListPersonForTimetable(cart);
          myModuleView.updateLoader("none");
          return cart;
        })
        .then((cart) => {
          createCalendar(cart);
        });
    };
    // загрузка пользователей для составления списка пользователей
    this.giveUsersList = function () {
      sendRequest(
        "GET",
        "https://api.jsonbin.io/v3/b/63a7022615ab31599e2404b4/?meta=false"
      )
        .then(myModuleView.updateLoader("flex"))
        .then((cart) => {
          createListPerson(cart);
          myModuleView.updateLoader("none");
          return cart;
        })
        .then((cart) => {
          findTable(cart);
        });
    };
    // отправка наших пользователей в хранилище при добавлении нового пользователя
    this.sendUsers = function () {
      sendRequest(
        "GET",
        "https://api.jsonbin.io/v3/b/63a7022615ab31599e2404b4/?meta=false"
      ).then((cart) => {
        addNewPerson(cart);
      });
    };

    this.updateState = function (pageName) {
      myModuleView.renderContent(pageName);
    };
    this.updateStateAdminPage = function (pageName) {
      myModuleView.renderAdminContent(pageName);
    };
    this.passEvent = function (place) {
      myModuleView.toggleClass(place);
    };
    this.passChevronEvent = function (ev, chevron) {
      myModuleView.toggleClassChevron(ev, chevron);
    };
    this.addToLocalStorage = function () {
      to_do_add();
    };
  }

  function ModuleController() {
    let myModuleContainer = null;
    let myModuleModel = null;
    const burgerMenu = document.getElementById("burger-menu");
    const burgerMenuBtn = document.getElementById("burger-menu-btn");
    const burgerMenuOverlay = document.getElementById("burger-menu-overlay");
    const chevrons = document.getElementsByClassName("chevron");

    this.init = function (container, model) {
      myModuleContainer = container;
      myModuleModel = model;
      window.addEventListener("hashchange", this.updateState);

      const footerNavigationItems = document.getElementsByClassName(
        "footer-navigation-item"
      );

      for (let footerNavigationItem of footerNavigationItems) {
        footerNavigationItem.addEventListener("click", (event) => {
          event.preventDefault();
          const page = event.target.id;
          this.footerUpdateState(page);
        });
      }

      this.updateState("main");
    };

    burgerMenuBtn.addEventListener("click", () => this.toggleMenu(burgerMenu));
    burgerMenuOverlay.addEventListener("click", () =>
      this.toggleMenu(burgerMenu)
    );
    for (let chevron of chevrons) {
      chevron.addEventListener("click", (ev) =>
        this.toggleChevron(ev, chevron)
      );
    }
    this.toggleChevron = function (ev, chevron) {
      myModuleModel.passChevronEvent(ev, chevron);
    };
    this.toggleMenu = function (place) {
      myModuleModel.passEvent(place);
    };

    this.footerUpdateState = function (hashPage) {
      myModuleModel.updateState(hashPage);
    };

    this.updateState = function () {
      const hashPageName = location.hash.slice(1).toLowerCase();
      myModuleModel.updateState(hashPageName);

      if (hashPageName === "lk_user") {
        preparingPage();
        const closeModalPassword = document.querySelector(
          ".close_modal_password"
        );
        if (closeModalPassword !== null) {
          closeModalPassword.addEventListener("click", (e) => {
            e.preventDefault();
            myModuleModel.updateState("main");
          });
        }
      }

      if (hashPageName === "admin") {
        const adminLinks = document.querySelectorAll(".header_links__li");
        myModuleModel.giveUsersList();
        myModuleModel.updateStateAdminPage("list_of_person");
        adminLinks.forEach((element) => {
          element.addEventListener("click", (e) => {
            e.preventDefault();
            let pageAdress = e.target.getAttribute("href").slice(1);
            myModuleModel.updateStateAdminPage(pageAdress);

            if (pageAdress === "list_of_person") {
              myModuleModel.giveUsersList();
            }

            if (pageAdress === "new_person") {
              document
                .getElementById("add_new_child")
                .addEventListener("click", (e) => {
                  e.preventDefault();
                  myModuleModel.sendUsers();
                });
            }

            if (pageAdress === "statistics") {
              myModuleModel.getStatisticInform();
            }

            if (pageAdress === "ideas") {
              myModuleModel.addToLocalStorage();
            }
            if (pageAdress === "admin_timetable") {
              
              myModuleModel.giveUsersForTimetable();
            }
          });
        });
      }
    };
  }

  return {
    init: function ({ container, routes, components }) {
      this.renderComponents(container, components);

      const view = new ModuleView();
      const model = new ModuleModel();
      const controller = new ModuleController();

      view.init(document.getElementById(container), routes);
      model.init(view);
      controller.init(document.getElementById(container), model);
    },
    renderComponents: function (container, components) {
      const root = document.getElementById(container);
      const componentsList = Object.keys(components);

      for (let item of componentsList) {
        root.innerHTML += components[item].render("component");
      }
    },
  };
})();

document.addEventListener(
  "DOMContentLoaded",
  mySPA.init({
    container: "app",
    routes: routes,
    components: components,
  })
);

sliderFirst();
sliderSecond();
