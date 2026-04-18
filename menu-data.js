const menuData = [
    {
        id: "real-regular",
        title: "Real & Regular",
        num: "01.",
        items: [
            { id: "rr1", name: "Bread Butter", desc: "Premium Bread, Butter", price: 50 },
            { id: "rr2", name: "Masala Sandwich", desc: "Fresh Potato Masala, Green Chutney, Butter", price: 50 },
            { id: "rr3", name: "Bread Butter Jam", desc: "Premium Bread, Butter, Fruit Jam", price: 60 },
            { id: "rr4", name: "Butter Masala Sandwich", desc: "Fresh Potato Masala, Green Chutney, Butter", price: 60 },
            { id: "rr5", name: "Bombay Street Sandwich", desc: "Cucumber, Potato Masala, Onion, Tomato, Capsicum, Beetroot, Chaat Masala, Green Chutney", price: 70 },
            { id: "rr6", name: "Vegetable Sandwich", desc: "Cucumber, Potato, Tomato, Onion, Beetroot, Chaat Masala, Green Chutney", price: 70 },
            { id: "rr7", name: "Cheese Jam Butter", desc: "Premium Bread, Cheese, Butter, Jam, Chaat Masala", price: 80 },
            { id: "rr8", name: "Dana Sandwich", desc: "Masala Dana, Butter, Green Chutney", price: 80 },
            { id: "rr9", name: "Ghughra Sandwich", desc: "Ghughra Filling, Butter, Green Chutney", price: 80 },
            { id: "rr10", name: "Vegetable Grill Sandwich", desc: "Cucumber, Potato, Tomato, Onion, Beetroot, Chaat Masala, Green Chutney, Butter", price: 90 }
        ]
    },
    {
        id: "cheese-special",
        title: "Cheese Special",
        num: "02.",
        items: [
            { id: "cs1", name: "Cheese Chilli Sandwich", desc: "Cheese, Onion, Capsicum (3 Types), Chat Masala, Butter", price: 80 },
            { id: "cs2", name: "Cheese Chutney Aloo Sandwich", desc: "Cheese, Green Chutney, Potato, Butter, Grilled", price: 80 },
            { id: "cs3", name: "Cheese Corn Sandwich", desc: "Capsicum (3 Types), Oregano, Chilli, Pizza Sauce, Pasta Sauce, Cheese, Butter, Grilled", price: 80 },
            { id: "cs4", name: "Cheese Tandoori Sandwich", desc: "Cheese, Capsicum (3 Types), Onion, Paneer, Chat Masala, Tandoori Sauce, Special Mix Masala", price: 100 },
            { id: "cs5", name: "Cheese Mexican Sandwich", desc: "Paneer, Corn, Basil, Rajma, Capsicum (3 Types), Mix Gravy, Cheese, Butter, Special Mix Masala", price: 100 },
            { id: "cs6", name: "Cheese Burst Sandwich", desc: "Corn, Paneer, Capsicum (3 Types), Oregano, Chilli Flakes, Tomato Sauce, Pizza/Pasta Sauce, Cheese, Butter", price: 100 }
        ]
    },
    {
        id: "club-sandwich",
        title: "Club Sandwich",
        num: "03.",
        items: [
            { id: "cb1", name: "Vegetable Club Sandwich", desc: "Cucumber, Tomato, Onion, Capsicum, Beetroot, Potato, Chaat Masala, Mayonnaise, Green Chutney", price: 160 },
            { id: "cb2", name: "Vegetable With Chilli Club Sandwich", desc: "Cucumber, Tomato, Onion, Capsicum, Potato, Mayonnaise, Chilli Butter, Chutney, Cheese", price: 160 },
            { id: "cb3", name: "Mexican Club Sandwich", desc: "Corn, Paneer, Beans, Rajma, Capsicum (3 Types), Lettuce, Mix Gravy, Cheese, Special Mix Masala", price: 160 },
            { id: "cb4", name: "Masala With Dana Club Sandwich", desc: "Masala Dana, Butter, Special Chutney", price: 160 },
            { id: "cb5", name: "Junglee Club Sandwich", desc: "Cucumber, Tomato, Onion, Capsicum, Beetroot, Lettuce, Special Masala, Mayonnaise, Cream, Cheese, Mix Gravy, Special Sauce", price: 160 },
            { id: "cb6", name: "Tandoori Paneer Club Sandwich", desc: "Paneer, Tandoori Sauce, Capsicum (3 Types), Cheese, Mix Masala", price: 160 }
        ]
    },
    {
        id: "dessert",
        title: "Dessert Sandwich",
        num: "04.",
        items: [
            { id: "ds1", name: "Jam Sandwich", desc: "Bread, Butter, Fruit Jam", price: 50 },
            { id: "ds2", name: "Pineapple Jam Sandwich", desc: "Bread, Butter, Pineapple Jam", price: 60 },
            { id: "ds3", name: "Nutella Slice Sandwich", desc: "Bread, Nutella Sauce", price: 60 },
            { id: "ds4", name: "Cheese Pineapple Sandwich", desc: "Bread, Pineapple, Jam, Butter, Cheese", price: 80 },
            { id: "ds5", name: "Ice Cream Sandwich", desc: "Bread, Ice Cream (Vanilla/Chocolate), Butter", price: 100 },
            { id: "ds6", name: "Nutella Sandwich", desc: "Bread, Nutella, Butter", price: 120 },
            { id: "ds7", name: "Cheese Nutella Sandwich", desc: "Bread, Nutella, Butter, Cheese", price: 120 }
        ]
    },
    {
        id: "signature",
        title: "Signature Special",
        num: "05.",
        items: [
            { id: "ss1", name: "Paneer Kulcha Sandwich", desc: "Live Fresh Kulcha, Amul Cheese, Mix Masala", price: 180 },
            { id: "ss2", name: "Pizza Sandwich", desc: "Paneer, Corn, Capsicum (3 Types), Cheese, Olives, Oregano, Chilli Flakes, Pizza Sauce, Special Mix Masala", price: 180 },
            { id: "ss3", name: "Sev Puri Sandwich", desc: "Live Fresh Puri, Special Stuffing", price: 180 },
            { id: "ss4", name: "Italian Sandwich", desc: "Pasta, Capsicum (3 Types), Onion, Oregano, Chilli Flakes, Hot Pepper Sauce, Red Sauce, Pizza/Pasta Sauce, Cheese", price: 180 }
        ]
    },
    {
        id: "pasta",
        title: "Pasta",
        num: "06.",
        items: [
            { id: "ps1", name: "White Sauce Pasta", desc: "Pasta, Butter, Flour, Milk, Garlic, Veggies, Pepper, Oregano, Chilli Flakes, Salt, Cheese", price: 130 },
            { id: "ps2", name: "Arrabbiata Pasta", desc: "Pasta, Olive Oil, Garlic, Tomato Sauce, Red Chilli Flakes, Salt, Black Pepper, Oregano, Basil", price: 160 },
            { id: "ps3", name: "Mexican Pasta", desc: "Pasta, Olive Oil, Garlic, Onion, Tomato, Bell Peppers, Sweet Corn, Beans, Mexican Seasoning, Chilli Flakes, Salt, Cheese", price: 160 }
        ]
    },
    {
        id: "sides",
        title: "Sides & Fries",
        num: "07.",
        items: [
            { id: "sd1", name: "Cheese Garlic Bread", desc: "Bread, Butter, Cheese", price: 120 },
            { id: "sd2", name: "Supreme Garlic Bread", desc: "Bread, Butter, Veggies, Cheese, Spices", price: 150 },
            { id: "sd3", name: "Cheese Bruschetta Garlic Bread", desc: "Bread, Tomato, Herbs, Butter, Cheese", price: 150 },
            { id: "sd4", name: "Regular French Fries", desc: "Potato, Salt, Seasoning", price: 70 },
            { id: "sd5", name: "Cheese-Loaded French Fries", desc: "Potato, Cheese, Butter, Seasoning", price: 100 },
            { id: "sd6", name: "Peri-Peri French Fries", desc: "Potato, Peri Peri Masala", price: 100 },
            { id: "sd7", name: "Mexican French Fries", desc: "Paneer, Tandoori Sauce, Capsicum, Cheese, Spices", price: 140 }
        ]
    },
    {
        id: "chaat",
        title: "Packet Chaat",
        num: "08.",
        items: [
            { id: "ch1", name: "Wafer Chaat (Balaji / Lays)", desc: "Tomato, onion, capsicum, corn, jalapeños, olives, black & red pepper, fresh sauces", price: 70 },
            { id: "ch2", name: "Wafer Chaat With Cheese", desc: "Wafer Chaat with extra Cheese", price: 90 },
            { id: "ch3", name: "Shing Bhujiya Chaat", desc: "Tomato, onion, capsicum, corn, jalapeños, olives, black & red pepper, fresh sauces", price: 70 },
            { id: "ch4", name: "Shing Bhujiya Chaat With Cheese", desc: "Shing Bhujiya with extra Cheese", price: 90 },
            { id: "ch5", name: "Kurkure Chaat", desc: "Tomato, onion, capsicum, corn, jalapeños, olives, black & red pepper, fresh sauces", price: 70 },
            { id: "ch6", name: "Kurkure Chaat With Cheese", desc: "Kurkure Chaat with extra Cheese", price: 90 },
             { id: "chn1", name: "Nachos Chaat", desc: "Tomato, onion, capsicum, corn, jalapeños, olives, black & red pepper, fresh sauces", price: 70 },
             { id: "chn2", name: "Nachos Chaat With Cheese", desc: "Nachos Chaat with extra Cheese", price: 90 },
            { id: "ch7", name: "Family Pack Wafer Chaat", desc: "Large portion: Tomato, onion, capsicum, corn, jalapeños, olives...", price: 130 },
             { id: "ch8", name: "Family Pack Wafer Chaat With Cheese", desc: "Large portion with extra Cheese", price: 160 },
             { id: "ch9", name: "Family Pack Shing Bhujiya Chaat", desc: "Large portion", price: 130 },
             { id: "ch10", name: "Family Pack Shing Bhujiya Chaat With Cheese", desc: "Large portion with extra Cheese", price: 160 },
             { id: "ch11", name: "Family Pack Kurkure Chaat", desc: "Large portion", price: 140 },
             { id: "ch12", name: "Family Pack Kurkure Chaat With Cheese", desc: "Large portion with extra Cheese", price: 160 },
             { id: "ch13", name: "Family Pack Doritos & Cornitos", desc: "Large portion", price: 140 },
             { id: "ch14", name: "Family Pack Doritos & Cornitos With Cheese", desc: "Large portion with extra Cheese", price: 160 }
        ]
    }
];

let cart = {};

function initMenu() {
    const container = document.getElementById('dynamic-menu-container');
    let html = '';

    menuData.forEach(section => {
        html += `<div id="${section.id}" class="menu-section">
            <div class="section-header">
                <span class="sec-num">${section.num}</span>
                <h2 class="section-title">${section.title}</h2>
            </div>`;
        
        section.items.forEach(item => {
            html += `
            <div class="menu-item-card">
                <div class="item-info">
                    <div class="veg-icon"></div>
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">₹${item.price}</div>
                    <div class="item-desc">${item.desc}</div>
                </div>
                <div class="item-action">
                    <div class="add-btn" id="add-btn-${item.id}" onclick="addToCart('${item.id}', '${item.name}', ${item.price}, event)">ADD</div>
                    <div class="qty-control" id="qty-ctrl-${item.id}">
                        <button class="qty-btn" onclick="updateQty('${item.id}', -1, event)">-</button>
                        <span class="qty-display" id="qty-val-${item.id}">0</span>
                        <button class="qty-btn" onclick="updateQty('${item.id}', 1, event)">+</button>
                    </div>
                </div>
            </div>`;
        });
        
        html += `</div>`;
    });

    container.innerHTML = html;

    // We also need to re-attach scroll spy since we injected sections
    window.sections = document.querySelectorAll('.menu-section');
}

function addToCart(id, name, price, e) {
    if (e) e.stopPropagation();
    cart[id] = { name, price, qty: 1 };
    updateCartUI(id);
}

function updateQty(id, change, e) {
    if (e) e.stopPropagation();
    if (!cart[id]) return;
    
    cart[id].qty += change;
    if (cart[id].qty <= 0) {
        delete cart[id];
    }
    updateCartUI(id);
}

function updateCartUI(itemUpdatedId = null) {
    if (itemUpdatedId) {
        const addBtn = document.getElementById(`add-btn-${itemUpdatedId}`);
        const qtyCtrl = document.getElementById(`qty-ctrl-${itemUpdatedId}`);
        const qtyVal = document.getElementById(`qty-val-${itemUpdatedId}`);
        
        if (cart[itemUpdatedId]) {
            addBtn.style.display = 'none';
            qtyCtrl.style.display = 'flex';
            qtyVal.innerText = cart[itemUpdatedId].qty;
        } else {
            addBtn.style.display = 'block';
            qtyCtrl.style.display = 'none';
            if (qtyVal) qtyVal.innerText = '0';
        }
    } else {
        // Full UI update if needed
    }

    let totalQty = 0;
    let totalPrice = 0;
    for (const key in cart) {
        totalQty += cart[key].qty;
        totalPrice += cart[key].price * cart[key].qty;
    }

    const banner = document.getElementById('cart-banner');
    if (totalQty > 0) {
        banner.classList.add('visible');
        document.getElementById('cart-items-count').innerText = `${totalQty} ITEM${totalQty > 1 ? 'S' : ''}`;
        document.getElementById('cart-total-price').innerText = `₹${totalPrice}`;
    } else {
        banner.classList.remove('visible');
        closeCartModal();
    }
}

function openCartModal() {
    const modal = document.getElementById('cart-modal');
    const overlay = document.getElementById('cart-modal-overlay');
    const list = document.getElementById('cart-items-list');
    
    let html = '';
    let totalPrice = 0;
    
    for (const key in cart) {
        const item = cart[key];
        totalPrice += item.price * item.qty;
        html += `
        <div class="cart-item-row">
            <div class="cart-item-name"><div class="veg-icon"></div> ${item.name}</div>
            <div class="cart-item-controls">
                <div class="qty-control" style="display:flex;">
                    <button class="qty-btn" onclick="updateQty('${key}', -1, event); openCartModal();">-</button>
                    <span class="qty-display">${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty('${key}', 1, event); openCartModal();">+</button>
                </div>
                <div class="cart-item-price">₹${item.price * item.qty}</div>
            </div>
        </div>`;
    }
    
    list.innerHTML = html;
    document.getElementById('bill-total').innerText = `₹${totalPrice}`;
    
    modal.classList.add('open');
    overlay.classList.add('open');
}

function closeCartModal() {
    document.getElementById('cart-modal').classList.remove('open');
    document.getElementById('cart-modal-overlay').classList.remove('open');
}

function sendWhatsAppOrder() {
    const customerName = document.getElementById('customer-name').value.trim();
    const isJain = document.getElementById('jain-toggle').checked;

    if (!customerName) {
        alert("Please enter your name before placing the order.");
        document.getElementById('customer-name').focus();
        return;
    }

    // Trigger Success UI & Confetti
    closeCartModal();
    const successModal = document.getElementById('success-modal');
    successModal.classList.add('active');

    // Fire Confetti!
    var duration = 2000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#D4AF37', '#FFFFFF', '#25D366']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#D4AF37', '#FFFFFF', '#25D366']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());

    let orderText = `Hello Twin Sheets!%0AThis is *${customerName}*. I would like to place an order from your digital menu:%0A%0A`;
    let totalPrice = 0;
    
    for (const key in cart) {
        const item = cart[key];
        const itemTotal = item.price * item.qty;
        totalPrice += itemTotal;
        orderText += `• ${item.qty} x ${item.name} - ₹${itemTotal}%0A`;
    }
    
    orderText += `%0A*Total Bill: ₹${totalPrice}*%0A`;
    
    if (isJain) {
        orderText += `%0A⚠️ *Preferences:* Make all applicable items Jain (No Onion, No Garlic).%0A`;
    }

    orderText += `%0APlease let me know the estimated preparation time. Thank you!`;
    
    const phone = "919727019097";
    const url = `https://wa.me/${phone}?text=${orderText}`;

    // Wait 2 seconds for confetti, then open WhatsApp and clear cart
    setTimeout(() => {
        window.open(url, '_blank');
        successModal.classList.remove('active');
        // Clear cart after redirect
        cart = {};
        updateCartUI();
    }, 2000);
}

// === PWA AND SERVICE WORKER LOGIC ===
let deferredPrompt;

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(err => console.log('SW registration failed: ', err));
    });
}

// Intercept Install Prompt
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    deferredPrompt = e;
    
    // Show our custom UI
    setTimeout(() => {
        document.getElementById('pwa-prompt').classList.add('show');
    }, 3000); // Show 3 seconds after load
});

// Install Button Logic
document.addEventListener('DOMContentLoaded', () => {
    const installBtn = document.getElementById('btn-install');
    const closePwaBtn = document.getElementById('btn-close-pwa');
    const pwaPrompt = document.getElementById('pwa-prompt');

    if (installBtn && pwaPrompt) {
        installBtn.addEventListener('click', async () => {
            pwaPrompt.classList.remove('show');
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                console.log(`User response to the install prompt: ${outcome}`);
                deferredPrompt = null;
            }
        });

        closePwaBtn.addEventListener('click', () => {
            pwaPrompt.classList.remove('show');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    initMenu();
});
