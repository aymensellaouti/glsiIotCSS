function ampoulePlayer(element, classes, timer) {
  element.classList.add(classes[0]);
  setInterval(() => {
    classes.forEach((classe) => {
      element.classList.toggle(classe);
    });
  }, timer);
}

function hide(element, timer) {
  setInterval(() => {
    element.hidden ? (element.hidden = false) : (element.hidden = true);
  }, timer);
}
const monDiv = document.querySelector("div");
hide(monDiv, 1500);

const body = document.querySelector("body");
/* ampoulePlayer(monDiv, ["ampoule", "blueAmpouleLed"], 2000);
ampoulePlayer(body, ["ampoule", "blueAmpouleLed"], 1000);
 */

const lien = document.querySelector("a");
updateLinkElement(lien);
function updateLinkElement(element) {
  const modify = confirm(
    `Voulez vous modifier le lien suivant : + ${element.href}`
  );

  if (modify) {
    const newLink = prompt("Veuillez insérer le nouveau lien");
    element.href = newLink;
  }
}
