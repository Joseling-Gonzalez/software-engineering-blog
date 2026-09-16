import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';
import { loadArticleEnhancer } from './articleEnhancer.js';

export async function loadMarkdownArticle(slug) {
    const response = await fetch('../content/articles.json');
    const articles = await response.json();

    const article = articles.find(slugCategory => slugCategory.slug === slug);

    if (!article)
        return;


    const path = `../content/${article.category}/${article.file}`;
    const fileArticle = await fetch(path);
    const markdown = await fileArticle.text();
    const html = marked.parse(markdown);
    const articletitle = article.title;
    const createTileElement = document.createElement('h1');
    loadArticleEnhancer();

    createTileElement.innerHTML = articletitle;

    document.querySelector('#articles-content').innerHTML = html;
    document.querySelector('#title-article-content').innerHTML = articletitle;
}