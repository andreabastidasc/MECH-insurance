addEventListener("DOMContentLoaded", (event) => {
    const langElement = document.getElementById("lang");
    const langTextElements = document.querySelectorAll("[data-section]");

    langElement.addEventListener("click", (e) => {
        changeLanguage(e.target.value);
    })

    const changeLanguage = async language => {
        const requestJson = await fetch(`../lang/${language}.json`);
        const texts = await requestJson.json();

        for(const langTextElement of langTextElements) {
            const section = langTextElement.dataset.section;
            const value = langTextElement.dataset.value;

            langTextElement.innerHTML = texts[section][value]
        }
    }
});

