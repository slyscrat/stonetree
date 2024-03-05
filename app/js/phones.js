const pPhones = [
    {
        "nameRu": "Австралия",
        "nameEn": "Australia",
        "countryCode": "AU",
        "phoneCode": 61,
        "phoneMask": "#-####-####"
    },
    {
        "nameRu": "Австрия",
        "nameEn": "Austria",
        "countryCode": "AT",
        "phoneCode": 43,
        "phoneMask": "(###)###-####"
    },
    {
        "nameRu": "Азербайджан",
        "nameEn": "Azerbaijan",
        "countryCode": "AZ",
        "phoneCode": 994,
        "phoneMask": "##-###-##-##"
    },
    {
        "nameRu": "Албания",
        "nameEn": "Albania",
        "countryCode": "AL",
        "phoneCode": 355,
        "phoneMask": "(###)###-###"
    },
    {
        "nameRu": "Алжир",
        "nameEn": "Algeria",
        "countryCode": "DZ",
        "phoneCode": 213,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Ангола",
        "nameEn": "Angola",
        "countryCode": "AO",
        "phoneCode": 244,
        "phoneMask": "(###)###-###"
    },
    {
        "nameRu": "Аргентина",
        "nameEn": "Argentina",
        "countryCode": "AR",
        "phoneCode": 54,
        "phoneMask": "(###)###-####"
    },
    {
        "nameRu": "Армения",
        "nameEn": "Armenia",
        "countryCode": "AM",
        "phoneCode": 374,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Афганистан",
        "nameEn": "Afghanistan",
        "countryCode": "AF",
        "phoneCode": 93,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Бангладеш",
        "nameEn": "Bangladesh",
        "countryCode": "BD",
        "phoneCode": 880,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Бахрейн",
        "nameEn": "Bahrain",
        "countryCode": "BH",
        "phoneCode": 973,
        "phoneMask": "####-####"
    },
    {
        "nameRu": "Беларусь",
        "nameEn": "Belarus",
        "countryCode": "BY",
        "phoneCode": 375,
        "phoneMask": "(##)###-##-##"
    },
    {
        "nameRu": "Бельгия",
        "nameEn": "Belgium",
        "countryCode": "BE",
        "phoneCode": 32,
        "phoneMask": "(###)###-###"
    },
    {
        "nameRu": "Белиз",
        "nameEn": "Belize",
        "countryCode": "BZ",
        "phoneCode": 501,
        "phoneMask": "###-####"
    },
    {
        "nameRu": "Бенин",
        "nameEn": "Benin",
        "countryCode": "BJ",
        "phoneCode": 229,
        "phoneMask": "##-##-####"
    },
    {
        "nameRu": "Болгария",
        "nameEn": "Bulgaria",
        "countryCode": "BG",
        "phoneCode": 359,
        "phoneMask": "(###)###-###"
    },
    {
        "nameRu": "Боливия",
        "nameEn": "Bolivia",
        "countryCode": "BO",
        "phoneCode": 591,
        "phoneMask": "#-###-####"
    },
    {
        "nameRu": "Босния и Герцеговина",
        "nameEn": "Bosnia and Herzegovina",
        "countryCode": "BA",
        "phoneCode": 387,
        "phoneMask": "##-#####"
    },
    {
        "nameRu": "Босния и Герцеговина",
        "nameEn": "Bosnia and Herzegovina",
        "countryCode": "BA",
        "phoneCode": 387,
        "phoneMask": "##-####"
    },
    {
        "nameRu": "Ботсвана",
        "nameEn": "Botswana",
        "countryCode": "BW",
        "phoneCode": 267,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Бразилия",
        "nameEn": "Brazil",
        "countryCode": "BR",
        "phoneCode": 55,
        "phoneMask": "(##)####-####"
    },
    {
        "nameRu": "Бразилия",
        "nameEn": "Brazil",
        "countryCode": "BR",
        "phoneCode": 55,
        "phoneMask": "(##)7###-####"
    },
    {
        "nameRu": "Бразилия",
        "nameEn": "Brazil",
        "countryCode": "BR",
        "phoneCode": 55,
        "phoneMask": "(##)9####-####"
    },
    {
        "nameRu": "Бруней",
        "nameEn": "Brunei",
        "countryCode": "BN",
        "phoneCode": 673,
        "phoneMask": "###-####"
    },
    {
        "nameRu": "Буркина-Фасо",
        "nameEn": "Burkina Faso",
        "countryCode": "BF",
        "phoneCode": 226,
        "phoneMask": "##-##-####"
    },
    {
        "nameRu": "Бурунди",
        "nameEn": "Burundi",
        "countryCode": "BI",
        "phoneCode": 257,
        "phoneMask": "##-##-####"
    },
    {
        "nameRu": "Бутан",
        "nameEn": "Bhutan",
        "countryCode": "BT",
        "phoneCode": 975,
        "phoneMask": "17-###-###"
    },
    {
        "nameRu": "Бутан",
        "nameEn": "Bhutan",
        "countryCode": "BT",
        "phoneCode": 975,
        "phoneMask": "#-###-###"
    },
    {
        "nameRu": "Вануату",
        "nameEn": "Vanuatu",
        "countryCode": "VU",
        "phoneCode": 678,
        "phoneMask": "##-#####"
    },
    {
        "nameRu": "Вануату",
        "nameEn": "Vanuatu",
        "countryCode": "VU",
        "phoneCode": 678,
        "phoneMask": "#####"
    },
    {
        "nameRu": "Венесуэла",
        "nameEn": "Venezuela",
        "countryCode": "VE",
        "phoneCode": 58,
        "phoneMask": "(###)###-####"
    },
    {
        "nameRu": "Вьетнам",
        "nameEn": "Vietnam",
        "countryCode": "VN",
        "phoneCode": 84,
        "phoneMask": "##-####-###"
    },
    {
        "nameRu": "Вьетнам",
        "nameEn": "Vietnam",
        "countryCode": "VN",
        "phoneCode": 84,
        "phoneMask": "(###)####-###"
    },
    {
        "nameRu": "Гватемала",
        "nameEn": "Guatemala",
        "countryCode": "GT",
        "phoneCode": 502,
        "phoneMask": "#-###-####"
    },
    {
        "nameRu": "Гвинея",
        "nameEn": "Guinea",
        "countryCode": "GN",
        "phoneCode": 224,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Гвинея-Бисау",
        "nameEn": "Guinea-Bissau",
        "countryCode": "GW",
        "phoneCode": 245,
        "phoneMask": "#-######"
    },
    {
        "nameRu": "Габон",
        "nameEn": "Gabon",
        "countryCode": "GA",
        "phoneCode": 241,
        "phoneMask": "#-##-##-##"
    },
    {
        "nameRu": "Гаити",
        "nameEn": "Haiti",
        "countryCode": "HT",
        "phoneCode": 509,
        "phoneMask": "##-##-####"
    },
    {
        "nameRu": "Гайана",
        "nameEn": "Guyana",
        "countryCode": "GY",
        "phoneCode": 592,
        "phoneMask": "###-####"
    },
    {
        "nameRu": "Гамбия",
        "nameEn": "Gambia",
        "countryCode": "GM",
        "phoneCode": 220,
        "phoneMask": "(###)##-##"
    },
    {
        "nameRu": "Гана",
        "nameEn": "Ghana",
        "countryCode": "GH",
        "phoneCode": 233,
        "phoneMask": "(###)###-###"
    },
    {
        "nameRu": "Гондурас",
        "nameEn": "Honduras",
        "countryCode": "HN",
        "phoneCode": 504,
        "phoneMask": "####-####"
    },
    {
        "nameRu": "Гонконг",
        "nameEn": "Hong Kong",
        "countryCode": "HK",
        "phoneCode": 852,
        "phoneMask": "####-####"
    },
    {
        "nameRu": "Грузия",
        "nameEn": "Georgia",
        "countryCode": "GE",
        "phoneCode": 995,
        "phoneMask": "(###)###-###"
    },
    {
        "nameRu": "Дания",
        "nameEn": "Denmark",
        "countryCode": "DK",
        "phoneCode": 45,
        "phoneMask": "##-##-##-##"
    },
    {
        "nameRu": "Джибути",
        "nameEn": "Djibouti",
        "countryCode": "DJ",
        "phoneCode": 253,
        "phoneMask": "##-##-##-##"
    },
    {
        "nameRu": "Египет",
        "nameEn": "Egypt",
        "countryCode": "EG",
        "phoneCode": 20,
        "phoneMask": "(###)###-####"
    },
    {
        "nameRu": "Замбия",
        "nameEn": "Zambia",
        "countryCode": "ZM",
        "phoneCode": 260,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Зимбабве",
        "nameEn": "Zimbabwe",
        "countryCode": "ZW",
        "phoneCode": 263,
        "phoneMask": "#-######"
    },
    {
        "nameRu": "Израиль",
        "nameEn": "Israel",
        "countryCode": "IL",
        "phoneCode": 972,
        "phoneMask": "5#-###-####"
    },
    {
        "nameRu": "Израиль",
        "nameEn": "Israel",
        "countryCode": "IL",
        "phoneCode": 972,
        "phoneMask": "#-###-####"
    },
    {
        "nameRu": "Индия",
        "nameEn": "India",
        "countryCode": "IN",
        "phoneCode": 91,
        "phoneMask": "(####)###-###"
    },
    {
        "nameRu": "Индонезия",
        "nameEn": "Indonesia",
        "countryCode": "ID",
        "phoneCode": 62,
        "phoneMask": "(8##)###-####"
    },
    {
        "nameRu": "Индонезия",
        "nameEn": "Indonesia",
        "countryCode": "ID",
        "phoneCode": 62,
        "phoneMask": "##-###-##"
    },
    {
        "nameRu": "Индонезия",
        "nameEn": "Indonesia",
        "countryCode": "ID",
        "phoneCode": 62,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Индонезия",
        "nameEn": "Indonesia",
        "countryCode": "ID",
        "phoneCode": 62,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Индонезия",
        "nameEn": "Indonesia",
        "countryCode": "ID",
        "phoneCode": 62,
        "phoneMask": "(8##)###-###"
    },
    {
        "nameRu": "Индонезия",
        "nameEn": "Indonesia",
        "countryCode": "ID",
        "phoneCode": 62,
        "phoneMask": "(8##)###-##-###"
    },
    {
        "nameRu": "Иордания",
        "nameEn": "Jordan",
        "countryCode": "JO",
        "phoneCode": 962,
        "phoneMask": "#-####-####"
    },
    {
        "nameRu": "Ирак",
        "nameEn": "Iraq",
        "countryCode": "IQ",
        "phoneCode": 964,
        "phoneMask": "(###)###-####"
    },
    {
        "nameRu": "Иран",
        "nameEn": "Iran",
        "countryCode": "IR",
        "phoneCode": 98,
        "phoneMask": "(###)###-####"
    },
    {
        "nameRu": "Ирландия",
        "nameEn": "Ireland",
        "countryCode": "IE",
        "phoneCode": 353,
        "phoneMask": "(###)###-###"
    },
    {
        "nameRu": "Исландия",
        "nameEn": "Iceland",
        "countryCode": "IS",
        "phoneCode": 354,
        "phoneMask": "###-####"
    },
    {
        "nameRu": "Испания",
        "nameEn": "Spain",
        "countryCode": "ES",
        "phoneCode": 34,
        "phoneMask": "(###)###-###"
    },
    {
        "nameRu": "Италия",
        "nameEn": "Italy",
        "countryCode": "IT",
        "phoneCode": 39,
        "phoneMask": "(###)####-###"
    },
    {
        "nameRu": "Йемен",
        "nameEn": "Yemen",
        "countryCode": "YE",
        "phoneCode": 967,
        "phoneMask": "###-###-###"
    },
    {
        "nameRu": "Йемен",
        "nameEn": "Yemen",
        "countryCode": "YE",
        "phoneCode": 967,
        "phoneMask": "#-###-###"
    },
    {
        "nameRu": "Йемен",
        "nameEn": "Yemen",
        "countryCode": "YE",
        "phoneCode": 967,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Кабо-Верде",
        "nameEn": "Cape Verde",
        "countryCode": "CV",
        "phoneCode": 238,
        "phoneMask": "(###)##-##"
    },
    {
        "nameRu": "Казахстан",
        "nameEn": "Kazakhstan",
        "countryCode": "KZ",
        "phoneCode": 7,
        "phoneMask": "(6##)###-##-##"
    },
    {
        "nameRu": "Казахстан",
        "nameEn": "Kazakhstan",
        "countryCode": "KZ",
        "phoneCode": 7,
        "phoneMask": "(7##)###-##-##"
    },
    {
        "nameRu": "Камбоджа",
        "nameEn": "Cambodia",
        "countryCode": "KH",
        "phoneCode": 855,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Камерун",
        "nameEn": "Cameroon",
        "countryCode": "CM",
        "phoneCode": 237,
        "phoneMask": "####-####"
    },
    {
        "nameRu": "Канада",
        "nameEn": "Canada",
        "countryCode": "CA",
        "phoneCode": 1,
        "phoneMask": "(###)###-####"
    },
    {
        "nameRu": "Катар",
        "nameEn": "Qatar",
        "countryCode": "QA",
        "phoneCode": 974,
        "phoneMask": "####-####"
    },
    {
        "nameRu": "Кения",
        "nameEn": "Kenya",
        "countryCode": "KE",
        "phoneCode": 254,
        "phoneMask": "###-######"
    },
    {
        "nameRu": "Кипр",
        "nameEn": "Cyprus",
        "countryCode": "CY",
        "phoneCode": 357,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Киргизия",
        "nameEn": "Kyrgyzstan",
        "countryCode": "KG",
        "phoneCode": 996,
        "phoneMask": "(###)###-###"
    },
    {
        "nameRu": "Китай",
        "nameEn": "China",
        "countryCode": "CN",
        "phoneCode": 86,
        "phoneMask": "(###)####-####"
    },
    {
        "nameRu": "Китай",
        "nameEn": "China",
        "countryCode": "CN",
        "phoneCode": 86,
        "phoneMask": "(###)####-###"
    },
    {
        "nameRu": "Китай",
        "nameEn": "China",
        "countryCode": "CN",
        "phoneCode": 86,
        "phoneMask": "##-#####-#####"
    },
    {
        "nameRu": "Колумбия",
        "nameEn": "Colombia",
        "countryCode": "CO",
        "phoneCode": 57,
        "phoneMask": "(###)###-####"
    },
    {
        "nameRu": "Коморы",
        "nameEn": "Comoros",
        "countryCode": "KM",
        "phoneCode": 269,
        "phoneMask": "##-#####"
    },
    {
        "nameRu": "Конго",
        "nameEn": "Congo",
        "countryCode": "CG",
        "phoneCode": 242,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Коста-Рика",
        "nameEn": "Costa Rica",
        "countryCode": "CR",
        "phoneCode": 506,
        "phoneMask": "####-####"
    },
    {
        "nameRu": "Кот-д'Ивуар",
        "nameEn": "Cote d'Ivoire",
        "countryCode": "CI",
        "phoneCode": 225,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Куба",
        "nameEn": "Cuba",
        "countryCode": "CU",
        "phoneCode": 53,
        "phoneMask": "#-###-####"
    },
    {
        "nameRu": "Кувейт",
        "nameEn": "Kuwait",
        "countryCode": "KW",
        "phoneCode": 965,
        "phoneMask": "####-####"
    },
    {
        "nameRu": "Лаос",
        "nameEn": "Laos",
        "countryCode": "LA",
        "phoneCode": 856,
        "phoneMask": "(20##)###-###"
    },
    {
        "nameRu": "Лаос",
        "nameEn": "Laos",
        "countryCode": "LA",
        "phoneCode": 856,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Латвия",
        "nameEn": "Latvia",
        "countryCode": "LV",
        "phoneCode": 371,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Лесото",
        "nameEn": "Lesotho",
        "countryCode": "LS",
        "phoneCode": 266,
        "phoneMask": "#-###-####"
    },
    {
        "nameRu": "Ливан",
        "nameEn": "Lebanon",
        "countryCode": "LB",
        "phoneCode": 961,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Ливан",
        "nameEn": "Lebanon",
        "countryCode": "LB",
        "phoneCode": 961,
        "phoneMask": "#-###-###"
    },
    {
        "nameRu": "Либерия",
        "nameEn": "Liberia",
        "countryCode": "LR",
        "phoneCode": 231,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Ливия",
        "nameEn": "Libya",
        "countryCode": "LY",
        "phoneCode": 218,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Ливия",
        "nameEn": "Libya",
        "countryCode": "LY",
        "phoneCode": 218,
        "phoneMask": "21-###-####"
    },
    {
        "nameRu": "Литва",
        "nameEn": "Lithuania",
        "countryCode": "LT",
        "phoneCode": 370,
        "phoneMask": "(###)##-###"
    },
    {
        "nameRu": "Лихтенштейн",
        "nameEn": "Liechtenstein",
        "countryCode": "LI",
        "phoneCode": 423,
        "phoneMask": "(###)###-####"
    },
    {
        "nameRu": "Люксембург",
        "nameEn": "Luxembourg",
        "countryCode": "LU",
        "phoneCode": 352,
        "phoneMask": "(###)###-###"
    },
    {
        "nameRu": "Маврикий",
        "nameEn": "Mauritius",
        "countryCode": "MU",
        "phoneCode": 230,
        "phoneMask": "###-####"
    },
    {
        "nameRu": "Мавритания",
        "nameEn": "Mauritania",
        "countryCode": "MR",
        "phoneCode": 222,
        "phoneMask": "##-##-####"
    },
    {
        "nameRu": "Мадагаскар",
        "nameEn": "Madagascar",
        "countryCode": "MG",
        "phoneCode": 261,
        "phoneMask": "##-##-#####"
    },
    {
        "nameRu": "Малави",
        "nameEn": "Malawi",
        "countryCode": "MW",
        "phoneCode": 265,
        "phoneMask": "1-###-###"
    },
    {
        "nameRu": "Малави",
        "nameEn": "Malawi",
        "countryCode": "MW",
        "phoneCode": 265,
        "phoneMask": "#-####-####"
    },
    {
        "nameRu": "Малайзия",
        "nameEn": "Malaysia",
        "countryCode": "MY",
        "phoneCode": 60,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Малайзия",
        "nameEn": "Malaysia",
        "countryCode": "MY",
        "phoneCode": 60,
        "phoneMask": "(###)###-###"
    },
    {
        "nameRu": "Малайзия",
        "nameEn": "Malaysia",
        "countryCode": "MY",
        "phoneCode": 60,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Малайзия",
        "nameEn": "Malaysia",
        "countryCode": "MY",
        "phoneCode": 60,
        "phoneMask": "#-###-###"
    },
    {
        "nameRu": "Мали",
        "nameEn": "Mali",
        "countryCode": "ML",
        "phoneCode": 223,
        "phoneMask": "##-##-####"
    },
    {
        "nameRu": "Мальдивы",
        "nameEn": "Maldives",
        "countryCode": "MV",
        "phoneCode": 960,
        "phoneMask": "###-####"
    },
    {
        "nameRu": "Мальта",
        "nameEn": "Malta",
        "countryCode": "MT",
        "phoneCode": 356,
        "phoneMask": "####-####"
    },
    {
        "nameRu": "Марокко",
        "nameEn": "Morocco",
        "countryCode": "MA",
        "phoneCode": 212,
        "phoneMask": "##-####-###"
    },
    {
        "nameRu": "Мозамбик",
        "nameEn": "Mozambique",
        "countryCode": "MZ",
        "phoneCode": 258,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Монголия",
        "nameEn": "Mongolia",
        "countryCode": "MN",
        "phoneCode": 976,
        "phoneMask": "##-##-####"
    },
    {
        "nameRu": "Мьянма",
        "nameEn": "Myanmar",
        "countryCode": "MM",
        "phoneCode": 95,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Мьянма",
        "nameEn": "Myanmar",
        "countryCode": "MM",
        "phoneCode": 95,
        "phoneMask": "#-###-###"
    },
    {
        "nameRu": "Мьянма",
        "nameEn": "Myanmar",
        "countryCode": "MM",
        "phoneCode": 95,
        "phoneMask": "###-###"
    },
    {
        "nameRu": "Намибия",
        "nameEn": "Namibia",
        "countryCode": "NA",
        "phoneCode": 264,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Науру",
        "nameEn": "Nauru",
        "countryCode": "NR",
        "phoneCode": 674,
        "phoneMask": "###-####"
    },
    {
        "nameRu": "Непал",
        "nameEn": "Nepal",
        "countryCode": "NP",
        "phoneCode": 977,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Нигер",
        "nameEn": "Niger",
        "countryCode": "NE",
        "phoneCode": 227,
        "phoneMask": "##-##-####"
    },
    {
        "nameRu": "Нигерия",
        "nameEn": "Nigeria",
        "countryCode": "NG",
        "phoneCode": 234,
        "phoneMask": "(###)###-####"
    },
    {
        "nameRu": "Нигерия",
        "nameEn": "Nigeria",
        "countryCode": "NG",
        "phoneCode": 234,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Нигерия",
        "nameEn": "Nigeria",
        "countryCode": "NG",
        "phoneCode": 234,
        "phoneMask": "##-###-##"
    },
    {
        "nameRu": "Нигерия",
        "nameEn": "Nigeria",
        "countryCode": "NG",
        "phoneCode": 234,
        "phoneMask": "(###)###-####"
    },
    {
        "nameRu": "Никарагуа",
        "nameEn": "Nicaragua",
        "countryCode": "NI",
        "phoneCode": 505,
        "phoneMask": "####-####"
    },
    {
        "nameRu": "Нидерланды",
        "nameEn": "Netherlands",
        "countryCode": "NL",
        "phoneCode": 31,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Новая Зеландия",
        "nameEn": "New Zealand",
        "countryCode": "NZ",
        "phoneCode": 64,
        "phoneMask": "(###)###-###"
    },
    {
        "nameRu": "Новая Зеландия",
        "nameEn": "New Zealand",
        "countryCode": "NZ",
        "phoneCode": 64,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Новая Зеландия",
        "nameEn": "New Zealand",
        "countryCode": "NZ",
        "phoneCode": 64,
        "phoneMask": "(###)###-####"
    },
    {
        "nameRu": "Норвегия",
        "nameEn": "Norway",
        "countryCode": "NO",
        "phoneCode": 47,
        "phoneMask": "(###)##-###"
    },
    {
        "nameRu": "ОАЭ",
        "nameEn": "United Arab Emirates",
        "countryCode": "AE",
        "phoneCode": 971,
        "phoneMask": "5#-###-####"
    },
    {
        "nameRu": "ОАЭ",
        "nameEn": "United Arab Emirates",
        "countryCode": "AE",
        "phoneCode": 971,
        "phoneMask": "#-###-####"
    },
    {
        "nameRu": "Оман",
        "nameEn": "Oman",
        "countryCode": "OM",
        "phoneCode": 968,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Пакистан",
        "nameEn": "Pakistan",
        "countryCode": "PK",
        "phoneCode": 92,
        "phoneMask": "(###)###-####"
    },
    {
        "nameRu": "Панама",
        "nameEn": "Panama",
        "countryCode": "PA",
        "phoneCode": 507,
        "phoneMask": "###-####"
    },
    {
        "nameRu": "Папуа-Новая Гвинея",
        "nameEn": "Papua New Guinea",
        "countryCode": "PG",
        "phoneCode": 675,
        "phoneMask": "(###)##-###"
    },
    {
        "nameRu": "Парагвай",
        "nameEn": "Paraguay",
        "countryCode": "PY",
        "phoneCode": 595,
        "phoneMask": "(###)###-###"
    },
    {
        "nameRu": "Перу",
        "nameEn": "Peru",
        "countryCode": "PE",
        "phoneCode": 51,
        "phoneMask": "(###)###-###"
    },
    {
        "nameRu": "Польша",
        "nameEn": "Poland",
        "countryCode": "PL",
        "phoneCode": 48,
        "phoneMask": "(###)###-###"
    },
    {
        "nameRu": "Португалия",
        "nameEn": "Portugal",
        "countryCode": "PT",
        "phoneCode": 351,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Республика Корея",
        "nameEn": "South Korea",
        "countryCode": "KR",
        "phoneCode": 82,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Россия",
        "nameEn": "Russia",
        "countryCode": "RU",
        "phoneCode": 7,
        "phoneMask": "(###)###-##-##"
    },
    {
        "nameRu": "Руанда",
        "nameEn": "Rwanda",
        "countryCode": "RW",
        "phoneCode": 250,
        "phoneMask": "(###)###-###"
    },
    {
        "nameRu": "Румыния",
        "nameEn": "Romania",
        "countryCode": "RO",
        "phoneCode": 40,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Сальвадор",
        "nameEn": "El Salvador",
        "countryCode": "SV",
        "phoneCode": 503,
        "phoneMask": "##-##-####"
    },
    {
        "nameRu": "Самоа",
        "nameEn": "Samoa",
        "countryCode": "WS",
        "phoneCode": 685,
        "phoneMask": "##-####"
    },
    {
        "nameRu": "Сан-Марино",
        "nameEn": "San Marino",
        "countryCode": "SM",
        "phoneCode": 378,
        "phoneMask": "####-######"
    },
    {
        "nameRu": "Саудовская Аравия",
        "nameEn": "Saudi Arabia",
        "countryCode": "SA",
        "phoneCode": 966,
        "phoneMask": "5-####-####"
    },
    {
        "nameRu": "Саудовская Аравия",
        "nameEn": "Saudi Arabia",
        "countryCode": "SA",
        "phoneCode": 966,
        "phoneMask": "#-###-####"
    },
    {
        "nameRu": "Сенегал",
        "nameEn": "Senegal",
        "countryCode": "SN",
        "phoneCode": 221,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Сербия",
        "nameEn": "Serbia",
        "countryCode": "RS",
        "phoneCode": 381,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Сейшелы",
        "nameEn": "Seychelles",
        "countryCode": "SC",
        "phoneCode": 248,
        "phoneMask": "#-###-###"
    },
    {
        "nameRu": "Сингапур",
        "nameEn": "Singapore",
        "countryCode": "SG",
        "phoneCode": 65,
        "phoneMask": "####-####"
    },
    {
        "nameRu": "Сирия",
        "nameEn": "Syria",
        "countryCode": "SY",
        "phoneCode": 963,
        "phoneMask": "##-####-###"
    },
    {
        "nameRu": "Словакия",
        "nameEn": "Slovakia",
        "countryCode": "SK",
        "phoneCode": 421,
        "phoneMask": "(###)###-###"
    },
    {
        "nameRu": "Словения",
        "nameEn": "Slovenia",
        "countryCode": "SI",
        "phoneCode": 386,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Сомали",
        "nameEn": "Somalia",
        "countryCode": "SO",
        "phoneCode": 252,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Сомали",
        "nameEn": "Somalia",
        "countryCode": "SO",
        "phoneCode": 252,
        "phoneMask": "#-###-###"
    },
    {
        "nameRu": "Судан",
        "nameEn": "Sudan",
        "countryCode": "SD",
        "phoneCode": 249,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Суринам",
        "nameEn": "Suriname",
        "countryCode": "SR",
        "phoneCode": 597,
        "phoneMask": "###-####"
    },
    {
        "nameRu": "Суринам",
        "nameEn": "Suriname",
        "countryCode": "SR",
        "phoneCode": 597,
        "phoneMask": "###-###"
    },
    {
        "nameRu": "США",
        "nameEn": "United States",
        "countryCode": "US",
        "phoneCode": 1,
        "phoneMask": "(###)###-####"
    },
    {
        "nameRu": "Сьерра-Леоне",
        "nameEn": "Sierra Leone",
        "countryCode": "SL",
        "phoneCode": 232,
        "phoneMask": "##-######"
    },
    {
        "nameRu": "Таджикистан",
        "nameEn": "Tajikistan",
        "countryCode": "TJ",
        "phoneCode": 992,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Таиланд",
        "nameEn": "Thailand",
        "countryCode": "TH",
        "phoneCode": 66,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Таиланд",
        "nameEn": "Thailand",
        "countryCode": "TH",
        "phoneCode": 66,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Танзания",
        "nameEn": "Tanzania",
        "countryCode": "TZ",
        "phoneCode": 255,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Того",
        "nameEn": "Togo",
        "countryCode": "TG",
        "phoneCode": 228,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Тонга",
        "nameEn": "Tonga",
        "countryCode": "TO",
        "phoneCode": 676,
        "phoneMask": "#####"
    },
    {
        "nameRu": "Тувалу",
        "nameEn": "Tuvalu",
        "countryCode": "TV",
        "phoneCode": 688,
        "phoneMask": "90####"
    },
    {
        "nameRu": "Тувалу",
        "nameEn": "Tuvalu",
        "countryCode": "TV",
        "phoneCode": 688,
        "phoneMask": "2####"
    },
    {
        "nameRu": "Тунис",
        "nameEn": "Tunisia",
        "countryCode": "TN",
        "phoneCode": 216,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Туркменистан",
        "nameEn": "Turkmenistan",
        "countryCode": "TM",
        "phoneCode": 993,
        "phoneMask": "#-###-####"
    },
    {
        "nameRu": "Турция",
        "nameEn": "Turkey",
        "countryCode": "TR",
        "phoneCode": 90,
        "phoneMask": "(###)###-####"
    },
    {
        "nameRu": "Уганда",
        "nameEn": "Uganda",
        "countryCode": "UG",
        "phoneCode": 256,
        "phoneMask": "(###)###-###"
    },
    {
        "nameRu": "Узбекистан",
        "nameEn": "Uzbekistan",
        "countryCode": "UZ",
        "phoneCode": 998,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Украина",
        "nameEn": "Ukraine",
        "countryCode": "UA",
        "phoneCode": 380,
        "phoneMask": "(##)###-##-##"
    },
    {
        "nameRu": "Уругвай",
        "nameEn": "Uruguay",
        "countryCode": "UY",
        "phoneCode": 598,
        "phoneMask": "#-###-##-##"
    },
    {
        "nameRu": "Фиджи",
        "nameEn": "Fiji",
        "countryCode": "FJ",
        "phoneCode": 679,
        "phoneMask": "##-#####"
    },
    {
        "nameRu": "Филиппины",
        "nameEn": "Philippines",
        "countryCode": "PH",
        "phoneCode": 63,
        "phoneMask": "(###)###-####"
    },
    {
        "nameRu": "Финляндия",
        "nameEn": "Finland",
        "countryCode": "FI",
        "phoneCode": 358,
        "phoneMask": "(###)###-##-##"
    },
    {
        "nameRu": "Франция",
        "nameEn": "France",
        "countryCode": "FR",
        "phoneCode": 33,
        "phoneMask": "(###)###-###"
    },
    {
        "nameRu": "Хорватия",
        "nameEn": "Croatia",
        "countryCode": "HR",
        "phoneCode": 385,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Центральноафриканская Республика",
        "nameEn": "Central African Republic",
        "countryCode": "CF",
        "phoneCode": 236,
        "phoneMask": "##-##-####"
    },
    {
        "nameRu": "Чад",
        "nameEn": "Chad",
        "countryCode": "TD",
        "phoneCode": 235,
        "phoneMask": "##-##-##-##"
    },
    {
        "nameRu": "Черногория",
        "nameEn": "Montenegro",
        "countryCode": "ME",
        "phoneCode": 382,
        "phoneMask": "##-###-###"
    },
    {
        "nameRu": "Чехия",
        "nameEn": "Czech Republic",
        "countryCode": "CZ",
        "phoneCode": 420,
        "phoneMask": "(###)###-###"
    },
    {
        "nameRu": "Чили",
        "nameEn": "Chile",
        "countryCode": "CL",
        "phoneCode": 56,
        "phoneMask": "#-####-####"
    },
    {
        "nameRu": "Швейцария",
        "nameEn": "Switzerland",
        "countryCode": "CH",
        "phoneCode": 41,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Швеция",
        "nameEn": "Sweden",
        "countryCode": "SE",
        "phoneCode": 46,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Шри-Ланка",
        "nameEn": "Sri Lanka",
        "countryCode": "LK",
        "phoneCode": 94,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Эквадор",
        "nameEn": "Ecuador",
        "countryCode": "EC",
        "phoneCode": 593,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Эквадор",
        "nameEn": "Ecuador",
        "countryCode": "EC",
        "phoneCode": 593,
        "phoneMask": "#-###-####"
    },
    {
        "nameRu": "Экваториальная Гвинея",
        "nameEn": "Equatorial Guinea",
        "countryCode": "GQ",
        "phoneCode": 240,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Эритрея",
        "nameEn": "Eritrea",
        "countryCode": "ER",
        "phoneCode": 291,
        "phoneMask": "#-###-###"
    },
    {
        "nameRu": "Эстония",
        "nameEn": "Estonia",
        "countryCode": "EE",
        "phoneCode": 372,
        "phoneMask": "####-####"
    },
    {
        "nameRu": "Эстония",
        "nameEn": "Estonia",
        "countryCode": "EE",
        "phoneCode": 372,
        "phoneMask": "###-####"
    },
    {
        "nameRu": "Эфиопия",
        "nameEn": "Ethiopia",
        "countryCode": "ET",
        "phoneCode": 251,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "ЮАР",
        "nameEn": "South Africa",
        "countryCode": "ZA",
        "phoneCode": 27,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Южный Судан",
        "nameEn": "South Sudan",
        "countryCode": "SS",
        "phoneCode": 211,
        "phoneMask": "##-###-####"
    },
    {
        "nameRu": "Япония",
        "nameEn": "Japan",
        "countryCode": "JP",
        "phoneCode": 81,
        "phoneMask": "##-####-####"
    },
    {
        "nameRu": "Япония",
        "nameEn": "Japan",
        "countryCode": "JP",
        "phoneCode": 81,
        "phoneMask": "(###)###-###"
    }
];