export function loadCleanupArticleStyle() {
    const header = document.getElementById('header');
    const titleArticleContent = document.getElementById('title-article-content');

    header.classList.remove('activeArticle');
    if (titleArticleContent) 
    titleArticleContent.classList.remove('activeArticle');
}