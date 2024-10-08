const newItem = document.getElementById("new-item");
const itemsFieldset = document.querySelector("#items");
const form = document.querySelector("form");

form.onsubmit = (event) => {
  event.preventDefault();
  
  const itemWrapper = document.createElement("div");
  itemWrapper.classList.add("item-wrapper");

  const item = document.createElement("input");
  item.setAttribute("type", "checkbox");

  const itemLabel = document.createElement("label")
  itemLabel.textContent = newItem.value;

  itemsFieldset.append(itemWrapper);
  itemWrapper.append(item, itemLabel);
  newItem.value = "";
}
