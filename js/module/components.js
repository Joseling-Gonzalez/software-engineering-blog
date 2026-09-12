export function initComponents() {

    /* Styles in header for active scroll */
    function ActiveScroll() {
        const header = document.getElementById('header');

        window.addEventListener('scroll', () => {
            header.classList.toggle('activeScroll', window.scrollY > 0);
        });
    }

    function menuMovil() {
        const btnMenuHamburger = document.getElementById('hamburger-5');
        const menuOverlay = document.getElementById('menu-overlay');
        const menuNavHeader = document.getElementById('navHeader');

        btnMenuHamburger.addEventListener('click', () => {
            btnMenuHamburger.classList.toggle('is-active');
            menuOverlay.classList.toggle('active-menu');
            menuNavHeader.classList.toggle('active-menu');
        });
    }

    /* Dropdown submenu */
    function DropdownNav() {
        const categorybtn = document.getElementById('categorybtn');
        const submenu = document.querySelector('.submenu');

        categorybtn.addEventListener('click', () => {
            submenu.classList.toggle('active');
        });
    }

    function SearchBtn() {
        const btnSearch = document.getElementById('icon-searches');
        const divSearchElement = document.querySelector('.searchElement');
        const inputSearchEment = document.getElementById('search');

        btnSearch.addEventListener('click', () => {
            divSearchElement.classList.toggle('active');
            inputSearchEment.classList.toggle('active');
        });
    }

    function EventListenerElements() {
        const categorybtn = document.getElementById('categorybtn');
        const submenu = document.querySelector('.submenu');
        const hamburgerBtn = document.getElementById('menuIcon');
        const menuNavHeader = document.getElementById('navHeader');
        const menuOverlay = document.getElementById('menu-overlay');
        const btnMenuHamburger = document.getElementById('hamburger-5');
        const btnSearch = document.getElementById('icon-searches');
        const divSearchElement = document.querySelector('.searchElement');
        const inputSearchElement = document.getElementById('search');

        document.addEventListener('click', (event) => {
            const containBtnSubMenu = categorybtn.contains(event.target);
            const containMenuNavbtn = hamburgerBtn.contains(event.target);
            const containSearchElement = btnSearch.contains(event.target);
            const containInputSeachElement = inputSearchElement.contains(event.target);


            if (!containBtnSubMenu && !containMenuNavbtn) {
                submenu.classList.remove('active');
                menuNavHeader.classList.remove('active-menu');
                menuOverlay.classList.remove('active-menu');
                btnMenuHamburger.classList.remove('is-active');
            }

            if (!(containSearchElement || containInputSeachElement)) {
                divSearchElement.classList.remove('active');
                inputSearchElement.classList.remove('active');
            }
        });
    }

    ActiveScroll();
    DropdownNav();
    menuMovil();
    SearchBtn();
    EventListenerElements();
}


