import { loadArticlePerCategory } from "./article-per-category.js";
import { loadCleanupArticleStyle } from "../../layout/cleanupArticleStyle.js";

export async function loadCategory(view) {
    let response = '';

    if (view === 'algorithm')
        response = await fetch('./view/category/algorithm.html');
    else if (view === 'cSharp')
        response = await fetch('./view/category/csharp.html');
    else if (view === 'javascript')
        response = await fetch('./view/category/javascript.html');
    else if (view === 'tSql')
        response = await fetch('./view/category/t-sql.html');
    else if (view === 'dataStructure')
        response = await fetch('./view/category/data-structure.html');
    else
        return;

    const html = await response.text();
    document.getElementById('main').innerHTML = html;

    await loadArticlePerCategory();
    loadCleanupArticleStyle();

}