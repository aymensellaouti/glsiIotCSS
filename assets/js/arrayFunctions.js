const tab = [1, 2, 3, 4];

const mappedTab = tab.map((actuelValue) => {
  console.log(actuelValue);
  return actuelValue * 2;
});

/* console.log(mappedTab); */

const filtredPairTab = tab.filter((actualValue) => {
  return actualValue % 2 == 0;
});

console.log("element paires du tableau :", filtredPairTab);

const filtredImpairTab = tab.filter((actualValue) => {
  return actualValue % 2 != 0;
});

console.log("element impaires du tableau :", filtredImpairTab);
