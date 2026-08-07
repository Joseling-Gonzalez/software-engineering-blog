export function initScroll() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        header.classList.toggle('activeScroll', window.scrollY > 0);
    });
}
