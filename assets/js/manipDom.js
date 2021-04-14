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
/* hide(monDiv, 1500); */

const body = document.querySelector("body");
/* ampoulePlayer(monDiv, ["ampoule", "blueAmpouleLed"], 2000);
ampoulePlayer(body, ["ampoule", "blueAmpouleLed"], 1000);
 */

const lien = document.querySelector("a");
/* updateLinkElement(lien); */
function updateLinkElement(element) {
  const modify = confirm(
    `Voulez vous modifier le lien suivant : + ${element.href}`
  );

  if (modify) {
    const newLink = prompt("Veuillez insérer le nouveau lien");
    element.href = newLink;
  }
}

villes = [
  "Tunis",
  "Tatouin",
  "Djerba",
  "Bizerte",
  "Mahdia",
  "Sidi Bouzid",
  "Kasserine",
  "Kef",
];

function showCities(olUlElement, cities, timer) {
  let i = 0;
  const intervalId = setInterval(() => {
    if (i == cities.length) {
      clearInterval(intervalId);
    } else {
      olUlElement.innerHTML += `<li>${cities[i]}</li>`;
      i++;
    }
  }, timer);
}

const ol = document.querySelector("ol");
showCities(ol, villes, 2000);
