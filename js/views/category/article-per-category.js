export async function loadArticlePerCategory(view) {
    const response = await fetch('./content/articles.json');
    const articles = await response.json();

    const articlePerCategory = articles.filter(category => {
        let articlesCategory = [];

        if (view === 'algorithm') {
            articlesCategory = category.category === 'algorithm';
            return articlesCategory;
        } else if (view === 'cSharp') {
            articlesCategory = category.category === 'cSharp';
            return articlesCategory;
        } else if (view === 'tSql') {
            articlesCategory = category.category === 'tSql';
            return articlesCategory;
        } else if (view === 'javascript') {
            articlesCategory = category.category === 'javascript';
            return articlesCategory;
        } else if (view === 'dataStructure') {
            articlesCategory = category.category === 'dataStructure';
            return articlesCategory;
        } else {
            return;
        }
    }).sort((a, b) => new Date(b.date) - new Date(a.date));

    renderArticlePerCategory(articlePerCategory);

    function renderArticlePerCategory(articlePerCategory) {
        const container = document.querySelector('#cArticles');

        if (!articlePerCategory)
            return;

        articlePerCategory.forEach(article => {
            const createArticle = document.createElement('article');

            createArticle.innerHTML = `
            <a class="titleArticle" href="#" data-article="${article.slug}"><span>${article.title}</span></a>            
            <p class="descriptionArticle">${article.description}</p>
            <a class="readArticle" href="#"><span>Read more</span></a>
        `;
            container.appendChild(createArticle);
        });
    }
}