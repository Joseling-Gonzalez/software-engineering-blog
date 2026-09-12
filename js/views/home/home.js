import { loadRecentArticles } from "./recent-articles.js";
import { loadCleanupArticleStyle } from "../../layout/cleanupArticleStyle.js";

export async function loadHome() {
    const result = await fetch('../view/home/home.html');
    const html = await result.text();
    document.querySelector('#main').innerHTML = html;

    await loadRecentArticles();
    loadCleanupArticleStyle();
}