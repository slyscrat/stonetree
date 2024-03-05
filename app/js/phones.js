const pPhones = [
    {
        "nameRu": "Австралия",
        "nameEn": "Australia",
        "countryCode": "AU",
        "phoneCode": 61,
        "phoneMask": "_-____-____"
    },
    {
        "nameRu": "Австрия",
        "nameEn": "Austria",
        "countryCode": "AT",
        "phoneCode": 43,
        "phoneMask": "(___)___-____"
    },
    {
        "nameRu": "Азербайджан",
        "nameEn": "Azerbaijan",
        "countryCode": "AZ",
        "phoneCode": 994,
        "phoneMask": "__-___-__-__"
    },
    {
        "nameRu": "Албания",
        "nameEn": "Albania",
        "countryCode": "AL",
        "phoneCode": 355,
        "phoneMask": "(___)___-___"
    },
    {
        "nameRu": "Алжир",
        "nameEn": "Algeria",
        "countryCode": "DZ",
        "phoneCode": 213,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Ангола",
        "nameEn": "Angola",
        "countryCode": "AO",
        "phoneCode": 244,
        "phoneMask": "(___)___-___"
    },
    {
        "nameRu": "Аргентина",
        "nameEn": "Argentina",
        "countryCode": "AR",
        "phoneCode": 54,
        "phoneMask": "(___)___-____"
    },
    {
        "nameRu": "Армения",
        "nameEn": "Armenia",
        "countryCode": "AM",
        "phoneCode": 374,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Афганистан",
        "nameEn": "Afghanistan",
        "countryCode": "AF",
        "phoneCode": 93,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Бангладеш",
        "nameEn": "Bangladesh",
        "countryCode": "BD",
        "phoneCode": 880,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Бахрейн",
        "nameEn": "Bahrain",
        "countryCode": "BH",
        "phoneCode": 973,
        "phoneMask": "____-____"
    },
    {
        "nameRu": "Беларусь",
        "nameEn": "Belarus",
        "countryCode": "BY",
        "phoneCode": 375,
        "phoneMask": "(__)___-__-__"
    },
    {
        "nameRu": "Бельгия",
        "nameEn": "Belgium",
        "countryCode": "BE",
        "phoneCode": 32,
        "phoneMask": "(___)___-___"
    },
    {
        "nameRu": "Белиз",
        "nameEn": "Belize",
        "countryCode": "BZ",
        "phoneCode": 501,
        "phoneMask": "___-____"
    },
    {
        "nameRu": "Бенин",
        "nameEn": "Benin",
        "countryCode": "BJ",
        "phoneCode": 229,
        "phoneMask": "__-__-____"
    },
    {
        "nameRu": "Болгария",
        "nameEn": "Bulgaria",
        "countryCode": "BG",
        "phoneCode": 359,
        "phoneMask": "(___)___-___"
    },
    {
        "nameRu": "Боливия",
        "nameEn": "Bolivia",
        "countryCode": "BO",
        "phoneCode": 591,
        "phoneMask": "_-___-____"
    },
    {
        "nameRu": "Босния и Герцеговина",
        "nameEn": "Bosnia and Herzegovina",
        "countryCode": "BA",
        "phoneCode": 387,
        "phoneMask": "__-_____"
    },
    {
        "nameRu": "Босния и Герцеговина",
        "nameEn": "Bosnia and Herzegovina",
        "countryCode": "BA",
        "phoneCode": 387,
        "phoneMask": "__-____"
    },
    {
        "nameRu": "Ботсвана",
        "nameEn": "Botswana",
        "countryCode": "BW",
        "phoneCode": 267,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Бразилия",
        "nameEn": "Brazil",
        "countryCode": "BR",
        "phoneCode": 55,
        "phoneMask": "(__)____-____"
    },
    {
        "nameRu": "Бразилия",
        "nameEn": "Brazil",
        "countryCode": "BR",
        "phoneCode": 55,
        "phoneMask": "(__)7___-____"
    },
    {
        "nameRu": "Бразилия",
        "nameEn": "Brazil",
        "countryCode": "BR",
        "phoneCode": 55,
        "phoneMask": "(__)9____-____"
    },
    {
        "nameRu": "Бруней",
        "nameEn": "Brunei",
        "countryCode": "BN",
        "phoneCode": 673,
        "phoneMask": "___-____"
    },
    {
        "nameRu": "Буркина-Фасо",
        "nameEn": "Burkina Faso",
        "countryCode": "BF",
        "phoneCode": 226,
        "phoneMask": "__-__-____"
    },
    {
        "nameRu": "Бурунди",
        "nameEn": "Burundi",
        "countryCode": "BI",
        "phoneCode": 257,
        "phoneMask": "__-__-____"
    },
    {
        "nameRu": "Бутан",
        "nameEn": "Bhutan",
        "countryCode": "BT",
        "phoneCode": 975,
        "phoneMask": "17-___-___"
    },
    {
        "nameRu": "Бутан",
        "nameEn": "Bhutan",
        "countryCode": "BT",
        "phoneCode": 975,
        "phoneMask": "_-___-___"
    },
    {
        "nameRu": "Вануату",
        "nameEn": "Vanuatu",
        "countryCode": "VU",
        "phoneCode": 678,
        "phoneMask": "__-_____"
    },
    {
        "nameRu": "Вануату",
        "nameEn": "Vanuatu",
        "countryCode": "VU",
        "phoneCode": 678,
        "phoneMask": "_____"
    },
    {
        "nameRu": "Венесуэла",
        "nameEn": "Venezuela",
        "countryCode": "VE",
        "phoneCode": 58,
        "phoneMask": "(___)___-____"
    },
    {
        "nameRu": "Вьетнам",
        "nameEn": "Vietnam",
        "countryCode": "VN",
        "phoneCode": 84,
        "phoneMask": "__-____-___"
    },
    {
        "nameRu": "Вьетнам",
        "nameEn": "Vietnam",
        "countryCode": "VN",
        "phoneCode": 84,
        "phoneMask": "(___)____-___"
    },
    {
        "nameRu": "Гватемала",
        "nameEn": "Guatemala",
        "countryCode": "GT",
        "phoneCode": 502,
        "phoneMask": "_-___-____"
    },
    {
        "nameRu": "Гвинея",
        "nameEn": "Guinea",
        "countryCode": "GN",
        "phoneCode": 224,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Гвинея-Бисау",
        "nameEn": "Guinea-Bissau",
        "countryCode": "GW",
        "phoneCode": 245,
        "phoneMask": "_-______"
    },
    {
        "nameRu": "Габон",
        "nameEn": "Gabon",
        "countryCode": "GA",
        "phoneCode": 241,
        "phoneMask": "_-__-__-__"
    },
    {
        "nameRu": "Гаити",
        "nameEn": "Haiti",
        "countryCode": "HT",
        "phoneCode": 509,
        "phoneMask": "__-__-____"
    },
    {
        "nameRu": "Гайана",
        "nameEn": "Guyana",
        "countryCode": "GY",
        "phoneCode": 592,
        "phoneMask": "___-____"
    },
    {
        "nameRu": "Гамбия",
        "nameEn": "Gambia",
        "countryCode": "GM",
        "phoneCode": 220,
        "phoneMask": "(___)__-__"
    },
    {
        "nameRu": "Гана",
        "nameEn": "Ghana",
        "countryCode": "GH",
        "phoneCode": 233,
        "phoneMask": "(___)___-___"
    },
    {
        "nameRu": "Гондурас",
        "nameEn": "Honduras",
        "countryCode": "HN",
        "phoneCode": 504,
        "phoneMask": "____-____"
    },
    {
        "nameRu": "Гонконг",
        "nameEn": "Hong Kong",
        "countryCode": "HK",
        "phoneCode": 852,
        "phoneMask": "____-____"
    },
    {
        "nameRu": "Грузия",
        "nameEn": "Georgia",
        "countryCode": "GE",
        "phoneCode": 995,
        "phoneMask": "(___)___-___"
    },
    {
        "nameRu": "Дания",
        "nameEn": "Denmark",
        "countryCode": "DK",
        "phoneCode": 45,
        "phoneMask": "__-__-__-__"
    },
    {
        "nameRu": "Джибути",
        "nameEn": "Djibouti",
        "countryCode": "DJ",
        "phoneCode": 253,
        "phoneMask": "__-__-__-__"
    },
    {
        "nameRu": "Египет",
        "nameEn": "Egypt",
        "countryCode": "EG",
        "phoneCode": 20,
        "phoneMask": "(___)___-____"
    },
    {
        "nameRu": "Замбия",
        "nameEn": "Zambia",
        "countryCode": "ZM",
        "phoneCode": 260,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Зимбабве",
        "nameEn": "Zimbabwe",
        "countryCode": "ZW",
        "phoneCode": 263,
        "phoneMask": "_-______"
    },
    {
        "nameRu": "Израиль",
        "nameEn": "Israel",
        "countryCode": "IL",
        "phoneCode": 972,
        "phoneMask": "5_-___-____"
    },
    {
        "nameRu": "Израиль",
        "nameEn": "Israel",
        "countryCode": "IL",
        "phoneCode": 972,
        "phoneMask": "_-___-____"
    },
    {
        "nameRu": "Индия",
        "nameEn": "India",
        "countryCode": "IN",
        "phoneCode": 91,
        "phoneMask": "(____)___-___"
    },
    {
        "nameRu": "Индонезия",
        "nameEn": "Indonesia",
        "countryCode": "ID",
        "phoneCode": 62,
        "phoneMask": "(8__)___-____"
    },
    {
        "nameRu": "Индонезия",
        "nameEn": "Indonesia",
        "countryCode": "ID",
        "phoneCode": 62,
        "phoneMask": "__-___-__"
    },
    {
        "nameRu": "Индонезия",
        "nameEn": "Indonesia",
        "countryCode": "ID",
        "phoneCode": 62,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Индонезия",
        "nameEn": "Indonesia",
        "countryCode": "ID",
        "phoneCode": 62,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Индонезия",
        "nameEn": "Indonesia",
        "countryCode": "ID",
        "phoneCode": 62,
        "phoneMask": "(8__)___-___"
    },
    {
        "nameRu": "Индонезия",
        "nameEn": "Indonesia",
        "countryCode": "ID",
        "phoneCode": 62,
        "phoneMask": "(8__)___-__-___"
    },
    {
        "nameRu": "Иордания",
        "nameEn": "Jordan",
        "countryCode": "JO",
        "phoneCode": 962,
        "phoneMask": "_-____-____"
    },
    {
        "nameRu": "Ирак",
        "nameEn": "Iraq",
        "countryCode": "IQ",
        "phoneCode": 964,
        "phoneMask": "(___)___-____"
    },
    {
        "nameRu": "Иран",
        "nameEn": "Iran",
        "countryCode": "IR",
        "phoneCode": 98,
        "phoneMask": "(___)___-____"
    },
    {
        "nameRu": "Ирландия",
        "nameEn": "Ireland",
        "countryCode": "IE",
        "phoneCode": 353,
        "phoneMask": "(___)___-___"
    },
    {
        "nameRu": "Исландия",
        "nameEn": "Iceland",
        "countryCode": "IS",
        "phoneCode": 354,
        "phoneMask": "___-____"
    },
    {
        "nameRu": "Испания",
        "nameEn": "Spain",
        "countryCode": "ES",
        "phoneCode": 34,
        "phoneMask": "(___)___-___"
    },
    {
        "nameRu": "Италия",
        "nameEn": "Italy",
        "countryCode": "IT",
        "phoneCode": 39,
        "phoneMask": "(___)____-___"
    },
    {
        "nameRu": "Йемен",
        "nameEn": "Yemen",
        "countryCode": "YE",
        "phoneCode": 967,
        "phoneMask": "___-___-___"
    },
    {
        "nameRu": "Йемен",
        "nameEn": "Yemen",
        "countryCode": "YE",
        "phoneCode": 967,
        "phoneMask": "_-___-___"
    },
    {
        "nameRu": "Йемен",
        "nameEn": "Yemen",
        "countryCode": "YE",
        "phoneCode": 967,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Кабо-Верде",
        "nameEn": "Cape Verde",
        "countryCode": "CV",
        "phoneCode": 238,
        "phoneMask": "(___)__-__"
    },
    {
        "nameRu": "Казахстан",
        "nameEn": "Kazakhstan",
        "countryCode": "KZ",
        "phoneCode": 7,
        "phoneMask": "(6__)___-__-__"
    },
    {
        "nameRu": "Казахстан",
        "nameEn": "Kazakhstan",
        "countryCode": "KZ",
        "phoneCode": 7,
        "phoneMask": "(7__)___-__-__"
    },
    {
        "nameRu": "Камбоджа",
        "nameEn": "Cambodia",
        "countryCode": "KH",
        "phoneCode": 855,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Камерун",
        "nameEn": "Cameroon",
        "countryCode": "CM",
        "phoneCode": 237,
        "phoneMask": "____-____"
    },
    {
        "nameRu": "Канада",
        "nameEn": "Canada",
        "countryCode": "CA",
        "phoneCode": 1,
        "phoneMask": "(___)___-____"
    },
    {
        "nameRu": "Катар",
        "nameEn": "Qatar",
        "countryCode": "QA",
        "phoneCode": 974,
        "phoneMask": "____-____"
    },
    {
        "nameRu": "Кения",
        "nameEn": "Kenya",
        "countryCode": "KE",
        "phoneCode": 254,
        "phoneMask": "___-______"
    },
    {
        "nameRu": "Кипр",
        "nameEn": "Cyprus",
        "countryCode": "CY",
        "phoneCode": 357,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Киргизия",
        "nameEn": "Kyrgyzstan",
        "countryCode": "KG",
        "phoneCode": 996,
        "phoneMask": "(___)___-___"
    },
    {
        "nameRu": "Китай",
        "nameEn": "China",
        "countryCode": "CN",
        "phoneCode": 86,
        "phoneMask": "(___)____-____"
    },
    {
        "nameRu": "Китай",
        "nameEn": "China",
        "countryCode": "CN",
        "phoneCode": 86,
        "phoneMask": "(___)____-___"
    },
    {
        "nameRu": "Китай",
        "nameEn": "China",
        "countryCode": "CN",
        "phoneCode": 86,
        "phoneMask": "__-_____-_____"
    },
    {
        "nameRu": "Колумбия",
        "nameEn": "Colombia",
        "countryCode": "CO",
        "phoneCode": 57,
        "phoneMask": "(___)___-____"
    },
    {
        "nameRu": "Коморы",
        "nameEn": "Comoros",
        "countryCode": "KM",
        "phoneCode": 269,
        "phoneMask": "__-_____"
    },
    {
        "nameRu": "Конго",
        "nameEn": "Congo",
        "countryCode": "CG",
        "phoneCode": 242,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Коста-Рика",
        "nameEn": "Costa Rica",
        "countryCode": "CR",
        "phoneCode": 506,
        "phoneMask": "____-____"
    },
    {
        "nameRu": "Кот-д'Ивуар",
        "nameEn": "Cote d'Ivoire",
        "countryCode": "CI",
        "phoneCode": 225,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Куба",
        "nameEn": "Cuba",
        "countryCode": "CU",
        "phoneCode": 53,
        "phoneMask": "_-___-____"
    },
    {
        "nameRu": "Кувейт",
        "nameEn": "Kuwait",
        "countryCode": "KW",
        "phoneCode": 965,
        "phoneMask": "____-____"
    },
    {
        "nameRu": "Лаос",
        "nameEn": "Laos",
        "countryCode": "LA",
        "phoneCode": 856,
        "phoneMask": "(20__)___-___"
    },
    {
        "nameRu": "Лаос",
        "nameEn": "Laos",
        "countryCode": "LA",
        "phoneCode": 856,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Латвия",
        "nameEn": "Latvia",
        "countryCode": "LV",
        "phoneCode": 371,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Лесото",
        "nameEn": "Lesotho",
        "countryCode": "LS",
        "phoneCode": 266,
        "phoneMask": "_-___-____"
    },
    {
        "nameRu": "Ливан",
        "nameEn": "Lebanon",
        "countryCode": "LB",
        "phoneCode": 961,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Ливан",
        "nameEn": "Lebanon",
        "countryCode": "LB",
        "phoneCode": 961,
        "phoneMask": "_-___-___"
    },
    {
        "nameRu": "Либерия",
        "nameEn": "Liberia",
        "countryCode": "LR",
        "phoneCode": 231,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Ливия",
        "nameEn": "Libya",
        "countryCode": "LY",
        "phoneCode": 218,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Ливия",
        "nameEn": "Libya",
        "countryCode": "LY",
        "phoneCode": 218,
        "phoneMask": "21-___-____"
    },
    {
        "nameRu": "Литва",
        "nameEn": "Lithuania",
        "countryCode": "LT",
        "phoneCode": 370,
        "phoneMask": "(___)__-___"
    },
    {
        "nameRu": "Лихтенштейн",
        "nameEn": "Liechtenstein",
        "countryCode": "LI",
        "phoneCode": 423,
        "phoneMask": "(___)___-____"
    },
    {
        "nameRu": "Люксембург",
        "nameEn": "Luxembourg",
        "countryCode": "LU",
        "phoneCode": 352,
        "phoneMask": "(___)___-___"
    },
    {
        "nameRu": "Маврикий",
        "nameEn": "Mauritius",
        "countryCode": "MU",
        "phoneCode": 230,
        "phoneMask": "___-____"
    },
    {
        "nameRu": "Мавритания",
        "nameEn": "Mauritania",
        "countryCode": "MR",
        "phoneCode": 222,
        "phoneMask": "__-__-____"
    },
    {
        "nameRu": "Мадагаскар",
        "nameEn": "Madagascar",
        "countryCode": "MG",
        "phoneCode": 261,
        "phoneMask": "__-__-_____"
    },
    {
        "nameRu": "Малави",
        "nameEn": "Malawi",
        "countryCode": "MW",
        "phoneCode": 265,
        "phoneMask": "1-___-___"
    },
    {
        "nameRu": "Малави",
        "nameEn": "Malawi",
        "countryCode": "MW",
        "phoneCode": 265,
        "phoneMask": "_-____-____"
    },
    {
        "nameRu": "Малайзия",
        "nameEn": "Malaysia",
        "countryCode": "MY",
        "phoneCode": 60,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Малайзия",
        "nameEn": "Malaysia",
        "countryCode": "MY",
        "phoneCode": 60,
        "phoneMask": "(___)___-___"
    },
    {
        "nameRu": "Малайзия",
        "nameEn": "Malaysia",
        "countryCode": "MY",
        "phoneCode": 60,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Малайзия",
        "nameEn": "Malaysia",
        "countryCode": "MY",
        "phoneCode": 60,
        "phoneMask": "_-___-___"
    },
    {
        "nameRu": "Мали",
        "nameEn": "Mali",
        "countryCode": "ML",
        "phoneCode": 223,
        "phoneMask": "__-__-____"
    },
    {
        "nameRu": "Мальдивы",
        "nameEn": "Maldives",
        "countryCode": "MV",
        "phoneCode": 960,
        "phoneMask": "___-____"
    },
    {
        "nameRu": "Мальта",
        "nameEn": "Malta",
        "countryCode": "MT",
        "phoneCode": 356,
        "phoneMask": "____-____"
    },
    {
        "nameRu": "Марокко",
        "nameEn": "Morocco",
        "countryCode": "MA",
        "phoneCode": 212,
        "phoneMask": "__-____-___"
    },
    {
        "nameRu": "Мозамбик",
        "nameEn": "Mozambique",
        "countryCode": "MZ",
        "phoneCode": 258,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Монголия",
        "nameEn": "Mongolia",
        "countryCode": "MN",
        "phoneCode": 976,
        "phoneMask": "__-__-____"
    },
    {
        "nameRu": "Мьянма",
        "nameEn": "Myanmar",
        "countryCode": "MM",
        "phoneCode": 95,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Мьянма",
        "nameEn": "Myanmar",
        "countryCode": "MM",
        "phoneCode": 95,
        "phoneMask": "_-___-___"
    },
    {
        "nameRu": "Мьянма",
        "nameEn": "Myanmar",
        "countryCode": "MM",
        "phoneCode": 95,
        "phoneMask": "___-___"
    },
    {
        "nameRu": "Намибия",
        "nameEn": "Namibia",
        "countryCode": "NA",
        "phoneCode": 264,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Науру",
        "nameEn": "Nauru",
        "countryCode": "NR",
        "phoneCode": 674,
        "phoneMask": "___-____"
    },
    {
        "nameRu": "Непал",
        "nameEn": "Nepal",
        "countryCode": "NP",
        "phoneCode": 977,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Нигер",
        "nameEn": "Niger",
        "countryCode": "NE",
        "phoneCode": 227,
        "phoneMask": "__-__-____"
    },
    {
        "nameRu": "Нигерия",
        "nameEn": "Nigeria",
        "countryCode": "NG",
        "phoneCode": 234,
        "phoneMask": "(___)___-____"
    },
    {
        "nameRu": "Нигерия",
        "nameEn": "Nigeria",
        "countryCode": "NG",
        "phoneCode": 234,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Нигерия",
        "nameEn": "Nigeria",
        "countryCode": "NG",
        "phoneCode": 234,
        "phoneMask": "__-___-__"
    },
    {
        "nameRu": "Нигерия",
        "nameEn": "Nigeria",
        "countryCode": "NG",
        "phoneCode": 234,
        "phoneMask": "(___)___-____"
    },
    {
        "nameRu": "Никарагуа",
        "nameEn": "Nicaragua",
        "countryCode": "NI",
        "phoneCode": 505,
        "phoneMask": "____-____"
    },
    {
        "nameRu": "Нидерланды",
        "nameEn": "Netherlands",
        "countryCode": "NL",
        "phoneCode": 31,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Новая Зеландия",
        "nameEn": "New Zealand",
        "countryCode": "NZ",
        "phoneCode": 64,
        "phoneMask": "(___)___-___"
    },
    {
        "nameRu": "Новая Зеландия",
        "nameEn": "New Zealand",
        "countryCode": "NZ",
        "phoneCode": 64,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Новая Зеландия",
        "nameEn": "New Zealand",
        "countryCode": "NZ",
        "phoneCode": 64,
        "phoneMask": "(___)___-____"
    },
    {
        "nameRu": "Норвегия",
        "nameEn": "Norway",
        "countryCode": "NO",
        "phoneCode": 47,
        "phoneMask": "(___)__-___"
    },
    {
        "nameRu": "ОАЭ",
        "nameEn": "United Arab Emirates",
        "countryCode": "AE",
        "phoneCode": 971,
        "phoneMask": "5_-___-____"
    },
    {
        "nameRu": "ОАЭ",
        "nameEn": "United Arab Emirates",
        "countryCode": "AE",
        "phoneCode": 971,
        "phoneMask": "_-___-____"
    },
    {
        "nameRu": "Оман",
        "nameEn": "Oman",
        "countryCode": "OM",
        "phoneCode": 968,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Пакистан",
        "nameEn": "Pakistan",
        "countryCode": "PK",
        "phoneCode": 92,
        "phoneMask": "(___)___-____"
    },
    {
        "nameRu": "Панама",
        "nameEn": "Panama",
        "countryCode": "PA",
        "phoneCode": 507,
        "phoneMask": "___-____"
    },
    {
        "nameRu": "Папуа-Новая Гвинея",
        "nameEn": "Papua New Guinea",
        "countryCode": "PG",
        "phoneCode": 675,
        "phoneMask": "(___)__-___"
    },
    {
        "nameRu": "Парагвай",
        "nameEn": "Paraguay",
        "countryCode": "PY",
        "phoneCode": 595,
        "phoneMask": "(___)___-___"
    },
    {
        "nameRu": "Перу",
        "nameEn": "Peru",
        "countryCode": "PE",
        "phoneCode": 51,
        "phoneMask": "(___)___-___"
    },
    {
        "nameRu": "Польша",
        "nameEn": "Poland",
        "countryCode": "PL",
        "phoneCode": 48,
        "phoneMask": "(___)___-___"
    },
    {
        "nameRu": "Португалия",
        "nameEn": "Portugal",
        "countryCode": "PT",
        "phoneCode": 351,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Республика Корея",
        "nameEn": "South Korea",
        "countryCode": "KR",
        "phoneCode": 82,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Россия",
        "nameEn": "Russia",
        "countryCode": "RU",
        "phoneCode": 7,
        "phoneMask": "(___)___-__-__"
    },
    {
        "nameRu": "Руанда",
        "nameEn": "Rwanda",
        "countryCode": "RW",
        "phoneCode": 250,
        "phoneMask": "(___)___-___"
    },
    {
        "nameRu": "Румыния",
        "nameEn": "Romania",
        "countryCode": "RO",
        "phoneCode": 40,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Сальвадор",
        "nameEn": "El Salvador",
        "countryCode": "SV",
        "phoneCode": 503,
        "phoneMask": "__-__-____"
    },
    {
        "nameRu": "Самоа",
        "nameEn": "Samoa",
        "countryCode": "WS",
        "phoneCode": 685,
        "phoneMask": "__-____"
    },
    {
        "nameRu": "Сан-Марино",
        "nameEn": "San Marino",
        "countryCode": "SM",
        "phoneCode": 378,
        "phoneMask": "____-______"
    },
    {
        "nameRu": "Саудовская Аравия",
        "nameEn": "Saudi Arabia",
        "countryCode": "SA",
        "phoneCode": 966,
        "phoneMask": "5-____-____"
    },
    {
        "nameRu": "Саудовская Аравия",
        "nameEn": "Saudi Arabia",
        "countryCode": "SA",
        "phoneCode": 966,
        "phoneMask": "_-___-____"
    },
    {
        "nameRu": "Сенегал",
        "nameEn": "Senegal",
        "countryCode": "SN",
        "phoneCode": 221,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Сербия",
        "nameEn": "Serbia",
        "countryCode": "RS",
        "phoneCode": 381,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Сейшелы",
        "nameEn": "Seychelles",
        "countryCode": "SC",
        "phoneCode": 248,
        "phoneMask": "_-___-___"
    },
    {
        "nameRu": "Сингапур",
        "nameEn": "Singapore",
        "countryCode": "SG",
        "phoneCode": 65,
        "phoneMask": "____-____"
    },
    {
        "nameRu": "Сирия",
        "nameEn": "Syria",
        "countryCode": "SY",
        "phoneCode": 963,
        "phoneMask": "__-____-___"
    },
    {
        "nameRu": "Словакия",
        "nameEn": "Slovakia",
        "countryCode": "SK",
        "phoneCode": 421,
        "phoneMask": "(___)___-___"
    },
    {
        "nameRu": "Словения",
        "nameEn": "Slovenia",
        "countryCode": "SI",
        "phoneCode": 386,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Сомали",
        "nameEn": "Somalia",
        "countryCode": "SO",
        "phoneCode": 252,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Сомали",
        "nameEn": "Somalia",
        "countryCode": "SO",
        "phoneCode": 252,
        "phoneMask": "_-___-___"
    },
    {
        "nameRu": "Судан",
        "nameEn": "Sudan",
        "countryCode": "SD",
        "phoneCode": 249,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Суринам",
        "nameEn": "Suriname",
        "countryCode": "SR",
        "phoneCode": 597,
        "phoneMask": "___-____"
    },
    {
        "nameRu": "Суринам",
        "nameEn": "Suriname",
        "countryCode": "SR",
        "phoneCode": 597,
        "phoneMask": "___-___"
    },
    {
        "nameRu": "США",
        "nameEn": "United States",
        "countryCode": "US",
        "phoneCode": 1,
        "phoneMask": "(___)___-____"
    },
    {
        "nameRu": "Сьерра-Леоне",
        "nameEn": "Sierra Leone",
        "countryCode": "SL",
        "phoneCode": 232,
        "phoneMask": "__-______"
    },
    {
        "nameRu": "Таджикистан",
        "nameEn": "Tajikistan",
        "countryCode": "TJ",
        "phoneCode": 992,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Таиланд",
        "nameEn": "Thailand",
        "countryCode": "TH",
        "phoneCode": 66,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Таиланд",
        "nameEn": "Thailand",
        "countryCode": "TH",
        "phoneCode": 66,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Танзания",
        "nameEn": "Tanzania",
        "countryCode": "TZ",
        "phoneCode": 255,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Того",
        "nameEn": "Togo",
        "countryCode": "TG",
        "phoneCode": 228,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Тонга",
        "nameEn": "Tonga",
        "countryCode": "TO",
        "phoneCode": 676,
        "phoneMask": "_____"
    },
    {
        "nameRu": "Тувалу",
        "nameEn": "Tuvalu",
        "countryCode": "TV",
        "phoneCode": 688,
        "phoneMask": "90____"
    },
    {
        "nameRu": "Тувалу",
        "nameEn": "Tuvalu",
        "countryCode": "TV",
        "phoneCode": 688,
        "phoneMask": "2____"
    },
    {
        "nameRu": "Тунис",
        "nameEn": "Tunisia",
        "countryCode": "TN",
        "phoneCode": 216,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Туркменистан",
        "nameEn": "Turkmenistan",
        "countryCode": "TM",
        "phoneCode": 993,
        "phoneMask": "_-___-____"
    },
    {
        "nameRu": "Турция",
        "nameEn": "Turkey",
        "countryCode": "TR",
        "phoneCode": 90,
        "phoneMask": "(___)___-____"
    },
    {
        "nameRu": "Уганда",
        "nameEn": "Uganda",
        "countryCode": "UG",
        "phoneCode": 256,
        "phoneMask": "(___)___-___"
    },
    {
        "nameRu": "Узбекистан",
        "nameEn": "Uzbekistan",
        "countryCode": "UZ",
        "phoneCode": 998,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Украина",
        "nameEn": "Ukraine",
        "countryCode": "UA",
        "phoneCode": 380,
        "phoneMask": "(__)___-__-__"
    },
    {
        "nameRu": "Уругвай",
        "nameEn": "Uruguay",
        "countryCode": "UY",
        "phoneCode": 598,
        "phoneMask": "_-___-__-__"
    },
    {
        "nameRu": "Фиджи",
        "nameEn": "Fiji",
        "countryCode": "FJ",
        "phoneCode": 679,
        "phoneMask": "__-_____"
    },
    {
        "nameRu": "Филиппины",
        "nameEn": "Philippines",
        "countryCode": "PH",
        "phoneCode": 63,
        "phoneMask": "(___)___-____"
    },
    {
        "nameRu": "Финляндия",
        "nameEn": "Finland",
        "countryCode": "FI",
        "phoneCode": 358,
        "phoneMask": "(___)___-__-__"
    },
    {
        "nameRu": "Франция",
        "nameEn": "France",
        "countryCode": "FR",
        "phoneCode": 33,
        "phoneMask": "(___)___-___"
    },
    {
        "nameRu": "Хорватия",
        "nameEn": "Croatia",
        "countryCode": "HR",
        "phoneCode": 385,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Центральноафриканская Республика",
        "nameEn": "Central African Republic",
        "countryCode": "CF",
        "phoneCode": 236,
        "phoneMask": "__-__-____"
    },
    {
        "nameRu": "Чад",
        "nameEn": "Chad",
        "countryCode": "TD",
        "phoneCode": 235,
        "phoneMask": "__-__-__-__"
    },
    {
        "nameRu": "Черногория",
        "nameEn": "Montenegro",
        "countryCode": "ME",
        "phoneCode": 382,
        "phoneMask": "__-___-___"
    },
    {
        "nameRu": "Чехия",
        "nameEn": "Czech Republic",
        "countryCode": "CZ",
        "phoneCode": 420,
        "phoneMask": "(___)___-___"
    },
    {
        "nameRu": "Чили",
        "nameEn": "Chile",
        "countryCode": "CL",
        "phoneCode": 56,
        "phoneMask": "_-____-____"
    },
    {
        "nameRu": "Швейцария",
        "nameEn": "Switzerland",
        "countryCode": "CH",
        "phoneCode": 41,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Швеция",
        "nameEn": "Sweden",
        "countryCode": "SE",
        "phoneCode": 46,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Шри-Ланка",
        "nameEn": "Sri Lanka",
        "countryCode": "LK",
        "phoneCode": 94,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Эквадор",
        "nameEn": "Ecuador",
        "countryCode": "EC",
        "phoneCode": 593,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Эквадор",
        "nameEn": "Ecuador",
        "countryCode": "EC",
        "phoneCode": 593,
        "phoneMask": "_-___-____"
    },
    {
        "nameRu": "Экваториальная Гвинея",
        "nameEn": "Equatorial Guinea",
        "countryCode": "GQ",
        "phoneCode": 240,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Эритрея",
        "nameEn": "Eritrea",
        "countryCode": "ER",
        "phoneCode": 291,
        "phoneMask": "_-___-___"
    },
    {
        "nameRu": "Эстония",
        "nameEn": "Estonia",
        "countryCode": "EE",
        "phoneCode": 372,
        "phoneMask": "____-____"
    },
    {
        "nameRu": "Эстония",
        "nameEn": "Estonia",
        "countryCode": "EE",
        "phoneCode": 372,
        "phoneMask": "___-____"
    },
    {
        "nameRu": "Эфиопия",
        "nameEn": "Ethiopia",
        "countryCode": "ET",
        "phoneCode": 251,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "ЮАР",
        "nameEn": "South Africa",
        "countryCode": "ZA",
        "phoneCode": 27,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Южный Судан",
        "nameEn": "South Sudan",
        "countryCode": "SS",
        "phoneCode": 211,
        "phoneMask": "__-___-____"
    },
    {
        "nameRu": "Япония",
        "nameEn": "Japan",
        "countryCode": "JP",
        "phoneCode": 81,
        "phoneMask": "__-____-____"
    },
    {
        "nameRu": "Япония",
        "nameEn": "Japan",
        "countryCode": "JP",
        "phoneCode": 81,
        "phoneMask": "(___)___-___"
    }
];