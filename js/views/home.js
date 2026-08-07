export async function loadHome() {
    const result = await fetch('../view/home/home.html');
    const html = await result.text();
    document.querySelector('#main').innerHTML = html;
}