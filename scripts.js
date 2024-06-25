
  // Function to toggle cart visibility
  function toggleCart() {
    const cart = document.getElementById('cart');
    cart.style.display = cart.style.display === 'none' ? 'block' : 'none';
}

  // Function to calculate item price based on options
  function calculatePrice(productName) {
    switch (productName) {
        case 'Cake 1':
            return 500; 
        case 'Cake 2':
            return 800; 
        default:
            return 0;
    }
}
  // Function to add item to cart
  function addToCart(productName, price) {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartItemCount = document.getElementById('cart-item-count');

    // Create new cart item 
    const item = document.createElement('li');
    item.classList.add('cart-item');
    item.innerHTML = `
        <span class="cart-item-name">${productName}</span>
        <span class="cart-item-options">Size: ${document.getElementById(`size${productName === 'Cake 1' ? '' : '2'}`).value}, Topping: ${document.getElementById(`topping${productName === 'Cake 1' ? '' : '2'}`).value}</span>
        <span class="cart-item-price">$${price.toFixed(2)}</span>
    `;

    
    cartItems.appendChild(item);

    
    let total = parseFloat(cartTotal.textContent);
    total += price;
    cartTotal.textContent = total.toFixed(2);

   
    cartItemCount.textContent = parseInt(cartItemCount.textContent) + 1;
}
// Reset cart total to 0
function resetCart() {
  var cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  var cartTotal = document.getElementById('cart-total');
  cartTotal.textContent = '0';

 
}
