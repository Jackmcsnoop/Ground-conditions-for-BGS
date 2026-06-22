async function loadJson() {
    try{
        const response = await fetch("./JS/data.json");
        const data = await response.json()
        
        let len1 = data.index.pages.length
        for(let i = 0; i < len1; i++) {
            document.querySelectorAll("#nav-links a")[i].textContent = data.index.pages[i];
        } 
    } catch(err) {
        console.error("Error", err.message);
    }
}

loadJson();
function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const value = Object.fromEntries(data.entries());

  console.log({ value });
  console.log(JSON.stringify(value, null, 2));
    sendEmail(value.name, value.feedback);
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function sendEmail(name, feedback) {
    window.open('mailto:jmcle@bgs.ac.uk?subject=Feedback from ' + name + '&body=' + feedback);
}