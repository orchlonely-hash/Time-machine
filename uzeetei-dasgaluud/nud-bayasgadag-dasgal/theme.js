document.addEventListener('DOMContentLoaded', () => {
    const light_switch = document.getElementById('light-switch');

    const root = document.documentElement; //:root

    light_switch.addEventListener('click', () => {
        const bg = getComputedStyle(root).getPropertyValue('--main-bg').trim(); //trim fixes weird spacings

        if (bg === 'rgb(48, 48, 59)') {
            root.style.setProperty('--main-bg', '#ffffff');
            root.style.setProperty('--main-txt', 'rgb(48, 48, 59)');
        } else {
            root.style.setProperty('--main-bg', 'rgb(48, 48, 59)');
            root.style.setProperty('--main-txt', '#ffffff');
        }
    });
});
