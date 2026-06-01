//Text content stored in a JavaScript variable.
const overview = [
    `Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Quisque faucibus ex sapien vitae pellentesque sem placerat.
                    In id cursus mi pretium tellus duis convallis. Tempus leo eu
                    aenean sed diam urna tempor. Pulvinar vivamus fringilla
                    lacus nec metus bibendum egestas. Iaculis massa nisl
                    malesuada lacinia integer nunc posuere. Ut hendrerit semper
                    vel class aptent taciti sociosqu. Ad litora torquent per
                    conubia nostra inceptos himenaeos.`,

    `Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Quisque faucibus ex sapien vitae pellentesque sem placerat.
                    In id cursus mi pretium tellus duis convallis. Tempus leo eu
                    aenean sed diam urna tempor. Pulvinar vivamus fringilla
                    lacus nec metus bibendum egestas. Iaculis massa nisl
                    malesuada lacinia integer nunc posuere. Ut hendrerit semper
                    vel class aptent taciti sociosqu. Ad litora torquent per
                    conubia nostra inceptos himenaeos.`,
];
const polutants = `Lorem ipsum dolor sit amet consectetur adipiscing elit.
            Quisque faucibus ex sapien vitae pellentesque sem placerat.
            In id cursus mi pretium tellus duis convallis. Tempus leo eu
            aenean sed diam urna tempor. Pulvinar vivamus fringilla
            lacus nec metus bibendum egestas. Iaculis massa nisl
            malesuada lacinia integer nunc posuere. Ut hendrerit semper
            vel class aptent taciti sociosqu. Ad litora torquent per
            conubia nostra inceptos himenaeos.`;

const pages = ["Home", "Resources", "Agriculture", "Quality", "Impacts"];

//Selecting locations for the information.

const navlinks = document.querySelectorAll("#nav-links a");
const overview_p = document.querySelectorAll("#a-overview p");
const polutants_p = document.querySelector("#polutants p");

//Writing the information to the page.

polutants_p.textContent = polutants;

//Looping for efficiency.

let len1 = overview.length;
for (let i = 0; i < len1; i++) {
    overview_p[i].textContent = overview[i];
}

let len2 = pages.length;
for (let i = 0; i < len2; i++) {
    navlinks[i].textContent = pages[i];
}
