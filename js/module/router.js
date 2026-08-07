import { loadCategory } from "../views/category/category.js";

export function loadRouter() {
    const nav = document.querySelector('#nav');

    nav.addEventListener('click', async (e) => {
        const link = e.target.closest('a');        
        if (!link) 
            return;
                
        const categoryName = link.dataset.view;
        if (!categoryName) 
            return;
       
        
        await loadCategory(categoryName);
        console.log(categoryName);
        

    });
}
