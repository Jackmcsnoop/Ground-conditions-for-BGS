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
const solutions = `Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Quisque faucibus ex sapien vitae pellentesque sem placerat.
                    In id cursus mi pretium tellus duis convallis. Tempus leo eu
                    aenean sed diam urna tempor. Pulvinar vivamus fringilla
                    lacus nec metus bibendum egestas. Iaculis massa nisl
                    malesuada lacinia integer nunc posuere. Ut hendrerit semper
                    vel class aptent taciti sociosqu. Ad litora torquent per
                    conubia nostra inceptos himenaeos.`;

const pages = ["Home", "Resources", "Agriculture", "Quality", "Impacts","Feedback"];

//Selecting locations for the information.

const solutionsP = document.querySelector("#solutions p");
const navLinks = document.querySelectorAll("#nav-links a");
const overviewP = document.querySelectorAll("#i-overview p");

//Writing the information to the page.

solutionsP.textContent = solutions;

//Looping for efficiency.

let len1 = overview.length;
for (let i = 0; i < len1; i++) {
    overviewP[i].textContent = overview[i];
}
let len2 = pages.length;
for (let i = 0; i < len2; i++) {
    navLinks[i].textContent = pages[i];
}
