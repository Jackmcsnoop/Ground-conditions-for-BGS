//Text content stored in a JavaScript variable.
const overview = [
    `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
        faucibus ex sapien vitae pellentesque sem placerat. In id cursus
        mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
        urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
        egestas. Iaculis massa nisl malesuada lacinia integer nunc
        posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
        Ad litora torquent per conubia nostra inceptos himenaeos.`,

    `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
        faucibus ex sapien vitae pellentesque sem placerat. In id cursus
        mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
        urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
        egestas. Iaculis massa nisl malesuada lacinia integer nunc
        posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
        Ad litora torquent per conubia nostra inceptos himenaeos.`,
];

const oilDropdown = `Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Quisque faucibus ex sapien vitae pellentesque sem placerat.
                    In id cursus mi pretium tellus duis convallis. Tempus leo eu
                    aenean sed diam urna tempor. Pulvinar vivamus fringilla
                    lacus nec metus bibendum egestas. Iaculis massa nisl
                    malesuada lacinia integer nunc posuere. Ut hendrerit semper
                    vel class aptent taciti sociosqu. Ad litora torquent per
                    conubia nostra inceptos himenaeos.`;

const waterDropdown = `Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Quisque faucibus ex sapien vitae pellentesque sem placerat.
                    In id cursus mi pretium tellus duis convallis. Tempus leo eu
                    aenean sed diam urna tempor. Pulvinar vivamus fringilla
                    lacus nec metus bibendum egestas. Iaculis massa nisl
                    malesuada lacinia integer nunc posuere. Ut hendrerit semper
                    vel class aptent taciti sociosqu. Ad litora torquent per
                    conubia nostra inceptos himenaeos.`;

const gasDropdown = `Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Quisque faucibus ex sapien vitae pellentesque sem placerat.
                    In id cursus mi pretium tellus duis convallis. Tempus leo eu
                    aenean sed diam urna tempor. Pulvinar vivamus fringilla
                    lacus nec metus bibendum egestas. Iaculis massa nisl
                    malesuada lacinia integer nunc posuere. Ut hendrerit semper
                    vel class aptent taciti sociosqu. Ad litora torquent per
                    conubia nostra inceptos himenaeos.`;

const pages = ["Home", "Resources", "Agriculture", "Quality", "Impacts","Feedback"];

//Selecting locations for the information.

const navLinks = document.querySelectorAll("#nav-links a");
const overviewP = document.querySelectorAll("#r-overview p");
const oilDropdownP = document.querySelector("#oil-dropdown p");
const waterDropdownP = document.querySelector("#water-dropdown p");
const gasDropdownP = document.querySelector("#gas-dropdown p");

//Writing the information to the page.

oilDropdownP.textContent = oilDropdown;
waterDropdownP.textContent = waterDropdown;
gasDropdownP.textContent = gasDropdown;

//Looping for efficiency.

let len1 = overview.length;
for (let i = 0; i < len1; i++) {
    overviewP[i].textContent = overview[i];
}

let len2 = pages.length;
for (let i = 0; i < len2; i++) {
    navLinks[i].textContent = pages[i];
}
