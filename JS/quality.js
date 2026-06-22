async function loadJson() {
    const response = await fetch("./JS/data.json");
    const data = await response.json()

    let len1 = data.index.pages.length
    for(let i = 0; i < len1; i++) {
        document.querySelectorAll("#nav-links a")[i].textContent = data.index.pages[i];
    }

    let len2 = data.resources.overview.length
    for (let i = 0; i <len2; i++) {
        document.querySelectorAll("#q-overview p")[i].textContent = data.quality.overview[i];
    }

    document.querySelector("#building p").textContent = data.quality.building;
    document.querySelector("#mining p").textContent = data.quality.mining;
    document.querySelector("#safety-1 p").textContent = data.quality.safety1;
    document.querySelector("#safety-2 p").textContent = data.quality.safety2;
}

loadJson();