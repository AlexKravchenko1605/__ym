const requestPUTURL = "https://api.jsonbin.io/v3/b/63a7022615ab31599e2404b4";
const millisecondsPerDay = 86400000;
const addUserVolum = new Audio("./assets/audio/add-person.wav");
const removedUserVolum = new Audio("./assets/audio/remove-person.wav");

export const sendRequest = function (method, url) {
  return new Promise((resolve, reject) => {
    let req2 = new XMLHttpRequest();
    req2.open(method, url, true);
    req2.responseType = "json";
    req2.setRequestHeader(
      "X-Master-Key",
      "$2b$10$v.uPsOT.RAHvN3CC39KV8OmewmP.TWWsU4dv4Q5a4m6OE/Jb9D2hy"
    );
    req2.onload = () => {
      if (req2.status >= 400) {
        reject(req2.response);
      } else resolve(req2.response);
    };
    req2.onerror = () => {
      reject(req2.response);
    };
    req2.send();
  });
};

export const findTable = function (cart) {
  let table = document.querySelector(".person_date_table");
  let mymodal = document.querySelector(".mymodal");

  table.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.className === "remove") {
      setModal("block", e);
    } else {
      showPersonDate(e);

      function showPersonDate(e) {
        e.preventDefault();
        createPersonTableData();
        fillingTableData(cart, e);
      }
    }
  });
  mymodal.querySelector(".close").addEventListener("click", (e) => {
    setModal("none", e);
  });
  mymodal.querySelector(".no").addEventListener("click", (e) => {
    setModal("none", e);
  });

  mymodal.querySelector(".yes").addEventListener("click", (e) => {
    e.preventDefault();
    removedUserVolum.play();
    let curTarget = document.querySelector(".removedUser").innerHTML;

    let result = cart.users.filter((e) => {
      return (
        e.fullName.toUpperCase().replace(/ /g, "") !==
        curTarget.toUpperCase().replace(/ /g, "")
      );
    });

    cart.users = result;
    let newArrayToStorage = JSON.stringify(cart);

    let req = new XMLHttpRequest();
    req.open("PUT", requestPUTURL, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader(
      "X-Master-Key",
      "$2b$10$v.uPsOT.RAHvN3CC39KV8OmewmP.TWWsU4dv4Q5a4m6OE/Jb9D2hy"
    );
    req.send(newArrayToStorage);
    if (document.querySelector(".profile_grid") !== null)
      document.querySelector(".profile_grid").remove();

    setModal("none", e);
  });

  // keydown Esc
  document.addEventListener("keydown", (e) => {
    if (e.code == "Escape") {
      e.preventDefault();
      setModal("none", e);
    }
  });
};

export const addNewPerson = function (cart) {
  addUserVolum.play();
  const newUser = {};
  const childName = document.getElementById("child_name").value;
  const childSurname = document.getElementById("child_surname").value;
  const childPatronymic = document.getElementById("child_patronimic").value;
  const birthday = document.getElementById("birthday").value;
  const trainingType = document.getElementById("trainingType").value;
  const teacher = document.getElementById("teacherChoose").value;
  const telNumber = document.getElementById("telNumber").value;
  let diagnosticCard;
  if (document.getElementById("diagnostic_card").value == "") {
    diagnosticCard = "Диагностическая карта не заполнена";
  } else {
    diagnosticCard = document.getElementById("diagnostic_card").value;
  }
  const subscription1 = document
    .querySelector('input[name="subscription"]:checked')
    .value.split(" ")
    .slice(0, 1);
  const subscription2 = document
    .querySelector('input[name="subscription"]:checked')
    .value.split(" ")
    .slice(-1);
  const subscription = `${subscription1} ${subscription2}`;
  const numberOfClasses = document
    .querySelector('input[name="subscription"]:checked')
    .value.split(" ")
    .slice(1, 2);

  const know_about_us = document.querySelector(
    'input[name="know_about_us"]:checked'
  ).value;
  const subscriptionPurchaseDate = new Date();

  newUser.childName = childName;
  newUser.childSurname = childSurname;
  newUser.childPatronymic = childPatronymic;
  newUser.fullName = childSurname + " " + childName + " " + childPatronymic;
  newUser.birthday = birthday;
  newUser.trainingType = trainingType;
  newUser.teacher = teacher;
  newUser.telNumber = telNumber;
  newUser.diagnosticCard = diagnosticCard;
  newUser.subscription = {
    typeOFAbonement: [],
    numberOfClasses: [],
    numberOfClassesLeft: [],
    subscriptionPurchaseDate: [],
  };
  newUser.subscription.typeOFAbonement.push(subscription);
  newUser.subscription.subscriptionPurchaseDate.push(subscriptionPurchaseDate);
  newUser.subscription.numberOfClasses.push(numberOfClasses);
  newUser.know_about_us = know_about_us;
  newUser.dateVisitStudio = [];

  cart.users.push(newUser);

  // send user to storage
  let userToStorage = JSON.stringify(cart);
  let req = new XMLHttpRequest();
  req.open("PUT", requestPUTURL, true);
  req.setRequestHeader("Content-Type", "application/json");
  req.setRequestHeader(
    "X-Master-Key",
    "$2b$10$v.uPsOT.RAHvN3CC39KV8OmewmP.TWWsU4dv4Q5a4m6OE/Jb9D2hy"
  );
  req.send(userToStorage);
};

export const createListPerson = function (cart) {
  document.getElementById(
    "list"
  ).innerHTML = `<table class='person_date_table'></table>`;

  let arrayKeys = cart.users;

  // сортируем по алфавиту
  let fullName = [];
  for (let i = 0; i < arrayKeys.length; i++) {
    fullName.push(`${arrayKeys[i].fullName.toUpperCase()}`);
  }
  fullName.sort();
  for (let i = 0; i < fullName.length; i++) {
    let row = document.createElement("tr");
    row.innerHTML = `<td class='table_1'><p class="user_fullName">${fullName[i]}</p><p class='remove'>X</p></td>`;
    document.querySelector(".person_date_table").appendChild(row);
  }
};
// создаем карточку пользователя
const createPersonTableData = function () {
  let mainDiv = document.createElement("div");
  mainDiv.className = "profile_grid margin";

  let headerDiv = document.createElement("div");
  headerDiv.className = "header_div";
  mainDiv.append(headerDiv);

  let clientLogoDiv = document.createElement("div");
  clientLogoDiv.className = "client_logo";
  let logo = document.createElement("img");
  logo.setAttribute("src", "./assets/img/person.jpg");
  clientLogoDiv.append(logo);
  headerDiv.append(clientLogoDiv);

  let rightHeaderDiv = document.createElement("div");
  rightHeaderDiv.className = "right_header_div";
  headerDiv.append(rightHeaderDiv);

  let topline = document.createElement("div");
  topline.className = "top_line";
  rightHeaderDiv.append(topline);

  let fioHeader = document.createElement("div");
  fioHeader.className = "fio-headaer";
  topline.append(fioHeader);

  let h3 = document.createElement("h3");
  h3.id = "full_name";
  fioHeader.append(h3);

  let yearHeader = document.createElement("div");
  yearHeader.className = "year-headaer";
  topline.append(yearHeader);

  let h4 = document.createElement("h4");
  h4.id = "birthday_out";
  yearHeader.append(h4);

  let telHeader = document.createElement("div");
  telHeader.className = "tel-headaer";
  topline.append(telHeader);

  let h5 = document.createElement("h5");
  h5.id = "telNumber_out";
  telHeader.append(h5);
  let divWrapper = document.createElement("div");
  divWrapper.className = "wrapper_btn_and_select";
  topline.append(divWrapper);

  let btnVisit = document.createElement("button");
  btnVisit.className = "note_the_visit";
  btnVisit.innerText = "отметить посещение";
  telHeader.append(btnVisit);

  let select = document.createElement("select");
  select.className = "select_abonement";

  let option_1 = new Option("Выбирите количество занятий");
  let option_2 = new Option("4 Индивидуальный 64BYN");
  let option_3 = new Option("8 Индивидаульный 120BYN");
  let option_4 = new Option("4 Групповой 48BYN");
  let option_5 = new Option("8 Групповой 80BYN");
  select.append(option_1);
  select.append(option_2);
  select.append(option_3);
  select.append(option_4);
  select.append(option_5);
  divWrapper.append(select);

  let select2 = document.createElement("select");
  select2.className = "select_training_type";

  let option_2_1 = new Option("Выбирите вид подготовки");
  let option_2_2 = new Option("Подготовка к школе");
  let option_2_3 = new Option("Логопед");
  let option_2_4 = new Option("Детский сад");
  let option_2_5 = new Option("Английский язык");
  let option_2_6 = new Option("Развивашки");
  select2.append(option_2_1);
  select2.append(option_2_2);
  select2.append(option_2_3);
  select2.append(option_2_4);
  select2.append(option_2_5);
  select2.append(option_2_6);
  divWrapper.append(select2);

  let select3 = document.createElement("select");
  select3.className = "select_choice_teacher";

  let option_3_1 = new Option("Выбирите преподавателя");
  let option_3_2 = new Option("Мельникова Юлия");
  let option_3_3 = new Option("Лукашенко Евгения");
  let option_3_4 = new Option("Кравченко Александр");
  let option_3_5 = new Option("Авсянникова Алина");

  select3.append(option_3_1);
  select3.append(option_3_2);
  select3.append(option_3_3);
  select3.append(option_3_4);
  select3.append(option_3_5);

  divWrapper.append(select3);

  let submitBtn = document.createElement("button");
  submitBtn.className = "submitBtn";
  submitBtn.innerText = "Купить абонемент";
  topline.append(submitBtn);

  //profile_tabs
  let profileTabs = document.createElement("div");
  profileTabs.className = "profile_tabs";
  profileTabs.id = "profile-tabs";
  mainDiv.append(profileTabs);

  let ul = document.createElement("ul");
  ul.className = "tabs-nav";
  profileTabs.append(ul);

  let liFirst = document.createElement("li");
  liFirst.className = "li-profile_tabs";
  liFirst.setAttribute("role", "tab");
  ul.append(liFirst);
  let aFirst = document.createElement("a");
  aFirst.id = "a_for_tab_1";
  aFirst.setAttribute("href", "#tabs_1");
  aFirst.innerText = "Абонемент";
  liFirst.append(aFirst);
  let imgSubscription = document.createElement("img");
  imgSubscription.setAttribute("src", "./assets/icons/subscription.png");
  imgSubscription.setAttribute("alt", "subscription.png");
  aFirst.append(imgSubscription);

  let liSecond = document.createElement("li");
  liSecond.className = "li-profile_tabs";
  liSecond.setAttribute("role", "tab");
  ul.append(liSecond);
  let aSecond = document.createElement("a");
  aSecond.id = "a_for_tab_2";
  aSecond.setAttribute("href", "#tabs_2");
  aSecond.innerText = "Посещения";
  liSecond.append(aSecond);
  let imgVisit = document.createElement("img");
  imgVisit.setAttribute("src", "./assets/icons/visited.png");
  imgVisit.setAttribute("alt", "visited.png");
  aSecond.append(imgVisit);

  let liThird = document.createElement("li");
  liThird.className = "li-profile_tabs";
  liThird.setAttribute("role", "tab");
  ul.append(liThird);
  let aThird = document.createElement("a");
  aThird.id = "a_for_tab_3";
  aThird.setAttribute("href", "#tabs_3");
  aThird.innerText = "Покупки";
  liThird.append(aThird);
  let imgBuy = document.createElement("img");
  imgBuy.setAttribute("src", "./assets/icons/buy.png");
  imgBuy.setAttribute("alt", "buy.png");
  aThird.append(imgBuy);

  let liFourth = document.createElement("li");
  liFourth.className = "li-profile_tabs";
  liFourth.setAttribute("role", "tab");
  ul.append(liFourth);
  let aFourth = document.createElement("a");
  aFourth.id = "a_for_tab_4";
  aFourth.setAttribute("href", "#tabs_4");
  aFourth.innerText = "Мед. карта";
  liFourth.append(aFourth);
  let imgEmergen = document.createElement("img");
  imgEmergen.setAttribute("src", "./assets/icons/contact_emergen.png");
  imgEmergen.setAttribute("alt", "contact_emergen.png");
  aFourth.append(imgEmergen);

  // tabs----------------------------------------------------------
  // tabs1
  let firstTab = document.createElement("div");
  firstTab.id = "tabs_1";
  firstTab.className = "content_tabs content_tabs-block";
  profileTabs.append(firstTab);
  let accountDiv = document.createElement("div");
  accountDiv.className = "account-div";
  firstTab.append(accountDiv);

  let accountHeaderDiv = document.createElement("div");
  accountHeaderDiv.className = "account-header-div";
  accountDiv.append(accountHeaderDiv);
  let teacherDiv = document.createElement("div");
  teacherDiv.id = "teachers_out";
  teacherDiv.className = "teacher";

  let div1 = document.createElement("div");
  div1.className = "type_of_abonement";
  let div2 = document.createElement("div");
  div2.className = "validity";

  accountHeaderDiv.append(teacherDiv);
  accountHeaderDiv.append(div1);
  accountHeaderDiv.append(div2);

  let rowWrapDiv = document.createElement("div");
  rowWrapDiv.className = "row-wrap-div";
  accountDiv.append(rowWrapDiv);

  let accountCounterFirst = document.createElement("div");
  accountCounterFirst.className = "account-counter";
  rowWrapDiv.append(accountCounterFirst);
  let rowWrap2 = document.createElement("div");
  rowWrap2.className = "row-wrap-div";
  accountCounterFirst.append(rowWrap2);
  let accountCountLeft = document.createElement("div");
  accountCountLeft.className = "account-count-left";

  rowWrap2.append(accountCountLeft);
  let accountCoountRight = document.createElement("div");
  accountCoountRight.classList.add("account-count-right");
  accountCoountRight.classList.add("gray");

  rowWrap2.append(accountCoountRight);
  let div3 = document.createElement("div");
  div3.className = "gray";
  div3.innerText = "занятий";
  accountCounterFirst.append(div3);
  let div4 = document.createElement("div");
  div4.className = "gray";
  div4.innerText = "осталось";
  accountCounterFirst.append(div4);

  let accountCounterSecond = document.createElement("div");
  accountCounterSecond.className = "account-counter";
  rowWrapDiv.append(accountCounterSecond);
  let rowWrap3 = document.createElement("div");
  rowWrap3.className = "row-wrap-div";
  accountCounterSecond.append(rowWrap3);
  let accountCountLeft2 = document.createElement("div");
  accountCountLeft2.className = "account-count-left left_days";
  accountCountLeft2.innerHTML = "28";
  rowWrap3.append(accountCountLeft2);
  let accountCoountRight2 = document.createElement("div");
  accountCoountRight2.classList.add("account-count-right");
  accountCoountRight2.classList.add("gray");
  accountCoountRight2.classList.add("right_days");
  accountCoountRight2.innerHTML = "из 30";
  rowWrap3.append(accountCoountRight2);
  let div5 = document.createElement("div");
  div5.className = "gray";
  div5.innerText = "дней";
  accountCounterSecond.append(div5);
  let div6 = document.createElement("div");
  div6.className = "gray";
  div6.innerText = "осталось";
  accountCounterSecond.append(div6);

  //tabs 2
  let secondTab = document.createElement("div");
  secondTab.id = "tabs_2";
  secondTab.className = "content_tabs content_tabs-block";
  profileTabs.append(secondTab);
  let tableSecondTabs = document.createElement("table");
  tableSecondTabs.id = "visit-tabs";
  secondTab.append(tableSecondTabs);
  let tbody = document.createElement("tbody");
  tableSecondTabs.append(tbody);

  // tabs3
  let thirdTab = document.createElement("div");
  thirdTab.id = "tabs_3";
  thirdTab.className = "content_tabs content_tabs-block";
  profileTabs.append(thirdTab);
  let tableThirdTabs = document.createElement("table");
  tableThirdTabs.id = "sale-tabs";
  thirdTab.append(tableThirdTabs);
  let tbodyThirdTabs = document.createElement("tbody");
  tableThirdTabs.append(tbodyThirdTabs);

  // tabs4
  let fourthTab = document.createElement("div");
  fourthTab.id = "tabs_4";
  fourthTab.className = "content_tabs content_tabs-block";
  profileTabs.append(fourthTab);
  let trainingTypeDiv = document.createElement("div");
  trainingTypeDiv.id = "trainingType_out";
  trainingTypeDiv.className = "training-type";
  fourthTab.append(trainingTypeDiv);

  let diagnosticCardDiv = document.createElement("div");
  diagnosticCardDiv.id = "diagnosticCard_out";
  diagnosticCardDiv.className = "teacher";
  fourthTab.append(diagnosticCardDiv);

  let container = mainDiv.outerHTML;
  document.getElementById("inform_about_child_out").innerHTML = container;

  // показ вкладок при нажатии на ссылку абонемент, посещения, покупки, Мед.карта
  const showInforAboutClient = function () {
    const aLiProfileTabs = document.querySelectorAll(".li-profile_tabs");

    aLiProfileTabs.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        const id = event.target
          .closest("a")
          .getAttribute("href")
          .replace("#", "");

        document.querySelectorAll(".li-profile_tabs").forEach((child) => {
          child.classList.remove("active");
        });
        document.querySelectorAll(".content_tabs").forEach((child) => {
          child.classList.remove("content_tabs-block");
        });

        item.classList.add("active");
        document.getElementById(id).classList.add("content_tabs-block");
      });
    });

    document.querySelectorAll(".content_tabs").forEach((child) => {
      child.classList.remove("content_tabs-block");
    });
    document.querySelectorAll(".li-profile_tabs").forEach((child) => {
      child.classList.remove("active");
    });
    aLiProfileTabs[0].classList.add("active");
    document.querySelector(".content_tabs").classList.add("content_tabs-block");
  };
  showInforAboutClient();
};

// наполняем карточку пользователя информацией( заполнение происходит по нажатию на пользователя в списке пользователей)
const fillingTableData = function (cart, event) {
  let cur = event.target.closest("td").firstChild.innerHTML;

  const container = document.querySelector(".profile_grid");
  for (let i = 0; i < cart.users.length; i++) {
    if (cur.toUpperCase() == cart.users[i].fullName.toUpperCase()) {
      let birthday = cart.users[i].birthday;
      let fullName = cart.users[i].fullName;
      let telNumber = cart.users[i].telNumber;
      let trainingType = cart.users[i].trainingType;
      let teachers = cart.users[i].teacher;
      let diagnosticCard = cart.users[i].diagnosticCard;
      let subscriptionPurchDate =
        cart.users[i].subscription.subscriptionPurchaseDate[
          cart.users[i].subscription.subscriptionPurchaseDate.length - 1
        ];

      let subscriptionPurchDateArr =
        cart.users[i].subscription.subscriptionPurchaseDate;
      //расчет срока действия абонемента(1 месяц )
      let curDate = new Date(subscriptionPurchDate);
      curDate.setMonth(curDate.getMonth() + 1);
      let subscriptionPurchaseDateANDOneMonth = curDate;
      let numberOfClassesALL = cart.users[i].subscription.numberOfClasses[0];
      // количество оставшихся занятий
      let numberOfClassesLEFT =
        Number(numberOfClassesALL) -
        cart.users[i].subscription.numberOfClassesLeft.length;
      let subscriptionTypeOFAbonement =
        cart.users[i].subscription.typeOFAbonement[
          cart.users[i].subscription.typeOFAbonement.length - 1
        ];
      let subscriptionTypeOFAbonementArr =
        cart.users[i].subscription.typeOFAbonement;

      // количество оставшихся дней действия абонемента
      let startDateAbonement = Date.parse(subscriptionPurchDate);
      let finishDateAbonement = Date.parse(subscriptionPurchaseDateANDOneMonth);
      let differentBetweenFinishAndStart =
        finishDateAbonement - startDateAbonement;
      let subscriptionValidityPeriod = Math.floor(
        differentBetweenFinishAndStart / millisecondsPerDay
      );
      let nowDate = Date.now();
      let dateBetwenNowAndByAbonement = Math.ceil(
        (nowDate - startDateAbonement) / millisecondsPerDay
      );
      let daysAbonementLEFT =
        subscriptionValidityPeriod - dateBetwenNowAndByAbonement;

      // наполняем содержимым
      container.querySelector("#full_name").innerHTML = fullName;
      container.querySelector("#birthday_out").innerHTML = birthday;
      container.querySelector("#telNumber_out").innerHTML = telNumber;
      container.querySelector("#teachers_out").innerHTML = teachers;
      container.querySelector("#diagnosticCard_out").innerHTML = diagnosticCard;
      container.querySelector(
        ".type_of_abonement"
      ).innerHTML = `Абонемент действует с"${
        new Date(subscriptionPurchDate).toLocaleString().split(",")[0]
      }" по "${
        new Date(subscriptionPurchaseDateANDOneMonth)
          .toLocaleString()
          .split(",")[0]
      }"  `;

      container.querySelector(
        ".validity"
      ).innerHTML = `Вид абонемента - "${subscriptionTypeOFAbonement}" `;

      container.querySelector(
        ".account-count-right"
      ).innerHTML = `из ${numberOfClassesALL}`;

      if (numberOfClassesLEFT === 0) {
        document.querySelector(".note_the_visit").disabled = true;

        document.querySelector(
          ".content_modal_end_class_numbers h3"
        ).innerHTML = `${fullName}, нужно купить абонемент !`;
        document.querySelector(".mymodal_end_class_numbers").style.display =
          "block";
        document
          .querySelector(".close_modal_end_class_numbers")
          .addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(".mymodal_end_class_numbers").style.display =
              "none";
          });
        document.addEventListener("keydown", (e) => {
          if (e.code === "Escape") {
            e.preventDefault();
            document.querySelector(".mymodal_end_class_numbers").style.display =
              "none";
          }
        });
      }
      container.querySelector(
        ".account-count-left"
      ).innerHTML = `${numberOfClassesLEFT}`;
      container.querySelector(
        ".right_days"
      ).innerHTML = `из ${subscriptionValidityPeriod}`;

      if (daysAbonementLEFT === 0) {
        document.querySelector(".note_the_visit").disabled = true;
        document.querySelector(
          ".content_modal_end_period_abonement h3"
        ).innerHTML = `${fullName}, период действия абонемента окончился. Нужно приобрести новый абонемент !`;
        document.querySelector(".mymodal_end_period_abonement").style.display =
          "block";

        document
          .querySelector(".close_modal_end_period_abonement")
          .addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(
              ".mymodal_end_period_abonement"
            ).style.display = "none";
          });

        document.addEventListener("keydown", (e) => {
          if (e.code === "Escape") {
            e.preventDefault();
            document.querySelector(
              ".close_modal_end_period_abonement"
            ).style.display = "none";
          }
        });
      }
      container.querySelector(".left_days").innerHTML = `${daysAbonementLEFT}`;

      let dateVisitStudio = cart.users[i].dateVisitStudio;

      for (let i = 0; i < dateVisitStudio.length; i++) {
        let row = document.createElement("tr");
        row.innerHTML = `<td class='table_1'>${
          new Date(dateVisitStudio[i].split(";")[0])
            .toLocaleString()
            .split(",")[0]
        } По абонементу ${dateVisitStudio[i].split(";")[1]} </td>`;
        document.querySelector("#visit-tabs tbody").appendChild(row);
      }
      let subscriptionPurchaseDateARRlenght =
        cart.users[i].subscription.subscriptionPurchaseDate.length;

      for (let i = 0; i < subscriptionPurchaseDateARRlenght; i++) {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        td1.className = "table_1_sale_tabs";
        td2.className = "table_1_sale_tabs";
        td3.className = "table_1_sale_tabs";
        td1.innerHTML = new Date(subscriptionPurchDateArr[i])
          .toLocaleString()
          .split(",")[0];

        td2.innerHTML = "покупка абонемента";
        td3.innerHTML = subscriptionTypeOFAbonementArr[i];

        row.append(td1);
        row.append(td2);
        row.append(td3);
        document.querySelector("#sale-tabs tbody").appendChild(row);
      }
    }
  }
  const checkVisitPerson = function () {
    document.querySelector(".note_the_visit").classList.add("red");
    document.querySelector(".note_the_visit").disabled = true;

    let cur = event.target.innerHTML;
    for (let i = 0; i < cart.users.length; i++) {
      if (cur.toUpperCase() == cart.users[i].fullName.toUpperCase()) {
        cart.users[i].dateVisitStudio.push(
          `${new Date().toISOString()};${cart.users[i].trainingType}`
        );
        cart.users[i].subscription.numberOfClassesLeft.push(1);
      }
    }
    let toStorage = JSON.stringify(cart);
    let req = new XMLHttpRequest();
    req.open("PUT", requestPUTURL, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader(
      "X-Master-Key",
      "$2b$10$v.uPsOT.RAHvN3CC39KV8OmewmP.TWWsU4dv4Q5a4m6OE/Jb9D2hy"
    );
    req.send(toStorage);
  };
  const byAbonement = function () {
    let cur = event.target.innerHTML;
    let classNumber = document.querySelector(".select_abonement").value;
    let trainingType = document.querySelector(".select_training_type").value;
    let teacher = document.querySelector(".select_choice_teacher").value;

    for (let i = 0; i < cart.users.length; i++) {
      if (cur.toUpperCase() == cart.users[i].fullName.toUpperCase()) {
        cart.users[i].subscription.numberOfClasses[0].splice(
          0,
          1,
          classNumber[0]
        );
        cart.users[i].subscription.typeOFAbonement.push(
          `${classNumber.split(" ")[1]} ${classNumber.split(" ")[2]}`
        );
        cart.users[i].subscription.subscriptionPurchaseDate.push(
          `${new Date().toISOString()}`
        );
        cart.users[i].subscription.numberOfClassesLeft.length = 0;
        cart.users[i].teacher = teacher;
        cart.users[i].trainingType = trainingType;
      }
    }
    let toStorage = JSON.stringify(cart);
    let req = new XMLHttpRequest();
    req.open("PUT", requestPUTURL, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader(
      "X-Master-Key",
      "$2b$10$v.uPsOT.RAHvN3CC39KV8OmewmP.TWWsU4dv4Q5a4m6OE/Jb9D2hy"
    );
    req.send(toStorage);
  };
  document
    .querySelector(".note_the_visit")
    .addEventListener("click", checkVisitPerson);
  const classNumber = document.querySelector(".select_abonement");
  const trainingType = document.querySelector(".select_training_type");
  const teacher = document.querySelector(".select_choice_teacher");
  const byBtn = document.querySelector(".submitBtn");
  byBtn.disabled = true;

  byBtn.addEventListener("click", byAbonement);

  function checkValueOfSelects() {
    byBtn.disabled =
      classNumber.value === "Выбирите количество занятий" ||
      trainingType.value === "Выбирите вид подготовки" ||
      teacher.value === "Выбирите преподавателя";
  }
  classNumber.onchange = checkValueOfSelects;
  trainingType.onchange = checkValueOfSelects;
  teacher.onchange = checkValueOfSelects;
};
// показываем модальное окно( а также пишим внутри ФИО пользователя которого хотим удалить)
const setModal = function (display, event) {
  event.preventDefault();

  let modal = document.querySelector(".mymodal");
  let content = document.querySelector(".content_modal");
  modal.style.display = display;
  if (modal.style.display === "none") {
    content.querySelector(".removedUser").innerHTML = "";
  } else {
    content.querySelector(".removedUser").innerHTML =
      event.target.offsetParent.innerText.split("\n")[0];
  }
};
