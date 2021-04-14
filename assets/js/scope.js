const { Tab } = require("bootstrap");

function showX() {
  for (let x = 0; x < 3; x++) {
    console.log(x);
  }
  console.log(x);
}
console.log(testHoisting);

var testHoisting = 5;

console.log(testHoisting);

for (let i = 0; i < Tab.length; i++) {
  console.log(tab[i]);
}

for (i in tab) {
  console.log(tab[i]);
}

tab.forEach((element, indice) => {
  console.log(
    `Dans mon élément d'indice ${indice} la valeur du tableau est ${element}`
  );
});
