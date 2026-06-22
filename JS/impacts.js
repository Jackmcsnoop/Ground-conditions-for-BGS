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
            document.querySelectorAll("#i-overview p")[i].textContent = data.impacts.overview[i];
        }

        document.querySelector("#solutions p").textContent = data.impacts.solutions;
    } catch(err) {
        console.error("Error", err.message);
    }
}

loadJson();