
import * as builAplication from './layout/layout.js';
import { initTheme } from './module/themes.js';
import { initScroll } from './module/active-scroll.js';
import { initDropdownNav } from './module/dropdown-nav.js';

export async function initApp() {
    await builAplication.initLayout();
    initTheme();
    initScroll();
    initDropdownNav();
}

