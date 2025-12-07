
const products = [
    {
        name: "Gaming Headset",
        category: "electronics",
        price: 89.99,
        image: "https://m.media-amazon.com/images/I/71M5cpVnftL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        name: "Wireless Mouse",
        category: "electronics",
        price: 19.99,
        image: "https://m.media-amazon.com/images/I/61AAkYzVw8L._AC_SX679_.jpg"
    },
    {
        name: "Leather Wallet",
        category: "accessories",
        price: 25.00,
        image: "https://m.media-amazon.com/images/I/81LhVnqKweL._AC_SX679_.jpg"
    },
    {
        name: "Running Shoes",
        category: "shoes",
        price: 79.99,
        image: "https://m.media-amazon.com/images/I/71KQ5FJjJ6L._AC_SY500_.jpg"
    },
    {
        name: "Men's Jacket",
        category: "clothing",
        price: 129.50,
        image: "https://m.media-amazon.com/images/I/61f8FZ2eWoL._AC_SY879_.jpg"
    },
    {
        name: "Backpack",
        category: "bags",
        price: 52.99,
        image: "https://m.media-amazon.com/images/I/71F0iO5vLWL._AC_SY879_.jpg"
    }
];

const categorySelect = document.getElementById("category");
const productList = document.getElementById("productList");

// Load categories
function loadCategories() {
    const categories = ["All", ...new Set(products.map(p => p.category))];
    categories.forEach(cat => {
        const option = document.createElement("option");
        option.value = cat.toLowerCase();
        option.textContent = cat;
        categorySelect.appendChild(option);
    });
}

function displayProducts(list) {
    productList.innerHTML = "";
    list.forEach(p => {
        productList.innerHTML += `
        <div class="product-card">
            <img src="${p.image}">
            <h3>${p.name}</h3>
            <p>${p.category.toUpperCase()}</p>
            <p class="price">$${p.price}</p>
        </div>`;
    });
}

document.getElementById("applyBtn").addEventListener("click", () => {
    let filtered = [...products];

    const selectedCat = categorySelect.value;
    const min = parseFloat(document.getElementById("minPrice").value);
    const max = parseFloat(document.getElementById("maxPrice").value);

    if (selectedCat !== "all") {
        filtered = filtered.filter(p => p.category === selectedCat);
    }

    filtered = filtered.filter(p => p.price >= min && p.price <= max);

    const sortType = document.getElementById("sort").value;

    if (sortType === "low-high") filtered.sort((a,b)=>a.price-b.price);
    if (sortType === "high-low") filtered.sort((a,b)=>b.price-a.price);

    displayProducts(filtered);
});

document.getElementById("resetBtn").addEventListener("click", () => {
    displayProducts(products);
});

// DARK MODE
document.getElementById("darkToggle").addEventListener("change", () => {
    document.body.classList.toggle("dark");
});

loadCategories();
displayProducts(products);
