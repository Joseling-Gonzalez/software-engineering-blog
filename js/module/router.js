import { loadCategory } from "../views/category/category.js";
import { loadHome } from "../views/home.js";
import { loadAbout } from "../views/about.js";

export async function loadRouter() {
    await loadHome();

    // const nav = document.querySelectorAll('.nav');
    const home = document.querySelectorAll('.surfaceHome');
    const about = document.getElementById('about');

    /*Navegation to Home*/
    home.forEach(home => {
        home.addEventListener('click', async () => {
            await loadHome();
        });
    });

    /*Browse by category from header*/
    document.addEventListener('click', async (e) => {

        const nav = e.target.closest('.nav a');
        if (!nav)
            return;

        const categoryName = nav.dataset.view;
        if (!categoryName)
            return;

        await loadCategory(categoryName);
    });

    /*Navegation to About*/
    about.addEventListener('click', async () => {
        await loadAbout();
    });

}
