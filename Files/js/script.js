function toggleCart() {
    var cartMenu = document.getElementById('cartMenu');
    cartMenu.style.display = cartMenu.style.display === 'block' ? 'none' : 'block';
}

// Find all the "Add to cart" buttons and add click event listeners to them
var addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor link behavior

        // Get the item details from the data attributes of the button
        var itemName = button.getAttribute('data-item-name');
        var itemPrice = button.getAttribute('data-item-price');
        var imagePath = button.getAttribute('data-image-path');

        // Call the addToCart function with the item details
        addToCart(itemName, itemPrice,);
    });
});


