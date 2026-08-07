export function initDropdownNav () {
    
    const categorybtn = document.getElementById('categorybtn');
    const submenu = document.querySelector('.submenu');

    categorybtn.addEventListener('click', () => {
        submenu.classList.toggle('active');
    });
}


