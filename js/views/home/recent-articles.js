export async function loadRecentArticles() {
    const response = await fetch('./content/articles.json');
    const articles = await response.json();

    const recentArticles = articles.sort((a, b) =>
        new Date(b.date) - new Date(a.date)
    ).slice(0, 5);

    renderArticles(recentArticles);

    function renderArticles(articles) {
        const container = document.querySelector('#recentArticles');

        articles.forEach(article => {
            const createElement = document.createElement('article');

            createElement.innerHTML = `
            <a class="titleArticle" href="#" data-article="${article.slug}"><span>${article.title}</span></a>            
            <p class="descriptionArticle">${article.description}</p>
            <a class="readArticle" href="#"><span>Read more</span></a>
        `;

            container.appendChild(createElement);
        });
    }
}
