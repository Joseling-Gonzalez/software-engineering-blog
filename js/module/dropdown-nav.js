export function initDropdownNav() {

    const categorybtn = document.getElementById('categorybtn');
    const submenu = document.querySelector('.submenu');

    categorybtn.addEventListener('click', () => {
        submenu.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        const containBtnSubMenu = categorybtn.contains(event.target);

        if (!containBtnSubMenu)
            submenu.classList.remove('active');
    });
}


