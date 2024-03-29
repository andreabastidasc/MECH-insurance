addEventListener("DOMContentLoaded", (event) => {
    const langElement = document.getElementById("lang");
    const langTextElements = document.querySelectorAll("[data-section]");
    let selectedLanguage = localStorage.getItem('selectedLanguage') || 'defaultLanguage'; // Default language if none selected

    // Set initial language based on localStorage or default
    changeLanguage(selectedLanguage);

    langElement.addEventListener("change", (e) => {
        selectedLanguage = e.target.value;
        localStorage.setItem('selectedLanguage', selectedLanguage);
        changeLanguage(selectedLanguage);
    });

    async function changeLanguage(language) {
        const requestJson = await fetch(`https://raw.githubusercontent.com/andreabastidasc/MECH-insurance/main/lang/${language}.json`);
        const texts = await requestJson.json();

        for (const langTextElement of langTextElements) {
            const section = langTextElement.dataset.section;
            const value = langTextElement.dataset.value;

            langTextElement.innerHTML = texts[section][value];
        }
    }
});
