document.addEventListener("DOMContentLoaded", () => {

    const mains = document.querySelectorAll('.main');
    if (mains[0]){
        mains.forEach((main)=>{
            const _swiperElement = main.querySelector('.swiper');
            const _swiperPagination = main.querySelector(".swiper-pagination");
            const _swiper = new Swiper(_swiperElement, {
                speed: _swiperElement.dataset.speed,
                spaceBetween: 50,
                loop: true,
                autoplay: {
                    delay: _swiperElement.dataset.autoplay,
                    disableOnInteraction: false
                },
                pagination: {
                    el: _swiperPagination,
                    clickable: true,
                },
                on: {
                    afterInit: function (swiper){
                        _swiperPagination.style.setProperty('--count', swiper.pagination.bullets.length);
                        main.querySelector('.main__nums-end').textContent = swiper.pagination.bullets.length;
                    },
                    slideChange: function (swiper){
                        main.querySelector('.main__nums-start').textContent = swiper.realIndex + 1;
                    }
                }
            });
        })
    }

    function mask(event, _mask) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = _mask,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
            this.value = new_value;
        }
        if (event.type == "blur" && this.value.length < 5) {
            this.value = "";
        }
    }

    const interTels = document.querySelectorAll('.p-inter-tel');
    if (interTels[0]){
        interTels.forEach((interTel)=>{
            const slug = interTel.dataset.slug;
            const lang = interTel.dataset.lang;
            const langUpper = lang.charAt(0).toUpperCase() +  lang.slice(1);

            const prefix = interTel.querySelector('.p-inter-tel__input-item span');
            const input = interTel.querySelector('.p-inter-tel__input-item input');


            const button = interTel.querySelector('.p-inter-tel__select-block');
            const buttonFlag = button.querySelector('.fi');

            const options = interTel.querySelector('.p-inter-tel__options');
            const optionsUl = options.querySelector('ul');
            const optionsSearch = options.querySelector('input');

            button.addEventListener('click', ()=>{
                interTel.classList.toggle('active');
            })

            let _options = null;
            let _countries = pPhones;

            _countries.forEach((country)=>{
                const classes = slug === country.countryCode.toLowerCase() ? 'active' : '';
                const optionOutput = `
                    <li class="p-inter-tel__option flex flex-ai-center ${classes}" data-code="${country.countryCode.toLowerCase()}" data-num="+${country.phoneCode}" data-mask="${country.phoneMask}">
                      <div class="fi fi-${country.countryCode.toLowerCase()}"></div>
                      <div class="p-inter-tel__option-name">${country['name' + langUpper]}</div>
                      <div class="p-inter-tel__option-num">+${country.phoneCode}-${country.phoneMask}</div>
                    </li>
                `;
                optionsUl.insertAdjacentHTML('beforeend', optionOutput);
            });
            _options = optionsUl.querySelectorAll('.p-inter-tel__option');

            _options.forEach((option)=>{
                option.addEventListener('click', ()=>{
                    const num = option.dataset.num;
                    const mask = option.dataset.mask;
                    const code = option.dataset.code;

                    const activeOption = optionsUl.querySelector('.p-inter-tel__option.active');
                    if (activeOption){
                        activeOption.classList.remove('active');
                    }

                    interTel.dataset.slug = code;

                    prefix.textContent = num;
                    buttonFlag.className = `fi fi-${code}`;
                    input.placeholder = mask;
                    option.classList.add('active');
                    interTel.classList.remove('active');
                    console.log(mask.length);
                })
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
                    const _modal = document.querySelector(".modal_" + dataModal);
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
