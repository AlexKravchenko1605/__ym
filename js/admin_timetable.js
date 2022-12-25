const requestPUTUrl = "https://api.jsonbin.io/v3/b/63a7022615ab31599e2404b4";

export const createCalendar = function (cart) {
  const date = new Date();
  let month = date.getMonth();
  let year = date.getFullYear();

  // создаем элементы(переключатели)
  let divOut1 = document.querySelector(".out-1__calendar");
  let a2 = document.createElement("a");
  a2.className = "prevYear";
  a2.innerHTML = "<<";
  divOut1.before(a2);
  let a1 = document.createElement("a");
  a1.className = "prevMonth";
  a1.innerHTML = "<";
  divOut1.before(a1);
  let a3 = document.createElement("a");
  a3.className = "nextYear";
  a3.innerHTML = ">>";
  divOut1.after(a3);
  let a4 = document.createElement("a");
  a4.className = "nextMonth";
  a4.innerHTML = ">";
  divOut1.after(a4);

  // строим структуру календаря
  function creatTable(year, month) {
    // обьявляем обект Дата с указанными параметрами - год и месяц.
    let d2 = new Date(`${year}`, `${month}`);
    // открываем таблицу.
    let table = `<table id = "calendar"><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>`;
    // для пробелов перед первым днем месяца
    for (let i = 0; i < getDayOfWeek(d2); i++) {
      table += `<td class = "dayOfPrevMonth"></td>`;
    }
    // само тело , где указаны наши номера дней
    while (d2.getMonth() == month) {
      if (getDayOfWeek(d2) == 5 || getDayOfWeek(d2) == 6) {
        table += "<td class='weekend'>" + d2.getDate() + "</td>";
      } else table += "<td>" + d2.getDate() + "</td>";
      if (getDayOfWeek(d2) % 7 == 6) {
        table += "</tr><tr>";
      }
      d2.setDate(d2.getDate() + 1);
    }
    // если в конце есть пустые ячейки то их заполняем пробелами.
    if (getDayOfWeek(d2) != 0) {
      for (let i = getDayOfWeek(d2); i < 7; i++) {
        table += `<td class="dayAfterMonth"></td>`;
      }
    }
    // закрываем таблицу
    table += "</tr></table>";
    // вычисляем день месяца в контексте дня недели.
    function getDayOfWeek(d2) {
      let dayOfWeek = d2.getDay();

      if (dayOfWeek == 0) dayOfWeek = 7;

      return dayOfWeek - 1;
    }
    getDayOfWeek(d2);
    // для вывода названия месяца вместо числового значения,т.е здесь присваеваем числу текстовое значение месяца.
    function getTheTitleOfTheCalendar(month) {
      let nameOfTheMonth = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ];
      return nameOfTheMonth[month];
    }
    // вставляем название календаря из текстового значения месяца и номера года.
    document.querySelector(
      ".out-1__calendar"
    ).innerHTML = `${getTheTitleOfTheCalendar(month)} ${year} года.`;
    //вывод календаря на страницу( вывод таблицы на страницу)
    document.querySelector(".out-2__calendar").innerHTML = table;
  }
  creatTable(year, month);
  let calendar = document.querySelector("#calendar");
  calendar.addEventListener("click", (e) => changeBorderColorTd(e, cart));

  document.querySelector(".prevYear").onclick = prevYear;
  function prevYear() {
    year--;
    creatTable(year, month);
    addRedColorToDate(cart);
    calendar = document.querySelector("#calendar");
    calendar.addEventListener("click", (e) => changeBorderColorTd(e, cart));
  }

  document.querySelector(".prevMonth").onclick = prevMonth;
  function prevMonth() {
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    creatTable(year, month);
    addRedColorToDate(cart);
    let calendar = document.querySelector("#calendar");
    calendar.addEventListener("click", (e) => changeBorderColorTd(e, cart));
  }

  document.querySelector(".nextYear").onclick = nextYear;
  function nextYear() {
    year++;
    creatTable(year, month);
    addRedColorToDate(cart);
    let calendar = document.querySelector("#calendar");
    calendar.addEventListener("click", (e) => changeBorderColorTd(e, cart));
  }

  document.querySelector(".nextMonth").onclick = nextMonth;
  function nextMonth() {
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    creatTable(year, month);
    addRedColorToDate(cart);
    let calendar = document.querySelector("#calendar");
    calendar.addEventListener("click", (e) => changeBorderColorTd(e, cart));
  }

  addRedColorToDate(cart);
};
// добавляем красный цвет дате на календаре чтобы визуально было видно где есть заполненное расписание.
const addRedColorToDate = function (cart) {
  if (cart.timetable !== undefined) {
    let info = cart.timetable;
    let objectDate = [];

    for (let i = 0; i < info.length; i++) {
      objectDate.push(info[i].data);
    }

    for (let td of objectDate) {
      let aftersplit = td.toString().split(",");

      if (
        document.querySelector(".out-1__calendar").innerHTML.toString() ===
        aftersplit[1].toString().trim()
      ) {
        let allTD = document.querySelector("#calendar").querySelectorAll("td");

        for (let td of allTD) {
          if (td.innerHTML === aftersplit[0].trim()) {
            td.classList.add("td_width_timetable");
          }
        }
      }
    }
  }
};

// красная рамка вокруг ячейки  и проверка наличия в storage  нашего ключа( даты, на которую есть запись в определенное время)
function changeBorderColorTd(event, cart) {
  event.preventDefault();

  let td = event.target.closest("td");
  if (!td) return;
  let calendar = document.querySelector("#calendar");
  if (!calendar.contains(td)) return;
  highlight(td);

  let informTime = cart.timetable;
  let dates = [];

  if (informTime !== null) {
    for (let i = 0; i < informTime.length; i++) {
      dates.push(informTime[i].data);
    }
  }

  // если в нашем хранилище есть уже дата с расписанием то мы вызываем функцию creatTableTime и наполняем появившуюся таблицу данными из хранилища.
  function contains(arr, elem) {
    if (arr.length === 0) {
      document.querySelector(".out_inform_per_day__calendar").innerHTML =
        creatTableTime(
          `${td.innerText}, ${document.querySelector(".out-1").innerHTML}`
        );
    } else {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].toString() === elem.toString()) {
          for (let i = 0; i < informTime.length; i++) {
            if (
              ` ${td.innerText}, ${
                document.querySelector(".out-1__calendar").innerHTML
              }` === informTime[i].data.toString()
            ) {
             
              document.querySelector(
                ".out_inform_per_day__calendar"
              ).innerHTML = creatTableTime(
                `${td.innerText}, ${
                  document.querySelector(".out-1__calendar").innerHTML
                }`
              );
              let table = document.querySelector(
                ".container__table_time .table"
              );
              let cells = table.querySelectorAll(".cell");
              let cur = Array.from(Object.values(informTime[i].info));
              

              for (let i = 0; i < cells.length; i++) {
                cells[i].innerHTML = `<p>${cur[i]}</p>`;
              }
            }
          }
          return;
        }
      }
      document.querySelector(".out_inform_per_day__calendar").innerHTML =
        creatTableTime(
          `${td.innerText}, ${
            document.querySelector(".out-1__calendar").innerHTML
          }`
        );
      return;
    }
  }

  contains(
    dates,
    ` ${td.innerText}, ${document.querySelector(".out-1__calendar").innerHTML}`
  );

  dragAndDrop(informTime, cart);
}

let selectedTd;
// добавление красной рамки вокруг ячейки с нажатой датой на календаре
const highlight = function (td) {
  if (selectedTd) {
    selectedTd.classList.remove("redBorder");
  }
  selectedTd = td;
  selectedTd.classList.add("redBorder");
};

const creatTableTime = function (params) {
  return `
  <div class="container__table_time">
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th class="table__headder">${params}</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="time">9<sup>00</sup></td>
            <td class="cell time__p"></td>

          </tr>
          <tr>
            <td class="time">10<sup>00</sup></td>
            <td class="cell time__p"></td>
          </tr>
          <tr>
            <td class="time">11<sup>00</sup></td>
            <td class="cell time__p"></td>
          </tr>
          <tr>
            <td class="time">12<sup>00</sup></td>
           <td class="cell time__p"></td>
          </tr>
          <tr>
            <td class="time">13<sup>00</sup></td>
           <td class="cell time__p"></td>
          </tr>
          <tr>
            <td class="time">14<sup>00</sup></td>
            <td class="cell time__p"></td>
          </tr>
          <tr>
            <td class="time">15<sup>00</sup></td>
            <td class="cell time__p"></td>
          </tr>
          <tr>
            <td class="time">16<sup>00</sup></td>
            <td class="cell time__p"></td>
          </tr>
          <tr>
            <td class="time">17<sup>00</sup></td>
            <td class="cell time__p"></td>
          </tr>
          <tr>
            <td class="time">18<sup>00</sup></td>
            <td class="cell time__p"></td>
          </tr>
          <tr>
            <td class="time">19<sup>00</sup></td>
            <td class="cell time__p"></td>
          </tr>
        </tbody>
      </table>
    </div>  `;
};

export const createListPersonForTimetable = function (cart) {
  document.getElementById(
    "list__calendar"
  ).innerHTML = `<table class='person_date_table__timetable'></table>`;

  let arrayKeys = cart.users;

  // сортируем по алфавиту
  let fullName = [];
  for (let i = 0; i < arrayKeys.length; i++) {
    fullName.push(`${arrayKeys[i].fullName.toUpperCase()}`);
  }
  fullName.sort();
  for (let i = 0; i < fullName.length; i++) {
    let row = document.createElement("tr");
    row.innerHTML = `<td class='table_1'><p class="user_fullName user" id="${i}" draggable="true">${fullName[i]}</p></td>`;
    document.querySelector(".person_date_table__timetable").appendChild(row);
  }
};

const dragAndDrop = function (informTime, cart) {
  if (informTime === null) {
    informTime = [];
  }

  const users = document.querySelectorAll(".user");
  const cells = document.querySelectorAll(".cell");
  let objectInfo = {};
  let resultDay = {};

  const dragStart = function (event) {
    event.dataTransfer.setData("name", event.target.innerHTML);
  };
  const dragEnd = function () {
    this.style.color = "white";
  };

  const dragOver = function (e) {
    e.preventDefault();
  };

  const dragEnter = function () {
    this.classList.add("hovered");
  };

  const dragLeave = function () {
    this.classList.remove("hovered");
  };

  const dragDrop = function (event) {
    event.preventDefault();

    let table = document.querySelector(".container__table_time .table");
    let timeCells = table.querySelectorAll(".time");

    let itemId = event.dataTransfer.getData("name");

    let p = document.createElement("p");
    p.innerHTML = itemId;

    this.append(p);
    this.classList.remove("hovered");

    for (let cell of timeCells) {
      let buffer = cell.innerHTML.replace(/[^\d]/g, "").split("");
      buffer.splice(-2, 0, ".");
      let key = buffer.join(" ").replace(/ /g, "");
      objectInfo[`${key}`] = cell.nextElementSibling.innerText;
    }
    //  если масссив informTime содержит обьекты с датами и информацией касающей расписания на данную дату , то выполняем следующее
    if (informTime.length !== 0) {
      
      // првоеряем наличие наличие нашей даты  в общем массиве informTime
      let targetObject = informTime.find(
        (e) =>
          e.data.toString() ===
          ` ${document.querySelector(".table__headder").innerHTML}`
      );

      //  если есть ,то переписываем информацию в обьекте с данной датой
      if (targetObject !== undefined) {
        targetObject.info = objectInfo;

        let toStorage = JSON.stringify(cart);
        let req = new XMLHttpRequest();
        req.open("PUT", requestPUTUrl, true);
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader(
          "X-Master-Key",
          "$2b$10$v.uPsOT.RAHvN3CC39KV8OmewmP.TWWsU4dv4Q5a4m6OE/Jb9D2hy"
        );
        req.send(toStorage);

        addRedColorToDate;
      }
      // если нет то создаем новый обьект с датой и информацией по расписанию и добавляем его в общий массив daysTimeTable
      if (targetObject === undefined) {
        resultDay.data = [
          ` ${document.querySelector(".table__headder").innerHTML}`,
        ];
        resultDay.info = objectInfo;

        informTime.push(resultDay);

        let toStorage = JSON.stringify(cart);
        let req = new XMLHttpRequest();
        req.open("PUT", requestPUTUrl, true);
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader(
          "X-Master-Key",
          "$2b$10$v.uPsOT.RAHvN3CC39KV8OmewmP.TWWsU4dv4Q5a4m6OE/Jb9D2hy"
        );
        req.send(toStorage);

        addRedColorToDate;
      }
      
    }
    // если массив daysTimeTable пустой то выполняеем следующее
    else {
      
      resultDay.data = [
        ` ${document.querySelector(".table__headder").innerHTML}`,
      ];

      resultDay.info = objectInfo;
     

      informTime.push(resultDay);

     
      let toStorage = JSON.stringify(cart);
      let req = new XMLHttpRequest();
      req.open("PUT", requestPUTUrl, true);
      req.setRequestHeader("Content-Type", "application/json");
      req.setRequestHeader(
        "X-Master-Key",
        "$2b$10$v.uPsOT.RAHvN3CC39KV8OmewmP.TWWsU4dv4Q5a4m6OE/Jb9D2hy"
      );
      req.send(toStorage);
    }
  };

  // удаление записи при открытой таблице дня(которая появляется при нажатии на день в календаре) и нажатии на пользователя
  const allTime__p = document.querySelectorAll(".time__p");
  allTime__p.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      let p = e.target.closest("p");
      if (!p) return;
      p.remove();

      for (let i = 0; i < informTime.length; i++) {
        if (
          ` ${document.querySelector(".table__headder").innerHTML}` ===
          informTime[i].data.toString()
        ) {
          let table = document.querySelector(".container__table_time .table");
          let timeCells = table.querySelectorAll(".time");
          for (let cell of timeCells) {
            let buffer = cell.innerHTML.replace(/[^\d]/g, "").split("");
            buffer.splice(-2, 0, ".");
            let key = buffer.join(" ").replace(/ /g, "");
            objectInfo[`${key}`] =
              cell.nextElementSibling.innerText === ""
                ? (cell.nextElementSibling.innerText = "")
                : cell.nextElementSibling.innerText;
          }

          informTime[i].info = objectInfo;
          // в случаее если удалена вся запись на день то мы удаляеем этот день из массива дней с расписанием.(соответственно удаляеется и красная дата в календаре при обновлении страницы.)
          let valuesArray = Object.values(informTime[i].info);
          if (
            valuesArray[0] === "" &&
            valuesArray[1] === "" &&
            valuesArray[2] === "" &&
            valuesArray[3] === "" &&
            valuesArray[4] === "" &&
            valuesArray[5] === "" &&
            valuesArray[6] === "" &&
            valuesArray[7] === "" &&
            valuesArray[8] === "" &&
            valuesArray[9] === "" &&
            valuesArray[10] === ""
          ) {
            informTime.splice(i, 1);
          }

          // send user to storage
          let userToStorage = JSON.stringify(cart);
          let req = new XMLHttpRequest();
          req.open("PUT", requestPUTUrl, true);
          req.setRequestHeader("Content-Type", "application/json");
          req.setRequestHeader(
            "X-Master-Key",
            "$2b$10$v.uPsOT.RAHvN3CC39KV8OmewmP.TWWsU4dv4Q5a4m6OE/Jb9D2hy"
          );
          req.send(userToStorage);
        }
      }
    });
  });

  cells.forEach((cell) => {
    cell.addEventListener("dragover", dragOver);
    cell.addEventListener("dragenter", dragEnter);
    cell.addEventListener("dragleave", dragLeave);
    cell.addEventListener("drop", dragDrop);
  });

  users.forEach((user) => {
    user.addEventListener("dragstart", dragStart);
    user.addEventListener("dragend", dragEnd);
  });
};
