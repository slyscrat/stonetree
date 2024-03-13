document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');

    // Получаем местоположение по https://ipapi.co/json
    const ipapi = fetch('https://ipapi.co/json', {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
            return data;
        });

    // Получаем список масок телефона phones.json
    const phones = fetch('phones.json')
        .then((res => res.json()))
        .then((data) => {
            return data;
        });

    // Список телефонов phone-codes.json - страна, код и маска
    const phone_codes = [
        {
            "mask": "+247-####",
            "cc": "AC",
            "cd": "Ascension",
            "desc_en": "",
            "name_ru": "Остров Вознесения",
            "desc_ru": "",
            "startsWith": "247"
        },
        {"mask": "+376-###-###", "cc": "AD", "cd": "Andorra", "desc_en": "", "name_ru": "Андорра", "desc_ru": "", "startsWith": "376"},
        {
            "mask": "+971-5#-###-####",
            "cc": "AE",
            "cd": "United Arab Emirates",
            "desc_en": "mobile",
            "name_ru": "Объединенные Арабские Эмираты",
            "desc_ru": "мобильные",
            "startsWith": "971"
        },
        {
            "mask": "+971-#-###-####",
            "cc": "AE",
            "cd": "United Arab Emirates",
            "desc_en": "",
            "name_ru": "Объединенные Арабские Эмираты",
            "desc_ru": "",
            "startsWith": "971"
        },
        {
            "mask": "+93-##-###-####",
            "cc": "AF",
            "cd": "Afghanistan",
            "desc_en": "",
            "name_ru": "Афганистан",
            "desc_ru": "",
            "startsWith": "93"
        },
        {
            "mask": "+1(268)###-####",
            "cc": "AG",
            "cd": "Antigua & Barbuda",
            "desc_en": "",
            "name_ru": "Антигуа и Барбуда",
            "desc_ru": "",
            "startsWith": "1268"
        },
        {"mask": "+1(264)###-####", "cc": "AI", "cd": "Anguilla", "desc_en": "", "name_ru": "Ангилья", "desc_ru": "", "startsWith": "1264"},
        {"mask": "+355(###)###-###", "cc": "AL", "cd": "Albania", "desc_en": "", "name_ru": "Албания", "desc_ru": "", "startsWith": "355"},
        {"mask": "+374-##-###-###", "cc": "AM", "cd": "Armenia", "desc_en": "", "name_ru": "Армения", "desc_ru": "", "startsWith": "374"},
        {
            "mask": "+599-###-####",
            "cc": "AN",
            "cd": "Caribbean Netherlands",
            "desc_en": "",
            "name_ru": "Карибские Нидерланды",
            "desc_ru": "",
            "startsWith": "599"
        },
        {
            "mask": "+599-###-####",
            "cc": "AN",
            "cd": "Netherlands Antilles",
            "desc_en": "",
            "name_ru": "Нидерландские Антильские острова",
            "desc_ru": "",
            "startsWith": "599"
        },
        {
            "mask": "+599-9###-####",
            "cc": "AN",
            "cd": "Netherlands Antilles",
            "desc_en": "Curacao",
            "name_ru": "Нидерландские Антильские острова",
            "desc_ru": "Кюрасао",
            "startsWith": "599"
        },
        {"mask": "+244(###)###-###", "cc": "AO", "cd": "Angola", "desc_en": "", "name_ru": "Ангола", "desc_ru": "",  "startsWith": "244"},
        {
            "mask": "+672-1##-###",
            "cc": "AQ",
            "cd": "Australian bases in Antarctica",
            "desc_en": "",
            "name_ru": "Австралийская антарктическая база",
            "desc_ru": "",
            "startsWith": "6721"
        },
        {
            "mask": "+54(###)###-####",
            "cc": "AR",
            "cd": "Argentina",
            "desc_en": "",
            "name_ru": "Аргентина",
            "desc_ru": "",
            "startsWith": "54"
        },
        {
            "mask": "+1(684)###-####",
            "cc": "AS",
            "cd": "American Samoa",
            "desc_en": "",
            "name_ru": "Американское Самоа",
            "desc_ru": "",
            "startsWith": "1684"
        },
        {"mask": "+43(###)###-####", "cc": "AT", "cd": "Austria", "desc_en": "", "name_ru": "Австрия", "desc_ru": "", "startsWith": "43"},
        {
            "mask": "+61-#-####-####",
            "cc": "AU",
            "cd": "Australia",
            "desc_en": "",
            "name_ru": "Австралия",
            "desc_ru": "",
            "startsWith": "61"
        },
        {"mask": "+297-###-####", "cc": "AW", "cd": "Aruba", "desc_en": "", "name_ru": "Аруба", "desc_ru": "", "startsWith": "297"},
        {
            "mask": "+994-##-###-##-##",
            "cc": "AZ",
            "cd": "Azerbaijan",
            "desc_en": "",
            "name_ru": "Азербайджан",
            "desc_ru": "",
            "startsWith": "994"
        },
        {
            "mask": "+387-##-#####",
            "cc": "BA",
            "cd": "Bosnia and Herzegovina",
            "desc_en": "",
            "name_ru": "Босния и Герцеговина",
            "desc_ru": "",
            "startsWith": "387"
        },
        {
            "mask": "+387-##-####",
            "cc": "BA",
            "cd": "Bosnia and Herzegovina",
            "desc_en": "",
            "name_ru": "Босния и Герцеговина",
            "desc_ru": "",
            "startsWith": "387"
        },
        {"mask": "+1(246)###-####", "cc": "BB", "cd": "Barbados", "desc_en": "", "name_ru": "Барбадос", "desc_ru": "", "startsWith": "1246"},
        {
            "mask": "+880-##-###-###",
            "cc": "BD",
            "cd": "Bangladesh",
            "desc_en": "",
            "name_ru": "Бангладеш",
            "desc_ru": "",
            "startsWith": "880"
        },
        {"mask": "+32(###)###-###", "cc": "BE", "cd": "Belgium", "desc_en": "", "name_ru": "Бельгия", "desc_ru": "", "startsWith": "32"},
        {
            "mask": "+226-##-##-####",
            "cc": "BF",
            "cd": "Burkina Faso",
            "desc_en": "",
            "name_ru": "Буркина Фасо",
            "desc_ru": "",
            "startsWith": "226"
        },
        {"mask": "+359(###)###-###", "cc": "BG", "cd": "Bulgaria", "desc_en": "", "name_ru": "Болгария", "desc_ru": "", "startsWith": "359"},
        {"mask": "+973-####-####", "cc": "BH", "cd": "Bahrain", "desc_en": "", "name_ru": "Бахрейн", "desc_ru": "", "startsWith": "973"},
        {"mask": "+257-##-##-####", "cc": "BI", "cd": "Burundi", "desc_en": "", "name_ru": "Бурунди", "desc_ru": "", "startsWith": "257"},
        {"mask": "+229-##-##-####", "cc": "BJ", "cd": "Benin", "desc_en": "", "name_ru": "Бенин", "desc_ru": "", "startsWith": "229"},
        {
            "mask": "+1(441)###-####",
            "cc": "BM",
            "cd": "Bermuda",
            "desc_en": "",
            "name_ru": "Бермудские острова",
            "desc_ru": "",
            "startsWith": "1441"
        },
        {
            "mask": "+673-###-####",
            "cc": "BN",
            "cd": "Brunei Darussalam",
            "desc_en": "",
            "name_ru": "Бруней-Даруссалам",
            "desc_ru": "",
            "startsWith": "673"
        },
        {"mask": "+591-#-###-####", "cc": "BO", "cd": "Bolivia", "desc_en": "", "name_ru": "Боливия", "desc_ru": "", "startsWith": "591"},
        {"mask": "+55-##-####-####", "cc": "BR", "cd": "Brazil", "desc_en": "", "name_ru": "Бразилия", "desc_ru": "", "startsWith": "55"},
        {"mask": "+55-##-#####-####", "cc": "BR", "cd": "Brazil", "desc_en": "", "name_ru": "Бразилия", "desc_ru": "", "startsWith": "55"},
        {
            "mask": "+1(242)###-####",
            "cc": "BS",
            "cd": "Bahamas",
            "desc_en": "",
            "name_ru": "Багамские Острова",
            "desc_ru": "",
            "startsWith": "1242"
        },
        {"mask": "+975-17-###-###", "cc": "BT", "cd": "Bhutan", "desc_en": "", "name_ru": "Бутан", "desc_ru": "", "startsWith": "975"},
        {"mask": "+975-#-###-###", "cc": "BT", "cd": "Bhutan", "desc_en": "", "name_ru": "Бутан", "desc_ru": "", "startsWith": "975"},
        {"mask": "+267-##-###-###", "cc": "BW", "cd": "Botswana", "desc_en": "", "name_ru": "Ботсвана", "desc_ru": "", "startsWith": "267"},
        {
            "mask": "+375(##)###-##-##",
            "cc": "BY",
            "cd": "Belarus",
            "desc_en": "",
            "name_ru": "Беларусь (Белоруссия)",
            "desc_ru": "",
            "startsWith": "375"
        },
        {"mask": "+501-###-####", "cc": "BZ", "cd": "Belize", "desc_en": "", "name_ru": "Белиз", "desc_ru": "", "startsWith": "501"},
        {
            "mask": "+243(###)###-###",
            "cc": "CD",
            "cd": "Dem. Rep. Congo",
            "desc_en": "",
            "name_ru": "Дем. Респ. Конго (Киншаса)",
            "desc_ru": "",
            "startsWith": "243"
        },
        {
            "mask": "+236-##-##-####",
            "cc": "CF",
            "cd": "Central African Republic",
            "desc_en": "",
            "name_ru": "Центральноафриканская Республика",
            "desc_ru": "",
            "startsWith": "236"
        },
        {
            "mask": "+242-##-###-####",
            "cc": "CG",
            "cd": "Congo (Brazzaville)",
            "desc_en": "",
            "name_ru": "Конго (Браззавиль)",
            "desc_ru": "",
            "startsWith": "242"
        },
        {
            "mask": "+41-##-###-####",
            "cc": "CH",
            "cd": "Switzerland",
            "desc_en": "",
            "name_ru": "Швейцария",
            "desc_ru": "",
            "startsWith": "41"
        },
        {
            "mask": "+225-##-###-###",
            "cc": "CI",
            "cd": "Cote d’Ivoire (Ivory Coast)",
            "desc_en": "",
            "name_ru": "Кот-д’Ивуар",
            "desc_ru": "",
            "startsWith": "225"
        },
        {
            "mask": "+682-##-###",
            "cc": "CK",
            "cd": "Cook Islands",
            "desc_en": "",
            "name_ru": "Острова Кука",
            "desc_ru": "",
            "startsWith": "682"
        },
        {"mask": "+56-#-####-####", "cc": "CL", "cd": "Chile", "desc_en": "", "name_ru": "Чили", "desc_ru": "", "startsWith": "56"},
        {"mask": "+237-####-####", "cc": "CM", "cd": "Cameroon", "desc_en": "", "name_ru": "Камерун", "desc_ru": "", "startsWith": "237"},
        {
            "mask": "+86(###)####-####",
            "cc": "CN",
            "cd": "China (PRC)",
            "desc_en": "",
            "name_ru": "Китайская Н.Р.",
            "desc_ru": "",
            "startsWith": "86"
        },
        {
            "mask": "+86(###)####-###",
            "cc": "CN",
            "cd": "China (PRC)",
            "desc_en": "",
            "name_ru": "Китайская Н.Р.",
            "desc_ru": "",
            "startsWith": "86"
        },
        {
            "mask": "+86-##-#####-#####",
            "cc": "CN",
            "cd": "China (PRC)",
            "desc_en": "",
            "name_ru": "Китайская Н.Р.",
            "desc_ru": "",
            "startsWith": "86"
        },
        {"mask": "+57(###)###-####", "cc": "CO", "cd": "Colombia", "desc_en": "", "name_ru": "Колумбия", "desc_ru": "", "startsWith": "57"},
        {
            "mask": "+506-####-####",
            "cc": "CR",
            "cd": "Costa Rica",
            "desc_en": "",
            "name_ru": "Коста-Рика",
            "desc_ru": "",
            "startsWith": "506"
        },
        {"mask": "+53-#-###-####", "cc": "CU", "cd": "Cuba", "desc_en": "", "name_ru": "Куба", "desc_ru": "", "startsWith": "53"},
        {
            "mask": "+238(###)##-##",
            "cc": "CV",
            "cd": "Cape Verde",
            "desc_en": "",
            "name_ru": "Кабо-Верде",
            "desc_ru": "",
            "startsWith": "238"
        },
        {"mask": "+599-###-####", "cc": "CW", "cd": "Curacao", "desc_en": "", "name_ru": "Кюрасао", "desc_ru": "", "startsWith": "599"},
        {"mask": "+357-##-###-###", "cc": "CY", "cd": "Cyprus", "desc_en": "", "name_ru": "Кипр", "desc_ru": "", "startsWith": "357"},
        {
            "mask": "+420(###)###-###",
            "cc": "CZ",
            "cd": "Czech Republic",
            "desc_en": "",
            "name_ru": "Чехия",
            "desc_ru": "",
            "startsWith": "420"
        },
        {"mask": "+49(####)###-####", "cc": "DE", "cd": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "", "startsWith": "49"},
        {"mask": "+49(###)###-####", "cc": "DE", "cd": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "", "startsWith": "49"},
        {"mask": "+49(###)##-####", "cc": "DE", "cd": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "", "startsWith": "49"},
        {"mask": "+49(###)##-###", "cc": "DE", "cd": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "", "startsWith": "49"},
        {"mask": "+49(###)##-##", "cc": "DE", "cd": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "", "startsWith": "49"},
        {"mask": "+49-###-###", "cc": "DE", "cd": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "", "startsWith": "49"},
        {"mask": "+253-##-##-##-##", "cc": "DJ", "cd": "Djibouti", "desc_en": "", "name_ru": "Джибути", "desc_ru": "", "startsWith": "253"},
        {"mask": "+45-##-##-##-##", "cc": "DK", "cd": "Denmark", "desc_en": "", "name_ru": "Дания", "desc_ru": "", "startsWith": "45"},
        {"mask": "+1(767)###-####", "cc": "DM", "cd": "Dominica", "desc_en": "", "name_ru": "Доминика", "desc_ru": "", "startsWith": "1767"},
        {
            "mask": "+1(809)###-####",
            "cc": "DO",
            "cd": "Dominican Republic",
            "desc_en": "",
            "name_ru": "Доминиканская Республика",
            "desc_ru": "",
            "startsWith": "18"
        },
        {
            "mask": "+1(829)###-####",
            "cc": "DO",
            "cd": "Dominican Republic",
            "desc_en": "",
            "name_ru": "Доминиканская Республика",
            "desc_ru": "",
            "startsWith": "18"
        },
        {
            "mask": "+1(849)###-####",
            "cc": "DO",
            "cd": "Dominican Republic",
            "desc_en": "",
            "name_ru": "Доминиканская Республика",
            "desc_ru": "",
            "startsWith": "18"
        },
        {"mask": "+213-##-###-####", "cc": "DZ", "cd": "Algeria", "desc_en": "", "name_ru": "Алжир", "desc_ru": "", "startsWith": "213"},
        {
            "mask": "+593-##-###-####",
            "cc": "EC",
            "cd": "Ecuador ",
            "desc_en": "mobile",
            "name_ru": "Эквадор ",
            "desc_ru": "мобильные",
            "startsWith": "593"
        },
        {"mask": "+593-#-###-####", "cc": "EC", "cd": "Ecuador", "desc_en": "", "name_ru": "Эквадор", "desc_ru": "", "startsWith": "593"},
        {
            "mask": "+372-####-####",
            "cc": "EE",
            "cd": "Estonia ",
            "desc_en": "mobile",
            "name_ru": "Эстония ",
            "desc_ru": "мобильные",
            "startsWith": "372"
        },
        {"mask": "+372-###-####", "cc": "EE", "cd": "Estonia", "desc_en": "", "name_ru": "Эстония", "desc_ru": "", "startsWith": "372"},
        {"mask": "+20(###)###-####", "cc": "EG", "cd": "Egypt", "desc_en": "", "name_ru": "Египет", "desc_ru": "", "startsWith": "20"},
        {"mask": "+291-#-###-###", "cc": "ER", "cd": "Eritrea", "desc_en": "", "name_ru": "Эритрея", "desc_ru": "", "startsWith": "291"},
        {"mask": "+34(###)###-###", "cc": "ES", "cd": "Spain", "desc_en": "", "name_ru": "Испания", "desc_ru": "", "startsWith": "34"},
        {"mask": "+251-##-###-####", "cc": "ET", "cd": "Ethiopia", "desc_en": "", "name_ru": "Эфиопия", "desc_ru": "", "startsWith": "251"},
        {
            "mask": "+358(###)###-##-##",
            "cc": "FI",
            "cd": "Finland",
            "desc_en": "",
            "name_ru": "Финляндия",
            "desc_ru": "",
            "startsWith": "358"
        },
        {"mask": "+679-##-#####", "cc": "FJ", "cd": "Fiji", "desc_en": "", "name_ru": "Фиджи", "desc_ru": "", "startsWith": "679"},
        {
            "mask": "+500-#####",
            "cc": "FK",
            "cd": "Falkland Islands",
            "desc_en": "",
            "name_ru": "Фолклендские острова",
            "desc_ru": "",
            "startsWith": "500"
        },
        {
            "mask": "+691-###-####",
            "cc": "FM",
            "cd": "F.S. Micronesia",
            "desc_en": "",
            "name_ru": "Ф.Ш. Микронезии",
            "desc_ru": "",
            "startsWith": "691"
        },
        {
            "mask": "+298-###-###",
            "cc": "FO",
            "cd": "Faroe Islands",
            "desc_en": "",
            "name_ru": "Фарерские острова",
            "desc_ru": "",
            "startsWith": "298"
        },
        {"mask": "+262-#####-####", "cc": "FR", "cd": "Mayotte", "desc_en": "", "name_ru": "Майотта", "desc_ru": "", "startsWith": "262"},
        {"mask": "+33(###)###-###", "cc": "FR", "cd": "France", "desc_en": "", "name_ru": "Франция", "desc_ru": "", "startsWith": "33"},
        {
            "mask": "+508-##-####",
            "cc": "FR",
            "cd": "St Pierre & Miquelon",
            "desc_en": "",
            "name_ru": "Сен-Пьер и Микелон",
            "desc_ru": "",
            "startsWith": "508"
        },
        {
            "mask": "+590(###)###-###",
            "cc": "FR",
            "cd": "Guadeloupe",
            "desc_en": "",
            "name_ru": "Гваделупа",
            "desc_ru": "",
            "startsWith": "590"
        },
        {"mask": "+241-#-##-##-##", "cc": "GA", "cd": "Gabon", "desc_en": "", "name_ru": "Габон", "desc_ru": "", "startsWith": "241"},
        {"mask": "+1(473)###-####", "cc": "GD", "cd": "Grenada", "desc_en": "", "name_ru": "Гренада", "desc_ru": "", "startsWith": "1473"},
        {
            "mask": "+995(###)###-###",
            "cc": "GE",
            "cd": "Rep. of Georgia",
            "desc_en": "",
            "name_ru": "Грузия",
            "desc_ru": "",
            "startsWith": "995"
        },
        {
            "mask": "+594-#####-####",
            "cc": "GF",
            "cd": "Guiana (French)",
            "desc_en": "",
            "name_ru": "Фр. Гвиана",
            "desc_ru": "",
            "startsWith": "594"
        },
        {"mask": "+233(###)###-###", "cc": "GH", "cd": "Ghana", "desc_en": "", "name_ru": "Гана", "desc_ru": "", "startsWith": "233"},
        {"mask": "+350-###-#####", "cc": "GI", "cd": "Gibraltar", "desc_en": "", "name_ru": "Гибралтар", "desc_ru": "", "startsWith": "350"},
        {"mask": "+299-##-##-##", "cc": "GL", "cd": "Greenland", "desc_en": "", "name_ru": "Гренландия", "desc_ru": "", "startsWith": "299"},
        {"mask": "+220(###)##-##", "cc": "GM", "cd": "Gambia", "desc_en": "", "name_ru": "Гамбия", "desc_ru": "", "startsWith": "220"},
        {"mask": "+224-##-###-###", "cc": "GN", "cd": "Guinea", "desc_en": "", "name_ru": "Гвинея", "desc_ru": "", "startsWith": "224"},
        {
            "mask": "+240-##-###-####",
            "cc": "GQ",
            "cd": "Equatorial Guinea",
            "desc_en": "",
            "name_ru": "Экваториальная Гвинея",
            "desc_ru": "",
            "startsWith": "240"
        },
        {"mask": "+30(###)###-####", "cc": "GR", "cd": "Greece", "desc_en": "", "name_ru": "Греция", "desc_ru": "", "startsWith": "30"},
        {
            "mask": "+502-#-###-####",
            "cc": "GT",
            "cd": "Guatemala",
            "desc_en": "",
            "name_ru": "Гватемала",
            "desc_ru": "",
            "startsWith": "502"
        },
        {"mask": "+1(671)###-####", "cc": "GU", "cd": "Guam", "desc_en": "", "name_ru": "Гуам", "desc_ru": "", "startsWith": "1671"},
        {
            "mask": "+245-#-######",
            "cc": "GW",
            "cd": "Guinea-Bissau",
            "desc_en": "",
            "name_ru": "Гвинея-Бисау",
            "desc_ru": "",
            "startsWith": "245"
        },
        {"mask": "+592-###-####", "cc": "GY", "cd": "Guyana", "desc_en": "", "name_ru": "Гайана", "desc_ru": "", "startsWith": "592"},
        {"mask": "+852-####-####", "cc": "HK", "cd": "Hong Kong", "desc_en": "", "name_ru": "Гонконг", "desc_ru": "", "startsWith": "852"},
        {"mask": "+504-####-####", "cc": "HN", "cd": "Honduras", "desc_en": "", "name_ru": "Гондурас", "desc_ru": "", "startsWith": "504"},
        {"mask": "+385-(##)-###-###", "cc": "HR", "cd": "Croatia", "desc_en": "", "name_ru": "Хорватия", "desc_ru": "", "startsWith": "385"},
        {
            "mask": "+385-(##)-###-####",
            "cc": "HR",
            "cd": "Croatia",
            "desc_en": "",
            "name_ru": "Хорватия",
            "desc_ru": "",
            "startsWith": "385"
        },
        {"mask": "+385-1-####-###", "cc": "HR", "cd": "Croatia", "desc_en": "", "name_ru": "Хорватия", "desc_ru": "", "startsWith": "385"},
        {"mask": "+509-##-##-####", "cc": "HT", "cd": "Haiti", "desc_en": "", "name_ru": "Гаити", "desc_ru": "", "startsWith": "509"},
        {"mask": "+36(###)###-###", "cc": "HU", "cd": "Hungary", "desc_en": "", "name_ru": "Венгрия", "desc_ru": "", "startsWith": "36"},
        {
            "mask": "+62(8##)###-####",
            "cc": "ID",
            "cd": "Indonesia ",
            "desc_en": "mobile",
            "name_ru": "Индонезия ",
            "desc_ru": "мобильные",
            "startsWith": "62"
        },
        {"mask": "+62-##-###-##", "cc": "ID", "cd": "Indonesia", "desc_en": "", "name_ru": "Индонезия", "desc_ru": "", "startsWith": "62"},
        {"mask": "+62-##-###-###", "cc": "ID", "cd": "Indonesia", "desc_en": "", "name_ru": "Индонезия", "desc_ru": "", "startsWith": "62"},
        {
            "mask": "+62-##-###-####",
            "cc": "ID",
            "cd": "Indonesia",
            "desc_en": "",
            "name_ru": "Индонезия",
            "desc_ru": "",
            "startsWith": "62"
        },
        {
            "mask": "+62(8##)###-###",
            "cc": "ID",
            "cd": "Indonesia ",
            "desc_en": "mobile",
            "name_ru": "Индонезия ",
            "desc_ru": "мобильные",
            "startsWith": "62"
        },
        {
            "mask": "+62(8##)###-##-###",
            "cc": "ID",
            "cd": "Indonesia ",
            "desc_en": "mobile",
            "name_ru": "Индонезия ",
            "desc_ru": "мобильные",
            "startsWith": "62"
        },
        {"mask": "+353(###)###-###", "cc": "IE", "cd": "Ireland", "desc_en": "", "name_ru": "Ирландия", "desc_ru": "", "startsWith": "353"},
        {
            "mask": "+972-5#-###-####",
            "cc": "IL",
            "cd": "Israel ",
            "desc_en": "mobile",
            "name_ru": "Израиль ",
            "desc_ru": "мобильные",
            "startsWith": "972"
        },
        {"mask": "+972-#-###-####", "cc": "IL", "cd": "Israel", "desc_en": "", "name_ru": "Израиль", "desc_ru": "", "startsWith": "972"},
        {"mask": "+91(####)###-###", "cc": "IN", "cd": "India", "desc_en": "", "name_ru": "Индия", "desc_ru": "", "startsWith": "91"},
        {
            "mask": "+246-###-####",
            "cc": "IO",
            "cd": "Diego Garcia",
            "desc_en": "",
            "name_ru": "Диего-Гарсия",
            "desc_ru": "",
            "startsWith": "246"
        },
        {"mask": "+964(###)###-####", "cc": "IQ", "cd": "Iraq", "desc_en": "", "name_ru": "Ирак", "desc_ru": "", "startsWith": "964"},
        {"mask": "+98(###)###-####", "cc": "IR", "cd": "Iran", "desc_en": "", "name_ru": "Иран", "desc_ru": "", "startsWith": "98"},
        {"mask": "+354-###-####", "cc": "IS", "cd": "Iceland", "desc_en": "", "name_ru": "Исландия", "desc_ru": "", "startsWith": "354"},
        {"mask": "+39(0##)####-##-##", "cc": "IT", "cd": "Italy", "desc_en": "", "name_ru": "Италия", "desc_ru": "", "startsWith": "39"},
        {"mask": "+39(0##)####-###", "cc": "IT", "cd": "Italy", "desc_en": "", "name_ru": "Италия", "desc_ru": "", "startsWith": "39"},
        {"mask": "+39(0##)###-###", "cc": "IT", "cd": "Italy", "desc_en": "", "name_ru": "Италия", "desc_ru": "", "startsWith": "39"},
        {"mask": "+39(0##)##-###", "cc": "IT", "cd": "Italy", "desc_en": "", "name_ru": "Италия", "desc_ru": "", "startsWith": "39"},
        {"mask": "+39(0##)##-##", "cc": "IT", "cd": "Italy", "desc_en": "", "name_ru": "Италия", "desc_ru": "", "startsWith": "39"},
        {"mask": "+39(0#)##-##", "cc": "IT", "cd": "Italy", "desc_en": "", "name_ru": "Италия", "desc_ru": "", "startsWith": "39"},
        {"mask": "+39(3##)###-##-##", "cc": "IT", "cd": "Italy", "desc_en": "", "name_ru": "Италия", "desc_ru": "", "startsWith": "39"},
        {"mask": "+39(3##)##-##-##", "cc": "IT", "cd": "Italy", "desc_en": "", "name_ru": "Италия", "desc_ru": "", "startsWith": "39"},
        {"mask": "+1(876)###-####", "cc": "JM", "cd": "Jamaica", "desc_en": "", "name_ru": "Ямайка", "desc_ru": "", "startsWith": "1876"},
        {"mask": "+962-#-####-####", "cc": "JO", "cd": "Jordan", "desc_en": "", "name_ru": "Иордания", "desc_ru": "", "startsWith": "962"},
        {
            "mask": "+81-##-####-####",
            "cc": "JP",
            "cd": "Japan ",
            "desc_en": "mobile",
            "name_ru": "Япония ",
            "desc_ru": "мобильные",
            "startsWith": "81"
        },
        {"mask": "+81(###)###-###", "cc": "JP", "cd": "Japan", "desc_en": "", "name_ru": "Япония", "desc_ru": "", "startsWith": "81"},
        {"mask": "+254-###-######", "cc": "KE", "cd": "Kenya", "desc_en": "", "name_ru": "Кения", "desc_ru": "", "startsWith": "254"},
        {
            "mask": "+996(###)###-###",
            "cc": "KG",
            "cd": "Kyrgyzstan",
            "desc_en": "",
            "name_ru": "Киргизия",
            "desc_ru": "",
            "startsWith": "996"
        },
        {"mask": "+855-##-###-###", "cc": "KH", "cd": "Cambodia", "desc_en": "", "name_ru": "Камбоджа", "desc_ru": "", "startsWith": "855"},
        {"mask": "+686-##-###", "cc": "KI", "cd": "Kiribati", "desc_en": "", "name_ru": "Кирибати", "desc_ru": "", "startsWith": "686"},
        {"mask": "+269-##-#####", "cc": "KM", "cd": "Comoros", "desc_en": "", "name_ru": "Коморы", "desc_ru": "", "startsWith": "269"},
        {
            "mask": "+1(869)###-####",
            "cc": "KN",
            "cd": "Saint Kitts & Nevis",
            "desc_en": "",
            "name_ru": "Сент-Китс и Невис",
            "desc_ru": "",
            "startsWith": "1869"
        },
        {
            "mask": "+850-191-###-####",
            "cc": "KP",
            "cd": "DPR Korea (North) ",
            "desc_en": "mobile",
            "name_ru": "Корейская НДР ",
            "desc_ru": "мобильные",
            "startsWith": "850"
        },
        {
            "mask": "+850-##-###-###",
            "cc": "KP",
            "cd": "DPR Korea (North)",
            "desc_en": "",
            "name_ru": "Корейская НДР",
            "desc_ru": "",
            "startsWith": "850"
        },
        {
            "mask": "+850-###-####-###",
            "cc": "KP",
            "cd": "DPR Korea (North)",
            "desc_en": "",
            "name_ru": "Корейская НДР",
            "desc_ru": "",
            "startsWith": "850"
        },
        {
            "mask": "+850-###-###",
            "cc": "KP",
            "cd": "DPR Korea (North)",
            "desc_en": "",
            "name_ru": "Корейская НДР",
            "desc_ru": "",
            "startsWith": "850"
        },
        {
            "mask": "+850-####-####",
            "cc": "KP",
            "cd": "DPR Korea (North)",
            "desc_en": "",
            "name_ru": "Корейская НДР",
            "desc_ru": "",
            "startsWith": "850"
        },
        {
            "mask": "+850-####-#############",
            "cc": "KP",
            "cd": "DPR Korea (North)",
            "desc_en": "",
            "name_ru": "Корейская НДР",
            "desc_ru": "",
            "startsWith": "850"
        },
        {
            "mask": "+82-##-###-####",
            "cc": "KR",
            "cd": "Korea (South)",
            "desc_en": "",
            "name_ru": "Респ. Корея",
            "desc_ru": "",
            "startsWith": "82"
        },
        {"mask": "+965-####-####", "cc": "KW", "cd": "Kuwait", "desc_en": "", "name_ru": "Кувейт", "desc_ru": "", "startsWith": "965"},
        {
            "mask": "+1(345)###-####",
            "cc": "KY",
            "cd": "Cayman Islands",
            "desc_en": "",
            "name_ru": "Каймановы острова",
            "desc_ru": "",
            "startsWith": "1345"
        },
        {
            "mask": "+7(6##)###-##-##",
            "cc": "KZ",
            "cd": "Kazakhstan",
            "desc_en": "",
            "name_ru": "Казахстан",
            "desc_ru": "",
            "startsWith": "7"
        },
        {
            "mask": "+7(7##)###-##-##",
            "cc": "KZ",
            "cd": "Kazakhstan",
            "desc_en": "",
            "name_ru": "Казахстан",
            "desc_ru": "",
            "startsWith": "7"
        },
        {
            "mask": "+856(20##)###-###",
            "cc": "LA",
            "cd": "Laos ",
            "desc_en": "mobile",
            "name_ru": "Лаос ",
            "desc_ru": "мобильные",
            "startsWith": "856"
        },
        {"mask": "+856-##-###-###", "cc": "LA", "cd": "Laos", "desc_en": "", "name_ru": "Лаос", "desc_ru": "", "startsWith": "856"},
        {
            "mask": "+961-##-###-###",
            "cc": "LB",
            "cd": "Lebanon ",
            "desc_en": "mobile",
            "name_ru": "Ливан ",
            "desc_ru": "мобильные",
            "startsWith": "961"
        },
        {"mask": "+961-#-###-###", "cc": "LB", "cd": "Lebanon", "desc_en": "", "name_ru": "Ливан", "desc_ru": "", "startsWith": "961"},
        {
            "mask": "+1(758)###-####",
            "cc": "LC",
            "cd": "Saint Lucia",
            "desc_en": "",
            "name_ru": "Сент-Люсия",
            "desc_ru": "",
            "startsWith": "1758"
        },
        {
            "mask": "+423(###)###-####",
            "cc": "LI",
            "cd": "Liechtenstein",
            "desc_en": "",
            "name_ru": "Лихтенштейн",
            "desc_ru": "",
            "startsWith": "423"
        },
        {
            "mask": "+94-##-###-####",
            "cc": "LK",
            "cd": "Sri Lanka",
            "desc_en": "",
            "name_ru": "Шри-Ланка",
            "desc_ru": "",
            "startsWith": "94"
        },
        {"mask": "+231-##-###-###", "cc": "LR", "cd": "Liberia", "desc_en": "", "name_ru": "Либерия", "desc_ru": "", "startsWith": "231"},
        {"mask": "+266-#-###-####", "cc": "LS", "cd": "Lesotho", "desc_en": "", "name_ru": "Лесото", "desc_ru": "", "startsWith": "266"},
        {"mask": "+370(###)##-###", "cc": "LT", "cd": "Lithuania", "desc_en": "", "name_ru": "Литва", "desc_ru": "", "startsWith": "370"},
        {"mask": "+352-###-###", "cc": "LU", "cd": "Luxembourg", "desc_en": "", "name_ru": "Люксембург", "desc_ru": "", "startsWith": "352"},
        {
            "mask": "+352-####-###",
            "cc": "LU",
            "cd": "Luxembourg",
            "desc_en": "",
            "name_ru": "Люксембург",
            "desc_ru": "",
            "startsWith": "352"
        },
        {
            "mask": "+352-#####-###",
            "cc": "LU",
            "cd": "Luxembourg",
            "desc_en": "",
            "name_ru": "Люксембург",
            "desc_ru": "",
            "startsWith": "352"
        },
        {
            "mask": "+352-######-###",
            "cc": "LU",
            "cd": "Luxembourg",
            "desc_en": "",
            "name_ru": "Люксембург",
            "desc_ru": "",
            "startsWith": "352"
        },
        {"mask": "+371-##-###-###", "cc": "LV", "cd": "Latvia", "desc_en": "", "name_ru": "Латвия", "desc_ru": "", "startsWith": "371"},
        {"mask": "+218-##-###-###", "cc": "LY", "cd": "Libya", "desc_en": "", "name_ru": "Ливия", "desc_ru": "", "startsWith": "218"},
        {
            "mask": "+218-21-###-####",
            "cc": "LY",
            "cd": "Libya",
            "desc_en": "Tripoli",
            "name_ru": "Ливия",
            "desc_ru": "Триполи",
            "startsWith": "218"
        },
        {"mask": "+212-##-####-###", "cc": "MA", "cd": "Morocco", "desc_en": "", "name_ru": "Марокко", "desc_ru": "", "startsWith": "212"},
        {"mask": "+377(###)###-###", "cc": "MC", "cd": "Monaco", "desc_en": "", "name_ru": "Монако", "desc_ru": "", "startsWith": "377"},
        {"mask": "+377-##-###-###", "cc": "MC", "cd": "Monaco", "desc_en": "", "name_ru": "Монако", "desc_ru": "", "startsWith": "377"},
        {"mask": "+373-####-####", "cc": "MD", "cd": "Moldova", "desc_en": "", "name_ru": "Молдова", "desc_ru": "", "startsWith": "373"},
        {
            "mask": "+382-##-###-###",
            "cc": "ME",
            "cd": "Montenegro",
            "desc_en": "",
            "name_ru": "Черногория",
            "desc_ru": "",
            "startsWith": "382"
        },
        {
            "mask": "+261-##-##-#####",
            "cc": "MG",
            "cd": "Madagascar",
            "desc_en": "",
            "name_ru": "Мадагаскар",
            "desc_ru": "",
            "startsWith": "261"
        },
        {
            "mask": "+692-###-####",
            "cc": "MH",
            "cd": "Marshall Islands",
            "desc_en": "",
            "name_ru": "Маршалловы Острова",
            "desc_ru": "",
            "startsWith": "692"
        },
        {
            "mask": "+389-##-###-###",
            "cc": "MK",
            "cd": "Republic of Macedonia",
            "desc_en": "",
            "name_ru": "Респ. Македония",
            "desc_ru": "",
            "startsWith": "389"
        },
        {"mask": "+223-##-##-####", "cc": "ML", "cd": "Mali", "desc_en": "", "name_ru": "Мали", "desc_ru": "", "startsWith": "223"},
        {
            "mask": "+95-##-###-###",
            "cc": "MM",
            "cd": "Burma (Myanmar)",
            "desc_en": "",
            "name_ru": "Бирма (Мьянма)",
            "desc_ru": "",
            "startsWith": "95"
        },
        {
            "mask": "+95-#-###-###",
            "cc": "MM",
            "cd": "Burma (Myanmar)",
            "desc_en": "",
            "name_ru": "Бирма (Мьянма)",
            "desc_ru": "",
            "startsWith": "95"
        },
        {
            "mask": "+95-###-###",
            "cc": "MM",
            "cd": "Burma (Myanmar)",
            "desc_en": "",
            "name_ru": "Бирма (Мьянма)",
            "desc_ru": "",
            "startsWith": "95"
        },
        {"mask": "+976-##-##-####", "cc": "MN", "cd": "Mongolia", "desc_en": "", "name_ru": "Монголия", "desc_ru": "", "startsWith": "976"},
        {"mask": "+853-####-####", "cc": "MO", "cd": "Macau", "desc_en": "", "name_ru": "Макао", "desc_ru": "", "startsWith": "853"},
        {
            "mask": "+1(670)###-####",
            "cc": "MP",
            "cd": "Northern Mariana Islands",
            "desc_en": "",
            "name_ru": "Северные Марианские острова Сайпан",
            "desc_ru": "",
            "startsWith": "1670"
        },
        {
            "mask": "+596(###)##-##-##",
            "cc": "MQ",
            "cd": "Martinique",
            "desc_en": "",
            "name_ru": "Мартиника",
            "desc_ru": "",
            "startsWith": "596"
        },
        {
            "mask": "+222-##-##-####",
            "cc": "MR",
            "cd": "Mauritania",
            "desc_en": "",
            "name_ru": "Мавритания",
            "desc_ru": "",
            "startsWith": "222"
        },
        {
            "mask": "+1(664)###-####",
            "cc": "MS",
            "cd": "Montserrat",
            "desc_en": "",
            "name_ru": "Монтсеррат",
            "desc_ru": "",
            "startsWith": "1664"
        },
        {"mask": "+356-####-####", "cc": "MT", "cd": "Malta", "desc_en": "", "name_ru": "Мальта", "desc_ru": "", "startsWith": "356"},
        {"mask": "+230-###-####", "cc": "MU", "cd": "Mauritius", "desc_en": "", "name_ru": "Маврикий", "desc_ru": "", "startsWith": "230"},
        {
            "mask": "+960-###-####",
            "cc": "MV",
            "cd": "Maldives",
            "desc_en": "",
            "name_ru": "Мальдивские острова",
            "desc_ru": "",
            "startsWith": "960"
        },
        {
            "mask": "+265-1-###-###",
            "cc": "MW",
            "cd": "Malawi",
            "desc_en": "Telecom Ltd",
            "name_ru": "Малави",
            "desc_ru": "Telecom Ltd",
            "startsWith": "265"
        },
        {"mask": "+265-#-####-####", "cc": "MW", "cd": "Malawi", "desc_en": "", "name_ru": "Малави", "desc_ru": "", "startsWith": "265"},
        {"mask": "+52(###)###-####", "cc": "MX", "cd": "Mexico", "desc_en": "", "name_ru": "Мексика", "desc_ru": "", "startsWith": "52"},
        {"mask": "+52-##-##-####", "cc": "MX", "cd": "Mexico", "desc_en": "", "name_ru": "Мексика", "desc_ru": "", "startsWith": "52"},
        {
            "mask": "+60-##-###-####",
            "cc": "MY",
            "cd": "Malaysia ",
            "desc_en": "mobile",
            "name_ru": "Малайзия ",
            "desc_ru": "мобильные",
            "startsWith": "60"
        },
        {
            "mask": "+60-11-####-####",
            "cc": "MY",
            "cd": "Malaysia ",
            "desc_en": "mobile",
            "name_ru": "Малайзия ",
            "desc_ru": "мобильные",
            "startsWith": "60"
        },
        {"mask": "+60(###)###-###", "cc": "MY", "cd": "Malaysia", "desc_en": "", "name_ru": "Малайзия", "desc_ru": "","startsWith": "60"},
        {"mask": "+60-##-###-###", "cc": "MY", "cd": "Malaysia", "desc_en": "", "name_ru": "Малайзия", "desc_ru": "","startsWith": "60"},
        {"mask": "+60-#-###-###", "cc": "MY", "cd": "Malaysia", "desc_en": "", "name_ru": "Малайзия", "desc_ru": "","startsWith": "60"},
        {
            "mask": "+258-##-###-###",
            "cc": "MZ",
            "cd": "Mozambique",
            "desc_en": "",
            "name_ru": "Мозамбик",
            "desc_ru": "",
            "startsWith": "258"
        },
        {"mask": "+264-##-###-####", "cc": "NA", "cd": "Namibia", "desc_en": "", "name_ru": "Намибия", "desc_ru": "", "startsWith": "264"},
        {
            "mask": "+687-##-####",
            "cc": "NC",
            "cd": "New Caledonia",
            "desc_en": "",
            "name_ru": "Новая Каледония",
            "desc_ru": "",
            "startsWith": "687"
        },
        {"mask": "+227-##-##-####", "cc": "NE", "cd": "Niger", "desc_en": "", "name_ru": "Нигер", "desc_ru": "", "startsWith": "227"},
        {
            "mask": "+672-3##-###",
            "cc": "NF",
            "cd": "Norfolk Island",
            "desc_en": "",
            "name_ru": "Норфолк (остров)",
            "desc_ru": "",
            "startsWith": "672"
        },
        {"mask": "+234-##-###-###", "cc": "NG", "cd": "Nigeria", "desc_en": "", "name_ru": "Нигерия", "desc_ru": "", "startsWith": "234"},
        {"mask": "+234-##-###-##", "cc": "NG", "cd": "Nigeria", "desc_en": "", "name_ru": "Нигерия", "desc_ru": "", "startsWith": "234"},
        {
            "mask": "+234(###)###-####",
            "cc": "NG",
            "cd": "Nigeria ",
            "desc_en": "mobile",
            "name_ru": "Нигерия ",
            "desc_ru": "мобильные",
            "startsWith": "234"
        },
        {"mask": "+234(###)###-####", "cc": "NG", "cd": "Nigeria", "desc_en": "", "name_ru": "Нигерия", "desc_ru": "", "startsWith": "234"},
        {"mask": "+505-####-####", "cc": "NI", "cd": "Nicaragua", "desc_en": "", "name_ru": "Никарагуа", "desc_ru": "", "startsWith": "505"},
        {
            "mask": "+31-##-###-####",
            "cc": "NL",
            "cd": "Netherlands",
            "desc_en": "",
            "name_ru": "Нидерланды",
            "desc_ru": "",
            "startsWith": "31"
        },
        {"mask": "+47(###)##-###", "cc": "NO", "cd": "Norway", "desc_en": "", "name_ru": "Норвегия", "desc_ru": "", "startsWith": "47"},
        {"mask": "+977-##-###-###", "cc": "NP", "cd": "Nepal", "desc_en": "", "name_ru": "Непал", "desc_ru": "", "startsWith": "977"},
        {"mask": "+674-###-####", "cc": "NR", "cd": "Nauru", "desc_en": "", "name_ru": "Науру", "desc_ru": "", "startsWith": "674"},
        {"mask": "+683-####", "cc": "NU", "cd": "Niue", "desc_en": "", "name_ru": "Ниуэ", "desc_ru": "", "startsWith": "683"},
        {
            "mask": "+64(###)###-###",
            "cc": "NZ",
            "cd": "New Zealand",
            "desc_en": "",
            "name_ru": "Новая Зеландия",
            "desc_ru": "",
            "startsWith": "64"
        },
        {
            "mask": "+64-##-###-###",
            "cc": "NZ",
            "cd": "New Zealand",
            "desc_en": "",
            "name_ru": "Новая Зеландия",
            "desc_ru": "",
            "startsWith": "64"
        },
        {
            "mask": "+64(###)###-####",
            "cc": "NZ",
            "cd": "New Zealand",
            "desc_en": "",
            "name_ru": "Новая Зеландия",
            "desc_ru": "",
            "startsWith": "64"
        },
        {"mask": "+968-##-###-###", "cc": "OM", "cd": "Oman", "desc_en": "", "name_ru": "Оман", "desc_ru": "", "startsWith": "968"},
        {"mask": "+507-###-####", "cc": "PA", "cd": "Panama", "desc_en": "", "name_ru": "Панама", "desc_ru": "", "startsWith": "507"},
        {"mask": "+51(###)###-###", "cc": "PE", "cd": "Peru", "desc_en": "", "name_ru": "Перу", "desc_ru": "", "startsWith": "51"},
        {
            "mask": "+689-##-##-##",
            "cc": "PF",
            "cd": "French Polynesia",
            "desc_en": "",
            "name_ru": "Французская Полинезия (Таити)",
            "desc_ru": "",
            "startsWith": "689"
        },
        {
            "mask": "+675(###)##-###",
            "cc": "PG",
            "cd": "Papua New Guinea",
            "desc_en": "",
            "name_ru": "Папуа-Новая Гвинея",
            "desc_ru": "",
            "startsWith": "675"
        },
        {
            "mask": "+63(###)###-####",
            "cc": "PH",
            "cd": "Philippines",
            "desc_en": "",
            "name_ru": "Филиппины",
            "desc_ru": "",
            "startsWith": "63"
        },
        {"mask": "+92(###)###-####", "cc": "PK", "cd": "Pakistan", "desc_en": "", "name_ru": "Пакистан", "desc_ru": "", "startsWith": "92"},
        {"mask": "+48(###)###-###", "cc": "PL", "cd": "Poland", "desc_en": "", "name_ru": "Польша", "desc_ru": "", "startsWith": "48"},
        {
            "mask": "+970-##-###-####",
            "cc": "PS",
            "cd": "Palestine",
            "desc_en": "",
            "name_ru": "Палестина",
            "desc_ru": "",
            "startsWith": "970"
        },
        {
            "mask": "+351-##-###-####",
            "cc": "PT",
            "cd": "Portugal",
            "desc_en": "",
            "name_ru": "Португалия",
            "desc_ru": "",
            "startsWith": "351"
        },
        {"mask": "+680-###-####", "cc": "PW", "cd": "Palau", "desc_en": "", "name_ru": "Палау", "desc_ru": "", "startsWith": "680"},
        {"mask": "+595(###)###-###", "cc": "PY", "cd": "Paraguay", "desc_en": "", "name_ru": "Парагвай", "desc_ru": "", "startsWith": "595"},
        {"mask": "+974-####-####", "cc": "QA", "cd": "Qatar", "desc_en": "", "name_ru": "Катар", "desc_ru": "", "startsWith": "974"},
        {"mask": "+262-#####-####", "cc": "RE", "cd": "Reunion", "desc_en": "", "name_ru": "Реюньон", "desc_ru": "", "startsWith": "262"},
        {"mask": "+40-##-###-####", "cc": "RO", "cd": "Romania", "desc_en": "", "name_ru": "Румыния", "desc_ru": "", "startsWith": "40"},
        {"mask": "+381-##-###-####", "cc": "RS", "cd": "Serbia", "desc_en": "", "name_ru": "Сербия", "desc_ru": "", "startsWith": "381"},
        {"mask": "+7(###)###-##-##", "cc": "RU", "cd": "Russia", "desc_en": "", "name_ru": "Россия", "desc_ru": "", "startsWith": "7"},
        {"mask": "+250(###)###-###", "cc": "RW", "cd": "Rwanda", "desc_en": "", "name_ru": "Руанда", "desc_ru": "", "startsWith": "250"},
        {
            "mask": "+966-5-####-####",
            "cc": "SA",
            "cd": "Saudi Arabia ",
            "desc_en": "mobile",
            "name_ru": "Саудовская Аравия ",
            "desc_ru": "мобильные",
            "startsWith": "966"
        },
        {
            "mask": "+966-#-###-####",
            "cc": "SA",
            "cd": "Saudi Arabia",
            "desc_en": "",
            "name_ru": "Саудовская Аравия",
            "desc_ru": "",
            "startsWith": "966"
        },
        {
            "mask": "+677-###-####",
            "cc": "SB",
            "cd": "Solomon Islands ",
            "desc_en": "mobile",
            "name_ru": "Соломоновы Острова ",
            "desc_ru": "мобильные",
            "startsWith": "677"
        },
        {
            "mask": "+677-#####",
            "cc": "SB",
            "cd": "Solomon Islands",
            "desc_en": "",
            "name_ru": "Соломоновы Острова",
            "desc_ru": "",
            "startsWith": "677"
        },
        {"mask": "+248-#-###-###", "cc": "SC", "cd": "Seychelles", "desc_en": "", "name_ru": "Сейшелы", "desc_ru": "", "startsWith": "248"},
        {"mask": "+249-##-###-####", "cc": "SD", "cd": "Sudan", "desc_en": "", "name_ru": "Судан", "desc_ru": "", "startsWith": "249"},
        {"mask": "+46-##-###-####", "cc": "SE", "cd": "Sweden", "desc_en": "", "name_ru": "Швеция", "desc_ru": "", "startsWith": "46"},
        {"mask": "+65-####-####", "cc": "SG", "cd": "Singapore", "desc_en": "", "name_ru": "Сингапур", "desc_ru": "", "startsWith": "65"},
        {
            "mask": "+290-####",
            "cc": "SH",
            "cd": "Saint Helena",
            "desc_en": "",
            "name_ru": "Остров Святой Елены",
            "desc_ru": "",
            "startsWith": "290"
        },
        {
            "mask": "+290-####",
            "cc": "SH",
            "cd": "Tristan da Cunha",
            "desc_en": "",
            "name_ru": "Тристан-да-Кунья",
            "desc_ru": "",
            "startsWith": "290"
        },
        {"mask": "+386-##-###-###", "cc": "SI", "cd": "Slovenia", "desc_en": "", "name_ru": "Словения", "desc_ru": "", "startsWith": "386"},
        {"mask": "+421(###)###-###", "cc": "SK", "cd": "Slovakia", "desc_en": "", "name_ru": "Словакия", "desc_ru": "", "startsWith": "421"},
        {
            "mask": "+232-##-######",
            "cc": "SL",
            "cd": "Sierra Leone",
            "desc_en": "",
            "name_ru": "Сьерра-Леоне",
            "desc_ru": "",
            "startsWith": "232"
        },
        {
            "mask": "+378-####-######",
            "cc": "SM",
            "cd": "San Marino",
            "desc_en": "",
            "name_ru": "Сан-Марино",
            "desc_ru": "",
            "startsWith": "378"
        },
        {"mask": "+221-##-###-####", "cc": "SN", "cd": "Senegal", "desc_en": "", "name_ru": "Сенегал", "desc_ru": "", "startsWith": "221"},
        {"mask": "+252-##-###-###", "cc": "SO", "cd": "Somalia", "desc_en": "", "name_ru": "Сомали", "desc_ru": "", "startsWith": "252"},
        {"mask": "+252-#-###-###", "cc": "SO", "cd": "Somalia", "desc_en": "", "name_ru": "Сомали", "desc_ru": "", "startsWith": "252"},
        {
            "mask": "+252-#-###-###",
            "cc": "SO",
            "cd": "Somalia ",
            "desc_en": "mobile",
            "name_ru": "Сомали ",
            "desc_ru": "мобильные",
            "startsWith": "252"
        },
        {
            "mask": "+597-###-####",
            "cc": "SR",
            "cd": "Suriname ",
            "desc_en": "mobile",
            "name_ru": "Суринам ",
            "desc_ru": "мобильные",
            "startsWith": "597"
        },
        {"mask": "+597-###-###", "cc": "SR", "cd": "Suriname", "desc_en": "", "name_ru": "Суринам", "desc_ru": "", "startsWith": "597"},
        {
            "mask": "+211-##-###-####",
            "cc": "SS",
            "cd": "South Sudan",
            "desc_en": "",
            "name_ru": "Южный Судан",
            "desc_ru": "",
            "startsWith": "211"
        },
        {
            "mask": "+239-##-#####",
            "cc": "ST",
            "cd": "Sao Tome and Principe",
            "desc_en": "",
            "name_ru": "Сан-Томе и Принсипи",
            "desc_ru": "",
            "startsWith": "239"
        },
        {
            "mask": "+503-##-##-####",
            "cc": "SV",
            "cd": "El Salvador",
            "desc_en": "",
            "name_ru": "Сальвадор",
            "desc_ru": "",
            "startsWith": "503"
        },
        {
            "mask": "+1(721)###-####",
            "cc": "SX",
            "cd": "Sint Maarten",
            "desc_en": "",
            "name_ru": "Синт-Маартен",
            "desc_ru": "",
            "startsWith": "1721"
        },
        {
            "mask": "+963-##-####-###",
            "cc": "SY",
            "cd": "Syrian Arab Republic",
            "desc_en": "",
            "name_ru": "Сирийская арабская республика",
            "desc_ru": "",
            "startsWith": "963"
        },
        {
            "mask": "+268-##-##-####",
            "cc": "SZ",
            "cd": "Swaziland",
            "desc_en": "",
            "name_ru": "Свазиленд",
            "desc_ru": "",
            "startsWith": "268"
        },
        {
            "mask": "+1(649)###-####",
            "cc": "TC",
            "cd": "Turks & Caicos",
            "desc_en": "",
            "name_ru": "Тёркс и Кайкос",
            "desc_ru": "",
            "startsWith": "1649"
        },
        {"mask": "+235-##-##-##-##", "cc": "TD", "cd": "Chad", "desc_en": "", "name_ru": "Чад", "desc_ru": "", "startsWith": "235"},
        {"mask": "+228-##-###-###", "cc": "TG", "cd": "Togo", "desc_en": "", "name_ru": "Того", "desc_ru": "", "startsWith": "228"},
        {
            "mask": "+66-##-###-####",
            "cc": "TH",
            "cd": "Thailand ",
            "desc_en": "mobile",
            "name_ru": "Таиланд ",
            "desc_ru": "мобильные",
            "startsWith": "66"
        },
        {"mask": "+66-##-###-###", "cc": "TH", "cd": "Thailand", "desc_en": "", "name_ru": "Таиланд", "desc_ru": "", "startsWith": "66"},
        {
            "mask": "+992-##-###-####",
            "cc": "TJ",
            "cd": "Tajikistan",
            "desc_en": "",
            "name_ru": "Таджикистан",
            "desc_ru": "",
            "startsWith": "992"
        },
        {"mask": "+690-####", "cc": "TK", "cd": "Tokelau", "desc_en": "", "name_ru": "Токелау", "desc_ru": "", "startsWith": "690"},
        {
            "mask": "+670-###-####",
            "cc": "TL",
            "cd": "East Timor",
            "desc_en": "",
            "name_ru": "Восточный Тимор",
            "desc_ru": "",
            "startsWith": "670"
        },
        {
            "mask": "+670-77#-#####",
            "cc": "TL",
            "cd": "East Timor",
            "desc_en": "Timor Telecom",
            "name_ru": "Восточный Тимор",
            "desc_ru": "Timor Telecom",
            "startsWith": "670"
        },
        {
            "mask": "+670-78#-#####",
            "cc": "TL",
            "cd": "East Timor",
            "desc_en": "Timor Telecom",
            "name_ru": "Восточный Тимор",
            "desc_ru": "Timor Telecom",
            "startsWith": "670"
        },
        {
            "mask": "+993-#-###-####",
            "cc": "TM",
            "cd": "Turkmenistan",
            "desc_en": "",
            "name_ru": "Туркменистан",
            "desc_ru": "",
            "startsWith": "993"
        },
        {"mask": "+216-##-###-###", "cc": "TN", "cd": "Tunisia", "desc_en": "", "name_ru": "Тунис", "desc_ru": "", "startsWith": "216"},
        {"mask": "+676-#####", "cc": "TO", "cd": "Tonga", "desc_en": "", "name_ru": "Тонга", "desc_ru": "", "startsWith": "676"},
        {"mask": "+90(###)###-####", "cc": "TR", "cd": "Turkey", "desc_en": "", "name_ru": "Турция", "desc_ru": "", "startsWith": "90"},
        {
            "mask": "+1(868)###-####",
            "cc": "TT",
            "cd": "Trinidad & Tobago",
            "desc_en": "",
            "name_ru": "Тринидад и Тобаго",
            "desc_ru": "",
            "startsWith": "1868"
        },
        {
            "mask": "+688-90####",
            "cc": "TV",
            "cd": "Tuvalu ",
            "desc_en": "mobile",
            "name_ru": "Тувалу ",
            "desc_ru": "мобильные",
            "startsWith": "688"
        },
        {"mask": "+688-2####", "cc": "TV", "cd": "Tuvalu", "desc_en": "", "name_ru": "Тувалу", "desc_ru": "", "startsWith": "688"},
        {"mask": "+886-#-####-####", "cc": "TW", "cd": "Taiwan", "desc_en": "", "name_ru": "Тайвань", "desc_ru": "", "startsWith": "886"},
        {"mask": "+886-####-####", "cc": "TW", "cd": "Taiwan", "desc_en": "", "name_ru": "Тайвань", "desc_ru": "", "startsWith": "886"},
        {"mask": "+255-##-###-####", "cc": "TZ", "cd": "Tanzania", "desc_en": "", "name_ru": "Танзания", "desc_ru": "", "startsWith": "255"},
        {"mask": "+380(##)###-##-##", "cc": "UA", "cd": "Ukraine", "desc_en": "", "name_ru": "Украина", "desc_ru": "", "startsWith": "380"},
        {"mask": "+256(###)###-###", "cc": "UG", "cd": "Uganda", "desc_en": "", "name_ru": "Уганда", "desc_ru": "", "startsWith": "256"},
        {
            "mask": "+44-##-####-####",
            "cc": "UK",
            "cd": "United Kingdom",
            "desc_en": "",
            "name_ru": "Великобритания",
            "desc_ru": "",
            "startsWith": "44"
        },
        {"mask": "+598-#-###-##-##", "cc": "UY", "cd": "Uruguay", "desc_en": "", "name_ru": "Уругвай", "desc_ru": "", "startsWith": "598"},
        {
            "mask": "+998-##-###-####",
            "cc": "UZ",
            "cd": "Uzbekistan",
            "desc_en": "",
            "name_ru": "Узбекистан",
            "desc_ru": "",
            "startsWith": "998"
        },
        {
            "mask": "+39-6-698-#####",
            "cc": "VA",
            "cd": "Vatican City",
            "desc_en": "",
            "name_ru": "Ватикан",
            "desc_ru": "",
            "startsWith": "396698"
        },
        {
            "mask": "+1(784)###-####",
            "cc": "VC",
            "cd": "Saint Vincent & the Grenadines",
            "desc_en": "",
            "name_ru": "Сент-Винсент и Гренадины",
            "desc_ru": "",
            "startsWith": "1784"
        },
        {
            "mask": "+58(###)###-####",
            "cc": "VE",
            "cd": "Venezuela",
            "desc_en": "",
            "name_ru": "Венесуэла",
            "desc_ru": "",
            "startsWith": "58"
        },
        {
            "mask": "+1(284)###-####",
            "cc": "VG",
            "cd": "British Virgin Islands",
            "desc_en": "",
            "name_ru": "Британские Виргинские острова",
            "desc_ru": "",
            "startsWith": "1284"
        },
        {
            "mask": "+1(340)###-####",
            "cc": "VI",
            "cd": "US Virgin Islands",
            "desc_en": "",
            "name_ru": "Американские Виргинские острова",
            "desc_ru": "",
            "startsWith": "1340"
        },
        {"mask": "+84-##-####-###", "cc": "VN", "cd": "Vietnam", "desc_en": "", "name_ru": "Вьетнам", "desc_ru": "", "startsWith": "84"},
        {"mask": "+84(###)####-###", "cc": "VN", "cd": "Vietnam", "desc_en": "", "name_ru": "Вьетнам", "desc_ru": "", "startsWith": "84"},
        {
            "mask": "+678-##-#####",
            "cc": "VU",
            "cd": "Vanuatu ",
            "desc_en": "mobile",
            "name_ru": "Вануату ",
            "desc_ru": "мобильные",
            "startsWith": "678"
        },
        {"mask": "+678-#####", "cc": "VU", "cd": "Vanuatu", "desc_en": "", "name_ru": "Вануату", "desc_ru": "", "startsWith": "678"},
        {
            "mask": "+681-##-####",
            "cc": "WF",
            "cd": "Wallis and Futuna",
            "desc_en": "",
            "name_ru": "Уоллис и Футуна",
            "desc_ru": "",
            "startsWith": "681"
        },
        {"mask": "+685-##-####", "cc": "WS", "cd": "Samoa", "desc_en": "", "name_ru": "Самоа", "desc_ru": "", "startsWith": "685"},
        {
            "mask": "+967-###-###-###",
            "cc": "YE",
            "cd": "Yemen ",
            "desc_en": "mobile",
            "name_ru": "Йемен ",
            "desc_ru": "мобильные",
            "startsWith": "967"
        },
        {"mask": "+967-#-###-###", "cc": "YE", "cd": "Yemen", "desc_en": "", "name_ru": "Йемен", "desc_ru": "", "startsWith": "967"},
        {"mask": "+967-##-###-###", "cc": "YE", "cd": "Yemen", "desc_en": "", "name_ru": "Йемен", "desc_ru": "", "startsWith": "967"},
        {
            "mask": "+27-##-###-####",
            "cc": "ZA",
            "cd": "South Africa",
            "desc_en": "",
            "name_ru": "Южно-Африканская Респ.",
            "desc_ru": "",
            "startsWith": "27"
        },
        {"mask": "+260-##-###-####", "cc": "ZM", "cd": "Zambia", "desc_en": "", "name_ru": "Замбия", "desc_ru": "", "startsWith": "260"},
        {"mask": "+263-#-######", "cc": "ZW", "cd": "Zimbabwe", "desc_en": "", "name_ru": "Зимбабве", "desc_ru": "", "startsWith": "263"},
        {"mask": "+1(###)###-####", "cc": "US", "cd": "USA", "desc_en": "", "name_ru": "США", "desc_ru": "", "startsWith": "1"},
        {"mask": "+1(###)###-####", "cc": "CA", "cd": "Canada", "desc_en": "", "name_ru": "Канада", "desc_ru": "", "startsWith": "1"},
    ];

    function isSorted(lang){
        const sorted = phone_codes.sort((a, b) => {
            if (a['name_' + lang].toLowerCase() < b['name_' + lang].toLowerCase()) {
                return -1;
            }
            if (a['name_' + lang].toLowerCase() > b['name_' + lang].toLowerCase()) {
                return 1;
            }
            return 0;
        });
        return sorted;
    }

    // Добавляем все маски из phone_codes
    Inputmask.extendAliases({
        "phone": {
            alias: "abstractphone",
            phoneCodes: phone_codes
        }
    });

    Inputmask.prototype.aliases.abstractphone.mask = function(opts) {
        opts.definitions = {
            "#": Inputmask.prototype.definitions["9"]
        };

        // getting clean phone codes and converting mask strings to objects
        var result = opts.phoneCodes.map(function (a) {
            if (typeof a === 'string') {
                a = { mask: a };
            }
            a._cleanCode = a.mask.replace(/[^0-9]/g, '');
            return a;
        });

        // sorting codes by alphabet order, because we need to generate missing masks in the next code block
        result = result.sort(function(a, b) {
            return a._cleanCode.localeCompare(b._cleanCode);
        });

        // generating missing masks
        var newCodes = {};
        result.forEach((a) => {
            for (var i = 1; i < a._cleanCode.length; i++) {
                var key = a._cleanCode.substr(0, i);

                // if we don't have such code then making it
                if (!newCodes[key]) {
                    var newMask = a.mask;

                    var rg = /[0-9]/g;
                    var count = 0;
                    var match;
                    while ((match = rg.exec(a.mask))) {
                        count++;
                        if (count > key.length) {
                            newMask = newMask.substr(0, match.index) + '#' + newMask.substr(match.index + 1);
                        }
                    }

                    // adding new code
                    newCodes[key] = {
                        mask: newMask,
                        cc: a.cc,
                        cd: a.cd,
                        desc_en: a.desc_en,
                        name_ru: a.name_ru,
                        desc_ru: a.desc_ru,
                        _cleanCode: key,
                    };
                }
            }

            // marking current code as processed
            newCodes[a._cleanCode] = true;
        });

        // pushing generated codes to result
        for (var key in newCodes) {
            if (newCodes.hasOwnProperty(key)) {
                if (typeof newCodes[key] === 'object') { // if it's not just marked as processed
                    result.push(newCodes[key]);
                }
            }
        }

        // sorting result by code length
        result = result.sort(function (a, b) {
            return a._cleanCode.length <= b._cleanCode.length ? -1 : 1;
        });

        return result;
    };

    // Слежение за скролл страницы
    window.addEventListener('scroll', () => {

        // Если больше 200 пикселей страница, показываем шапку
        if (window.scrollY > 200) {
            header.classList.add('fixed')
            main.classList.add('fixed')
        } else {
            header.classList.remove('fixed');
            main.classList.remove('fixed');
        }
    })


    // Главный экран - слайдер Swiper, документация https://swiperjs.com/swiper-api
    const mains = document.querySelectorAll('.main');
    if (mains[0]) {
        mains.forEach((main) => {
            const _swiperElement1 = main.querySelector('.main__swiper_1');
            const _swiperElement2 = main.querySelector('.main__swiper_2');
            const _swiperPagination1 = main.querySelector(".main__swiper-pagination_1 .swiper-pagination");
            const _swiperPagination2 = main.querySelector(".main__swiper-pagination_2 .swiper-pagination");

            const _swiper1 = new Swiper(_swiperElement1, {
                speed: _swiperElement1.dataset.speed,
                spaceBetween: 10,
                autoplay: {
                    delay: _swiperElement1.dataset.autoplay,
                    disableOnInteraction: false
                },
                pagination: {
                    el: _swiperPagination1,
                    clickable: true,
                },
                allowTouchMove: false,
                effect: 'fade',
                loop: true,
                rewind: true,
                on: {
                    afterInit: function (swiper) {
                        _swiperPagination1.style.setProperty('--count', swiper.pagination.bullets.length); // Передаем количество пагинаций
                        main.querySelector('.main__swiper-pagination_1 .main__nums-end').textContent = swiper.pagination.bullets.length < 10 ? '0' + swiper.pagination.bullets.length : swiper.pagination.bullets.length; // Общее количество слайдов
                    },
                    slideChange: function (swiper) {
                        main.querySelector('.main__swiper-pagination_1 .main__nums-start').textContent = swiper.realIndex + 1 < 10 ? '0' + (swiper.realIndex + 1) : swiper.realIndex + 1;  // Показывает число нужного слайда
                    }
                }
            });
            const _swiper2 = new Swiper(_swiperElement2, {
                speed: _swiperElement1.dataset.speed,
                spaceBetween: 0,
                autoplay: {
                    delay: _swiperElement2.dataset.autoplay,
                    disableOnInteraction: false
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
                        _swiperPagination2.style.setProperty('--count', swiper.pagination.bullets.length); // Передаем количество пагинаций
                        main.querySelector('.main__swiper-pagination_2 .main__nums-end').textContent = swiper.pagination.bullets.length < 10 ? '0' + swiper.pagination.bullets.length : swiper.pagination.bullets.length; // Общее количество слайдов
                    },
                    slideChange: function (swiper) {
                        main.querySelector('.main__swiper-pagination_2 .main__nums-start').textContent = swiper.realIndex + 1 < 10 ? '0' + (swiper.realIndex + 1) : swiper.realIndex + 1;  // Показывает число нужного слайда
                    }
                }
            });

            // Следим за видимостью экрана, если видно запускаем автоплей слайдера иначе отключаем
            new IntersectionObserver((entries, observer) => {
                if (entries[0].isIntersecting) { // Если в поле видимости, запускам. Иначе отключаем
                    _swiper1.autoplay.resume()
                } else {
                    _swiper1.autoplay.pause()
                }
            }).observe(_swiperElement1)

            new IntersectionObserver((entries, observer) => {
                if (entries[0].isIntersecting) { // Если в поле видимости, запускам. Иначе отключаем
                    _swiper2.autoplay.resume()
                } else {
                    _swiper2.autoplay.pause()
                }
            }).observe(_swiperElement2)


            _swiper1.autoplay.pause(); // Отключаем автоплей. Стоит слежение за видимостью экрана по необходимости запустит
            _swiper2.autoplay.pause(); // Отключаем автоплей. Стоит слежение за видимостью экрана по необходимости запустит



            // На телефоне фиксируем высоту формы
            const form = main.querySelector('.main__form');
            if (window.innerWidth < 1140) {
                form.style.minHeight = form.scrollHeight + 'px';
            } else {
                form.style.minHeight = '';
            }
        })
    }


    // Перебор всех функций международного телефона с флагом
    const interTels = document.querySelectorAll('.p-inter-tel');
    if (interTels[0]) {
        interTels.forEach((interTel) => {

            function getValueOfPhones(slug){ // Получить обьект по коду страны
                return phone_codes.find((phone) => phone.cc.toLowerCase() === slug);
            }

            const lang = interTel.closest('form').dataset.lang; // язык
            const slug = interTel.querySelector('input[name="tel_slug"]'); // код страны

            const input = interTel.querySelector('.p-inter-tel__input-item input[type="tel"]'); // Само поле телефона

            // Добавляем маску
            Inputmask('phone', {
                definitions: {
                    "#": {
                        validator: "[0-9]",
                        cardinality: 1
                    }
                },
                showMaskOnHover: false,
                autoUnmask: true,
                clearMaskOnLostFocus: true,
            }).mask(input); // https://robinherbots.github.io/Inputmask/#/documentation

            function checkLengthAndSet(slug, input){
                const object = getValueOfPhones(slug.value); // Получаем обьект по коду страны
                const startWith = object.startsWith; // Код телефона

                // Проверяем длинну кода телефона и маску
                // if (startWith.length > input.inputmask.unmaskedvalue().replace(/[+_]/g, '').length) {
                //     input.inputmask.setValue(startWith);
                // }
                //
                // if (input.inputmask.maskset.maskLength < input.value){
                //     input.value = input.value;
                // }
            }


            // // Следим за полем, чтобы автоматически добавить номер телефона в начало через
            input.addEventListener('input', ()=>{
                checkLengthAndSet(slug, input);

                console.table(input.inputmask);
            })
            input.inputmask.setValue(getValueOfPhones(slug.value).startsWith); // Устанавливаем начальное значение по умолчанию

            // Событие выбора опций международного телефона
            slug.addEventListener('pInterTelChangeSlug', ()=>{
                input.inputmask.setValue(getValueOfPhones(slug.value).startsWith); // Устанавливаем значение при смене кода страны
            })

            // Событие установки кода страны по местоположению
            slug.addEventListener('pInterTelChangeSlugByIp', ()=>{
                input.inputmask.setValue(getValueOfPhones(slug.value).startsWith);
            })

            const button = interTel.querySelector('.p-inter-tel__select-block'); // Кнопка
            const buttonFlag = button.querySelector('.fi'); // Флаг

            const options = interTel.querySelector('.p-inter-tel__options'); // Блок опций
            const optionsUl = options.querySelector('ul'); // Список, где будем добавлять опции
            const optionsSearch = options.querySelector('input'); // Поиск

            // Шаблон опций
            function outputOption(mask, code, name, classes) {
                return optionOutput = `
                    <li class="p-inter-tel__option ${classes}" data-code="${code}" data-name="${name}">
                      <div class="fi fi-${code.toLowerCase()}"></div>
                      <div class="p-inter-tel__option-name">${name}</div>
                      <div class="p-inter-tel__option-num">${mask.replace(/[\\{}()#-]/g, '')}</div>
                    </li>
                `;
            }

            // Сброс поиска и убираем класс hidden
            function resetQuery() {
                _options.forEach((option) => {
                    option.classList.remove('hidden');
                    optionsSearch.value = '';
                })
            }

            // Показываем список опции при клике
            button.addEventListener('click', () => {
                if (interTel.classList.contains('active')) {
                    resetQuery();
                }
                interTel.classList.toggle('active');
            })

            let _options = null; // Список опций
            const existsArrayPhoneCodes = [];
            isSorted(lang).forEach((phone, index) => {
                let optionClasses = ''; // Класс
                if (slug.value === phone.cc.toLowerCase()) { // Проверяем совпадение кода страны и ставим по умолчанию
                    optionClasses = 'active';
                    buttonFlag.className = `fi fi-${phone.cc.toLowerCase()}`; // Фиксируем флаг по коду
                }

                // Проверяем совпадение кода страны в массиве, чтобы не было дубликата в опциях
                if (!existsArrayPhoneCodes.includes(phone.cc.toLowerCase())) {
                    existsArrayPhoneCodes.push(phone.cc.toLowerCase());
                    const option = outputOption(phone.mask, phone.cc.toLowerCase(), phone['name_' + lang], optionClasses);
                    optionsUl.insertAdjacentHTML('beforeend', option); // Добавляем опцию в список
                }
            })


            // Получаем все опции и создаем событие клика
            _options = optionsUl.querySelectorAll('.p-inter-tel__option');

            _options.forEach((_option) => {
                _option.addEventListener('click', () => {
                    const code = _option.dataset.code;
                    const activeOption = optionsUl.querySelector('.p-inter-tel__option.active');
                    if (activeOption) { // Убираем активную опцию
                        activeOption.classList.remove('active');
                    }
                    slug.value = code; // Обновляем код
                    buttonFlag.className = `fi fi-${code.toLowerCase()}`; // Обновляем флаг
                    input.focus(); // Фокусируем поле
                    _option.classList.add('active');
                    interTel.classList.remove('active');
                    resetQuery();

                    const event = new Event('pInterTelChangeSlug'); // Запускаем событие смены кода страны, и можем отследить
                    slug.dispatchEvent(event);
                })
            })

            // Поиск стран
            optionsSearch.addEventListener('input', () => {
                let search_query = optionsSearch.value.toLowerCase(); // Получаем значение поиска
                _options.forEach((option) => { // Перебираем все опции
                    let is_matched = option.dataset.name.toLowerCase().includes(search_query); // Проверяем совпадение слов, букв и возвращает булевое значение
                    is_matched ? option.classList.remove('hidden') : option.classList.add('hidden');
                })
            })
        })
    }

    // Список карточек - слайдер Swiper, документация https://swiperjs.com/swiper-api
    const cards = document.querySelectorAll('.cards');
    if (cards[0]) {
        cards.forEach((card) => {
            const _swiperElement = card.querySelector('.swiper');
            const _swiperWrapper = _swiperElement.querySelector('.swiper-wrapper');
            const _swiperPagination = card.querySelector(".swiper-pagination");
            const _swiperScrollbar = card.querySelector(".swiper-scrollbar");
            _swiperWrapper.classList.remove('active'); // По умолчанию стоит класс чтобы зафиксировать карточки, чтобы не было дерганий. Потом удаляем и инициализируем Слайдер
            const _swiper = new Swiper(_swiperElement, {
                speed: _swiperElement.dataset.speed,
                slidesPerView: 'auto',
                spaceBetween: 15,
                slidesPerGroup: 2,
                pagination: {
                    el: _swiperPagination,
                    clickable: true,
                    type: 'custom',
                    renderCustom: function (swiper, current, total) {
                        let start = current < 10 ? '0' + current : current;
                        let end = total - 1 < 10 ? '0' + total : total;
                        return `<span class="cards__nums-start">${start}</span>/<span class="cards__nums-end">${end}</span>`;
                    }
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
                    }
                },
            });
        })
    }

1
    // Promise. Ожидаем что загрузились местоположения через fetch
    // results[0] - ipapi
    Promise.all([ipapi]).then((results) => {
        const slug = results[0].country_code; // Получаем код страны по местоположению
        console.log(slug);
        interTels.forEach((interTel) => {
            const statusIp = interTel.querySelector('input[name="ip_status"]'); // Статус, если true - то обновляем все функционалы международного телефона (custom select)
            if (statusIp.value === 'true') {
                const inputSlug = interTel.querySelector('input[name="tel_slug"]');
                inputSlug.value = slug.toLowerCase(); // Обновляем код страны

                const event = new Event('pInterTelChangeSlugByIp'); // Создаем событие и вызываем при смене кода страны по айпи
                inputSlug.dispatchEvent(event);

                const button = interTel.querySelector('.p-inter-tel__select-block'); // Кнопка
                const buttonFlag = button.querySelector('.fi'); // Флаг
                buttonFlag.className = `fi fi-${slug.toLowerCase()}`;
            }
        })
    })

    // Кастомный select
    const pSelects = document.querySelectorAll('.p-select');
    if (pSelects[0]) {
        pSelects.forEach((pSelect) => {
            const input = pSelect.querySelector('.p-select__input');
            const btn = pSelect.querySelector('.p-select__btn');
            const current = btn.querySelector('.p-select__current'); // Выбранная опция
            const options = pSelect.querySelectorAll('.p-select__options .p-select__option'); // Список опций

            // Показываем список опции при клике
            btn.addEventListener('click', () => {
                pSelect.classList.toggle('active');
            })

            // Перебор опций и добавляем событие клика
            options.forEach((option) => {
                option.addEventListener('click', () => {

                    input.value = option.textContent;
                    current.textContent = option.textContent;

                    pSelect.classList.remove('active');
                    btn.classList.add('active'); // Выделяем активную опцию - меняется цвет серого на нужный по классу
                })
            })
        })
    }

    // Плавная прокрутка ссылок по якорю через #id
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            const headerHeight = header.scrollHeight;
            const block = document.getElementById(blockID);
            if (block){
                const offsetPosition = document.getElementById(blockID).getBoundingClientRect().top - (window.innerHeight - document.getElementById(blockID).offsetHeight + headerHeight) / 2 ;
                window.scrollBy({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        })
    }


    // Шаблон уведомления ошибки под полем
    function showMessageError(element, message, time = 5) {


        const parentBlock = element.closest('.p-form__input'); // Получаем блок, где будем добавлять уведомление или класс для стиля
        // Шаблон сообщения и добавляем в блок
        parentBlock.insertAdjacentHTML('beforeend', `
            <div class="p-form__error">${message}</div>
        `);
        parentBlock.classList.add('invalid'); // Делаем обводку красным


        const activeMessage = parentBlock.querySelector('.p-form__error'); // Проверяем сообщение добавленное и запускаем таймер для скрытия, точнее удаления. При отправки формы у нас сбрасывается все сообщения при функции resetMessages(form)
        if (activeMessage) {
            setTimeout(() => {
                activeMessage.remove();
            }, time * 1000)
        }
    }

    // Сбрасываем все ошибки
    function resetMessages(form) {
        const messages = form.querySelectorAll('.p-form__error');
        if (messages[0]) {
            messages.forEach((message) => {
                message.remove();
            })
        }
        const invalids = form.querySelectorAll('.invalid')
        invalids.forEach((invalid) => {
            invalid.classList.remove('invalid');
        })
    }


    // Валидация - сообщения с языками и методы для проверки
    const validator = {
        messages: {
            ru: {
                required: 'Поле обязательно для заполнения',
                letterSpacing: 'Поле должно содержать только буквы',
                telShort: 'Слишком короткое значение',
                error: 'Произошла ошибка при отправке данных.',
            },
            en: {
                required: 'Field is required',
                letterSpacing: 'Field must contain only letters',
                telShort: 'Too short value',
                error: 'An error occurred while sending data.',
            }
        },
        methods: {
            letterSpacing(str) { // Проверка на буквы
                const re = /^[A-ZА-ЯЁ]+$/i;
                return re.test(str);
            },
            checked(input) { // Проверка на чекбокс
                return input.checked;
            },
            customSelect(input, checkOptions = true) { // Проверка на селект, на дефолтное значение
                const value = input.value;
                const _def = input.dataset.default;
                if (value !== _def) {
                    return true
                } else if (checkOptions) {
                    const pSelect = input.closest('.p-select');
                    const options = pSelect.querySelectorAll('.p-select__options');
                    return [...options].find(option => option.textContent === value)
                }
            },
            required(value) { // Проверка на количество символов
                return value.length > 0;
            },
            countDigitsInString(str) {
                return (str.match(/\d/g) || []).length;
            },
            countDigitsInMask(mask) {
                return (mask.match(/#/g) || []).length;
            },
            checkPhoneValidity(phone, phoneMasks) { // Проверка на валидность телефона из phones.json
                var cleanedPhone = phone.replace(/\D/g, '');

                for (var i = 0; i < phoneMasks.length; i++) {
                    var mask = phoneMasks[i].mask;
                    var maskStart = mask.split('#')[0].replace(/\D/g, '');
                    if (cleanedPhone.startsWith(maskStart)) {
                        var maskDigits = validator.methods.countDigitsInMask(mask);
                        var enteredDigits = validator.methods.countDigitsInString(phone);

                        if (enteredDigits >= maskStart.length && enteredDigits === maskStart.length + maskDigits) {
                            return true;
                        }
                    }
                }

                return false;
            }
        }
    };

    const forms = document.querySelectorAll('form');
    if (forms[0]) {
        forms.forEach((form) => {
            form.addEventListener('submit', (e) => {
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
                    const main = form.closest('.main');
                    if (main) {
                        const name = form.querySelector('input[name="name"]'); // Проверяем имя на количество символов и проверка на буквы без лишних символов
                        if (!methods.required(name.value)) {
                            setCountInvalid();
                            showMessageError(name, messages.required);
                        } else if (!methods.letterSpacing(name.value)) {
                            setCountInvalid();
                            showMessageError(name, messages.letterSpacing);
                        }

                        const tel = form.querySelector('input[name="tel"]'); // От телефона всегда скрыто значение, и можно получить через tel.p_imask.value, чтобы убрать маску получаем через tel.p_imask.unmaskedValue. Сам скрипт IMask.js
                        if (!methods.checkPhoneValidity(tel.value, results[0])) {
                            setCountInvalid();
                            showMessageError(tel, messages.telShort);
                        }

                        const select = form.querySelector('.p-select__input'); // Скрытое поле hidden и обязательно в атрибут добавляем дефолтное значение. Например data-default="Услуга", где сейчас стоит по умолчанию
                        if (!methods.customSelect(select)) {
                            setCountInvalid();
                            showMessageError(select, messages.required);
                        }

                        const checked = form.querySelector('.p-form__check input[type="checkbox"]'); // Чекбокс согласия на обработку
                        if (!methods.checked(checked)) {
                            setCountInvalid();
                            showMessageError(checked, messages.required);
                        }

                        if (countInvalid === 0) {
                            const data = new FormData(form); // Получаем все данные из формы. Можно сделать пустым и добавить через функцию append() нужные данные. Документация https://learn.javascript.ru/formdata

                            const mainForm = main.querySelector('.main__form');
                            form.style.display = 'none';
                            mainForm.insertAdjacentElement('afterbegin', thankYouOutput());

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

                    if (form.classList.contains('modal__form_service')) {
                        const name = form.querySelector('input[name="name"]'); // Проверяем имя на количество символов и проверка на буквы без лишних символов
                        if (!methods.required(name.value)) {
                            setCountInvalid();
                            showMessageError(name, messages.required);
                        } else if (!methods.letterSpacing(name.value)) {
                            setCountInvalid();
                            showMessageError(name, messages.letterSpacing);
                        }

                        const tel = form.querySelector('input[name="tel"]'); // От телефона всегда скрыто значение, и можно получить через tel.p_imask.value, чтобы убрать маску получаем через tel.p_imask.unmaskedValue. Сам скрипт IMask.js
                        if (!methods.checkPhoneValidity(tel.value, results[0])) {
                            setCountInvalid();
                            showMessageError(tel, messages.telShort);
                        }

                        const checked = form.querySelector('.p-form__check input[type="checkbox"]'); // Чекбокс согласия на обработку
                        if (!methods.checked(checked)) {
                            setCountInvalid();
                            showMessageError(checked, messages.required);
                        }

                        if (countInvalid === 0) {
                            // Modal
                            const modalThankContent = modalWithThank.querySelector('.modal_with-thank__content'); // Контент для уведомления
                            const modalContent = modalWithThank.querySelector('.modal__content'); // Контент формы в модалке
                            modalThankContent.style.display = 'block';
                            modalContent.style.display = 'none';
                            modalThankContent.insertAdjacentElement('afterbegin', thankYouOutput());

                            const close = modalThankContent.querySelector('.thank__close');
                            if (close) {
                                close.addEventListener('click', () => {
                                    removeModal(modalWithThank);
                                    document.body.style.overflow = '';
                                })
                            }
                            lazyContent.update(); // Обновляем скрипт ленивой загрузки изображения как img
                            lazyBackground.update(); // Обновляем скрипт ленивой загрузки изображения как background-image
                        }
                    }

                    if (form.classList.contains('modal__form_partner')) {
                        const name = form.querySelector('input[name="name"]'); // Проверяем имя на количество символов и проверка на буквы без лишних символов
                        if (!methods.required(name.value)) {
                            setCountInvalid();
                            showMessageError(name, messages.required);
                        } else if (!methods.letterSpacing(name.value)) {
                            setCountInvalid();
                            showMessageError(name, messages.letterSpacing);
                        }

                        const tel = form.querySelector('input[name="tel"]'); // От телефона всегда скрыто значение, и можно получить через tel.p_imask.value, чтобы убрать маску получаем через tel.p_imask.unmaskedValue. Сам скрипт IMask.js
                        if (!methods.checkPhoneValidity(tel.value, results[0])) {
                            setCountInvalid();
                            showMessageError(tel, messages.telShort);
                        }

                        const checked = form.querySelector('.p-form__check input[type="checkbox"]'); // Чекбокс согласия на обработку
                        if (!methods.checked(checked)) {
                            setCountInvalid();
                            showMessageError(checked, messages.required);
                        }

                        if (countInvalid === 0) {
                            // Modal
                            const modalThankContent = modalWithThank.querySelector('.modal_with-thank__content'); // Контент для уведомления
                            const modalContent = modalWithThank.querySelector('.modal__content'); // Контент формы в модалке
                            modalThankContent.style.display = 'block';
                            modalContent.style.display = 'none';
                            modalThankContent.insertAdjacentElement('afterbegin', thankYouOutput());

                            const close = modalThankContent.querySelector('.thank__close');
                            if (close) {
                                close.addEventListener('click', () => {
                                    removeModal(modalWithThank);
                                    document.body.style.overflow = '';
                                })
                            }
                            lazyContent.update(); // Обновляем скрипт ленивой загрузки изображения как img
                            lazyBackground.update(); // Обновляем скрипт ленивой загрузки изображения как background-image
                        }
                    }

                    if (form.classList.contains('modal__form_cons')) {
                        const name = form.querySelector('input[name="name"]'); // Проверяем имя на количество символов и проверка на буквы без лишних символов
                        if (!methods.required(name.value)) {
                            setCountInvalid();
                            showMessageError(name, messages.required);
                        } else if (!methods.letterSpacing(name.value)) {
                            setCountInvalid();
                            showMessageError(name, messages.letterSpacing);
                        }

                        const tel = form.querySelector('input[name="tel"]'); // От телефона всегда скрыто значение, и можно получить через tel.p_imask.value, чтобы убрать маску получаем через tel.p_imask.unmaskedValue. Сам скрипт IMask.js
                        if (!methods.checkPhoneValidity(tel.value, results[0])) {
                            setCountInvalid();
                            showMessageError(tel, messages.telShort);
                        }

                        const checked = form.querySelector('.p-form__check input[type="checkbox"]'); // Чекбокс согласия на обработку
                        if (!methods.checked(checked)) {
                            setCountInvalid();
                            showMessageError(checked, messages.required);
                        }

                        if (countInvalid === 0) {
                            // Modal
                            const modalThankContent = modalWithThank.querySelector('.modal_with-thank__content'); // Контент для уведомления
                            const modalContent = modalWithThank.querySelector('.modal__content'); // Контент формы в модалке
                            modalThankContent.style.display = 'block';
                            modalContent.style.display = 'none';
                            modalThankContent.insertAdjacentElement('afterbegin', thankYouOutput());

                            const close = modalThankContent.querySelector('.thank__close');
                            if (close) {
                                close.addEventListener('click', () => {
                                    removeModal(modalWithThank);
                                    document.body.style.overflow = '';
                                })
                            }
                            lazyContent.update(); // Обновляем скрипт ленивой загрузки изображения как img
                            lazyBackground.update(); // Обновляем скрипт ленивой загрузки изображения как background-image
                        }
                    }
                })
            })
        })
    }

    // Шаблон верстка Cпасибо
    function thankYouOutput() {
        const element = document.createElement('div');
        element.className = 'thank';
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
