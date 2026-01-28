document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    function switchTabs(index) {
        tabContents.forEach(c => c.classList.remove("active"));
        tabButtons.forEach(b => b.classList.remove("active"));

        tabContents[index].classList.add("active");
        tabButtons[index].classList.add("active");
    }

    tabButtons.forEach((button, index) => {
        button.addEventListener("click", () => switchTabs(index));
    });

    switchTabs(1);
});
