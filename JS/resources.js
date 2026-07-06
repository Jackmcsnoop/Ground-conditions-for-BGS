async function loadJson() {
    try{
        const response = await fetch("./JS/data.json");
        const data = await response.json()

        let len1 = data.index.pages.length
        for(let i = 0; i < len1; i++) {
            document.querySelectorAll("#nav-links a")[i].textContent = data.index.pages[i];
        }

        let len2 = data.resources.overview.length
        for (let i = 0; i <len2; i++) {
            document.querySelectorAll("#r-overview p")[i].textContent = data.resources.overview[i];
        }

        document.querySelector("#oil-dropdown p").textContent = data.resources.oilDropdown;
        document.querySelector("#water-dropdown p").textContent = data.resources.waterDropdown;
        document.querySelector("#gas-dropdown p").textContent = data.resources.gasDropdown;
    } catch(err) {
        console.error("Error", err.message);
        window.location.assign("fallback.html");
    }
}

loadJson();