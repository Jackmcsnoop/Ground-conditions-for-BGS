//Text content stored in a JavaScript variable.
const overview=[
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
                    conubia nostra inceptos himenaeos.`
]

const building=`ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus
            mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
            urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
            egestas. Iaculis massa nisl malesuada lacinia integer nunc
            posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
            Ad litora torquent per conubia nostra inceptos himenaeos.`

const mining=`Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus
            mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
            urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
            egestas. Iaculis massa nisl malesuada lacinia integer nunc
            posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
            Ad litora torquent per conubia nostra inceptos himenaeos.`

const safety1=`Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit
            amet consectetur adipiscing elit quisque faucibus ex.
            Adipiscing elit quisque faucibus ex sapien vitae
            pellentesque.`
const safety2=`Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit
            amet consectetur adipiscing elit quisque faucibus ex.
            Adipiscing elit quisque faucibus ex sapien vitae
            pellentesque.`

const pages=["Home", "Resources", "Agriculture", "Quality", "Impacts"];

//Selecting locations for the information.

const navlinks=document.querySelectorAll("#nav-links a");
const overview_p=document.querySelectorAll("#q-overview p");
const building_p=document.querySelector("#building p");
const mining_p=document.querySelector("#mining p");
const safety1_p=document.querySelector("#safety-1 p");
const safety2_p=document.querySelector("#safety-2 p");

//Writing the information to the page.

building_p.textContent=building;
mining_p.textContent=mining;
safety1_p.textContent=safety1;
safety2_p.textContent=safety2;

//Looping for efficiency.

let len1=overview.length
for (let i = 0; i < len1; i++) {
    overview_p[i].textContent=overview[i];
}

let len2=pages.length
for (let i = 0; i < len2; i++) {
    navlinks[i].textContent = pages[i];
}