import { loadHeader } from "./header.js";
import { loadHome } from "../views/home.js";
import { loadFooter } from "./footer.js";

// import { loadArticle } from "../views/article.js";

export async function initLayout() {
    await loadLayout();
    await loadHeader();
    await loadHome();    
    await loadFooter();
}


async function loadLayout() {
    const response = await fetch('/layout.html');
    const html = await response.text();
    document.querySelector('#app').innerHTML = html;
}




