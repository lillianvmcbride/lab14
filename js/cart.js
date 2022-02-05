/* global Cart */
'use strict';

// !!!!!!Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);


function loadCart() {
  let cartItems = JSON.parse(localStorage.getItem('productString')) || [];
  console.log(cartItems);
  let cart = new Cart(cartItems[0], cartItems[1]);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let rows = document.querySelectorAll('#cart tbody tr');
  for (let i = 0; i < rows.length; i++) {
    rows[i].remove();
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let body = document.getElementsByTagName('tbody');
  // TODO: Iterate over the items in the cart
  for(var i = 0; i < cart.length; i++){
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
    let row = document.createElement('tr');
    var delLink = document.createElement('td');
    delLink.textContent = 'X';
    delLink.id = i;
    delLink.addEventListener('click', removeItemFromCart);
    let quantity = document.createElement('td');
    quantity.textContent = cart[i].quantity;
    let prod = document.createElement('td');
    prod.textContent = cart[i].product;

  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  row.appendChild(delLink);
  row.appendChild(quantity);
  row.appendChild(prod);
  tableBody.appendChild(row);
}
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    var rowID = event.target.id;
    cart.removeItem(rowID);
    // TODO: Save the cart back to local storage
    cart.saveToLocalStorage();
    // TODO: Re-draw the cart table
    renderCart();
  }

// This will initialize the page and draw the cart on screen
renderCart();