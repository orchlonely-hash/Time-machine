document.addEventListener('DOMContentLoaded', () => {

    button1 = document.getElementById("main_dish_tab")
    button2 = document.getElementById("side_dish_tab")
    button3 = document.getElementById("desert_tab")

    hatsune = document.getElementById("hatsune")
    kasane = document.getElementById("kasane")
    kagame = document.getElementById("kagame")
    
    let previous_tab = hatsune;

    button1.addEventListener("click", () => {
        if (previous_tab = hatsune) {
            return
        }
        else {
            previous_tab = hatsune;
            previous_tab.style.display = none;
            hatsune.style.display = block;
        }
    });
})