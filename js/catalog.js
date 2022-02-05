/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  let selection = document.getElementById('items');
  for (let i in Product.allProducts) {
    let product = document.createElement('option');
    product.textContent = Product.allProducts[i].name;
    selection.appendChild(product);

  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  let form = document.getElementById('items');
  let product = form.options[form.selectedIndex].value;
  // TODO: suss out the item picked from the select list
  let quantity = document.getElementById('quantity').value;
  // TODO: using those, add one item to the Cart
  let newItem = [product, quantity];
  cart.items.push(newItem);
  console.log(cart.items);
}
// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let counter = document.getElementById('itemCount');
  counter.textContent = document.getElementById('quantity').value;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  let form = document.getElementById('items');
  let product = form.options[form.selectedIndex].value;
  let quantity = document.getElementById('quantity').value;
  // TODO: Add a new element to the cartContents div with that information
  let contents = document.getElementById('cartContents');
  let preview = document.createElement('div');
  preview.textContent = quantity + ' ' + product;
  contents.appendChild(preview);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();