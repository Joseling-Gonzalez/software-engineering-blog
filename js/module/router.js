import { loadCategory } from "../views/category/category.js";
import { loadArticlePerCategory } from "../views/category/article-per-category.js";
import { loadMarkdownArticle } from "../views/article/markdown-article.js";
import { loadHtmlArticle } from "../views/article/html-article.js";
import { loadHome } from "../views/home/home.js";
import { loadAbout } from "../views/about.js";

export async function loadRouter() {
    await loadHome();

    const home = document.querySelectorAll('.surfaceHome');
    const about = document.getElementById('about');

    /*Navegation to Home*/
    home.forEach(home => {
        home.addEventListener('click', async () => {
            await loadHome();
        });
    });
    

    document.addEventListener('click', async (event) => {

        /* Browse by category nav */
        const linkCategory = event.target.closest('[data-view]');
        if (linkCategory) {
            let categoryName = linkCategory.dataset.view;

            await loadCategory(categoryName);
            await loadArticlePerCategory(categoryName);

            return;
        }

        /* Browse by article */
        const linkArticle = event.target.closest('[data-article]');
        if (linkArticle) {
            let slug = linkArticle.dataset.article;

            await loadHtmlArticle();
            await loadMarkdownArticle(slug);
            return;
        }
    });

    /*Navegation to About*/
    about.addEventListener('click', async () => {
        await loadAbout();
    });

}
