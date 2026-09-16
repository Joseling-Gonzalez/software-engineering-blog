import { loadHeader } from "./header.js";
import { loadFooter } from "./footer.js";
import { loadRouter } from "../module/router.js";

export async function initLayout() {
    await loadLayout();
    await loadHeader();
    await loadFooter();
    await loadRouter();
}


async function loadLayout() {
    const response = await fetch('./layout.html');

    if (!response.ok) {
        console.error("Failed to load layout: ${response.status}");
        return;
    }

    const html = await response.text();
    document.querySelector('#app').innerHTML = html;
}




