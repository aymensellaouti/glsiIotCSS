let p = document.querySelector("#counter");
let addButton = document.querySelector("#add");
let deleteButton = document.querySelector("#delete");

addButton.addEventListener("click", function () {
  p.innerHTML = Number(p.innerHTML) + 1;
});

deleteButton.addEventListener("click", function () {
  p.innerHTML = Number(p.innerHTML) - 1;
});


