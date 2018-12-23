<template>
  <div class="row">
    <div class="row mainPageHeader">
      <div class="col s12 navbar-fixed">
        <nav>
          <div class="nav-wrapper blue darken-4 z-depth-1">
            <ul class="left hide-on-small-only">
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
      <h5 class="center-align">
        <b>Нормативно-правові акти</b>
      </h5>
      <ol class="infoList">
        <li>
          <a href="http://zakon0.rada.gov.ua/laws/show/254%D0%BA/96-%D0%B2%D1%80">Конституція 
          України</a>
        </li>
        <li>
          <a href="http://zakon0.rada.gov.ua/laws/main/2456-12">Закон України «Про природно-заповідний 
          фонд України»</a>
        </li>
        <li>
          <a href="http://zakon2.rada.gov.ua/laws/show/1264-12">Закон України «Про охорону навколишнього 
          природного середовища»</a>
        </li>
        <li>
          <a href="http://zakon2.rada.gov.ua/laws/show/z0548-00">Положення про наукову 
          діяльність заповідників та національних природних парків України</a>
        </li>
        <li>Положення «Про природний заповідник «Дніпровсько-Орільський»</li>
        <li>Положення про наукову та науково-технічну діяльність природного заповідника 
          «Дніпровсько-Орільський»</li>
        <li>Положення про екологічну освітньо-виховну роботу природного заповідника 
          «Дніпровсько-Орільський»</li>
        <li>Положення про науковий відділ природного заповідника «Дніпровсько-Орільський»</li>
        <li>Проект організації природного заповідника «Дніпровсько-Орільський» та охорони 
          його природних комплексів</li>
        <li>Положення про Науково-технічну Раду природного заповідника «Дніпровсько-Орільський»</li>
      </ol>
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
  nav a {
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
  }
  a {
    text-decoration: none;
  }
  .infoList a:hover {
    color: #0000ff;
  }
</style>
