export async function loadFooter() {
    const result = await fetch('../components/footer.html');
    const html = await result.text();
    document.querySelector('#footer').innerHTML = html;
}