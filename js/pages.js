export const HomePage = {
  id: "main",
  title: "_ym_studio",
  render: (className = "container", ...rest) => {
    return `
<div class="root">
  <div class="container">
    <div class="title">
      <h2>
        Студия детства <br />
        Юлии Мельниковой
      </h2>
    </div>
    <div class="subtitle">
      <h4>Образование для будущего</h4>
    </div>
    <!--    slider-->
    <div class="slider_container">
      <div class="my-slider">
        <div class="slider-item">
          <img
            class="slider-img"
            src="./assets/img/main_1024.jpg"
            alt="детки"
          />
        </div>
        <div class="slider-item">
          <img
            class="slider-img"
            src="./assets/img/main_2_1024.jpg"
            alt="детки"
          />
        </div>
        <div class="slider-item">
          <img
            class="slider-img"
            src="./assets/img/main_1024.jpg"
            alt="детки"
          />
        </div>
      </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="shot_inform_wrapper">
    <div class="shot_inform_inner">
      <div class="shot_inform_item_1">
        <div>
          <img
            class="icon_box"
            s
            src="./assets/img/shot_inform_item_1.jpg"
            alt=""
          />
        </div>
        <div class="icon_title">
          <h3>Соответствие возрастному развитию</h3>
        </div>
      </div>
    </div>
    <div class="shot_inform_inner">
      <div class="shot_inform_item_2">
        <div>
          <img
            class="icon_box"
            s
            src="./assets/img/shot_inform_item_2.jpg"
            alt=""
          />
        </div>
        <div class="icon_title">
          <h3>Соответствие индивидуальному развитию</h3>
        </div>
      </div>
    </div>
    <div class="shot_inform_inner">
      <div class="shot_inform_item_3">
        <div>
          <img
            class="icon_box"
            s
            src="./assets/img/shot_inform_item_3.jpg"
            alt=""
          />
        </div>
        <div class="icon_title">
          <h3>Обучение, ориентированное на ребенка</h3>
        </div>
      </div>
    </div>
    <div class="shot_inform_inner">
      <div class="shot_inform_item_4">
        <div>
          <img
            class="icon_box"
            s
            src="./assets/img/shot_inform_item_4.jpg"
            alt=""
          />
        </div>
        <div class="icon_title">
          <h3>Участие семьи в жизни ребенка  и его обучении</h3>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="programm_wrapper">
    <div class="slider_wrapper">
      <h2>Выберите программу для своего ребенка</h2>
      <div class="programm_slider">
        <div class="programm_slider_item">
          <div class="slider_img">
            <img
              src="./assets/img/programm_slider_english.jpg"
              alt="Английский язык для детей FasTrack English"
              title="Английский язык для детей FasTrack English"
            />
          </div>

          <div class="program_slider_inner programm_slider_item_1">
            <div class="program_slider_title">
              <h3>Английский язык для детей</h3>
            </div>
            <div class="program_slider_inner_details">
              <div class="program_slider_item_subtitle">Возрастная группа:</div>
              <div class="program_slider_item_descr">от 3-х лет</div>
            </div>
            <div class="program_slider_inner_details">
              <div class="program_slider_item_subtitle">Группа:</div>
              <div class="program_slider_item_descr">6 человек</div>
            </div>
            <div class="program_slider_inner_details">
              <div class="program_slider_item_subtitle">График занятий:</div>
              <div class="program_slider_item_descr">Сб</div>
            </div>
          </div>
        </div>
        <div class="programm_slider_item">
          <div class="slider_img">
            <img
              src="./assets/img/programm_slider_to_schoole.jpg"
              alt="Подготовка к школе"
              title="Подготовка к школе"
            />
          </div>

          <div class="program_slider_inner programm_slider_item_2">
            <div class="program_slider_title">
              <h3>Подготовка к школе</h3>
            </div>
            <div class="program_slider_inner_details">
              <div class="program_slider_item_subtitle">Возрастная группа:</div>
              <div class="program_slider_item_descr">от 4-х лет</div>
            </div>
            <div class="program_slider_inner_details">
              <div class="program_slider_item_subtitle">Группа:</div>
              <div class="program_slider_item_descr">6 человек</div>
            </div>
            <div class="program_slider_inner_details">
              <div class="program_slider_item_subtitle">График занятий:</div>
              <br />
              <div class="program_slider_item_descr">Пн,Чт,Сб,Вс</div>
            </div>
          </div>
        </div>
        <div class="programm_slider_item">
          <div class="slider_img">
            <img
              src="./assets/img/programm_slider_logo.jpg"
              alt="Логопед"
              title="Логопед"
            />
          </div>
          <div class="program_slider_inner programm_slider_item_3">
            <div class="program_slider_title">
              <h3>Логопед</h3>
            </div>
            <div class="program_slider_inner_details">
              <div class="program_slider_item_subtitle">Возрастная группа:</div>
              <div class="program_slider_item_descr">от 3-х лет</div>
            </div>
            <div class="program_slider_inner_details">
              <div class="program_slider_item_subtitle">
                Индивидуальные занятия
              </div>
              <div class="program_slider_item_descr"></div>
            </div>
            <div class="program_slider_inner_details">
              <div class="program_slider_item_subtitle">График занятий:</div>
              <div class="program_slider_item_descr">Пн,Вт,Ср,Чт,Пт</div>
            </div>
          </div>
        </div>
        <div class="programm_slider_item">
          <div class="slider_img">
            <img
              src="./assets/img/programm_slider_iso.jpg"
              alt="Изо-студия"
              title="Изо-студия"
            />
          </div>
          <div class="program_slider_inner programm_slider_item_4">
            <div class="program_slider_title">
              <h3>Изо-студия</h3>
            </div>
            <div class="program_slider_inner_details">
              <div class="program_slider_item_subtitle">Возрастная группа:</div>
              <div class="program_slider_item_descr">от 4-х лет</div>
            </div>
            <div class="program_slider_inner_details">
              <div class="program_slider_item_subtitle">Группа:</div>
              <div class="program_slider_item_descr">5 человек</div>
            </div>
            <div class="program_slider_inner_details">
              <div class="program_slider_item_subtitle">График занятий:</div>
              <div class="program_slider_item_descr">Вс</div>
            </div>
          </div>
        </div>
        <div class="programm_slider_item">
          <div class="slider_img">
            <img
              src="./assets/img/programm_slider_mini_people.jpg"
              alt="Мини-сад"
              title="Мини-сад"
            />
          </div>

          <div class="program_slider_inner programm_slider_item_5">
            <div class="program_slider_title">
              <h3>Мини-сад</h3>
            </div>
            <div class="program_slider_inner_details">
              <div class="program_slider_item_subtitle">Возрастная группа:</div>
              <div class="program_slider_item_descr">от 1 года</div>
            </div>
            <div class="program_slider_inner_details">
              <div class="program_slider_item_subtitle">Группа:</div>
              <div class="program_slider_item_descr">5 человек</div>
            </div>
            <div class="program_slider_inner_details">
              <div class="program_slider_item_subtitle">График занятий:</div>
              <div class="program_slider_item_descr">Пн,Вт,Ср,Чт,Пт</div>
            </div>
          </div>
        </div>
        <div class="programm_slider_item">
          <div class="slider_img">
            <img
              src="./assets/img/programm_slider_fast_start.jpg"
              alt="Раннее развитие/запуск речи"
              title="Раннее развитие/запуск речи"
            />
          </div>

          <div class="program_slider_inner programm_slider_item_6">
            <div class="program_slider_title">
              <h3>Раннее развитие/ запуск речи</h3>
            </div>
            <div class="program_slider_inner_details">
              <div class="program_slider_item_subtitle">Возрастная группа:</div>
              <div class="program_slider_item_descr">от 1 года</div>
            </div>
            <div class="program_slider_inner_details">
              <div class="program_slider_item_subtitle">Группа:</div>
              <div class="program_slider_item_descr">3 человека</div>
            </div>
            <div class="program_slider_inner_details">
              <div class="program_slider_item_subtitle">График занятий:</div>
              <div class="program_slider_item_descr">Ср,Сб</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="to_visit">
    <div class="to_visit_wrapper">
      <div class="to_visit_outer">
        <div class="to_visit_header">
          <h4>Как записаться?</h4>
        </div>
        <div class="to_visit_number">
          <h3>Звоните +375 29 16161616 !</h3>
        </div>
      </div>
    </div>
  </div>
</div>
    `;
  },
};

export const TimeTable = {
  id: "timetable",
  title: "Расписание",
  render: (className = "container", ...rest) => {
    return `
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Понедельник</th>
            <th>Вторник</th>
            <th>Среда</th>
            <th>Четверг</th>
            <th>Пятница</th>
            <th>Суббота</th>
            <th>Воскресенье</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9<sup>00</sup></td>
            <td>Мини-сад</td>
            <td>Мини-сад</td>
            <td>Мини-сад</td>
            <td>Мини-сад</td>
            <td>Мини-сад</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>10<sup>00</sup></td>
            <td>Мини-сад</td>
            <td>Мини-сад</td>
            <td>Мини-сад</td>
            <td>Мини-сад</td>
            <td>Мини-сад</td>
            <td>
              Подготовка к школе
              <hr />
              Раннее развитие/запуск речи
            </td>
            <td>подготовка к школе</td>
          </tr>
          <tr>
            <td>11<sup>00</sup></td>
            <td>Мини-сад</td>
            <td>
              Мини-сад
              <hr />
              Логопед
            </td>
            <td>Мини-сад</td>
            <td>Мини-сад</td>
            <td>
              Мини-сад
              <hr />
              Логопед
            </td>
            <td>Подготовка к школе</td>
            <td>Английский язык</td>
          </tr>
          <tr>
            <td>12<sup>00</sup></td>
            <td>
              Мини-сад
              <hr />
              Логопед
            </td>
            <td>
              Мини-сад
              <hr />
              Логопед
            </td>
            <td>Мини-сад</td>
            <td>Мини-сад</td>
            <td>
              Мини-сад
              <hr />
              Логопед
            </td>
            <td>
              Английский язык
              <hr />
              Подготовка к школе
            </td>
            <td>Изо-студия</td>
          </tr>
          <tr>
            <td>13<sup>00</sup></td>
            <td>Логопед</td>
            <td>Логопед</td>
            <td>Логопед</td>
            <td>Логопед</td>
            <td>Логопед</td>
            <td>
              Английский язык
              <hr />
              Подготовка к школе
            </td>
            <td></td>
          </tr>
          <tr>
            <td>14<sup>00</sup></td>
            <td>Логопед</td>
            <td>Логопед</td>
            <td>
              Логопед
              <hr />
              Логопед
            </td>
            <td>
              Логопед
              <hr />
              Логопед
            </td>
            <td>Логопед</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>15<sup>00</sup></td>
            <td>Логопед</td>
            <td>Логопед</td>
            <td>
              Логопед
              <hr />
              Логопед
            </td>
            <td>
              Логопед
              <hr />
              Логопед
            </td>
            <td>Логопед</td>
            <td>Английский язык</td>
            <td></td>
          </tr>
          <tr>
            <td>16<sup>00</sup></td>
            <td>Логопед</td>
            <td>
              Логопед
              <hr />
              Логопед
            </td>
            <td>Логопед</td>
            <td>
              Логопед
              <hr />
              Логопед
            </td>
            <td>Логопед</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>17<sup>00</sup></td>
            <td>Логопед</td>
            <td>Логопед</td>
            <td>
              Логопед
              <hr />
              Логопед
            </td>
            <td>
              Логопед
              <hr />
              Логопед
            </td>
            <td>Логопед</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>18<sup>00</sup></td>
            <td>Подготовка к школе</td>
            <td>Логопед</td>
            <td>
              Логопед
              <hr />
              Логопед
            </td>
            <td>Подготовка к школе</td>
            <td>Логопед</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>19<sup>00</sup></td>
            <td>Подготовка к школе</td>
            <td>
              Логопед
              <hr />
              Логопед
            </td>
            <td>Логопед</td>
            <td>Подготовка к школе</td>
            <td>Логопед</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>  
    `;
  },
};

export const Price = {
  id: "price",
  title: "Цены",
  render: (className = "container", ...rest) => {
    return `
      <div class="container">    
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th>Индивидуальное занятие</th>
                <th>Групповое занятие</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Разовое посещение</td>
                <td>20 BYN</td>
                <td>15 BYN</td>
              </tr>
              <tr>
                <td>Абонемент 4 занятия</td>
                <td>64 BYN</td>
                <td>48 BYN</td>
              </tr>
              <tr>
                <td>Абонемент 8 занятий</td>
                <td>120 BYN</td>
                <td>80 BYN</td>
              </tr>
            </tbody>
          </table>
      </div>  
    `;
  },
};

export const LK_User = {
  id: "lk_user",
  title: "Личный кабинет",
  render: (className = "container", ...rest) => {
    return `
      <div class="mymodal_lk_user">
        <div class="overlay_lk_user">
          <div class="content_modal_lk_user">
            <i class="material-icons close_modal_password">close</i>

            <h3>Введите логин и пароль</h3>
            <form class="wrapper_login_and_password">
              <label for="login">Введите логин</label>
              <input type="text" name="login" id="login" />
              <label for="password">Введите пароль</label>
              <input type="password" name="login" id="password" />

              <button type="submit" class="send_user_data">Войти</button>
            </form>
          </div>
        </div>
      </div>
      <div class="mymodal_lk_user__not_found">
        <div class="overlay_lk_user">
          <div class="content_modal_lk_user__not_found">
            <i class="material-icons close_modal_not_found">close</i>
            <h3>Такого пользователя нет, проверьте правильность ввода ваших данных</h3>
          </div>
        </div>
      </div>    
      <div class="profile_grid lk_page ">
        <div class="header_div">
          <div class="client_logo"><img src="./assets/img/person.jpg"></div>
          <div class="right_header_div">
            <div class="top_line">
              <div class="fio-headaer"><h3 id="lk_name">Name</h3></div>
              <div class="year-headaer"><h4 id='lk_year'>year</h4></div>
              <div class="tel-headaer"><h5 id="lk_number">tel</h5></div>
            </div>
          </div>
        </div>
        <div class="profile_tabs" id="profile-tabs">
          <ul class="tabs-nav">
            <li class="li-profile_tabs" role="tab">
              <a class="li-profile_tabs_a active" id="a_for_tab_1" href="#tabs_1">
                <img src="./assets/icons/subscription.png" alt="Абонемент" />Абонемент
              </a>
            </li>
            <li class="li-profile_tabs" role="tab">
              <a class="li-profile_tabs_a active" id="a_for_tab_2" href="#tabs_2">
                <img src="./assets/icons/visited.png" alt="Посещения" />Посещения
              </a>
            </li>
            <li class="li-profile_tabs" role="tab">
              <a class="li-profile_tabs_a active" id="a_for_tab_3" href="#tabs_3">
                <img src="./assets/icons/buy.png" alt="Покупки" />Покупки
              </a>
            </li>
          </ul>
          <div id="tabs_1" class="content_tabs content_tabs-active">
            <div class="account-div">
              <div class="account-header-div">
                <div id="teacher_out" class="tacher"></div>
                <div id='lk_type_of_abonement'>Вид абонемента</div>
                <div id='lk_periodAbonement'>Действует с такого числа по такое число</div>
              </div>
              <div class="row-wrap-div">
                <div class="account-counter">
                  <div class="row-wrap-div">
                    <div class="account-count-left" id="lk_left_training">7</div>
                    <div class="account-count-right gray" id="lk_times_training">из 8</div>
                  </div>
                  <div class="gray">занятий</div>
                  <div class="gray">осталось</div>
                </div>
                <div class="account-counter">
                  <div class="row-wrap-div">
                    <div class="account-count-left" id="lk_days_left">28</div>
                    <div class="account-count-right gray"id="lk_abonement_days">из 30</div>
                  </div>
                  <div class="gray">дней</div>
                  <div class="gray">осталось</div>
                </div>
              </div>
            </div>
          </div>
          <div id="tabs_2" class="content_tabs content_tabs-active">
            <table id="visit-tabs">
              <tbody>
              </tbody>
            </table>
          </div>
          <div id="tabs_3" class="content_tabs content_tabs-active">
            <table id="sale-tabs">
              <tbody>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },
};

export const ErrorPage = {
  id: "error",
  title: "404",
  render: (className = "container", ...rest) => {
    return `
    <div class="page_not_found">
      <img src="./assets/img/not_found.jpg"/>
    </div>  
    `;
  },
};

export const Admin = {
  id: "admin",
  title: "Администратор",
  render: (className = "container", ...rest) => {
    return `
    <div class="admin_page">
      <div class="container_admin_page">
        <section class="header">
            <ul class="header_links">
              <li id="list_of_person" class="header_links__li" href="#list_of_person">Список детей</li>
              <li id="admin_timetable" class="header_links__li" href="#admin_timetable">Расписание</li>
              <li id="new_person" class="header_links__li" href="#new_person">Новый ученик</li>
              <li id="statistics" class="header_links__li" href="#statistics">Статистика</li>
              <li id="ideas" class="header_links__li" href="#ideas">To Do!</li>
            </ul>
        </section>
        <div id="admin_content"></div>
      </div>
    </div>   
    `;
  },
  init: () => {
    let container = document.getElementById("admin_content");
    container.innerHTML = ListOfPerson.render();
  },
};

export const ListOfPerson = {
  id: "list_of_person",
  title: "Администратор",
  render: (className = "container", ...rest) => {
    return `
    <div class="mymodal_end_class_numbers">
      <div class="overlay_end_class_numbers">
        <div class="content_modal_end_class_numbers">
            <i class="material-icons close_modal_end_class_numbers">close</i>
            <h3></h3>
        </div>
      </div>
    </div>
    <div class="mymodal_end_period_abonement">
      <div class="overlay_end_period_abonement">
        <div class="content_modal_end_period_abonement">
            <i class="material-icons close_modal_end_period_abonement">close</i>
            <h3></h3>
        </div>
      </div>
    </div>
    <div class="mymodal">
      <div class="overlay">
        <div class="content_modal">
          <i class="material-icons close ">close</i>
          
          <h3>Вы действительно хотите удалить пользователя? </br></br> <span class="removedUser"></span></h3>
          <div class="wrapper_remove_question">
            <button  class="remove_person_btn yes"> ДА </button>
            <button  class="remove_person_btn no"> Нет </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container_loader">
      <div class="wrapper">
        <div class="loader">
          <div class="spinner"></div>
        </div>
        <div class="loader">
          <div class="spinner"></div>
        </div>
        <div class="loader">
          <div class="spinner"></div>
        </div>
        <div class="loader">
          <div class="spinner"></div>
        </div>
        <div class="loader">
          <div class="spinner"></div>
        </div>
        <div class="loader">
          <div class="spinner"></div>
        </div>
        <div class="loader">
          <div class="spinner"></div>
        </div>
        <div class="loader">
          <div class="spinner"></div>
        </div>
      </div>
    </div>
    
    <div class="wraper_inform">
      <div id="list"></div>
      <div id="inform_about_child_out"></div>
    </div>
    `;
  },
};

export const Statistics = {
  id: "statistics",
  title: "Администратор",
  render: (className = "container", ...rest) => {
    return `
    <div class="statistics">
    <h3>Откуда о нас узнали</h3>
      <canvas id="myChart"></canvas>
    </div>
    `;
  },
};

export const New_Person = {
  id: "new-person",
  title: "Администратор",
  render: (className = "container", ...rest) => {
    return `
<div class="container">
    <div class="form_container">
      <h2>Добавим нового ученика</h2>
        <form id="form" action="" >
          <div class="wrapper_name">
            <p>
              <input id="child_surname" type="text" placeholder="Фамилия ребенка" /> 
            </p>
            <p><input id="child_name" type="text" placeholder="Имя ребенка" /></p>
            <p>
              <input id="child_patronimic" type="text" placeholder="Отчество ребенка" /> 
            </p>
            <p>
              <input id="birthday" type="text" placeholder="ДД.ММ.ГГ" />
            </p>
          </div>
          
          <p class="number"><input id="telNumber" type="text" placeholder="Контактный номер" /> </p>
          <div class="wrapper_training_and_teacher">
            <p>
              <select id="trainingType" type="text">
                <option>Подготовка к школе</option>
                <option>Логопед</option>
                <option>Детский сад</option>
                <option>Английский язык</option>
                <option>Развивашки</option>
              </select>
              <b>Вид подготовки</b>
            </p>
            <p>
               <select id="teacherChoose" type="text" />
                  <option>Мельникова Юлия</option>
                  <option>Кравченко Александр</option>
                  <option>Лукашенко Татьяна</option>
                  <option>Авсянникова Алина</option>
                </select>
                <b>Выбрать преподавателя</b>
            </p>
          </div>
          
          <p class="textArea"><textarea id="diagnostic_card" type="text" ></textarea>
            <br> <b>Диагностическое поле</b></p>
          <div class="abonement_wrapper">
            <p class="abonement">Абонемент</p> 
            <div class="subscription_wrapper">
              <p>Индивидуальные занятия</p>
              <div class="form_radio">
                <input  type="radio" id="subscription_individual_4" class="subscription_btn btn_1" name="subscription" value="Индивидуальный 4 занятия 64BYN"></input>
                <label for="subscription_individual">4 занятия 64 BYN </label>
              </div>
              <div class="form_radio">
                <input  type="radio" id="subscription_individual_8" class="subscription_btn btn_1" name="subscription" value="Индивидуальный 8 занятий 120BYN"></input>
                <label for="subscription_group">8 занятий 120 BYN</label>
              </div>
            </div>
            <div class="subscription_wrapper">
              <p>Групповые занятия</p>
              <div class="form_radio">
                <input  type="radio" id="subscription_group_4" class="subscription_btn btn_1" name="subscription" value="Групповой 4 занятия 48BYN"></input>
                <label for="subscription_group_4">4 занятия 48 BYN</label>
              </div>
              <div class="form_radio">
                <input  type="radio" id="subscription_group_8" class="subscription_btn btn_2"name="subscription" value="Групповой 8 занятий 80BYN"></input>
                <label for="subscription_group_8">8 занятий 80 BYN</label>
              </div>
            </div>
          </div>  
          <div class="knowAbout_wrapper">
            <p class="abonement">Откуда о нас узнали</p> 
            <div class="subscription_wrapper">
              <div class="form_radio">
                <input  type="radio" id="subscription_Instagramm" class="subscription_btn btn_1" name="know_about_us" value="Instagramm"></input>
                <label for="subscription_9">Instagramm</label>
              </div>
              <div class="form_radio">
                <input  type="radio" id="subscription_VK" class="subscription_btn btn_2"name="know_about_us" value="VK"></input>
                <label for="subscription_8">Вконтакте</label>
              </div>
              <div class="form_radio">
                <input  type="radio" id="subscription_Friends" class="subscription_btn btn_3" name="know_about_us" value="Друзья"></input>
                <label for="subscription_Friends">Друзья</label> 
              </div>
              <div class="form_radio">
                <input  type="radio" id="subscription_Doctors" class="subscription_btn btn_3" name="know_about_us" value="Доктор"></input>
                <label for="subscription_Doctors">Доктор</label> 
              </div>
            </div>
          </div>
          
  
          <input class="add_btn" id="add_new_child" type="button" value="Добавить ученика">
        </form>   
    </div>
  </div>
    `;
  },
};

export const Ideas = {
  id: "ideas",
  title: "Администратор",
  render: (className = "container", ...rest) => {
    return `
<div class="container_ideas">
  <div class="input_wrapper">
    <h2 class="ideas_name">Сделать</h2>
    <input class="input_field text" type="text" placeholder="Введите текст" />
    <button class="add_1">+</button>
    <div class="out-1"></div>
  </div>
  <div class="input_wrapper">
    <h2 class="ideas_name">Позвонить</h2>
    <input class="input_field_2 text" type="text" placeholder="Введите текст" />
    <button class="add_2">+</button>
    <div class="out-2"></div>
  </div>
  <div class="input_wrapper">
    <h2 class="ideas_name">Написать</h2>
    <input class="input_field_3 text" type="text" placeholder="Введите текст" />
    <button class="add_3">+</button>
    <div class="out-3"></div>
  </div>
  <div class="input_wrapper">
    <h2 class="ideas_name">Идеи</h2>
    <input class="input_field_4 text" type="text" placeholder="Введите текст" />
    <button class="add_4">+</button>
    <div class="out-4"></div>
  </div>
</div>

    `;
  },
};

export const Admin_timetable = {
  id: "admin_timetable",
  title: "Администратор",
  render: (className = "container", ...rest) => {
    return `
    <div class="container_loader">
      <div class="wrapper">
        <div class="loader">
          <div class="spinner"></div>
        </div>
        <div class="loader">
          <div class="spinner"></div>
        </div>
        <div class="loader">
          <div class="spinner"></div>
        </div>
        <div class="loader">
          <div class="spinner"></div>
        </div>
        <div class="loader">
          <div class="spinner"></div>
        </div>
        <div class="loader">
          <div class="spinner"></div>
        </div>
        <div class="loader">
          <div class="spinner"></div>
        </div>
        <div class="loader">
          <div class="spinner"></div>
        </div>
      </div>
    </div>
    <div class="timetable__wrapper">
      <div class="container_calendar">
        <div class="title-wrapper__calendar">
          <div class="out-1__calendar"></div>
        </div>
        <div class="out-2__calendar"></div>
      </div>
      <div class="out_inform_per_day__calendar"></div>
      <div class="out-3__timetable" id="list__calendar"></div>
    </div>

    `;
  },
};
