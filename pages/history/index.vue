<template>
  <div class="row">
    <div class="row mainPageHeader">
      <div class="col s12 hide-on-med-and-down navbar-fixed">
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
        &emsp;&emsp;&emsp;На особливу цінність і мальовничість природного комплексу долини р. Дніпро
         в районі сучасного розташування ПЗ звертав увагу ще Г.Л. де Боплан (місцевість в районі 
         Таромського Рогу). Особливу мальовничість місцевості і багатство природи підкреслював 
         неодноразово згодом у своїх працях історик Д.І. Яворницький. Першим вченим-натуралістом, 
         котрий досліджував флору і лісову рослинність майбутнього заповідника, був І.Я. Акінфієв, 
         який першим висловив публічно думку про необхідність збереження плавневих лісів у долині 
         Дніпра біля тогочасного Катеринослава. Системні дослідження природи Таромських і Обухівських 
         плавнів розпочали вже у 1920-х роках учні і послідовники І.Я. Акінфієва – О.А. Гросгейм 
         (ботаніка), М.П. Акімов (зооекологія), О.А. Єліашевич, Є.І. Пестушко, 
         К.Є. Корещук (геоботаніка), О.Л. Бельгард і Т.Ф. Кириченко (типологія заплавних лісів). 
         Однак попри заклики вчених заповідати плавні у ще 1930-х роках, реальні кроки з їх охорони 
         здійснили вже у другій половині ХХ ст., коли було оголошено два загальнозоологічних 
         заказники державного (на той час республіканського) значення – «Обухівські заплави» (1974) 
         і «Таромський виступ» (1983). У той період, з кінця 1960-х рр. і до моменту створення 
         заповідника у плавнях р. Дніпра між сс. Кіровське (Обухівка), Таромське і Миколаївка 
         працював загін Комплексної експедиції ДНУ з вивчення степових лісів та експедиційний 
         загін НДІ гідробіології ДНУ, діяльність яких не лише мала важливе значення для вивчення 
         природи заплавних лісів, але й для формування суспільної думки про високу природоохоронну 
         цінність території та необхідність її якнайшвидшого заповідання.
      </p>
      <p>
        &emsp;&emsp;&emsp;Заказник «Обухівські заплави» створили Постановою Ради Міністрів від 
        28.10.1974 р. № 500, згідно з якою його територія складала 631,0 га на землях Кіровського 
        лісництва Дніпропетровського лісгоспзагу.
      </p>
      <p>
        &emsp;&emsp;&emsp;Загальнозоологічний заказник «Таромський виступ» площею 2181,2 га, був 
        створений у 1983 р. і підпорядковувався Дніпродзержиснькому лісгоспзагу. Окрім комплексної 
        охорони фауни та природних екосистем у цих заказниках, особливу увагу приділяли боротьбі з 
        браконьєрським рибним промислом, і паралельно зі статусом об’єктів природного-заповідного 
        фонду, обидві території отримали також статус охоронюваних рибінспецію нерестовищ, а ліси 
        Обухівської заплави також мали статус мисливського заказника. Саме на основі цих заказників 
        і було створено у 1990 р. природний заповідник «Дніпровсько-Орільський». Його створення 
        у той час було результатом дуже напруженої громадської боротьби, вагому роль  в якій 
        відіграли принципова позиція деяких місцевих жителів, в тому числі інспекторів рибоохорони 
        та єгерів, активна і цілеспрямована діяльність Дніпропетровського відділення Українського 
        товариства охорони природи (очолюваного на той час к.б.н. А.Г. Линдею), і потужна підтримка 
        з боку дніпропетровських вчених-біологів (проф. В.Л. Булахов, С.М. Тарасенко, А.А. Губкін 
        та ін.). Щоправда, за задумом вчених, до складу заповідника мали увійти також цінні лісові 
        ділянки й на лівому березі р. Орелі, де існували цінні ізольовані осередки бореальної флори 
        в березо-осикових гайках і сфагнових болітцях (на чому наголошували зокрема ботаніки В.В. 
        Тарасов, Д.Г. Ємшанов і Б.О. Барановський), а також Миколаївський піщаний степ, який було 
        запропоновано включити до заповідника на наступному етапі. Але цього так і не сталося до 
        теперішнього часу, а острівці бореальної рослинності на лівому березі р. Орель біля 
        с. Кіровське за цей час майже повністю знищені внаслідок забудови, лісових пожеж і вирубок.
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
