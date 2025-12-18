import { getContact } from "./db/phoneBook.js";

const myUL = document.getElementById("myUL");
const myInput = document.getElementById("myInput");

listRender(myUL);

function listRender(domElement, searchKeyword) {
  let listItem = "";
  getContact(searchKeyword).forEach((contact) => {
    listItem += `<li><a href="#">${contact.name}</a></li>`;
  });
  domElement.innerHTML = listItem;
}

myInput.addEventListener("input", function (e) {
  const searchValue = e.target.value;
  listRender(myUL, searchValue);
});
