async function loadJson() {
    try{
        const response = await fetch("./JS/data.json");
        const data = await response.json()

        let len1 = data.index.pages.length
        for(let i = 0; i < len1; i++) {
            document.querySelectorAll("#nav-links a")[i].textContent = data.index.pages[i];
        }

        document.querySelector("#resources p").textContent = data.index.resources;
        document.querySelector("#agriculture p").textContent = data.index.agriculture
        document.querySelector("#quality p").textContent = data.index.quality
        document.querySelector("#impacts p").textContent = data.index.impacts
    } catch(err) {
        console.error("Error", err.message);
        window.location.assign("fallback.html");
    }
}

loadJson();


//Code for cookies

document.addEventListener("DOMContentLoaded",() => {
    const cookieBanner = document.getElementById("cookieBanner");
    const acceptButton = document.getElementById("acceptCookies");
    const declineButton = document.getElementById("declineCookies");

    if (localStorage.getItem("cookiesAccepted") === "true") {
        cookieBanner.style.display = "none";
    }
  
    if (localStorage.getItem("cookiesAccepted") === "false") {
        cookieBanner.style.display = "none";
    }

    acceptButton.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none";
    });
    declineButton.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "false");
        cookieBanner.style.display = "none";
    });
});

async function openAdmin() {
    
}