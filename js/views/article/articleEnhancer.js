export function loadArticleEnhancer() {
    const header = document.getElementById('header');
    const titleArticleContent = document.getElementById('title-article-content');

    header.classList.add('activeArticle');
    titleArticleContent.classList.add('activeArticle');

}