//Text content stored in a JavaScript variable.
const resources=`Lorem ipsum dolor sit amet consectetur adipiscing elit.
                Quisque faucibus ex sapien vitae pellentesque sem placerat.
                In id cursus mi pretium tellus duis convallis. Tempus leo eu
                aenean sed diam urna tempor. Pulvinar vivamus fringilla
                lacus nec metus bibendum egestas. Iaculis massa nisl
                malesuada lacinia integer nunc posuere. Ut hendrerit semper
                vel class aptent taciti sociosqu. Ad litora torquent per
                conubia nostra inceptos himenaeos.`

const agriculture=`Lorem ipsum dolor sit amet consectetur adipiscing elit.
                Quisque faucibus ex sapien vitae pellentesque sem placerat.
                In id cursus mi pretium tellus duis convallis. Tempus leo eu
                aenean sed diam urna tempor. Pulvinar vivamus fringilla
                lacus nec metus bibendum egestas. Iaculis massa nisl
                malesuada lacinia integer nunc posuere. Ut hendrerit semper
                vel class aptent taciti sociosqu. Ad litora torquent per
                conubia nostra inceptos himenaeos.`

const quality=`Lorem ipsum dolor sit amet consectetur adipiscing elit.
            Quisque faucibus ex sapien vitae pellentesque sem placerat.
            In id cursus mi pretium tellus duis convallis. Tempus leo eu
            aenean sed diam urna tempor. Pulvinar vivamus fringilla
            lacus nec metus bibendum egestas. Iaculis massa nisl
            malesuada lacinia integer nunc posuere. Ut hendrerit semper
            vel class aptent taciti sociosqu. Ad litora torquent per
            conubia nostra inceptos himenaeos.`

const impacts=`Lorem ipsum dolor sit amet consectetur adipiscing elit.
            Quisque faucibus ex sapien vitae pellentesque sem placerat.
            In id cursus mi pretium tellus duis convallis. Tempus leo eu
            aenean sed diam urna tempor. Pulvinar vivamus fringilla
            lacus nec metus bibendum egestas. Iaculis massa nisl
            malesuada lacinia integer nunc posuere. Ut hendrerit semper
            vel class aptent taciti sociosqu. Ad litora torquent per
            conubia nostra inceptos himenaeos.`

const pages=["Home", "Resources", "Agriculture", "Quality", "Impacts"];

//Selecting locations for the information.

const resources_p=document.querySelector("#resources p");
const agriculture_p=document.querySelector("#agriculture p");
const quality_p=document.querySelector("#quality p");
const impacts_p=document.querySelector("#impacts p");
const navlinks=document.querySelectorAll("#nav-links a");

//Writing the information to the page.

resources_p.textContent=resources;
agriculture_p.textContent=agriculture;
quality_p.textContent=quality;
impacts_p.textContent=impacts;

//Looping for efficiency.
let len=pages.length
for (let i = 0; i < len; i++) {
    navlinks[i].textContent = pages[i];
}
