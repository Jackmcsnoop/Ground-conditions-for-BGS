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
            document.querySelectorAll("#a-overview p")[i].textContent = data.agriculture.overview[i];
        }

        document.querySelector("#polutants p").textContent = data.agriculture.polutants;
    } catch(err) {
        console.error("Error", err.message);
        window.location.assign("fallback.html");
    }
}

loadJson();