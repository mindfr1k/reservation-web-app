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
        &emsp;&emsp;&emsp;Заповідники виникли як організаційна форма охорони природи, 
        що мала на меті зберігати еталонні її ділянки для досліджень фундаментальних 
        закономірностей функціонування живої природи та пізнання законів еволюції органічного світу.
      </p>
      <p>
        &emsp;&emsp;&emsp;Відповідно до Закону України «Про природно-заповідний фонд України» (1992 р.), 
        природні заповідники – це природоохоронні, науково-дослідні установи загальнодержавного 
        значення, які створюються з метою збереження в природному стані типових або унікальних 
        для даної ландшафтної зони природних комплексів з усією сукупністю їх компонентів, 
        вивчення природних процесів і явищ, що відбуваються в них, розробки наукових засад 
        охорони природи, ефективного використання природних ресурсів та екологічної безпеки.
      </p>
      <p>
        &emsp;&emsp;&emsp;Природний заповідник «Дніпровсько-Орільський» (далі ПЗ) був створений відповідно до 
        Постанови Ради Міністрів Української УРСР № 262 від 15.09.1990  р. з метою збереження 
        унікального ландшафту долини р. Дніпро та посилення охорони рідкісних видів флори і 
        фауни Середнього Придніпров’я, що мають важливе природоохоронне, естетичне та наукове значення.
      </p>
      <p>
        &emsp;&emsp;&emsp;Заповідник підпорядковано Державному агентству лісових ресурсів України.
      </p>
      <p>
        &emsp;&emsp;&emsp;Основною довгостроковою метою створення і функціонування заповідника «Дніпровсько-Орільський»
         є збереження ландшафтного та біотичного різноманіття межиріччя рр. Дніпро-Оріль.
      </p>
      <p>
        &emsp;&emsp;&emsp;Для досягнення цієї цілі Заповідник має виконувати такі завдання:
      </p>
      <ul class="infoList">
        <li>охорона території Заповідника з усіма його природними комплексами та об’єктами;</li>
        <li>збереження біотичного екосистемного та ландшафтного різноманіття на його території;</li>
        <li>
          проведення наукових досліджень та спостережень за станом навколишнього природного 
          середовища на території Заповідника, його охоронної зони, сприяння проведенню таких 
          робіт іншими науковими організаціями;
        </li>
        <li>
          охорона умов відтворення, відновлення чисельності, збереження генофонду рідкісних та 
          типових видів рослин, тварин та мікроорганізмів;
        </li>
        <li>організація протипожежної охорони природних комплексів;</li>
        <li>сприяння екологічній освіті та екологічному вихованню населення тощо;</li>
        <li>координація і проведення наукових досліджень на територіях та об’єктах 
          природно-заповідного фонду у регіоні;
        </li>
        <li>підтримання загального екологічного балансу у регіоні.</li>
      </ul>
      <p>
        &emsp;&emsp;&emsp;Заповідник відіграє надзвичайно важливу роль як єдиний в умовах північної частини степового
         Придніпров’я осередок, де охороняється добре збережений комплекс долинно-терасового ландшафту 
         р. Дніпро з типовим, і в той же час специфічним, поєднанням лісових, лучних, водних, 
         болотних та піщаних рослинних угруповань. Це єдиний в Україні природний заповідник, що 
         репрезентує переважно азональні прирічкові біоценози. Для території заповідника характерний 
         високий рівень різноманіття на тлі майже повного знищення (затоплення) інших подібних 
         екосистем при зарегулюванні режиму Дніпра. В той же час територія зазнає потужного 
         антропогенного тиску, який створює реальну загрозу існуванню сучасних екосистем, незважаючи 
         на наявність заповідного режиму.
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
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
  }
</style>
