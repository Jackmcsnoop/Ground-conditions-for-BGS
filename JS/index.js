//Text content stored in a JavaScript variable.
const resources = `Lorem ipsum dolor sit amet consectetur adipiscing elit.
                Quisque faucibus ex sapien vitae pellentesque sem placerat.
                In id cursus mi pretium tellus duis convallis. Tempus leo eu
                aenean sed diam urna tempor. Pulvinar vivamus fringilla
                lacus nec metus bibendum egestas. Iaculis massa nisl
                malesuada lacinia integer nunc posuere. Ut hendrerit semper
                vel class aptent taciti sociosqu. Ad litora torquent per
                conubia nostra inceptos himenaeos.`;

const agriculture = `Lorem ipsum dolor sit amet consectetur adipiscing elit.
                Quisque faucibus ex sapien vitae pellentesque sem placerat.
                In id cursus mi pretium tellus duis convallis. Tempus leo eu
                aenean sed diam urna tempor. Pulvinar vivamus fringilla
                lacus nec metus bibendum egestas. Iaculis massa nisl
                malesuada lacinia integer nunc posuere. Ut hendrerit semper
                vel class aptent taciti sociosqu. Ad litora torquent per
                conubia nostra inceptos himenaeos.`;

const quality = `Lorem ipsum dolor sit amet consectetur adipiscing elit.
            Quisque faucibus ex sapien vitae pellentesque sem placerat.
            In id cursus mi pretium tellus duis convallis. Tempus leo eu
            aenean sed diam urna tempor. Pulvinar vivamus fringilla
            lacus nec metus bibendum egestas. Iaculis massa nisl
            malesuada lacinia integer nunc posuere. Ut hendrerit semper
            vel class aptent taciti sociosqu. Ad litora torquent per
            conubia nostra inceptos himenaeos.`;

const impacts = `Lorem ipsum dolor sit amet consectetur adipiscing elit.
            Quisque faucibus ex sapien vitae pellentesque sem placerat.
            In id cursus mi pretium tellus duis convallis. Tempus leo eu
            aenean sed diam urna tempor. Pulvinar vivamus fringilla
            lacus nec metus bibendum egestas. Iaculis massa nisl
            malesuada lacinia integer nunc posuere. Ut hendrerit semper
            vel class aptent taciti sociosqu. Ad litora torquent per
            conubia nostra inceptos himenaeos.`;

const pages = ["Home", "Resources", "Agriculture", "Quality", "Impacts","Feedback"];

//Selecting locations for the information.

const resourcesP = document.querySelector("#resources p");
const agricultureP = document.querySelector("#agriculture p");
const qualityP = document.querySelector("#quality p");
const impactsP = document.querySelector("#impacts p");
const navLinks = document.querySelectorAll("#nav-links a");

//Writing the information to the page.

resourcesP.textContent = resources;
agricultureP.textContent = agriculture;
qualityP.textContent = quality;
impactsP.textContent = impacts;

//Looping for efficiency.
let len = pages.length;
for (let i = 0; i < len; i++) {
    navLinks[i].textContent = pages[i];
}

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