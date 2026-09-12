
import * as builAplication from './layout/layout.js';
import { initTheme } from './module/themes.js';
import { initComponents } from './module/components.js';

export async function initApp() {
    await builAplication.initLayout();
    initTheme();
    initComponents();
}

