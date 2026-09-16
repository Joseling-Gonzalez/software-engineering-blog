export async function loadHeader() {
    const result = await fetch('./components/header.html');
    const html = await result.text();
    document.querySelector('#header').innerHTML = html;
}
