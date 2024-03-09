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

    // Получаем список телефонов phone-codes.json - страна, код и маска
    const phone_codes = fetch('phone-codes.json')
        .then((res => res.json()))
        .then((data) => {
            return data;
        });


    function _addListInternalObjectAndCode(codes, objects, code, data) {
        if (codes.includes(code)) {
            // Если имеется такой код страны, добавляем маску
            objects[codes.length - 1].mask.push(data.mask);
        } else {
            codes.push(code); // Добавляем код страны
            objects.push({ // Добавляем обьект с кодом, массив и язык
                mask: [data.mask],
                langsIndex: ['ru', 'en'],
                startWith: data.startWith,
                langs: [
                    {
                        name: data['name_ru']
                    },
                    {
                        name: data['name_en']
                    }
                ]
            });
        }
    }

    // Перебираем список phone-codes.json
    const _listInternalObjects = []; // Список объектов с масками
    const _listInternalCodes = []; // Список кодов стран. Здесь можно проверять индекс и получить в списке объектов
    phone_codes.then((results) => {
        results.forEach((data) => {
            if (Array.isArray(data.cc)) {
                data.cc.forEach((code) => {
                    _addListInternalObjectAndCode(_listInternalCodes, _listInternalObjects, code, data);
                })
            } else {
                _addListInternalObjectAndCode(_listInternalCodes, _listInternalObjects, data.cc, data);
            }
        })
    })


    // Ресайз страницы, если ширина экрана меньше 1140
    function resize() {
        // Нужно в телефоне при разной размере экрана дать отступ для слайдера, чтобы поместилась форма
        const mains = document.querySelectorAll('.main');
        if (mains[0]) {
            mains.forEach((main) => {
                const form = main.querySelector('.main__form');
                if (window.innerWidth < 1140) {
                    form.style.minHeight = form.scrollHeight + 'px';
                    main.style.setProperty('--height-form', `${form.scrollHeight}px`);
                } else {
                    main.style.removeProperty('--height-form');
                    form.style.minHeight = '';
                }
            })
        }
    }

    resize();
    window.addEventListener('resize', () => {
        resize();
    })

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
            const _swiperElement = main.querySelector('.swiper');
            const _swiperPagination = main.querySelector(".swiper-pagination");

            // Следим за видимостью экрана, если видно запускаем автоплей слайдера иначе отключаем
            new IntersectionObserver((entries, observer) => {
                if (entries[0].isIntersecting) {
                    _swiper.autoplay.resume()
                } else {
                    _swiper.autoplay.pause()
                }
            }).observe(_swiperElement)

            const _swiper = new Swiper(_swiperElement, {
                speed: _swiperElement.dataset.speed,
                spaceBetween: 10,
                autoplay: {
                    delay: _swiperElement.dataset.autoplay,
                    disableOnInteraction: false
                },
                pagination: {
                    el: _swiperPagination,
                    clickable: true,
                },
                loop: true,
                rewind: true,
                breakpoints: {
                    320: {
                        allowTouchMove: true,
                        autoHeight: 'auto',
                    },
                    1200: {
                        allowTouchMove: false,
                        autoHeight: false,
                    }
                },
                on: {
                    afterInit: function (swiper) {
                        _swiperPagination.style.setProperty('--count', swiper.pagination.bullets.length); // Передаем количество пагинаций
                        main.querySelector('.main__nums-end').textContent = swiper.pagination.bullets.length < 10 ? '0' + swiper.pagination.bullets.length : swiper.pagination.bullets.length; // Общее количество слайдов
                    },
                    slideChange: function (swiper) {
                        main.querySelector('.main__nums-start').textContent = swiper.realIndex + 1 < 10 ? '0' + (swiper.realIndex + 1) : swiper.realIndex + 1;  // Показывает число нужного слайда
                    }
                }
            });


            _swiper.autoplay.pause(); // Отключаем автоплей. Стоит слежение за видимостью экрана по необходимости запустит
        })
    }

    const interTels = document.querySelectorAll('.p-inter-tel');
    if (interTels[0]) {
        // Маска, перебираем, создаем объект и внедряем в Imask. Дока https://imask.js.org
        function getMaskArray(object) {

            const maskArray = [];
            object.mask.forEach((mask) => {
                maskArray.push({
                    mask: mask.replace(/#/g, '0'),
                    lazy: false,
                    overwrite: true,
                });
            })
            return maskArray;
        }

        interTels.forEach((interTel) => {
            const lang = interTel.querySelector('input[name="tel_lang"]'); // язык
            const slug = interTel.querySelector('input[name="tel_slug"]'); // код страны

            const input = interTel.querySelector('.p-inter-tel__input-item input[type="tel"]'); // Само поле телефона

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
                      <div class="p-inter-tel__option-num">${mask.replace(/[{}()#-]/g, '')}</div>
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

            // Перебираем список кодов _listInternalCodes, получаем по индексу обьект _listInternalObjects[index]
            phone_codes.then(() => {
                _listInternalCodes.forEach((code, index) => {
                    let currentObject = _listInternalObjects[index]; // Обьект
                    let currentObjectLang = currentObject.langs[currentObject.langsIndex.indexOf(lang.value)]; // Получаем название по языку
                    let optionClasses = ''; // Класс

                    if (slug.value === code.toLowerCase()) { // Проверяем совпадение кода страны и ставим по умолчанию
                        optionClasses = 'active';
                        const maskArray = getMaskArray(currentObject); // Получаем массив масок
                        buttonFlag.className = `fi fi-${code.toLowerCase()}`; // Фиксируем флаг по коду
                        input.p_imask = IMask(input, { // Внедряем маску
                            mask: maskArray,
                            lazy: false,
                            overwrite: true,
                        });
                    }

                    const option = outputOption(currentObject.mask[0], code, currentObjectLang.name, optionClasses); // Получаем шаблон, готовую опцию для добавления
                    optionsUl.insertAdjacentHTML('beforeend', option); // Добавляем опцию в список
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

                        const currentObject = _listInternalObjects[_listInternalCodes.indexOf(code)]; // Текущий обьект
                        const maskArray = getMaskArray(currentObject); // Получаем массив масок

                        input.value = ''; // Сброс значения
                        input.p_imask.masked.reset(); // Сброс масок
                        input.p_imask.updateOptions({ // Обновляем маску
                            mask: maskArray,
                            lazy: false,
                        });
                        slug.value = code; // Обновляем код
                        buttonFlag.className = `fi fi-${code.toLowerCase()}`; // Обновляем флаг
                        input.focus(); // Фокусируем поле
                        _option.classList.add('active');
                        interTel.classList.remove('active');
                        resetQuery();
                    })
                })
            })

            optionsSearch.addEventListener('input', () => {
                let search_query = optionsSearch.value.toLowerCase(); // Получаем значение поиска
                _options.forEach((option) => { // Перебираем все опции
                    let is_matched = option.dataset.name.toLowerCase().includes(search_query); // Проверяем совпадение слов, букв и возвращает булевое значение
                    is_matched ? option.classList.remove('hidden') : option.classList.add('hidden');
                })
            })
        })
    }

    // Promise. Ожидаем что загрузились список кодов и местоположения через fetch
    // results[0] - phone_codes, results[1] - ipapi
    // Можем использовать _listInternalObjects где отфильтровали phone_codes и _listInternalCodes. А мы их получаем после полной загрузки, обработки
    Promise.all([phone_codes, ipapi]).then((results) => {
        const slug = results[1].country_code; // Получаем код страны по местоположению
        interTels.forEach((interTel) => {
            const statusIp = interTel.querySelector('input[name="ip_status"]'); // Статус, если true - то обновляем все функционалы международного телефона (custom select)
            if (statusIp.value === 'true') {
                interTel.querySelector('input[name="tel_slug"]').value = slug.toLowerCase(); // Обновляем код страны
                let currentObject = _listInternalObjects[_listInternalCodes.indexOf(slug)];
                const maskArray = getMaskArray(currentObject);
                const input = interTel.querySelector('.p-inter-tel__input-item input[type="tel"]');

                input.value = ''; // Сброс значения
                input.p_imask.masked.reset(); // Сброс масок
                input.p_imask.updateOptions({ // Обновляем маску
                    mask: maskArray,
                    lazy: false,
                });

                const button = interTel.querySelector('.p-inter-tel__select-block'); // Кнопка
                const buttonFlag = button.querySelector('.fi'); // Флаг
                buttonFlag.className = `fi fi-${slug.toLowerCase()}`;
            }
        })
    })

    // Список карточек - слайдер Swiper, документация https://swiperjs.com/swiper-api
    const cards = document.querySelectorAll('.cards');
    if (cards[0]) {
        cards.forEach((card) => {
            const _swiperElement = card.querySelector('.swiper');
            const _swiperPagination = card.querySelector(".swiper-pagination");
            const _swiperScrollbar = card.querySelector(".swiper-scrollbar");
            const _swiper = new Swiper(_swiperElement, {
                speed: _swiperElement.dataset.speed,
                slidesPerView: 'auto',
                spaceBetween: 15,
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

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
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
        if (activeMessage){
            setTimeout(()=>{
                activeMessage.remove();
            }, time * 1000)
        }
    }

    // Сбрасываем все ошибки
    function resetMessages(form){
        const messages = form.querySelectorAll('.p-form__error');
        if (messages[0]){
            messages.forEach((message) => {
                message.remove();
            })
        }
        const invalids = form.querySelectorAll('.invalid')
        invalids.forEach((invalid)=>{
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
            letterSpacing(str){ // Проверка на буквы
              const re = /^[A-ZА-ЯЁ]+$/i;
              return re.test(str);
            },
            checked(input){ // Проверка на чекбокс
                return input.checked;
            },
            customSelect(input, checkOptions = true){ // Проверка на селект, на дефолтное значение
                const value = input.value;
                const _def = input.dataset.default;
                if (value !== _def){
                    return true
                } else if (checkOptions){
                    const pSelect = input.closest('.p-select');
                    const options = pSelect.querySelectorAll('.p-select__options');
                    return [...options].find(option => option.textContent === value)
                }
            },
            required(value){ // Проверка на количество символов
                return value.length > 0;
            },
            countDigitsInString(str){
                return (str.match(/\d/g) || []).length;
            },
            countDigitsInMask(mask){
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

                Promise.all([phones, validator]).then((results)=>{
                    // Количество ошибок
                    let countInvalid = 0;
                    // Увеличиваем число
                    function setCountInvalid(){
                        countInvalid = countInvalid + 1;
                    }
                    const lang = form.dataset.lang; // Получаем язык из атрибута формы
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
                        if (!methods.checkPhoneValidity(tel.value, results[0])){
                            setCountInvalid();
                            showMessageError(tel, messages.telShort);
                        }

                        const select = form.querySelector('.p-select__input'); // Скрытое поле hidden и обязательно в атрибут добавляем дефолтное значение. Например data-default="Услуга", где сейчас стоит по умолчанию
                        if (!methods.customSelect(select)){
                            setCountInvalid();
                            showMessageError(select, messages.required);
                        }

                        const checked = form.querySelector('.p-form__check input[type="checkbox"]'); // Чекбокс согласия на обработку
                        if (!methods.checked(checked)){
                            setCountInvalid();
                            showMessageError(checked, messages.required);
                        }

                        if (countInvalid === 0){
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

                    const modalWithThank = form.closest('.modal.modal_with-thank');
                    if (modalWithThank){
                        console.log(modalWithThank);
                        const name = form.querySelector('input[name="name"]'); // Проверяем имя на количество символов и проверка на буквы без лишних символов
                        if (!methods.required(name.value)) {
                            setCountInvalid();
                            showMessageError(name, messages.required);
                        } else if (!methods.letterSpacing(name.value)) {
                            setCountInvalid();
                            showMessageError(name, messages.letterSpacing);
                        }

                        const tel = form.querySelector('input[name="tel"]'); // От телефона всегда скрыто значение, и можно получить через tel.p_imask.value, чтобы убрать маску получаем через tel.p_imask.unmaskedValue. Сам скрипт IMask.js
                        if (!methods.checkPhoneValidity(tel.value, results[0])){
                            setCountInvalid();
                            showMessageError(tel, messages.telShort);
                        }

                        const checked = form.querySelector('.p-form__check input[type="checkbox"]'); // Чекбокс согласия на обработку
                        if (!methods.checked(checked)){
                            setCountInvalid();
                            showMessageError(checked, messages.required);
                        }

                        if (countInvalid === 0){
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
