const products = [
    {
        id: 1,
        title: "ZAKI.STUFF Thanksinsomnia fited tee",
        category: "Atasan",
        price: 189000,
        rating: 4.9,
        image: "img/mukamad.jpg",
        description: "Kaos oversized bergaya streetwear modern dengan bahan Heavy Cotton 24s premium. Tebal, nyaman, dingin di kulit, dan tidak gampang melar saat dicuci.",
        material: "100% Cotton Combed 24s",
        fit: "Oversized Fit",
        care: "Cuci dengan air dingin, hindari pemutih."
    },
    {
        id: 2,
        title: "ZAKI.STUFF Casual Jacket",
        category: "Jaket & Outer",
        price: 399000,
        rating: 4.8,
        image: "img/4.jpg",
        description: "Jaket denim washed bergaya klasik timeless. Cocok dipadukan dengan kaos polos untuk tampilan santai dan keren sepanjang hari.",
        material: "Denim Raw 13.5 oz",
        fit: "Regular Fit",
        care: "Jangan terlalu sering dicuci, jemur di tempat teduh."
    },
    {
        id: 3,
        title: "ZAKI.STUFF Linen Summer Dress",
        category: "Gaun & Dress",
        price: 279000,
        rating: 4.7,
        image: "img/7.jpg",
        description: "Dress bahan linen alami yang breathable dan adem. Sangat nyaman digunakan untuk prewiding.",
        material: "Linen Blend Premium",
        fit: "A-Line Relaxed Fit",
        care: "Setrika dengan suhu sedang."
    },
    {
        id: 4,
        title: "ZAKI.STUFF Short Pants BBC ICE CREAM",
        category: "Bawahan",
        price: 259000,
        rating: 4.9,
        image: "img/9.jpg",
        description: "Celana chino slim-fit fleksibel untuk acara formal maupun kasual. Menggunakan kain katun stretch yang memudahkan pergerakan tubuh.",
        material: "Cotton Twill Stretch",
        fit: "Slim Fit",
        care: "Cuci terbalik dengan warna sejenis."
    },
    {
        id: 5,
        title: "ZAKI.STUFF Thanksinsomnia rockwall",
        category: "Atasan",
        price: 229000,
        rating: 4.6,
        image: "img/2.jpg",
        description: "Kemeja flanel lengan panjang motif kotak-kotak eksklusif. Tekstur bahan lembut di kulit dan memberikan kehangatan ekstra saat cuaca dingin.",
        material: "Cotton Wool Flannel",
        fit: "Regular Fit",
        care: "Gunakan deterjen lembut."
    },
    {
        id: 6,
        title: "ZAKI.STUFF Minimalist Gropcore",
        category: "Jaket & Outer",
        price: 349000,
        rating: 4.9,
        image: "img/6.jpg",
        description: "Hoodie polos warna navy dari kain Fleece Cotton halus. Sempurna untuk digunakan sehari-hari dalam segala kondisi cuaca.",
        material: "Cotton Fleece Heavyweight",
        fit: "Relaxed Fit",
        care: "Jangan disikat pada bagian luar."
    },
    {
        id: 7,
        title: "ZAKI.STUFF BBC ICE CREAM Pleated Skirt",
        category: "Bawahan",
        price: 219000,
        rating: 4.8,
        image: "img/8.jpg",
        description: "Rok plisket midi feminin dengan lipatan rapi yang awet. Pinggang full karet yang elastis dan nyaman digunakan sepanjang hari.",
        material: "Polyester Premium Crepe",
        fit: "High Waist Fit",
        care: "Jangan disetrika dengan suhu terlalu panas."
    },
    {
        id: 8,
        title: "ZAKI.STUFF Floral Printed Blouse",
        category: "Atasan",
        price: 199000,
        rating: 4.7,
        image: "img/3.jpg",
        description: "Blouse wanita bermotif bunga kasual yang elegan. Menggunakan katun rayon yang jatuh dan dingin di kulit, cocok untuk outfit sehari-hari.",
        material: "Rayon Viscose",
        fit: "Regular Fit",
        care: "Disarankan cuci dengan tangan."
    },
    {
        id: 9,
        title: "ZAKI.STUFF Classic Bomber Jacket",
        category: "Jaket & Outer",
        price: 389000,
        rating: 4.9,
        image: "img/5.jpg",
        description: "Jaket bomber berdesain militer modern dengan lapisan dalam anti angin. Dilengkapi dengan saku fungsional di dada dan lengan.",
        material: "Waterproof Polyester Canvas",
        fit: "Regular Fit",
        care: "Lap dengan kain basah jika ada noda."
    }
];

let cart = [];
let currentCategory = 'All';
let selectedProduct = null;

// RENDER KATALOG PRODUK
function renderProducts(items) {
    const grid = document.getElementById('productGrid');
    const noResults = document.getElementById('noResults');
    if (!grid) return;
    grid.innerHTML = '';

    if (items.length === 0) {
        if (noResults) noResults.classList.remove('hidden');
        return;
    } else {
        if (noResults) noResults.classList.add('hidden');
    }

    items.forEach(product => {
        const card = document.createElement('div');
        card.className = "product-card bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl flex flex-col justify-between";
        card.innerHTML = `
            <div>
                <div class="relative overflow-hidden bg-gray-100 group">
                    <img src="${product.image}" alt="${product.title}" class="w-full h-64 object-cover object-center group-hover:scale-105 transition duration-500">
                    <span class="absolute top-3 left-3 bg-white/90 backdrop-blur text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm">${product.category}</span>
                </div>
                <div class="p-5">
                    <div class="flex items-center space-x-1 text-amber-400 text-xs mb-1">
                        <i class="fa-solid fa-star"></i>
                        <span class="font-bold text-gray-700">${product.rating}</span>
                    </div>
                    <h3 class="font-bold text-gray-900 text-base mb-1 line-clamp-1">${product.title}</h3>
                    <p class="text-xs text-gray-500 line-clamp-2 mb-4">${product.description}</p>
                </div>
            </div>

            <div class="px-5 pb-5 pt-0 flex items-center justify-between border-t border-gray-50 mt-auto">
                <div class="pt-3">
                    <span class="text-[10px] text-gray-400 block font-bold uppercase">Harga</span>
                    <span class="text-base font-black text-black">Rp ${product.price.toLocaleString('id-ID')}</span>
                </div>
                <button onclick="openModal(${product.id})" class="mt-3 bg-black text-white hover:bg-gray-800 text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center space-x-1.5 shadow-md">
                    <span>Lihat Detail</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// FILTER KATEGORI
function filterCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.innerText.includes(cat) || (cat === 'All' && btn.innerText.includes('Semua'))) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    filterAndSearch();
}

// FILTER & SEARCH LOGIC
function filterAndSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchInputMobile = document.getElementById('searchInputMobile');
    const query = ((searchInput ? searchInput.value : '') || (searchInputMobile ? searchInputMobile.value : '')).toLowerCase();
    
    const filtered = products.filter(p => {
        const matchesCategory = currentCategory === 'All' || p.category === currentCategory;
        const matchesSearch = p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

    renderProducts(filtered);
}

// EVENT SEARCH
const searchInputEl = document.getElementById('searchInput');
const searchInputMobileEl = document.getElementById('searchInputMobile');

if (searchInputEl) {
    searchInputEl.addEventListener('input', (e) => {
        if (searchInputMobileEl) searchInputMobileEl.value = e.target.value;
        filterAndSearch();
    });
}
if (searchInputMobileEl) {
    searchInputMobileEl.addEventListener('input', (e) => {
        if (searchInputEl) searchInputEl.value = e.target.value;
        filterAndSearch();
    });
}

// OPEN MODAL DETAIL PRODUK
function openModal(id) {
    selectedProduct = products.find(p => p.id === id);
    if (!selectedProduct) return;

    document.getElementById('modalImage').src = selectedProduct.image;
    document.getElementById('modalCategory').innerText = selectedProduct.category;
    document.getElementById('modalRating').innerText = selectedProduct.rating;
    document.getElementById('modalTitle').innerText = selectedProduct.title;
    document.getElementById('modalPrice').innerText = `Rp ${selectedProduct.price.toLocaleString('id-ID')}`;
    document.getElementById('modalDescription').innerText = selectedProduct.description;
    document.getElementById('modalMaterial').innerText = selectedProduct.material;
    document.getElementById('modalFit').innerText = selectedProduct.fit;
    document.getElementById('modalCare').innerText = selectedProduct.care;

    const modal = document.getElementById('detailModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
    document.body.style.overflow = 'hidden';
}

// CLOSE MODAL DETAIL
function closeModal() {
    const modal = document.getElementById('detailModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
    document.body.style.overflow = 'auto';
}

// PILIH UKURAN
function selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(b => {
        b.className = "size-btn px-3 py-1.5 border border-gray-300 rounded text-xs font-bold hover:border-black";
    });
    btn.className = "size-btn px-3 py-1.5 border border-black bg-black text-white rounded text-xs font-bold";
}

// TAMBAH KE KERANJANG
function addToCart() {
    if (!selectedProduct) return;
    cart.push(selectedProduct);
    updateCart();
    closeModal();
    toggleCartModal();
}

// UPDATE KERANJANG
function updateCart() {
    const badge = document.getElementById('cartBadge');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (badge) badge.innerText = cart.length;
    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-center text-gray-400 py-8 text-sm">Keranjang belanja Anda masih kosong.</p>';
        cartTotal.innerText = 'Rp 0';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const div = document.createElement('div');
        div.className = "flex items-center justify-between border-b pb-3";
        div.innerHTML = `
            <div class="flex items-center space-x-3">
                <img src="${item.image}" class="w-12 h-12 rounded object-cover">
                <div>
                    <h4 class="font-bold text-xs line-clamp-1">${item.title}</h4>
                    <p class="text-xs text-gray-500">Rp ${item.price.toLocaleString('id-ID')}</p>
                </div>
            </div>
            <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-700 text-xs">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(div);
    });

    cartTotal.innerText = `Rp ${total.toLocaleString('id-ID')}`;
}

// HAPUS DARI KERANJANG
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// TOGGLE MODAL KERANJANG
function toggleCartModal() {
    const modal = document.getElementById('cartModal');
    if (!modal) return;
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    } else {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

// RENDER UTAMA SAAT SCRIPT DIMUAT
renderProducts(products);