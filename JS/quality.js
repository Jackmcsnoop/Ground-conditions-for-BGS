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

const building = `ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus
            mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
            urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
            egestas. Iaculis massa nisl malesuada lacinia integer nunc
            posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
            Ad litora torquent per conubia nostra inceptos himenaeos.`;

const mining = `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus
            mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
            urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
            egestas. Iaculis massa nisl malesuada lacinia integer nunc
            posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
            Ad litora torquent per conubia nostra inceptos himenaeos.`;

const safety1 = `Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit
            amet consectetur adipiscing elit quisque faucibus ex.
            Adipiscing elit quisque faucibus ex sapien vitae
            pellentesque.`;
const safety2 = `Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit
            amet consectetur adipiscing elit quisque faucibus ex.
            Adipiscing elit quisque faucibus ex sapien vitae
            pellentesque.`;

const pages = ["Home", "Resources", "Agriculture", "Quality", "Impacts","Feedback"];

//Selecting locations for the information.

const navLinks = document.querySelectorAll("#nav-links a");
const overviewP = document.querySelectorAll("#q-overview p");
const buildingP = document.querySelector("#building p");
const miningP = document.querySelector("#mining p");
const safety1P = document.querySelector("#safety-1 p");
const safety2P = document.querySelector("#safety-2 p");

//Writing the information to the page.

buildingP.textContent = building;
miningP.textContent = mining;
safety1P.textContent = safety1;
safety2P.textContent = safety2;

//Looping for efficiency.

let len1 = overview.length;
for (let i = 0; i < len1; i++) {
    overviewP[i].textContent = overview[i];
}

let len2 = pages.length;
for (let i = 0; i < len2; i++) {
    navLinks[i].textContent = pages[i];
}
