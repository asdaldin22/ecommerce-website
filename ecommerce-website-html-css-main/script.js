const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
// Toggle navigation visibility
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Select all cart items
const cartItems = document.getElementsByClassName('cart-item');

// Function to delete (hide) an item
function deleteItem(event) {
    event.preventDefault(); // Prevent default action if it's an anchor
    const item = this.closest('.cart-item'); // Find the closest parent with class 'cart-item'
    if (item) {
        item.classList.add('notexist'); // Add the class to hide it
    }
}

// Attach event listeners to delete anchors in each cart item
Array.from(cartItems).forEach(cartItem => {
    const deleteAnchor = cartItem.querySelector('.delete'); // Assume delete button has class 'delete'
    if (deleteAnchor) {
        deleteAnchor.addEventListener('click', deleteItem);
    }
});

