document.addEventListener("DOMContentLoaded", () => {
  // Анимация. Если попадает в область видимость, добавляем класс active который запускает анимацию. При скроллинге тоже проверяет
  const pAnimations = document.querySelectorAll(".p-animation");
  const pAnimationsCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Отключаем слежку
      }
    });
  };
  const pAnimationsOptions = {
    threshold: 0.5,
  };
  pAnimations.forEach((pAnimation) => {
    const pAnimationObserver = new IntersectionObserver(
      pAnimationsCallback,
      pAnimationsOptions
    );
    pAnimationObserver.observe(pAnimation); // Отслеживаем
  });

  const header = document.querySelector(".header");
  const main = document.querySelector(".main");

  // Получаем список масок телефона phones.json
  const phones = fetch("phones.json")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  // Слежение за скролл страницы
  window.addEventListener("scroll", () => {
    // Если больше 200 пикселей страница, показываем шапку
    if (window.scrollY > 200) {
      header.classList.add("fixed");
      main.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
      main.classList.remove("fixed");
    }
  });

  // Главный экран - слайдер Swiper, документация https://swiperjs.com/swiper-api
  const mains = document.querySelectorAll(".main");
  if (mains[0]) {
    mains.forEach((main) => {
      const _swiperElement1 = main.querySelector(".main__swiper_1");
      const _swiperElement2 = main.querySelector(".main__swiper_2");
      const _swiperPagination1 = main.querySelector(
        ".main__swiper-pagination_1 .swiper-pagination"
      );
      const _swiperPagination2 = main.querySelector(
        ".main__swiper-pagination_2 .swiper-pagination"
      );

      const _swiper1 = new Swiper(_swiperElement1, {
        speed: _swiperElement1.dataset.speed,
        spaceBetween: 10,
        autoplay: {
          delay: _swiperElement1.dataset.autoplay,
          disableOnInteraction: false,
        },
        pagination: {
          el: _swiperPagination1,
          clickable: true,
        },
        allowTouchMove: false,
        effect: "fade",
        loop: true,
        rewind: true,
        on: {
          afterInit: function (swiper) {
            _swiperPagination1.style.setProperty(
              "--count",
              swiper.pagination.bullets.length
            ); // Передаем количество пагинаций
            main.querySelector(
              ".main__swiper-pagination_1 .main__nums-end"
            ).textContent =
              swiper.pagination.bullets.length < 10
                ? "0" + swiper.pagination.bullets.length
                : swiper.pagination.bullets.length; // Общее количество слайдов
          },
          slideChange: function (swiper) {
            main.querySelector(
              ".main__swiper-pagination_1 .main__nums-start"
            ).textContent =
              swiper.realIndex + 1 < 10
                ? "0" + (swiper.realIndex + 1)
                : swiper.realIndex + 1; // Показывает число нужного слайда
          },
        },
      });
      const _swiper2 = new Swiper(_swiperElement2, {
        speed: _swiperElement1.dataset.speed,
        spaceBetween: 0,
        autoplay: {
          delay: _swiperElement2.dataset.autoplay,
          disableOnInteraction: false,
        },
        pagination: {
          el: _swiperPagination2,
          clickable: true,
        },
        allowTouchMove: true,
        loop: true,
        rewind: true,
        on: {
          afterInit: function (swiper) {
            _swiperPagination2.style.setProperty(
              "--count",
              swiper.pagination.bullets.length
            ); // Передаем количество пагинаций
            main.querySelector(
              ".main__swiper-pagination_2 .main__nums-end"
            ).textContent =
              swiper.pagination.bullets.length < 10
                ? "0" + swiper.pagination.bullets.length
                : swiper.pagination.bullets.length; // Общее количество слайдов
          },
          slideChange: function (swiper) {
            main.querySelector(
              ".main__swiper-pagination_2 .main__nums-start"
            ).textContent =
              swiper.realIndex + 1 < 10
                ? "0" + (swiper.realIndex + 1)
                : swiper.realIndex + 1; // Показывает число нужного слайда
          },
        },
      });

      // Следим за видимостью экрана, если видно запускаем автоплей слайдера иначе отключаем
      new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting) {
          // Если в поле видимости, запускам. Иначе отключаем
          _swiper1.autoplay.resume();
        } else {
          _swiper1.autoplay.pause();
        }
      }).observe(_swiperElement1);

      new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting) {
          // Если в поле видимости, запускам. Иначе отключаем
          _swiper2.autoplay.resume();
        } else {
          _swiper2.autoplay.pause();
        }
      }).observe(_swiperElement2);

      _swiper1.autoplay.pause(); // Отключаем автоплей. Стоит слежение за видимостью экрана по необходимости запустит
      _swiper2.autoplay.pause(); // Отключаем автоплей. Стоит слежение за видимостью экрана по необходимости запустит

      // На телефоне фиксируем высоту формы
      const form = main.querySelector(".main__form");
      if (window.innerWidth < 1140) {
        form.style.minHeight = form.scrollHeight + "px";
      } else {
        form.style.minHeight = "";
      }
    });
  }

  // Список карточек - слайдер Swiper, документация https://swiperjs.com/swiper-api
  const cards = document.querySelectorAll(".cards");
  if (cards[0]) {
    cards.forEach((card) => {
      const _swiperElement = card.querySelector(".swiper");
      const _swiperWrapper = _swiperElement.querySelector(".swiper-wrapper");
      const _swiperPagination = card.querySelector(".swiper-pagination");
      const _swiperScrollbar = card.querySelector(".swiper-scrollbar");
      _swiperWrapper.classList.remove("active"); // По умолчанию стоит класс чтобы зафиксировать карточки, чтобы не было дерганий. Потом удаляем и инициализируем Слайдер
      const _swiper = new Swiper(_swiperElement, {
        speed: _swiperElement.dataset.speed,
        slidesPerView: "auto",
        spaceBetween: 15,
        slidesPerGroup: 2,
        pagination: {
          el: _swiperPagination,
          clickable: true,
          type: "custom",
          renderCustom: function (swiper, current, total) {
            let start = current < 10 ? "0" + current : current;
            let end = total - 1 < 10 ? "0" + total : total;
            return `<span class="cards__nums-start">${start}</span>/<span class="cards__nums-end">${end}</span>`;
          },
        },
        scrollbar: {
          el: _swiperScrollbar,
          draggable: true,
          snapOnRelease: true,
        },
        navigation: {
          nextEl: card.querySelector(".swiper-button-next"),
          prevEl: card.querySelector(".swiper-button-prev"),
        },
        breakpoints: {
          320: {
            allowTouchMove: true,
            spaceBetween: 5,
          },
          768: {
            spaceBetween: 15,
            allowTouchMove: false,
          },
        },
      });
    });
  }

  const examples = {
    AC: "40123",
    AD: "312345",
    AE: "501234567",
    AF: "701234567",
    AG: "2684641234",
    AI: "2642351234",
    AL: "672123456",
    AM: "77123456",
    AO: "923123456",
    AR: "91123456789",
    AS: "6847331234",
    AT: "664123456",
    AU: "412345678",
    AW: "5601234",
    AX: "412345678",
    AZ: "401234567",
    BA: "61123456",
    BB: "2462501234",
    BD: "1812345678",
    BE: "470123456",
    BF: "70123456",
    BG: "43012345",
    BH: "36001234",
    BI: "79561234",
    BJ: "90011234",
    BL: "690001234",
    BM: "4413701234",
    BN: "7123456",
    BO: "71234567",
    BQ: "3181234",
    BR: "11961234567",
    BS: "2423591234",
    BT: "17123456",
    BW: "71123456",
    BY: "294911911",
    BZ: "6221234",
    CA: "5062345678",
    CC: "412345678",
    CD: "991234567",
    CF: "70012345",
    CG: "061234567",
    CH: "781234567",
    CI: "0123456789",
    CK: "71234",
    CL: "221234567",
    CM: "671234567",
    CN: "13123456789",
    CO: "3211234567",
    CR: "83123456",
    CU: "51234567",
    CV: "9911234",
    CW: "95181234",
    CX: "412345678",
    CY: "96123456",
    CZ: "601123456",
    DE: "15123456789",
    DJ: "77831001",
    DK: "32123456",
    DM: "7672251234",
    DO: "8092345678",
    DZ: "551234567",
    EC: "991234567",
    EE: "51234567",
    EG: "1001234567",
    EH: "650123456",
    ER: "7123456",
    ES: "612345678",
    ET: "911234567",
    FI: "412345678",
    FJ: "7012345",
    FK: "51234",
    FM: "3501234",
    FO: "211234",
    FR: "612345678",
    GA: "06031234",
    GB: "7400123456",
    GD: "4734031234",
    GE: "555123456",
    GF: "694201234",
    GG: "7781123456",
    GH: "231234567",
    GI: "57123456",
    GL: "221234",
    GM: "3012345",
    GN: "601123456",
    GP: "690001234",
    GQ: "222123456",
    GR: "6912345678",
    GT: "51234567",
    GU: "6713001234",
    GW: "955012345",
    GY: "6091234",
    HK: "51234567",
    HN: "91234567",
    HR: "921234567",
    HT: "34101234",
    HU: "201234567",
    ID: "812345678",
    IE: "850123456",
    IL: "502345678",
    IM: "7924123456",
    IN: "8123456789",
    IO: "3801234",
    IQ: "7912345678",
    IR: "9123456789",
    IS: "6111234",
    IT: "3123456789",
    JE: "7797712345",
    JM: "8762101234",
    JO: "790123456",
    JP: "9012345678",
    KE: "712123456",
    KG: "700123456",
    KH: "91234567",
    KI: "72001234",
    KM: "3212345",
    KN: "8697652917",
    KP: "1921234567",
    KR: "1020000000",
    KW: "50012345",
    KY: "3453231234",
    KZ: "7710009998",
    LA: "2023123456",
    LB: "71123456",
    LC: "7582845678",
    LI: "660234567",
    LK: "712345678",
    LR: "770123456",
    LS: "50123456",
    LT: "61234567",
    LU: "628123456",
    LV: "21234567",
    LY: "912345678",
    MA: "650123456",
    MC: "612345678",
    MD: "62112345",
    ME: "67622901",
    MF: "690001234",
    MG: "321234567",
    MH: "2351234",
    MK: "72345678",
    ML: "65012345",
    MM: "92123456",
    MN: "88123456",
    MO: "66123456",
    MP: "6702345678",
    MQ: "696201234",
    MR: "22123456",
    MS: "6644923456",
    MT: "96961234",
    MU: "52512345",
    MV: "7712345",
    MW: "991234567",
    MX: "12221234567",
    MY: "123456789",
    MZ: "821234567",
    NA: "811234567",
    NC: "751234",
    NE: "93123456",
    NF: "381234",
    NG: "8021234567",
    NI: "81234567",
    NL: "612345678",
    NO: "40612345",
    NP: "9841234567",
    NR: "5551234",
    NU: "8884012",
    NZ: "211234567",
    OM: "92123456",
    PA: "61234567",
    PE: "912345678",
    PF: "87123456",
    PG: "70123456",
    PH: "9051234567",
    PK: "3012345678",
    PL: "512345678",
    PM: "551234",
    PR: "7872345678",
    PS: "599123456",
    PT: "912345678",
    PW: "6201234",
    PY: "961456789",
    QA: "33123456",
    RE: "692123456",
    RO: "712034567",
    RS: "601234567",
    RU: "9123456789",
    RW: "720123456",
    SA: "512345678",
    SB: "7421234",
    SC: "2510123",
    SD: "911231234",
    SE: "701234567",
    SG: "81234567",
    SH: "51234",
    SI: "31234567",
    SJ: "41234567",
    SK: "912123456",
    SL: "25123456",
    SM: "66661212",
    SN: "701234567",
    SO: "71123456",
    SR: "7412345",
    SS: "977123456",
    ST: "9812345",
    SV: "70123456",
    SX: "7215205678",
    SY: "944567890",
    SZ: "76123456",
    TA: "8999",
    TC: "6492311234",
    TD: "63012345",
    TG: "90112345",
    TH: "812345678",
    TJ: "917123456",
    TK: "7290",
    TL: "77212345",
    TM: "66123456",
    TN: "20123456",
    TO: "7715123",
    TR: "5012345678",
    TT: "8682911234",
    TV: "901234",
    TW: "912345678",
    TZ: "621234567",
    UA: "501234567",
    UG: "712345678",
    US: "2015550123",
    UY: "94231234",
    UZ: "912345678",
    VA: "3123456789",
    VC: "7844301234",
    VE: "4121234567",
    VG: "2843001234",
    VI: "3406421234",
    VN: "912345678",
    VU: "5912345",
    WF: "821234",
    WS: "7212345",
    XK: "43201234",
    YE: "712345678",
    YT: "639012345",
    ZA: "711234567",
    ZM: "955123456",
    ZW: "712345678",
  };

  // Перевод
  const _i18n = {
    ru: {
      selectedCountryAriaLabel: "Выбранная страна",
      countryListAriaLabel: "Список стран",
      searchPlaceholder: "Поиск",
      af: "Афганистан",
      ax: "Аландские острова",
      al: "Албания",
      dz: "Алжир",
      as: "Американское Самоа",
      ad: "Андорра",
      ao: "Ангола",
      ai: "Ангилья",
      aq: "Антарктида",
      ag: "Антигуа и Барбуда",
      ar: "Аргентина",
      am: "Армения",
      aw: "Аруба",
      au: "Австралия",
      at: "Австрия",
      az: "Азербайджан",
      bs: "Багамы",
      bh: "Бахрейн",
      bd: "Бангладеш",
      bb: "Барбадос",
      by: "Беларусь",
      be: "Бельгия",
      bz: "Белиз",
      bj: "Бенин",
      bm: "Бермуды",
      bt: "Бутан",
      bo: "Боливия (Многонациональное Государство)",
      bq: "Бонайре, Синт-Эстатиус и Саба",
      ba: "Босния и Герцеговина",
      bw: "Ботсвана",
      bv: "Остров Буве",
      br: "Бразилия",
      io: "Британская территория в Индийском океане",
      bn: "Бруней-Даруссалам",
      bg: "Болгария",
      bf: "Буркина-Фасо",
      bi: "Бурунди",
      kh: "Камбоджа",
      cm: "Камерун",
      ca: "Канада",
      cv: "Кабо-Верде",
      ky: "Каймановы острова",
      cf: "Центральноафриканская Республика",
      td: "Чад",
      cl: "Чили",
      cn: "Китай",
      cx: "Остров Рождества",
      cc: "Кокосовые (Килинг) острова",
      co: "Колумбия",
      km: "Коморы",
      cg: "Конго",
      cd: "Конго (Демократическая Республика)",
      ck: "Острова Кука",
      cr: "Коста-Рика",
      ci: "Кот-д’Ивуар",
      hr: "Хорватия",
      cu: "Куба",
      cw: "Кюрасао",
      cy: "Кипр",
      cz: "Чехия",
      dk: "Дания",
      dj: "Джибути",
      dm: "Доминика",
      do: "Доминиканская Республика",
      ec: "Эквадор",
      eg: "Египет",
      sv: "Сальвадор",
      gq: "Экваториальная Гвинея",
      er: "Эритрея",
      ee: "Эстония",
      et: "Эфиопия",
      fk: "Фолклендские (Мальвинские) острова",
      fo: "Фарерские острова",
      fj: "Фиджи",
      fi: "Финляндия",
      fr: "Франция",
      gf: "Французская Гвиана",
      pf: "Французская Полинезия",
      tf: "Французские Южные территории",
      ga: "Габон",
      gm: "Гамбия",
      ge: "Грузия",
      de: "Германия",
      gh: "Гана",
      gi: "Гибралтар",
      gr: "Греция",
      gl: "Гренландия",
      gd: "Гренада",
      gp: "Гваделупа",
      gu: "Гуам",
      gt: "Гватемала",
      gg: "Гернси",
      gn: "Гвинея",
      gw: "Гвинея-Бисау",
      gy: "Гайана",
      ht: "Гаити",
      hm: "Остров Херд и острова Макдональд",
      va: "Ватикан",
      hn: "Гондурас",
      hk: "Гонконг",
      hu: "Венгрия",
      is: "Исландия",
      in: "Индия",
      id: "Индонезия",
      ir: "Иран (Исламская Республика)",
      iq: "Ирак",
      ie: "Ирландия",
      ac: "остров Вознесения",
      im: "Остров Мэн",
      il: "Израиль",
      it: "Италия",
      jm: "Ямайка",
      jp: "Япония",
      je: "Джерси",
      jo: "Иордания",
      kz: "Казахстан",
      ke: "Кения",
      ki: "Кирибати",
      kp: "КНДР",
      kr: "Республика Корея",
      xk: "Косово",
      kw: "Кувейт",
      kg: "Кыргызстан",
      la: "Лаос",
      lv: "Латвия",
      lb: "Ливан",
      ls: "Лесото",
      lr: "Либерия",
      ly: "Ливия",
      li: "Лихтенштейн",
      lt: "Литва",
      lu: "Люксембург",
      mo: "Макао",
      mk: "Северная Македония",
      mg: "Мадагаскар",
      mw: "Малави",
      my: "Малайзия",
      mv: "Мальдивы",
      ml: "Мали",
      mt: "Мальта",
      mh: "Маршалловы Острова",
      mq: "Мартиника",
      mr: "Мавритания",
      mu: "Маврикий",
      yt: "Майотта",
      mx: "Мексика",
      fm: "Федеративные Штаты Микронезии",
      md: "Молдова (Республика)",
      mc: "Монако",
      mn: "Монголия",
      me: "Черногория",
      ms: "Монтсеррат",
      ma: "Марокко",
      mz: "Мозамбик",
      mm: "Мьянма",
      na: "Намибия",
      nr: "Науру",
      np: "Непал",
      nl: "Нидерланды",
      nc: "Новая Каледония",
      nz: "Новая Зеландия",
      ni: "Никарагуа",
      ne: "Нигер",
      ng: "Нигерия",
      nu: "Ниуэ",
      nf: "Остров Норфолк",
      mp: "Северные Марианские Острова",
      no: "Норвегия",
      om: "Оман",
      pk: "Пакистан",
      pw: "Палау",
      ps: "Государство Палестина",
      pa: "Панама",
      pg: "Папуа — Новая Гвинея",
      py: "Парагвай",
      pe: "Перу",
      ph: "Филиппины",
      pn: "Острова Питкэрн",
      pl: "Польша",
      pt: "Португалия",
      pr: "Пуэрто-Рико",
      qa: "Катар",
      re: "Реюньон",
      ro: "Румыния",
      ru: "Россия",
      rw: "Руанда",
      bl: "Сен-Бартелеми",
      sh: "Остров Святой Елены",
      kn: "Сент-Китс и Невис",
      lc: "Сент-Люсия",
      mf: "Сен-Мартен (Французская часть)",
      pm: "Сен-Пьер и Микелон",
      vc: "Сент-Винсент и Гренадины",
      ws: "Самоа",
      sm: "Сан-Марино",
      st: "Сан-Томе и Принсипи",
      sa: "Саудовская Аравия",
      sn: "Сенегал",
      rs: "Сербия",
      sc: "Сейшелы",
      sl: "Сьерра-Леоне",
      sg: "Сингапур",
      sx: "Синт-Мартен (Голландская часть)",
      sk: "Словакия",
      si: "Словения",
      sb: "Соломоновы Острова",
      so: "Сомали",
      za: "Южная Африка",
      gs: "Южная Георгия и Южные Сандвичевы Острова",
      ss: "Южный Судан",
      es: "Испания",
      lk: "Шри-Ланка",
      sd: "Судан",
      sr: "Суринам",
      sj: "Шпицберген и Ян-Майен",
      sz: "Свазиленд",
      se: "Швеция",
      ch: "Швейцария",
      sy: "Сирийская Арабская Республика",
      tw: "Тайвань",
      tj: "Таджикистан",
      tz: "Танзания (Объединенная Республика)",
      th: "Таиланд",
      tl: "Тимор-Лесте",
      tg: "Того",
      tk: "Токелау",
      to: "Тонга",
      tt: "Тринидад и Тобаго",
      tn: "Тунис",
      tr: "Турция",
      tm: "Туркменистан",
      tc: "Острова Теркс и Кайкос",
      tv: "Тувалу",
      ug: "Уганда",
      ua: "Украина",
      ae: "Объединенные Арабские Эмираты",
      gb: "Соединенное Королевство",
      us: "Соединенные Штаты Америки",
      um: "Внешние малые острова США",
      uy: "Уругвай",
      uz: "Узбекистан",
      vu: "Вануату",
      ve: "Венесуэла (Боливарианская Республика)",
      vn: "Вьетнам",
      vg: "Британские Виргинские острова",
      vi: "Виргинские острова (США)",
      wf: "Уоллис и Футуна",
      eh: "Западная Сахара",
      ye: "Йемен",
      zm: "Замбия",
      zw: "Зимбабве",
    },
    en: {},
  };
  $(document).ready(function () {
    if ($("input[type='tel']").length) {
      let listCountries = $.masksSort(
        $.masksLoad("/phones.json"),
        ["#"],
        /[0-9]|#/,
        "mask"
      );
      let maskOpts = {
        inputmask: {
          definitions: {
            "#": {
              validator: "[0-9]",
              cardinality: 1,
            },
          },
          showMaskOnHover: false,
          autoUnmask: true,
          clearMaskOnLostFocus: true,
        },
        match: /[0-9]/,
        replace: "#",
        listKey: "mask",
      };

      $("input[type='tel']").inputmasks(
        $.extend(true, {}, maskOpts, {
          list: listCountries,
        })
      );
    }
  });

  const tels = document.querySelectorAll('input[type="tel"]');
  if (tels[0]) {
    tels.forEach((tel) => {
      if (tel.value === "") {
        tel.value = "+";
      }
      const handleChange = () => {
        if (tel.value === "") {
          tel.value = "+";
        }
      };

      tel.addEventListener("input", handleChange);
      tel.addEventListener("change", handleChange);
      tel.addEventListener("keyup", handleChange);
      tel.addEventListener("blur", handleChange);
    });
  }

  // Кастомный select
  const pSelects = document.querySelectorAll(".p-select");
  if (pSelects[0]) {
    pSelects.forEach((pSelect) => {
      const input = pSelect.querySelector(".p-select__input");
      const btn = pSelect.querySelector(".p-select__btn");
      const current = btn.querySelector(".p-select__current"); // Выбранная опция
      const options = pSelect.querySelectorAll(
        ".p-select__options .p-select__option"
      ); // Список опций

      // Показываем список опции при клике
      btn.addEventListener("click", () => {
        pSelect.classList.toggle("active");
      });

      // Перебор опций и добавляем событие клика
      options.forEach((option) => {
        option.addEventListener("click", () => {
          input.value = option.textContent;
          current.textContent = option.textContent;

          pSelect.classList.remove("active");
          btn.classList.add("active"); // Выделяем активную опцию - меняется цвет серого на нужный по классу
        });
      });
    });
  }

  // Плавная прокрутка ссылок по якорю через #id
  const anchors = document.querySelectorAll('a[href*="#"]');
  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substr(1);

      const headerHeight = header.scrollHeight;
      const block = document.getElementById(blockID);
      if (block) {
        const offsetPosition =
          document.getElementById(blockID).getBoundingClientRect().top -
          (window.innerHeight -
            document.getElementById(blockID).offsetHeight +
            headerHeight) /
            2;
        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  }

  // Шаблон уведомления ошибки под полем
  function showMessageError(element, message, time = 5) {
    const parentBlock = element.closest(".p-form__input"); // Получаем блок, где будем добавлять уведомление или класс для стиля
    // Шаблон сообщения и добавляем в блок
    parentBlock.insertAdjacentHTML(
      "beforeend",
      `
            <div class="p-form__error">${message}</div>
        `
    );
    parentBlock.classList.add("invalid"); // Делаем обводку красным

    const activeMessage = parentBlock.querySelector(".p-form__error"); // Проверяем сообщение добавленное и запускаем таймер для скрытия, точнее удаления. При отправки формы у нас сбрасывается все сообщения при функции resetMessages(form)
    if (activeMessage) {
      setTimeout(() => {
        activeMessage.remove();
      }, time * 1000);
    }
  }

  // Сбрасываем все ошибки
  function resetMessages(form) {
    const messages = form.querySelectorAll(".p-form__error");
    if (messages[0]) {
      messages.forEach((message) => {
        message.remove();
      });
    }
    const invalids = form.querySelectorAll(".invalid");
    invalids.forEach((invalid) => {
      invalid.classList.remove("invalid");
    });
  }

  // Валидация - сообщения с языками и методы для проверки
  const validator = {
    messages: {
      ru: {
        required: "Поле обязательно для заполнения",
        letterSpacing: "Поле должно содержать только буквы",
        error: "Произошла ошибка при отправке данных.",
        NOT_A_NUMBER: "Поле не должно быть пустым и начинается с +",
        INVALID_COUNTRY: "Выберите страну",
        INVALID_LENGTH: "Недопустимая длина",
        TOO_LONG: "Слишком длинное значение",
        TOO_SHORT: "Слишком короткое значение",
        NUMBER_IS_NOT_VALID: "Некорректное значение",
      },
      en: {
        required: "Field is required",
        letterSpacing: "Field must contain only letters",
        telShort: "Too short value",
        error: "An error occurred while sending data.",
        NOT_A_NUMBER: "Field must not be empty and start with +",
        INVALID_COUNTRY: "Select country",
        INVALID_LENGTH: "Invalid length",
        TOO_LONG: "Too long value",
        TOO_SHORT: "Too short value",
        NUMBER_IS_NOT_VALID: "Invalid value",
      },
    },
    methods: {
      letterSpacing(str) {
        // Проверка на буквы
        const re = /^[A-ZА-ЯЁ]+$/i;
        return re.test(str);
      },
      checked(input) {
        // Проверка на чекбокс
        return input.checked;
      },
      customSelect(input, checkOptions = true) {
        // Проверка на селект, на дефолтное значение
        const value = input.value;
        const _def = input.dataset.default;
        if (value !== _def) {
          return true;
        } else if (checkOptions) {
          const pSelect = input.closest(".p-select");
          const options = pSelect.querySelectorAll(".p-select__options");
          return [...options].find((option) => option.textContent === value);
        }
      },
      required(value) {
        // Проверка на количество символов
        return value.length > 0;
      },
      countDigitsInString(str) {
        return (str.match(/\d/g) || []).length;
      },
      countDigitsInMask(mask) {
        return (mask.match(/#/g) || []).length;
      },
      checkPhoneValidity(phone, phoneMasks) {
        // Проверка на валидность телефона из phones.json
        var cleanedPhone = phone.replace(/\D/g, "");

        for (var i = 0; i < phoneMasks.length; i++) {
          var mask = phoneMasks[i].mask;
          var maskStart = mask.split("#")[0].replace(/\D/g, "");
          if (cleanedPhone.startsWith(maskStart)) {
            var maskDigits = validator.methods.countDigitsInMask(mask);
            var enteredDigits = validator.methods.countDigitsInString(phone);

            if (
              enteredDigits >= maskStart.length &&
              enteredDigits === maskStart.length + maskDigits
            ) {
              return true;
            }
          }
        }

        return false;
      },
    },
  };

  const forms = document.querySelectorAll("form");
  if (forms[0]) {
    forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        resetEvent(e);

        // Ожидаем полной загрузки списка телефонов и после него сработает скрипт
        Promise.all([phones]).then((results) => {
          // Количество ошибок
          let countInvalid = 0;

          // Увеличиваем число
          function setCountInvalid() {
            countInvalid = countInvalid + 1;
          }

          const lang = form.dataset.lang; // Получаем язык из атрибута формы data-lang="ru"
          const messages = validator.messages[lang]; // Получаем по языку сообщения из валидации
          const methods = validator.methods; // Методы валидации
          resetMessages(form); // Сбрасываем сообщения

          // Проверяем что блок формы от родителя со классом main
          const main = form.closest(".main");
          if (main) {
            const name = form.querySelector('input[name="name"]'); // Проверяем имя на количество символов и проверка на буквы без лишних символов
            if (!methods.required(name.value)) {
              setCountInvalid();
              showMessageError(name, messages.required);
            } else if (!methods.letterSpacing(name.value)) {
              setCountInvalid();
              showMessageError(name, messages.letterSpacing);
            }

            const tel = form.querySelector('input[name="tel"]');
            if (tel.value) {
              if (!methods.checkPhoneValidity(tel.value, results[0])) {
                setCountInvalid();
                showMessageError(tel, messages.TOO_SHORT);
              }
            } else {
              setCountInvalid();
              showMessageError(tel, messages.NUMBER_IS_NOT_VALID);
            }

            const select = form.querySelector(".p-select__input"); // Скрытое поле hidden и обязательно в атрибут добавляем дефолтное значение. Например data-default="Услуга", где сейчас стоит по умолчанию
            if (!methods.customSelect(select)) {
              setCountInvalid();
              showMessageError(select, messages.required);
            }

            const checked = form.querySelector(
              '.p-form__check input[type="checkbox"]'
            ); // Чекбокс согласия на обработку
            if (!methods.checked(checked)) {
              setCountInvalid();
              showMessageError(checked, messages.required);
            }

            if (countInvalid === 0) {
              const data = new FormData(form); // Получаем все данные из формы. Можно сделать пустым и добавить через функцию append() нужные данные. Документация https://learn.javascript.ru/formdata

              const mainForm = main.querySelector(".main__form");
              form.style.display = "none";
              mainForm.insertAdjacentElement("afterbegin", thankYouOutput());

              lazyContent.update(); // Обновляем скрипт ленивой загрузки изображения как img
              lazyBackground.update(); // Обновляем скрипт ленивой загрузки изображения как background-image

              // Fetch api - https://learn.javascript.ru/fetch
              // fetch('test.php', {
              //     method: 'POST',
              //     body: data
              // })
              //     // Отлавливаем ошибки
              //     // .then((res) => {
              //     //     if (res.status >= 200 && res.status < 300) {
              //     //         return res;
              //     //     } else {
              //     //         let error = new Error(res.statusText);
              //     //         error.response = res;
              //     //         throw error
              //     //     }
              //     // })
              //     // .then((res) => {
              //     //     if (res.headers['content-type'] !== 'application/json') {
              //     //         let error = new Error('Некорректный ответ от сервера');
              //     //         error.response = res;
              //     //         throw error
              //     //     }
              //     //     return res;
              //     // })
              //     // .then(response => response.json()) // Возвращаем как json
              //     .then(response => response.text()) // Возвращаем как текст
              //     .then((data)=>{
              //         console.log(data); // Получаем ответ сервера
              //     })
              //     .catch(() => alert(messages.error));
            }
          }

          if (form.classList.contains("modal__form_service")) {
            const name = form.querySelector('input[name="name"]'); // Проверяем имя на количество символов и проверка на буквы без лишних символов
            if (!methods.required(name.value)) {
              setCountInvalid();
              showMessageError(name, messages.required);
            } else if (!methods.letterSpacing(name.value)) {
              setCountInvalid();
              showMessageError(name, messages.letterSpacing);
            }

            const tel = form.querySelector('input[name="tel"]');
            if (tel.value) {
              if (!methods.checkPhoneValidity(tel.value, results[0])) {
                setCountInvalid();
                showMessageError(tel, messages.TOO_SHORT);
              }
            } else {
              setCountInvalid();
              showMessageError(tel, messages.NUMBER_IS_NOT_VALID);
            }

            const checked = form.querySelector(
              '.p-form__check input[type="checkbox"]'
            ); // Чекбокс согласия на обработку
            if (!methods.checked(checked)) {
              setCountInvalid();
              showMessageError(checked, messages.required);
            }

            if (countInvalid === 0) {
              // Modal
              const modalWithThank = form.closest(".modal_with-thank");
              const modalThankContent = modalWithThank.querySelector(
                ".modal_with-thank__content"
              ); // Контент для уведомления
              const modalContent =
                modalWithThank.querySelector(".modal__content"); // Контент формы в модалке
              modalThankContent.style.display = "block";
              modalContent.style.display = "none";
              modalThankContent.insertAdjacentElement(
                "afterbegin",
                thankYouOutput()
              );

              const close = modalThankContent.querySelector(".thank__close");
              if (close) {
                close.addEventListener("click", () => {
                  removeModal(modalWithThank);
                  document.body.style.overflow = "";
                });
              }
              lazyContent.update(); // Обновляем скрипт ленивой загрузки изображения как img
              lazyBackground.update(); // Обновляем скрипт ленивой загрузки изображения как background-image
            }
          }

          if (form.classList.contains("modal__form_partner")) {
            const name = form.querySelector('input[name="name"]'); // Проверяем имя на количество символов и проверка на буквы без лишних символов
            if (!methods.required(name.value)) {
              setCountInvalid();
              showMessageError(name, messages.required);
            } else if (!methods.letterSpacing(name.value)) {
              setCountInvalid();
              showMessageError(name, messages.letterSpacing);
            }

            const tel = form.querySelector('input[name="tel"]');
            if (tel.value) {
              if (!methods.checkPhoneValidity(tel.value, results[0])) {
                setCountInvalid();
                showMessageError(tel, messages.TOO_SHORT);
              }
            } else {
              setCountInvalid();
              showMessageError(tel, messages.NUMBER_IS_NOT_VALID);
            }

            const checked = form.querySelector(
              '.p-form__check input[type="checkbox"]'
            ); // Чекбокс согласия на обработку
            if (!methods.checked(checked)) {
              setCountInvalid();
              showMessageError(checked, messages.required);
            }

            if (countInvalid === 0) {
              // Modal
              const modalWithThank = form.closest(".modal_with-thank");
              const modalThankContent = modalWithThank.querySelector(
                ".modal_with-thank__content"
              ); // Контент для уведомления
              const modalContent =
                modalWithThank.querySelector(".modal__content"); // Контент формы в модалке
              modalThankContent.style.display = "block";
              modalContent.style.display = "none";
              modalThankContent.insertAdjacentElement(
                "afterbegin",
                thankYouOutput()
              );

              const close = modalThankContent.querySelector(".thank__close");
              if (close) {
                close.addEventListener("click", () => {
                  removeModal(modalWithThank);
                  document.body.style.overflow = "";
                });
              }
              lazyContent.update(); // Обновляем скрипт ленивой загрузки изображения как img
              lazyBackground.update(); // Обновляем скрипт ленивой загрузки изображения как background-image
            }
          }

          if (form.classList.contains("modal__form_cons")) {
            const name = form.querySelector('input[name="name"]'); // Проверяем имя на количество символов и проверка на буквы без лишних символов
            if (!methods.required(name.value)) {
              setCountInvalid();
              showMessageError(name, messages.required);
            } else if (!methods.letterSpacing(name.value)) {
              setCountInvalid();
              showMessageError(name, messages.letterSpacing);
            }

            const tel = form.querySelector('input[name="tel"]');
            if (tel.value) {
              if (!methods.checkPhoneValidity(tel.value, results[0])) {
                setCountInvalid();
                showMessageError(tel, messages.TOO_SHORT);
              }
            } else {
              setCountInvalid();
              showMessageError(tel, messages.NUMBER_IS_NOT_VALID);
            }

            const checked = form.querySelector(
              '.p-form__check input[type="checkbox"]'
            ); // Чекбокс согласия на обработку
            if (!methods.checked(checked)) {
              setCountInvalid();
              showMessageError(checked, messages.required);
            }

            if (countInvalid === 0) {
              // Modal
              const modalWithThank = form.closest(".modal_with-thank");
              const modalThankContent = modalWithThank.querySelector(
                ".modal_with-thank__content"
              ); // Контент для уведомления
              const modalContent =
                modalWithThank.querySelector(".modal__content"); // Контент формы в модалке
              modalThankContent.style.display = "block";
              modalContent.style.display = "none";
              modalThankContent.insertAdjacentElement(
                "afterbegin",
                thankYouOutput()
              );

              const close = modalThankContent.querySelector(".thank__close");
              if (close) {
                close.addEventListener("click", () => {
                  removeModal(modalWithThank);
                  document.body.style.overflow = "";
                });
              }
              lazyContent.update(); // Обновляем скрипт ленивой загрузки изображения как img
              lazyBackground.update(); // Обновляем скрипт ленивой загрузки изображения как background-image
            }
          }
        });
      });
    });
  }

  // Шаблон верстка Cпасибо
  function thankYouOutput() {
    const element = document.createElement("div");
    element.className = "thank";
    element.innerHTML = `
          <div class="thank__close">
            <picture>
              <source type="image/webp" srcset="#" data-srcset="img/modal/close_thank.webp">
              <img class="lazy " width="21" height="21" src="#" data-src="img/modal/close_thank.png" alt="" loading="lazy">
            </picture>
          </div>
          <div class="thank__img">
                <picture>
                  <source type="image/webp" srcset="#" data-srcset="img/modal/verified.webp">
                  <img class="lazy" width="84" height="84" src="#" data-src="img/modal/verified.png" alt="" loading="lazy">
                </picture>
          </div>
          <div class="thank__title">Спасибо за отправку!</div>
          <div class="thank__subtitle">Наши эксперты свяжутся с Вами в&nbsp;течение 2 рабочих часов.</div>
        `;
    return element;
  }

  // Сброс event
  function resetEvent(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  // Показываем модальное окно по классу active, передаем элемент
  function addModal(element) {
    element.classList.add("active");
  }

  // Скрываем модальное окно по классу active, передаем элемент
  function removeModal(element) {
    element.classList.remove("active");
  }

  // Всплывающее окно
  class PovlyModal {
    constructor() {
      this.allModals(); // Получаем все элементы и добавляем события
      this.allModalShows(); // Получаем все кнопки с классом modal__show и открывает по клику окно по (data-modal="id"), где id - название модалки. Например modal__test, test - это id
    }

    allModals() {
      const modals = document.querySelectorAll(".modal");
      modals.forEach((modal) => {
        function eventClose() {
          const event = new CustomEvent("pModalClose", {
            detail: {
              modal: modal,
            },
          });
          document.dispatchEvent(event);
        }

        function remove() {
          removeModal(modal);
          document.body.style.overflow = "";
          eventClose();
        }

        const close = modal.querySelector(".modal__close");
        if (close) {
          close.addEventListener("click", () => {
            remove();
          });
        }

        const back = modal.querySelector(".modal__back");
        if (back) {
          back.addEventListener("click", () => {
            remove();
          });
        }
        modal.addEventListener("click", (e) => {
          if (e.target == modal) {
            remove();
          }
        });
      });
    }

    allModalShows() {
      const modalShows = document.querySelectorAll(".modal__show");
      modalShows.forEach((modal) => {
        modal.addEventListener("click", (e) => {
          resetEvent(e);
          const dataModal = modal.getAttribute("data-modal");
          const _modal = document.querySelector(".modal__" + dataModal);
          addModal(_modal);
          document.body.style.overflow = "hidden";

          const event = new CustomEvent("pModalOpen", {
            detail: {
              modal: _modal,
              element: modal,
            },
          });
          document.dispatchEvent(event);
        });
      });
    }
  }

  new PovlyModal();
});
