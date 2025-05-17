document.addEventListener('DOMContentLoaded', () => {
    const cart = {
        items: [],
        total: 0
    };

    // DOM Elements
    const cartIcon = document.querySelector('.cart-icon');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const closeCart = document.querySelector('.close-cart');
    const overlay = document.querySelector('.overlay');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const cartTotal = document.querySelector('.cart-total h3 span');

    // Add click handlers for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            serviceCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });

    // Add click handlers for view details buttons
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceOption = button.closest('.service-option');
            const details = serviceOption.querySelector('ul');
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Cart functionality
    function toggleCart() {
        cartSidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    function updateCart() {
        cartCount.textContent = cart.items.length;
        cartTotal.textContent = `₹${cart.total}`;
        
        // Update cart items display
        cartItemsContainer.innerHTML = cart.items.map(item => `
            <div class="cart-item">
                <div>
                    <h4>${item.name}</h4>
                    <p>₹${item.price}</p>
                </div>
                <button class="remove-item" data-id="${item.id}">×</button>
            </div>
        `).join('');

        // Add remove item handlers
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', () => removeFromCart(button.dataset.id));
        });
    }

    function addToCart(serviceOption) {
        const id = serviceOption.dataset.id;
        const price = parseInt(serviceOption.dataset.price);
        const name = serviceOption.querySelector('h3').textContent;

        // Check if item already exists in cart
        if (!cart.items.find(item => item.id === id)) {
            cart.items.push({ id, name, price });
            cart.total += price;
            updateCart();

            // Show success animation on button
            const addBtn = serviceOption.querySelector('.add-btn');
            addBtn.textContent = 'Added to Cart';
            addBtn.style.backgroundColor = 'var(--success)';
            
            setTimeout(() => {
                addBtn.textContent = 'Add to Cart';
                addBtn.style.backgroundColor = 'var(--primary-color)';
            }, 2000);
        }
    }

    function removeFromCart(id) {
        const itemIndex = cart.items.findIndex(item => item.id === id);
        if (itemIndex > -1) {
            cart.total -= cart.items[itemIndex].price;
            cart.items.splice(itemIndex, 1);
            updateCart();

            // Reset the add button for this service
            const serviceOption = document.querySelector(`[data-id="${id}"]`);
            const addBtn = serviceOption.querySelector('.add-btn');
            addBtn.textContent = 'Add to Cart';
            addBtn.style.backgroundColor = 'var(--primary-color)';
        }
    }

    // Event Listeners
    cartIcon.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    overlay.addEventListener('click', toggleCart);

    // Add to cart buttons
    const addButtons = document.querySelectorAll('.add-btn');
    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceOption = button.closest('.service-option');
            addToCart(serviceOption);
        });
    });

    // Checkout button
    document.querySelector('.checkout-btn').addEventListener('click', () => {
        if (cart.items.length > 0) {
            alert('Thank you for your order! Total: ₹' + cart.total);
            cart.items = [];
            cart.total = 0;
            updateCart();
            toggleCart();
        }
    });

    // Initialize cart display
    updateCart();
});