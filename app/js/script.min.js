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


    // Ресайз страницы, если ширина экрана меньше 1140
    function resize(){
        if (window.innerWidth < 1140){

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
    }
    resize();
    window.addEventListener('resize', ()=>{
        resize();
    })

    // Слежение за скролл страницы
    window.addEventListener('scroll', ()=>{

        // Если больше 200 пикселей страница, показываем шапку
        if (window.scrollY > 200){
            header.classList.add('fixed')
            main.classList.add('fixed')
        } else {
            header.classList.remove('fixed');
            main.classList.remove('fixed');
        }
    })



    let _countries = pPhones;
    function getOptionByCode(slug){
        return _countries.find(country => country.countryCode.toLowerCase() === slug)
    }

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
        interTels.forEach((interTel) => {
            const lang = interTel.querySelector('input[name="tel_lang"]');
            const slug = interTel.querySelector('input[name="tel_slug"]');
            const langUpper = lang.value.charAt(0).toUpperCase() + lang.value.slice(1);

            const number = interTel.querySelector('input[name="tel_number"]');
            const prefix = interTel.querySelector('.p-inter-tel__input-item span');
            const input = interTel.querySelector('.p-inter-tel__input-item input[type="tel"]');

            const button = interTel.querySelector('.p-inter-tel__select-block');
            const buttonFlag = button.querySelector('.fi');

            const options = interTel.querySelector('.p-inter-tel__options');
            const optionsUl = options.querySelector('ul');
            const optionsSearch = options.querySelector('input');

            function resetQuery() {
                _options.forEach((option) => {
                    option.classList.remove('hidden');
                    optionsSearch.value = '';
                })
            }


            button.addEventListener('click', () => {
                if (interTel.classList.contains('active')) {
                    resetQuery();
                }

                interTel.classList.toggle('active');
            })

            let _options = null;
            let _mask = IMask(input, {
                mask: input.placeholder,
                lazy: false,
            });
            input._mask = _mask;

            const activeOptionToJson = getOptionByCode(slug.value);

            number.value = `+${activeOptionToJson.phoneCode}`;
            prefix.textContent = `+${activeOptionToJson.phoneCode}`;
            buttonFlag.className = `fi fi-${activeOptionToJson.countryCode.toLowerCase()}`;
            lang.value = `${activeOptionToJson.countryCode.toLowerCase()}`;
            input.placeholder = '';
            input.value = '';
            _mask.masked.reset();
            _mask.updateOptions({
                mask: activeOptionToJson.phoneMask,
            });

            _countries.forEach((country) => {
                const classes = slug.value === country.countryCode.toLowerCase() ? 'active' : '';
                const optionOutput = `
                    <li class="p-inter-tel__option ${classes}" data-country="${country['name' + langUpper]}" data-code="${country.countryCode.toLowerCase()}">
                      <div class="fi fi-${country.countryCode.toLowerCase()}"></div>
                      <div class="p-inter-tel__option-name">${country['name' + langUpper]}</div>
                      <div class="p-inter-tel__option-num">+${country.phoneCode}</div>
                    </li>
                `;
                optionsUl.insertAdjacentHTML('beforeend', optionOutput);
            });
            _options = optionsUl.querySelectorAll('.p-inter-tel__option');

            _options.forEach((option) => {
                option.addEventListener('click', () => {
                    const code = option.dataset.code;
                    const activeOptionToJson = getOptionByCode(option.dataset.code);
                    const num = activeOptionToJson.phoneCode;
                    const mask = activeOptionToJson.phoneMask;
                    console.log(mask);

                    const activeOption = optionsUl.querySelector('.p-inter-tel__option.active');
                    if (activeOption) {
                        activeOption.classList.remove('active');
                    }

                    slug.value = code;
                    number.value = num;
                    prefix.textContent = `+${num}`;
                    buttonFlag.className = `fi fi-${code}`;
                    input.value = '';
                    _mask.masked.reset();
                    _mask.updateOptions({
                        mask: mask,
                        lazy: false,
                    });
                    input.focus();
                    option.classList.add('active');
                    interTel.classList.remove('active');
                    resetQuery();
                })
            })

            optionsSearch.addEventListener('input', () => {
                let search_query = optionsSearch.value.toLowerCase();
                _options.forEach((option) => {
                    let is_matched = option.dataset.country.toLowerCase().includes(search_query);
                    is_matched ? option.classList.remove('hidden') : option.classList.add('hidden');
                })
            })
        })
    }

    // Получаем местоположение, проверяем если нужно учитывать местоположение и перебираем международный список телефонов, вставляется нужные данные
    ipapi.then((data) => {
        let slug = data.country_code.toLowerCase();
        interTels.forEach((interTel) => {
            const tel_number = interTel.querySelector('input[name="tel_number"]') // Код номера
            const statusIp = interTel.querySelector('input[name="ip_status"]'); // Статус местоположение
            if (statusIp.value === 'true'){
                interTel.querySelector('input[name="tel_slug"]').value = slug; // Код страны

                const options = interTel.querySelector('.p-inter-tel__options');
                const optionsUl = options.querySelector('ul');
                const input = interTel.querySelector('.p-inter-tel__input-item input[type="tel"]');
                const _mask = input._mask;
                const button = interTel.querySelector('.p-inter-tel__select-block');
                const buttonFlag = button.querySelector('.fi');
                const prefix = interTel.querySelector('.p-inter-tel__input-item span');
                const option = optionsUl.querySelector('.p-inter-tel__option[data-code="'+slug+'"]');
                const activeOptionToJson = getOptionByCode(slug);
                if (option){
                    option.classList.add('active');
                    input.value = '';
                    buttonFlag.className = `fi fi-${option.dataset.code}`;
                    input._mask = _mask;
                    tel_number.value = `${activeOptionToJson.phoneCode}`;
                    prefix.textContent = `+${activeOptionToJson.phoneCode}`;
                    _mask.masked.reset();
                    _mask.updateOptions({
                        mask: activeOptionToJson.phoneMask,
                        lazy: false,
                    });
                }
            }
        })
    });

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
    if (pSelects[0]){
        pSelects.forEach((pSelect)=>{
            const input = pSelect.querySelector('.p-select__input');
            const btn = pSelect.querySelector('.p-select__btn');
            const current = btn.querySelector('.p-select__current'); // Выбранная опция
            const options = pSelect.querySelectorAll('.p-select__options .p-select__option'); // Список опций

            // Показываем список опции при клике
            btn.addEventListener('click', ()=>{
                pSelect.classList.toggle('active');
            })

            // Перебор опций и добавляем событие клика
            options.forEach((option)=>{
                option.addEventListener('click', ()=>{

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

    const forms = document.querySelectorAll('form');
    if (forms[0]){
        forms.forEach((form)=>{
            form.addEventListener('submit', (e)=>{
                resetEvent(e);
                e.stopImmediatePropagation();
                let status = false;
                let countInvalid = 0;
                let isValidForm = form.checkValidity();

                const pFormInputs = form.querySelectorAll('.p-form__input');
                if (pFormInputs[0]){
                    pFormInputs.forEach((pFormInput)=>{
                        pFormInput.classList.remove('invalid', 'valid');
                        if (pFormInput.classList.contains('p-form__input_single')){
                            const input = pFormInput.querySelector('input');
                            if (!input.checkValidity()){
                                countInvalid = countInvalid + 1;
                                pFormInput.classList.add('invalid');
                            }
                        } else if (pFormInput.classList.contains('p-form__input_checkbox')) {
                            const input = pFormInput.querySelector('input');
                            if (!input.checked){
                                countInvalid = countInvalid + 1;
                                pFormInput.classList.add('invalid');
                            }
                        } else {
                            const interTel = pFormInput.querySelector('.p-inter-tel');
                            if (interTel){
                                const input = interTel.querySelector('.p-inter-tel__input-item input[type="tel"]');
                                if (input._mask.value.includes('_')){
                                    countInvalid = countInvalid + 1;
                                    pFormInput.classList.add('invalid');
                                }
                            }
                            const pSelect = pFormInput.querySelector('.p-select');
                            if (pSelect){
                                const input = pSelect.querySelector('.p-select__input');
                                if (input.value === '' || input.value === input.dataset.default){
                                    countInvalid = countInvalid + 1;
                                    pFormInput.classList.add('invalid');
                                }
                            }
                        }
                    })
                }

                if (!countInvalid){
                    status = true;
                }

                if (status && isValidForm){
                    console.log('Validated!');


                    // Main Block
                    const main = form.closest('.main');
                    if (main){
                        const mainForm = main.querySelector('.main__form');
                        form.style.display = 'none';
                        mainForm.insertAdjacentElement('afterbegin', thankYouOutput());
                    }

                    // Modal
                    const modalWithThank = form.closest('.modal.modal_with-thank');
                    if (modalWithThank){
                        const modalThankContent = modalWithThank.querySelector('.modal_with-thank__content');
                        const modalContent = modalWithThank.querySelector('.modal__content');
                        modalThankContent.style.display = 'block';
                        modalContent.style.display = 'none';
                        modalThankContent.insertAdjacentElement('afterbegin', thankYouOutput());

                        const close = modalThankContent.querySelector('.thank__close');
                        if (close){
                            close.addEventListener('click', ()=>{
                                removeModal(modalWithThank);
                                document.body.style.overflow = '';
                            })
                        }
                    }

                    lazyContent.update();
                    lazyBackground.update();
                }
            })
        })
    }

    // Шаблон верстка Cпасибо
    function thankYouOutput(){
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
