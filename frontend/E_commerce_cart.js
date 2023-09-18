const laptops = [
    {
        id: 1,
        model: "Standard",
        basePrice: 500,
        RAM: [
            { size: "8GB", price: 50 },
            { size: "16GB", price: 100 }
        ],
        storage: [
            { type: "SSD", size: "256GB", price: 100 },
            { type: "SSD", size: "512GB", price: 150 }
        ]
    },
    {
        id: 2,
        model: "Pro",
        basePrice: 1000,
        RAM: [
            { size: "16GB", price: 100 },
            { size: "32GB", price: 150 }
        ],
        storage: [
            { type: "SSD", size: "512GB", price: 150 },
            { type: "SSD", size: "1024GB", price: 200 }
        ]
    }
];

const cart = [];

function addToCart(laptop_id, ram_size, storage_size) {
    const selected_laptop = laptops.find((item) => item.id === laptop_id);

    if (!selected_laptop){
        console.log("Invalid laptop id!");
    }

    const selected_ram = selected_laptop.RAM.find((ram) => ram.size === ram_size);
    const selected_storage = selected_laptop.storage.find((size) => size.size === storage_size);

    if (!selected_ram || !selected_storage){
        console.log("Invalid RAM or Storage");
    }

    cart.push({'id' : laptop_id,
                'ram' : selected_ram,
                'storage' : selected_storage});

    console.log("added to cart!");
    console.log(cart);
}

function removeFromCart(index) {

    if(index >= 0 || index < cart.length) {
        cart.splice(index, 1);

        console.log("removed from cart");
        console.log(cart);
    } else {
        console.log("invalid index!")
    }
}

function calculateTotal() {
    let total = 0;

    for(const item of cart){
        const laptop = laptops.find((l) => l.id === item.id);

        total += laptop.basePrice + laptop.RAM.price + laptop.storage.price
    }
    console.log("total price: ", total);
}

while (true) {
    console.log("1. Add to Cart");
    console.log("2. Remove from Cart");
    console.log("3. Calculate Total");
    console.log("4. Exit");

    const choice = parseInt(prompt("enter choice: "));

    switch (choice) {

        case 1:
            const laptop_ID = parseInt(prompt("enter laptop id: "));
            const ramsize = prompt("Enter ram size: ");
            const storageSize = prompt("Enter storage size: ");
            addToCart(laptop_ID, ramsize, storageSize);
            break;
    
        case 2:
            const i = parseInt(prompt("index to remove: "));
            removeFromCart(i);
            break;
        
        case 3:
            calculateTotal();
            break;

        case 4:
            console.log("exited")
            return;

        default:
            console.log("invalid option.")
    }
}