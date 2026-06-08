const pages = ["Home", "Resources", "Agriculture", "Quality", "Impacts","Feedback"];

const navLinks = document.querySelectorAll("#nav-links a");

let len1 = pages.length;
for (let i = 0; i < len1; i++) {
    navLinks[i].textContent = pages[i];
}

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