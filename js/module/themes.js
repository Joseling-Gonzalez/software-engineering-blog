export function initTheme() {

    const activateModebtn = document.querySelectorAll('.activateModebtn');
    const activateModeImg = document.querySelectorAll('.activateModebtn img');
    const logoChange = document.querySelectorAll('#logo a img');
    const iconSearch = document.getElementById('icon-searches');
    const iconGithub = document.getElementById('icon-github');
    const iconLinkedin = document.getElementById('icon-linkedin');
    const iconInstagram = document.getElementById('icon-instagram');

    function fn_changeLogo(action) {
        logoChange.forEach(logo => {
            action(logo);
        });
    }

    function fn_changeModeImg(action) {
        activateModeImg.forEach(img => {
            action(img);
        });
    }

    activateModebtn.forEach(btn => {
        btn.addEventListener('click', () => {
            let currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                fn_changeLogo(logo => {
                    logo.src = './assets/logo/joseling-logo.svg';
                });
                fn_changeModeImg(img => {
                    img.src = './assets/icons/icon-sun.svg';
                });

                iconSearch.src = './assets/icons/icon-search.svg';
                iconGithub.src = './assets/icons/icon-github.svg';
                iconLinkedin.src = './assets/icons/icon-linkedin.svg';
                iconInstagram.src = './assets/icons/icon-instagram.svg';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                fn_changeLogo(logo => {
                    logo.src = './assets/logo/joseling-logo-white.svg';
                });
                fn_changeModeImg(img => {
                    img.src = './assets/icons/icon-moon.svg';
                });

                iconSearch.src = './assets/icons/icon-search-white.svg';
                iconGithub.src = './assets/icons/icon-github-white.svg';
                iconLinkedin.src = './assets/icons/icon-linkedin-white.svg';
                iconInstagram.src = './assets/icons/icon-instagram-white.svg';
            }
            currentTheme = document.documentElement.getAttribute('data-theme');
            localStorage.setItem('theme', currentTheme);
        });
    });

    /*LocalStorage Theme*/
    let savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);

        let currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            fn_changeLogo(logo => {
                logo.src = './assets/logo/joseling-logo-white.svg';
            });
            fn_changeModeImg(img => {
                img.src = './assets/icons/icon-moon.svg';
            });

            iconSearch.src = './assets/icons/icon-search-white.svg';
            iconGithub.src = './assets/icons/icon-github-white.svg';
            iconLinkedin.src = './assets/icons/icon-linkedin-white.svg';
            iconInstagram.src = './assets/icons/icon-instagram-white.svg';
        } else {
            fn_changeLogo(logo => {
                logo.src = './assets/logo/joseling-logo.svg';
            });
            fn_changeModeImg(img => {
                img.src = './assets/icons/icon-sun.svg';
            });

            iconSearch.src = './assets/icons/icon-search.svg';
            iconGithub.src = './assets/icons/icon-github.svg';
            iconLinkedin.src = './assets/icons/icon-linkedin.svg';
            iconInstagram.src = './assets/icons/icon-instagram.svg';
        }
    };
}
