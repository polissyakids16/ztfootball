document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       📱 МОБІЛЬНЕ ГОЛОВНЕ МЕНЮ
       ===================================================== */

    window.toggleMenu = function () {
        const menu = document.getElementById("main-menu");

        if (menu) {
            menu.classList.toggle("show");
        }
    };


    /* =====================================================
       ⬇️ ВИПАДАЮЧІ МЕНЮ
       Вікові групи + Турніри
       ===================================================== */

    const dropdownButtons =
        document.querySelectorAll(".dropdown-button");

    dropdownButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            const currentDropdown =
                button.closest(".dropdown");

            if (!currentDropdown) return;

            const currentMenu =
                currentDropdown.querySelector(".dropdown-menu");

            if (!currentMenu) return;


            /* Закриваємо інші меню */

            document
                .querySelectorAll(".dropdown-menu.show")
                .forEach(function (menu) {

                    if (menu !== currentMenu) {
                        menu.classList.remove("show");
                    }

                });


            /* Відкриваємо / закриваємо поточне */

            currentMenu.classList.toggle("show");

        });

    });


    /* Закриття випадаючого меню
       при натисканні за його межами */

    document.addEventListener("click", function () {

        document
            .querySelectorAll(".dropdown-menu.show")
            .forEach(function (menu) {

                menu.classList.remove("show");

            });

    });


    /* Не закривати меню,
       якщо натискаємо всередині нього */

    document
        .querySelectorAll(".dropdown-menu")
        .forEach(function (menu) {

            menu.addEventListener("click", function (event) {

                event.stopPropagation();

            });

        });


    /* =====================================================
       ✨ АНІМАЦІЯ БЛОКІВ ПРИ ПРОКРУЧУВАННІ
       ===================================================== */

    const animatedBlocks =
        document.querySelectorAll(".scroll-animate");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                            observer.unobserve(entry.target);

                        }

                    });

                },

                {
                    threshold: 0.15
                }

            );


        animatedBlocks.forEach(function (block) {

            observer.observe(block);

        });

    } else {

        /* Запасний варіант для старих браузерів */

        animatedBlocks.forEach(function (block) {

            block.classList.add("show");

        });

    }


    /* =====================================================
       ⚽ HERO SLIDER — 4 ФОТО
       Зміна кожні 10 секунд
       ===================================================== */

    const slides =
        document.querySelectorAll(".hero-slide");


    if (slides.length > 1) {

        let currentSlide = 0;


        /* Перше фото активне */

        slides.forEach(function (slide, index) {

            slide.classList.toggle(
                "active",
                index === 0
            );

        });


        /* Зміна фотографії */

        setInterval(function () {

            slides[currentSlide]
                .classList.remove("active");


            currentSlide++;

            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }


            slides[currentSlide]
                .classList.add("active");

        }, 10000);

    }


});