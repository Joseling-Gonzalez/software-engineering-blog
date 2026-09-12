export async function loadHtmlArticle() {
    const response = await fetch('../view/article/article.html');
    const html = await response.text();

    document.querySelector('#main').innerHTML = html;

}