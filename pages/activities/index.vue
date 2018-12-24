<template>
  <div class="row">
    <div class="row mainPageHeader">
      <div class="col s12 hide-on-med-and-down navbar-fixed">
        <nav>
          <div class="nav-wrapper blue darken-4 z-depth-1">
            <ul class="left hide-on-med-and-down">
              <li>
                <nuxt-link to="/history">
                  Історія створення заповідника
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/environment">
                  Інформація про довкілля
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/legal">
                  Нормативно-правові акти
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/activities">
                  Наукова та науково-технічна діяльність
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contacts">
                  Контакти
                </nuxt-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="col s12 center-align">
        <img src="/logo.png" class="responsive-img mainLogo">
      </div>
      <div class="col s12 center-align">
        <span class="mainTitle">{{ $store.state.reservationTitle }}</span>  
      </div>
      <div class="col s12 center-align mainInfo">{{ $store.state.reservationOwner }}</div>
    </div>
    <div class="col l2 center-align hide-on-med-and-down">
      
    </div>
    <div class="col s12 m12 l8 left-align mainText">
      <p>
        &emsp;&emsp;&emsp;<u>Наукові дослідження</u> на території Заповідника проводяться <u>з метою</u> 
        вивчення природних процесів, забезпечення постійного спостереження за їх змінами, екологічного 
        прогнозування, розробки наукових основ охорони, відтворення і раціонального використання 
        природних ресурсів відповідно до «Положення про наукову та науково-технічну діяльність 
        природних та біосферних заповідників та національних природних парків», затвердженого 
        Наказом Міністерства екології та природних ресурсів України від 29 жовтня 2015 року № 414 
        та зареєстрованого в Мін’юсті 18.11.2015 р. за № 1444/27889.
      </p>
      <p>
        &emsp;&emsp;&emsp;<u>Основні напрями наукових досліджень</u> на території Заповідника 
        визначаються з урахуванням програм і планів науково-дослідних робіт, які затверджуються 
        Національною академією наук України, Мінприроди та Держлісагентством України.
      </p>
      <p>
        &emsp;&emsp;&emsp;<u>Основною метою ведення наукової роботи</u> у Заповіднику є 
        встановлення особливостей функціонування екосистем, що входять до складу Заповідника 
        для подальшого їх збереження та відновлення.
      </p>
      <p>
        &emsp;&emsp;&emsp;Для досягнення мети виконуються наступні <u>науко-дослідні завдання</u>:
      </p>
      <ul class="infoList">
        <li>проведення інвентаризаційних робіт для встановлення видового складу флори та фауни 
          основних груп живих організмів на території Заповідника та його охоронній зоні;</li>
        <li>проведення моніторингових досліджень параметрів багатовидових угруповань живих 
          організмів та популяцій рідкісних видів рослин та тварин;</li>
        <li>проведення наукових досліджень екологічного характеру для встановлення особливостей 
          взаємодії різних компонентів екосистем на території Заповідника.</li>
        <li>розробка наукових засад оптимізації режиму охорони та відновлення екосистем 
          Заповідника та його охоронної зони.</li>
      </ul>
      <p>
        &emsp;&emsp;&emsp;<u>Основними об’єктами досліджень</u> є водні екосистеми р. Дніпра, 
        його приток та рукавів, заплавні ліси у долинно-терасовому ландшафті та екосистеми аренної 
        тераси Дніпра (соснові бори та ділянки псамофільного степу).
      </p>
      <p>
        &emsp;&emsp;&emsp;Для ведення наукових досліджень у складі Заповідника створений 
        <u>науковий відділ</u>. Основною формою узагальнення наукових досліджень та спостережень 
        на території природного заповідника є «Літопис природи». Окремі результати наукових 
        досліджень публікуються в наукових (в тому числі затверджених ВАК України) та 
        науково-популярних виданнях з метою популяризації знань про природу Заповідника. 
        За відповідними розділами літопису, науковими та науково-популярними публікаціями 
        та результатами досліджень зберігається авторське право співробітників наукового 
        відділу природного заповідника “Дніпровсько-Орільський”.
      </p>
      <p>
        &emsp;&emsp;&emsp;<u>Основними місцями збору польового матеріалу</u> на території заповідника 
        є система еталонних моніторингових площ, маршрутів та точок відбору проб.
      </p>
      <p>
        &emsp;&emsp;&emsp;<u>Методики збору польового матеріалу</u> визначаються “Програмою Літопису
        природи для заповідників та національних парків», яка затверджена спільним наказом 
        Міністерства екології та природних ресурсів України та національної академії наук України 
        від 25.11.2002 № 465/430.
      </p>
    </div>
    <div class="col l2 center-align hide-on-med-and-down">

    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .row {
    background-color: #cccccc;
    background-image: url('/mainPageNav.jpg');
    margin-bottom: 0;
  }
  .mainLogo {
    max-height: 25vh;
    margin-top: 1rem;
  }
  .mainTitle {
    color: #ffffff;
    font-size: 3rem;
    font-weight: 700;
    text-shadow: 1px 1px 0 #999999,
    -1px 1px 0 #999999,
    1px -1px 0 #999999,
    -1px -1px 0 #999999,
    0px 1px 0 #999999,
    0px -1px 0 #999999,
    -1px 0px 0 #999999,
    1px 0px 0 #999999,
    2px 2px 0 #999999,
    -2px 2px 0 #999999,
    2px -2px 0 #999999,
    -2px -2px 0 #999999,
    0px 2px 0 #999999,
    0px -2px 0 #999999,
    -2px 0px 0 #999999,
    2px 0px 0 #999999,
    1px 2px 0 #999999,
    -1px 2px 0 #999999,
    1px -2px 0 #999999,
    -1px -2px 0 #999999,
    2px 1px 0 #999999,
    -2px 1px 0 #999999,
    2px -1px 0 #999999,
    -2px -1px 0 #999999;
  }
  .mainInfo {
    color: #999999;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-shadow: 1px 1px 0 #ffffff,
    -1px 1px 0 #ffffff,
    1px -1px 0 #ffffff,
    -1px -1px 0 #ffffff,
    0px 1px 0 #ffffff,
    0px -1px 0 #ffffff,
    -1px 0px 0 #ffffff,
    1px 0px 0 #ffffff,
    2px 2px 0 #ffffff,
    -2px 2px 0 #ffffff,
    2px -2px 0 #ffffff,
    -2px -2px 0 #ffffff,
    0px 2px 0 #ffffff,
    0px -2px 0 #ffffff,
    -2px 0px 0 #ffffff,
    2px 0px 0 #ffffff,
    1px 2px 0 #ffffff,
    -1px 2px 0 #ffffff,
    1px -2px 0 #ffffff,
    -1px -2px 0 #ffffff,
    2px 1px 0 #ffffff,
    -2px 1px 0 #ffffff,
    2px -1px 0 #ffffff,
    -2px -1px 0 #ffffff;
  }
  .mainText {
    background-color: #ffffff;
  }
  a {
    color: black;
    text-decoration: underline;
  }
  .infoList li {
    list-style-type: disc;
  }
  .infoList:not(.browser-default) {
    padding-left: 1.5rem;
  }
  .infoList li {
    font-size: 1.5rem;
  }
  p {
    font-size: 1.5rem;
  }
  .mainPageNav {
    min-height: 40vh;
    width: 100%;
  }
  .navbar-fixed {
    padding: 0;
  }
  .nav-wrapper {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }
  a {
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
  }
  .side-nav {
    background-color: #0d47a1;
    color: #ffffff;
  }
  .side-nav li > a {
    color: #ffffff;
  }
  .button-collapse {
    margin-left: 1.5rem;
  }
</style>
