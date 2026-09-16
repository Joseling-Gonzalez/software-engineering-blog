import { loadCleanupArticleStyle } from "./layout/cleanupArticleStyle.js";

export async function loadAbout() {
    const result = await fetch('./view/about/about.html');
    const html = await result.text();

    document.querySelector('#main').innerHTML = html;

    loadCleanupArticleStyle();
}