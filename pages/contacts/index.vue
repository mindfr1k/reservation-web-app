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
      <p>
        &emsp;&emsp;&emsp;Юридична адреса: Дніпропетровська область, Дніпровський р-н., смт Обухівка.
      </p>
      <p>
        &emsp;&emsp;&emsp;Поштова адреса: 52030, Дніпропетровська область, Дніпровський р-н., 
        смт. Обухівка.
      </p>
      <p>
        &emsp;&emsp;&emsp;e-mail: dopz@ukr.net
      </p>
      <p>
        &emsp;&emsp;&emsp;<a href="https://www.facebook.com/dniproorilreserve/">Офіційна сторінка 
        у FB</a>
      </p>
      <p>
        &emsp;&emsp;&emsp;Директор: Яловий Петро Олександрович
      </p>
      <p>
        &emsp;&emsp;&emsp;В.о. заступника директора з наукової роботи: Андрусевич Катерина 
        Вадимівна
      </p>
      <p>
        &emsp;&emsp;&emsp;Головний природознавець: Акулова Ірина Анатоліївна
      </p>
      <p>
        &emsp;&emsp;&emsp;Тел. (056) 735 121 77
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
    color: #000000;
    text-decoration: none;
  }
  .mainText a:hover {
    color: #0000ff;
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
</style>
