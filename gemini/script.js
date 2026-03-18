// BANCO DE DATOS EXTRAÍDO DA PLANILHA
const produtosDB = [
    // IPHONES (Linha Base)
    { id: 1, cat: 'IPHONE', nome: "iPhone 14 128GB Blue", preco: 570, img: "https://cdn.awsli.com.br/600x450/1919/1919257/produto/216462450/001-pr3jy6lvcz.jpg" },
    { id: 2, cat: 'IPHONE', nome: "iPhone 15 128GB Black", preco: 625, img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400" },
    { id: 3, cat: 'IPHONE', nome: "iPhone 15 128GB Blue", preco: 625, img: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400" },
    { id: 4, cat: 'IPHONE', nome: "iPhone 15 128GB Pink", preco: 625, img: "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?w=400" },
    { id: 5, cat: 'IPHONE', nome: "iPhone 16 128GB Teal", preco: 745, img: "https://images.unsplash.com/photo-1726742511082-99056627cc7d?w=400" },
    { id: 6, cat: 'IPHONE', nome: "iPhone 16 128GB Green", preco: 745, img: "https://images.unsplash.com/photo-1603920156434-297299a9a9ec?w=400" },
    { id: 7, cat: 'IPHONE', nome: "iPhone 16 128GB Black", preco: 760, img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=400" },
    { id: 8, cat: 'IPHONE', nome: "iPhone 16 128GB Pink", preco: 760, img: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=400" },
    { id: 9, cat: 'IPHONE', nome: "iPhone 16 256GB Green", preco: 820, img: "https://images.unsplash.com/photo-1603920156434-297299a9a9ec?w=400" },
    { id: 10, cat: 'IPHONE', nome: "iPhone 16E 128GB White", preco: 565, img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400" },
    { id: 11, cat: 'IPHONE', nome: "iPhone 17 256GB Blue", preco: 908, img: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400" },
    { id: 12, cat: 'IPHONE', nome: "iPhone 17 256GB Black (LL)", preco: 908, img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=400" },
    { id: 13, cat: 'IPHONE', nome: "iPhone Air 256GB Blue", preco: 925, img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400" },

    // IPHONE PRO / MAX
    { id: 14, cat: 'IPHONE', nome: "iPhone 16 Pro 128GB Natural", preco: 958, img: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=400" },
    { id: 15, cat: 'IPHONE', nome: "iPhone 17 Pro 256GB Orange", preco: 1308, img: "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?w=400" },
    { id: 16, cat: 'IPHONE', nome: "iPhone 17 Pro Max 256GB Silver", preco: 1470, img: "https://images.unsplash.com/photo-1603920156434-297299a9a9ec?w=400" },
    { id: 17, cat: 'IPHONE', nome: "iPhone 17 Pro Max 512GB Orange", preco: 1620, img: "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?w=400" },
    { id: 18, cat: 'IPHONE', nome: "iPhone 17 Pro Max 1TB Orange", preco: 1850, img: "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?w=400" },

    // WATCHES
    { id: 19, cat: 'WATCH', nome: "Apple Watch SE 2 44mm Starlight", preco: 223, img: "https://images.unsplash.com/photo-1546868871-70ca4844567c?w=400" },
    { id: 20, cat: 'WATCH', nome: "Apple Watch SE 3 44mm Preto", preco: 275, img: "https://images.unsplash.com/photo-1546868871-70ca4844567c?w=400" },
    { id: 21, cat: 'WATCH', nome: "Apple Watch S11 42mm Preto", preco: 360, img: "https://images.unsplash.com/photo-1546868871-70ca4844567c?w=400" },
    { id: 22, cat: 'WATCH', nome: "Apple Watch S11 46mm Gray/Black", preco: 378, img: "https://images.unsplash.com/photo-1546868871-70ca4844567c?w=400" },
    { id: 23, cat: 'WATCH', nome: "Apple Watch Ultra 3 49mm Preto", preco: 800, img: "https://images.unsplash.com/photo-1434493907317-a46b53b81822?w=400" },

    // TABLETS / MACBOOKS
    { id: 24, cat: 'APPLE', nome: "Macbook M4 Air 13.6\" Azul", preco: 1010, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400" },
    { id: 25, cat: 'APPLE', nome: "iPad Pro 11 M5 256GB Preto", preco: 950, img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400" },
    { id: 26, cat: 'APPLE', nome: "iPad 11 128GB Silver", preco: 383, img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400" },
    { id: 27, cat: 'XIAOMI', nome: "Xiaomi Mi Pad 2 128/4", preco: 164, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },

    // XIAOMI / POCO
    { id: 28, cat: 'XIAOMI', nome: "Xiaomi Note 15 256/8 5G", preco: 238, img: "https://images.unsplash.com/photo-1605170439002-90f450c9978d?w=400" },
    { id: 29, cat: 'XIAOMI', nome: "Xiaomi Note 15 128/6", preco: 172, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },
    { id: 30, cat: 'XIAOMI', nome: "Xiaomi Note 15 Pro 512/8 5G", preco: 310, img: "https://images.unsplash.com/photo-1605170439002-90f450c9978d?w=400" },
    { id: 31, cat: 'POCO', nome: "Poco F7 Ultra 256/12", preco: 575, img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400" },
    { id: 32, cat: 'POCO', nome: "Poco X7 512/12", preco: 306, img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400" },
    { id: 33, cat: 'POCO', nome: "Poco M8 Pro 512/12 5G", preco: 358, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },

    // OUTRAS MARCAS
    { id: 34, cat: 'REALME', nome: "Realme Note 60X 64/3", preco: 88, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },
    { id: 35, cat: 'MOTOROLA', nome: "Motorola G 56 256/8 5G", preco: 183, img: "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?w=400" },
    { id: 36, cat: 'SAMSUNG', nome: "Samsung A26 256/8 5G", preco: 227, img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400" },
    { id: 37, cat: 'SAMSUNG', nome: "Samsung A36 256/8 5G", preco: 274, img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400" },
    { id: 38, cat: 'REDMI', nome: "Redmi 15 256/8", preco: 168, img: "https://images.unsplash.com/photo-1605170439002-90f450c9978d?w=400" }
];

let carrinho = [];

function navegar(aba) {
    const container = document.getElementById('render-content');
    if (aba === 'inicio') {
        container.innerHTML = `
            <section class="hero-search">
                <div class="container">
                    <h1>A tecnologia que você merece.</h1>
                    <div class="search-container">
                        <input type="text" id="input-busca" placeholder="Busque por iPhone, Xiaomi, Watch..." onkeyup="buscar()">
                        <button onclick="buscar()">Buscar</button>
                    </div>
                    <div class="tags-scroll">
                        <div class="tag active" onclick="filtrar('all', this)">Todos</div>
                        <div class="tag" onclick="filtrar('IPHONE', this)">iPhones</div>
                        <div class="tag" onclick="filtrar('XIAOMI', this)">Xiaomi & Poco</div>
                        <div class="tag" onclick="filtrar('WATCH', this)">Watches</div>
                        <div class="tag" onclick="filtrar('APPLE', this)">Mac & iPad</div>
                        <div class="tag" onclick="filtrar('SAMSUNG', this)">Samsung</div>
                        <div class="tag" onclick="filtrar('MOTOROLA', this)">Motorola</div>
                    </div>
                </div>
            </section>
            <div class="container"><div class="product-grid" id="main-grid">${renderCards(produtosDB)}</div></div>
        `;
    } else {
        container.innerHTML = `<div class="container" style="padding:40px 0"><h2>Catálogo Completo</h2><div class="product-grid">${renderCards(produtosDB)}</div></div>`;
    }
    lucide.createIcons();
}

function renderCards(lista) {
    return lista.map(p => `
        <div class="card">
            <div class="card-img-box"><img src="${p.img}" alt="${p.nome}"></div>
            <div class="card-info">
                <h4>${p.nome}</h4>
                <div class="price">$ ${p.preco}</div>
                <button class="btn-checkout" style="margin-top:10px; font-size:12px; background:var(--primary)" onclick="addCart(${p.id})">Adicionar</button>
            </div>
        </div>
    `).join('');
}

function filtrar(cat, el) {
    document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    const f = cat === 'all' ? produtosDB : produtosDB.filter(p => p.cat === cat || (cat === 'XIAOMI' && p.cat === 'POCO'));
    document.getElementById('main-grid').innerHTML = renderCards(f);
    lucide.createIcons();
}

function buscar() {
    const termo = document.getElementById('input-busca').value.toLowerCase();
    const f = produtosDB.filter(p => p.nome.toLowerCase().includes(termo));
    document.getElementById('main-grid').innerHTML = renderCards(f);
    lucide.createIcons();
}

function addCart(id) {
    const p = produtosDB.find(x => x.id === id);
    carrinho.push({...p, cartId: Date.now()});
    updateCart();
    if(!document.getElementById('cart-drawer').classList.contains('active')) toggleCart();
}

function updateCart() {
    document.getElementById('cart-count').innerText = carrinho.length;
    const body = document.getElementById('cart-items');
    const total = carrinho.reduce((acc, p) => acc + p.preco, 0);
    
    body.innerHTML = carrinho.map((p, index) => `
        <div class="cart-item">
            <img src="${p.img}" class="cart-item-img">
            <div class="cart-item-info">
                <h4>${p.nome}</h4>
                <strong>$ ${p.preco}</strong><br>
                <button class="btn-remove" onclick="remover(${index})">Remover</button>
            </div>
        </div>
    `).join('');
    document.getElementById('cart-total').innerText = `$ ${total.toFixed(2)}`;
}

function remover(idx) {
    carrinho.splice(idx, 1);
    updateCart();
}

function toggleCart() { document.getElementById('cart-drawer').classList.toggle('active'); }

function finalizarWhatsApp() {
    if(carrinho.length === 0) return alert("Seu carrinho está vazio!");
    const msg = carrinho.map(p => `- ${p.nome} ($${p.preco})`).join('%0A');
    window.open(`https://wa.me/554288857117?text=Olá! Gostaria de encomendar:%0A${msg}`);
}

window.onload = () => navegar('inicio');