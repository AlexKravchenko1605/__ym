export const preparingPage = function () {
  const modal = document.querySelector(".mymodal_lk_user");

  const modalNotFound = document.querySelector(".mymodal_lk_user__not_found");
  modalNotFound.style.display = "none";

  const sendBtn = document.querySelector(".send_user_data");
  sendBtn.disabled = true;

  const login = document.querySelector("#login");
  const password = document.querySelector("#password");

  const checkInput = function (login, password) {
    if (
      login.length === 13 &&
      login.includes("+") &&
      login.match(/[0-9]/) &&
      password.length == 4 &&
      password == "1111"
    ) {
      sendBtn.disabled = false;
    } else {
      sendBtn.disabled = true;
    }
  };

  const closeModalPassword = document.querySelector(".close_modal_password");
  closeModalPassword.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";
  });
  const closeModalNotFound = document.querySelector(".close_modal_not_found");
  closeModalNotFound.addEventListener("click", (e) => {
    e.preventDefault();
    modalNotFound.style.display = "none";
    modal.style.display = "block";
  });

  const inputsModal = document.querySelectorAll("input");
  inputsModal.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.preventDefault();
      checkInput(login.value, password.value);
    });
  });

  const requestGETUrl =
    "https://api.jsonbin.io/v3/b/63a7022615ab31599e2404b4/?meta=false";

  sendBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const result = await sendRequest("GET", requestGETUrl);
    const login = document.querySelector("#login").value;

    findPerson(login, result);
  });
};
function sendRequest(method, url) {
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
}

function findPerson(login, cart) {
  let curArray = cart.users;
  const modal = document.querySelector(".mymodal_lk_user");
  const modalNotFound = document.querySelector(".mymodal_lk_user__not_found");
  const profileTable = document.querySelector(".lk_page");
  let errorArr = [];
  for (let i = 0; i < curArray.length; i++) {
    if (login == curArray[i].telNumber) {
      fillUserInformation(curArray[i]);
      modal.style.display = "none";
      profileTable.classList.add("content_tabs-block");
      break;
    } else {
      errorArr.push(1);
    }
  }

  if (errorArr.length === curArray.length) {
    modal.style.display = "none";
    modalNotFound.style.display = "block";
  }
}

const fillUserInformation = function (user) {
  const millisecondsPerDay = 86400000;
  const container = document.querySelector(".lk_page");
  const userName = container.querySelector("#lk_name");
  const userBirthday = container.querySelector("#lk_year");
  const userTelNumber = container.querySelector("#lk_number");
  const userAbonementType = container.querySelector("#lk_type_of_abonement");
  const userPeriodAbonement = container.querySelector("#lk_periodAbonement");
  const userLeftTraining = container.querySelector("#lk_left_training");
  const userTimesTraining = container.querySelector("#lk_times_training");
  const userLeftDays = container.querySelector("#lk_days_left");
  const userAbonementDays = container.querySelector("#lk_abonement_days");
  const teacher = container.querySelector("#teacher_out");

  let subscriptionPurchDate = user.subscription.subscriptionPurchaseDate[0]; //дата покупки абонемента
  let subscriptionPurchDateArr = user.subscription.subscriptionPurchaseDate;

  //расчет срока действия абонемента(1 месяц )
  let curDate = new Date(subscriptionPurchDate);
  curDate.setMonth(curDate.getMonth() + 1);
  let subscriptionPurchaseDateANDOneMonth = curDate;
  let numberOfClassesALL = user.subscription.numberOfClasses[0][0];
  // количество оставшихся занятий
  let numberOfClassesLEFT =
    Number(numberOfClassesALL) - user.subscription.numberOfClassesLeft.length;
  let subscriptionTypeOFAbonement =
    user.subscription.typeOFAbonement[
      user.subscription.typeOFAbonement.length - 1
    ];

  let subscriptionTypeOFAbonementArr = user.subscription.typeOFAbonement;
  // количество оставшихся дней действия абонемента
  let startDateAbonement = Date.parse(subscriptionPurchDate);
  let finishDateAbonement = Date.parse(subscriptionPurchaseDateANDOneMonth);
  let differentBetweenFinishAndStart = finishDateAbonement - startDateAbonement;
  let subscriptionValidityPeriod = Math.floor(
    differentBetweenFinishAndStart / millisecondsPerDay
  );
  let nowDate = Date.now();
  let dateBetwenNowAndByAbonement = Math.ceil(
    (nowDate - startDateAbonement) / millisecondsPerDay
  );
  let daysAbonementLEFT =
    subscriptionValidityPeriod - dateBetwenNowAndByAbonement;
  teacher.innerHTML = user.teacher;
  userName.innerHTML = user.fullName;
  userBirthday.innerHTML = user.birthday;
  userTelNumber.innerHTML = user.telNumber;
  userAbonementType.innerHTML = `Вид абонемента - ${subscriptionTypeOFAbonement}`;
  userPeriodAbonement.innerHTML = `Абонемент действует с "${
    new Date(subscriptionPurchDate).toLocaleString().split(",")[0]
  }" по "${
    new Date(subscriptionPurchaseDateANDOneMonth).toLocaleString().split(",")[0]
  }"  `;
  userLeftTraining.innerHTML = `${numberOfClassesLEFT}`;
  userTimesTraining.innerHTML = `из ${numberOfClassesALL}`;

  userLeftDays.innerHTML = `${daysAbonementLEFT}`;
  userAbonementDays.innerHTML = `из ${subscriptionValidityPeriod}`;
  let dateVisitStudio = user.dateVisitStudio;

  for (let i = 0; i < dateVisitStudio.length; i++) {
    let row = document.createElement("tr");
    row.innerHTML = `<td class='table_1'>${
      new Date(dateVisitStudio[i].split(";")[0]).toLocaleString().split(",")[0]
    } По абонементу ${dateVisitStudio[i].split(";")[1]} </td>`;
    document.querySelector("#visit-tabs tbody").appendChild(row);
  }

  let subscriptionPurchaseDateARRlenght =
    user.subscription.subscriptionPurchaseDate.length;

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
};

export const lKPageReady = function () {
  const aLiProfileTabs = document.querySelectorAll(".li-profile_tabs_a");

  aLiProfileTabs.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const id = event.target
        .closest("a")
        .getAttribute("href")
        .replace("#", "");

      document.querySelectorAll(".li-profile_tabs_a").forEach((child) => {
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
  document.querySelectorAll(".li-profile_tabs_a").forEach((child) => {
    child.classList.remove("active");
  });
  aLiProfileTabs[0].classList.add("active");
  document.querySelector(".content_tabs").classList.add("content_tabs-block");
};
