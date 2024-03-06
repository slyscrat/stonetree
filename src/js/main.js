document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');

    window.addEventListener('scroll', ()=>{
        if (window.scrollY > 200){
            header.classList.add('fixed')
            main.classList.add('fixed')
        } else {
            header.classList.remove('fixed');
            main.classList.remove('fixed');
        }
    })

    const mains = document.querySelectorAll('.main');
    if (mains[0]) {
        mains.forEach((main) => {
            const _swiperElement = main.querySelector('.swiper');
            const _swiperPagination = main.querySelector(".swiper-pagination");
            const _swiper = new Swiper(_swiperElement, {
                speed: _swiperElement.dataset.speed,
                spaceBetween: 10,
                loop: true,
                oneWayMovement: true,
                autoplay: {
                    delay: _swiperElement.dataset.autoplay,
                    disableOnInteraction: false
                },
                pagination: {
                    el: _swiperPagination,
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        allowTouchMove: true,
                    },
                    1200: {
                        allowTouchMove: false,
                    }
                },
                on: {
                    afterInit: function (swiper) {
                        _swiperPagination.style.setProperty('--count', swiper.pagination.bullets.length);
                        main.querySelector('.main__nums-end').textContent = swiper.pagination.bullets.length < 10 ? '0' + swiper.pagination.bullets.length : swiper.pagination.bullets.length;
                    },
                    slideChange: function (swiper) {
                        main.querySelector('.main__nums-start').textContent = swiper.realIndex + 1 < 10 ? '0' + (swiper.realIndex + 1) : swiper.realIndex + 1;
                    }
                }
            });
        })
    }

    const interTels = document.querySelectorAll('.p-inter-tel');
    if (interTels[0]) {
        interTels.forEach((interTel) => {
            const slug = interTel.dataset.slug;
            const lang = interTel.dataset.lang;
            const langUpper = lang.charAt(0).toUpperCase() + lang.slice(1);

            const prefix = interTel.querySelector('.p-inter-tel__input-item span');
            const input = interTel.querySelector('.p-inter-tel__input-item input');

            const button = interTel.querySelector('.p-inter-tel__select-block');
            const buttonFlag = button.querySelector('.fi');

            const options = interTel.querySelector('.p-inter-tel__options');
            const optionsUl = options.querySelector('ul');
            const optionsSearch = options.querySelector('input');

            button.addEventListener('click', () => {
                if (interTel.classList.contains('active')) {
                    _options.forEach((option) => {
                        option.classList.remove('hidden');
                        optionsSearch.value = '';
                    })
                }

                interTel.classList.toggle('active');
            })

            let _options = null;
            let _countries = pPhones;
            let _mask = IMask(input, {
                mask: input.placeholder,
                lazy: false,
            });

            _countries.forEach((country) => {
                const classes = slug === country.countryCode.toLowerCase() ? 'active' : '';
                const optionOutput = `
                    <li class="p-inter-tel__option ${classes}" data-country="${country['name' + langUpper]}" data-code="${country.countryCode.toLowerCase()}" data-num="+${country.phoneCode}" data-mask="${country.phoneMask}">
                      <div class="fi fi-${country.countryCode.toLowerCase()}"></div>
                      <div class="p-inter-tel__option-name">${country['name' + langUpper]}</div>
                      <div class="p-inter-tel__option-num">+${country.phoneCode}-${country.phoneMask}</div>
                    </li>
                `;
                optionsUl.insertAdjacentHTML('beforeend', optionOutput);

                if (slug === country.countryCode.toLowerCase()) {
                    prefix.textContent = `+${country.phoneCode}`;
                    buttonFlag.className = `fi fi-${country.countryCode.toLowerCase()}`;
                    input.placeholder = country.phoneMask;
                    input.value = '';
                    _mask.masked.reset();
                    _mask.updateOptions({
                        mask: country.phoneMask,
                    });
                }
            });
            _options = optionsUl.querySelectorAll('.p-inter-tel__option');

            _options.forEach((option) => {
                option.addEventListener('click', () => {
                    const num = option.dataset.num;
                    const mask = option.dataset.mask;
                    const code = option.dataset.code;

                    const activeOption = optionsUl.querySelector('.p-inter-tel__option.active');
                    if (activeOption) {
                        activeOption.classList.remove('active');
                    }

                    interTel.dataset.slug = code;

                    prefix.textContent = num;
                    buttonFlag.className = `fi fi-${code}`;
                    input.placeholder = mask;
                    input.value = '';
                    _mask.masked.reset();
                    _mask.updateOptions({
                        mask: mask,
                    });
                    input.focus();
                    option.classList.add('active');
                    interTel.classList.remove('active');
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
                    },
                    1200: {
                        allowTouchMove: false,
                    }
                },
            });
        })
    }

    const pSelects = document.querySelectorAll('.p-select');
    if (pSelects[0]){
        pSelects.forEach((pSelect)=>{
            const input = pSelect.querySelector('.p-select__input');
            const btn = pSelect.querySelector('.p-select__btn');
            const current = btn.querySelector('.p-select__current');
            const options = pSelect.querySelectorAll('.p-select__options .p-select__option');

            btn.addEventListener('click', ()=>{
                pSelect.classList.toggle('active');
            })

            options.forEach((option)=>{
                option.addEventListener('click', ()=>{
                    input.value = option.textContent;
                    current.textContent = option.textContent;
                    pSelect.classList.remove('active');
                    btn.classList.add('active');
                })
            })
        })
    }


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

    function resetEvent(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function addModal(element) {
        element.classList.add("active");
    }

    function removeModal(element) {
        element.classList.remove("active");
    }

    class PovlyModal {
        constructor() {
            this.allModals();
            this.allModalShows();
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
