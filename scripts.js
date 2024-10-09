const newItem = document.getElementById("new-item");
const itemsFieldset = document.querySelector("#items");
const form = document.querySelector("form");

form.onsubmit = (event) => {
  event.preventDefault();

  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item-container");

  const itemWrapper = document.createElement("div");
  itemWrapper.classList.add("item-wrapper");
  

  const item = document.createElement("input");
  item.setAttribute("type", "checkbox");

  const itemLabel = document.createElement("label");
  itemLabel.textContent = newItem.value;

  const deleteBtn = document.createElement("img");
  deleteBtn.setAttribute("src", "./assets/icons/delete.svg");
  deleteBtn.classList.add("delete-icon");

  itemsFieldset.append(itemContainer);
  itemWrapper.append(item, itemLabel);
  itemContainer.append(itemWrapper, deleteBtn);
  newItem.value = "";

  deleteItem(deleteBtn, itemContainer)
}


function deleteItem(deleteBtn, itemContainer) {
  deleteBtn.addEventListener("click", () => {
    itemContainer.remove();
  })
}
