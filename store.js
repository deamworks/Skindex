/* store.js — shared product catalogue + cart helpers */

window.SKINDEX_PRODUCTS = [
  {
    id:0, name:'Barrier Repair Serum', brand:'Skindex', cat:'Serum',
    price:38, was:null, icon:'🧴', imgClass:'product-img-lavender',
    badge:'new', rating:4.9, reviewCount:2341,
    shades:['30 ml','50 ml','75 ml'],
    desc:'A concentrated barrier-repair formula powered by ceramides and niacinamide. Rebuilds the skin\'s natural protective layer, reduces redness, and locks in moisture.',
    ingredients:'Aqua, Glycerin, Ceramide NP, Ceramide AP, Ceramide EOP, Niacinamide, Panthenol, Sodium Hyaluronate, Squalane, Allantoin',
    reviews:[
      {author:'Aerin K.',stars:5,date:'Feb 2025',text:'Completely transformed my dry patches. Nothing worked until this.'},
      {author:'Yuna S.',stars:5,date:'Jan 2025',text:'Light texture, absorbs fast. My skin barrier has never felt so calm.'},
    ]
  },
  {
    id:1, name:'Hydra-Boost Toner', brand:'Skindex', cat:'Toner',
    price:28, was:35, icon:'💧', imgClass:'product-img-pink',
    badge:null, rating:4.8, reviewCount:1876,
    shades:['150 ml','250 ml'],
    desc:'A weightless multi-molecular hyaluronic acid toner that delivers instant hydration at every layer. Plumping, soothing, suitable for sensitive skin.',
    ingredients:'Aqua, Sodium Hyaluronate, Hydrolyzed Hyaluronic Acid, Sodium Hyaluronate Crosspolymer, Glycerin, Beta-Glucan, Panthenol',
    reviews:[
      {author:'Priya M.',stars:5,date:'Mar 2025',text:'Goes on like water and makes my skin plump all day. Repurchased 4 times.'},
      {author:'Mei L.',stars:4,date:'Feb 2025',text:'Good hydration but I wish the bottle was bigger for the price.'},
    ]
  },
  {
    id:2, name:'Cloud Moisturizer', brand:'Skindex', cat:'Moisturizer',
    price:42, was:null, icon:'🫙', imgClass:'product-img-butter',
    badge:'sale', rating:4.7, reviewCount:3102,
    shades:['30 ml','50 ml'],
    desc:'An ultra-lightweight whipped moisturizer that melts into skin. Formulated with oat extract and shea butter to nourish and calm throughout the day.',
    ingredients:'Aqua, Butyrospermum Parkii Butter, Avena Sativa Kernel Extract, Glycerin, Dimethicone, Tocopherol, Sodium PCA',
    reviews:[
      {author:'Sofia R.',stars:5,date:'Mar 2025',text:'Feels like nothing on my skin but moisturizes all day. Incredible.'},
      {author:'Lena P.',stars:5,date:'Jan 2025',text:'Finally a moisturizer that doesn\'t pill under makeup. 10/10.'},
    ]
  },
  {
    id:3, name:'SPF 50+ Sun Fluid', brand:'Skindex', cat:'SPF',
    price:32, was:null, icon:'🌿', imgClass:'product-img-sage',
    badge:null, rating:5.0, reviewCount:988,
    shades:['50 ml'],
    desc:'High-protection SPF 50+ / PA++++. Completely invisible finish, no white cast, water-resistant. The last sunscreen you\'ll ever need.',
    ingredients:'Aqua, Ethylhexyl Methoxycinnamate, Titanium Dioxide, Niacinamide, Glycerin, Silica, Cyclopentasiloxane',
    reviews:[
      {author:'Aisha T.',stars:5,date:'Mar 2025',text:'No white cast, no grease. Layered under makeup all week — flawless.'},
      {author:'Chloe W.',stars:5,date:'Feb 2025',text:'I\'ve tried 20+ sunscreens. This is the one.'},
    ]
  },
  {
    id:4, name:'Gentle Foam Cleanser', brand:'Skindex', cat:'Cleanser',
    price:24, was:null, icon:'🫧', imgClass:'product-img-lavender',
    badge:null, rating:4.8, reviewCount:1540,
    shades:['125 ml','200 ml'],
    desc:'A pH-balanced amino acid foam cleanser that removes impurities without stripping the barrier. Gentle enough for twice-daily use.',
    ingredients:'Aqua, Cocamidopropyl Betaine, Sodium Lauroyl Glutamate, Glycerin, PEG-7 Glyceryl Cocoate, Panthenol',
    reviews:[
      {author:'Min J.',stars:5,date:'Feb 2025',text:'So gentle. My rosacea-prone skin loves it.'},
      {author:'Keiko R.',stars:4,date:'Jan 2025',text:'Great formula but the pump could be better.'},
    ]
  },
  {
    id:5, name:'Vitamin C Brightening Serum', brand:'Skindex', cat:'Serum',
    price:52, was:null, icon:'✨', imgClass:'product-img-butter',
    badge:'new', rating:4.9, reviewCount:2108,
    shades:['15 ml','30 ml'],
    desc:'A powerful 15% stabilised Vitamin C serum that fades dark spots, brightens skin tone, and boosts collagen production.',
    ingredients:'Aqua, Ascorbic Acid, Ferulic Acid, Vitamin E, Sodium Hyaluronate, Glycerin, Niacinamide',
    reviews:[
      {author:'Diane L.',stars:5,date:'Mar 2025',text:'My hyperpigmentation has faded significantly in 6 weeks.'},
      {author:'Nora B.',stars:5,date:'Feb 2025',text:'Doesn\'t irritate my sensitive skin at all. Huge bonus.'},
    ]
  },
  {
    id:6, name:'Pore-Refining BHA Toner', brand:'Skindex', cat:'Toner',
    price:34, was:40, icon:'🌸', imgClass:'product-img-pink',
    badge:null, rating:4.6, reviewCount:876,
    shades:['100 ml'],
    desc:'A targeted BHA-powered treatment that visibly minimises pores, controls oil, and refines skin texture over time.',
    ingredients:'Aqua, Salicylic Acid, Salix Alba Bark Extract, Niacinamide, Glycolic Acid, Witch Hazel, Aloe Vera',
    reviews:[
      {author:'Jade F.',stars:5,date:'Jan 2025',text:'My pores look legitimately smaller after 3 weeks.'},
      {author:'Tamara S.',stars:4,date:'Dec 2024',text:'Works well — start slow, it\'s a little strong at first.'},
    ]
  },
  {
    id:7, name:'Overnight Recovery Mask', brand:'Skindex', cat:'Moisturizer',
    price:48, was:null, icon:'🌙', imgClass:'product-img-lavender',
    badge:'new', rating:4.9, reviewCount:1230,
    shades:['75 ml'],
    desc:'A rich overnight sleeping mask powered by 0.1% retinol and a peptide complex to renew skin as you sleep. Wake up to visibly firmer skin.',
    ingredients:'Aqua, Retinol, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Squalane, Ceramide NP, Shea Butter',
    reviews:[
      {author:'Vivienne C.',stars:5,date:'Mar 2025',text:'I wake up glowing every morning. My skin has aged backwards.'},
      {author:'Hana K.',stars:5,date:'Feb 2025',text:'Worth every penny. The best sleeping mask I\'ve used.'},
    ]
  },
];

/* ── CART HELPERS ── */
window.Cart = {
  KEY: 'skindex_cart',

  get(){
    return JSON.parse(localStorage.getItem(this.KEY)||'[]');
  },

  save(cart){
    localStorage.setItem(this.KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event('storage'));
  },

  add(productId, shade){
    const cart = this.get();
    const key = `${productId}__${shade}`;
    const ex = cart.find(i=>i.key===key);
    const p = window.SKINDEX_PRODUCTS[productId];
    if(ex){ ex.qty++; }
    else   { cart.push({key, id:productId, shade, qty:1, name:p.name, price:p.price, icon:p.icon, imgClass:p.imgClass}); }
    this.save(cart);
  },

  remove(key){
    const cart = this.get().filter(i=>i.key!==key);
    this.save(cart);
  },

  setQty(key, qty){
    const cart = this.get();
    const item = cart.find(i=>i.key===key);
    if(item){ if(qty<1) this.remove(key); else { item.qty=qty; this.save(cart); } }
  },

  clear(){
    this.save([]);
  },

  total(){
    return this.get().reduce((s,i)=>s+i.price*i.qty, 0);
  },

  count(){
    return this.get().reduce((s,i)=>s+i.qty, 0);
  }
};

/* ── STAR RENDERER ── */
window.renderStars = function(rating){
  const full = Math.floor(rating);
  const half = rating%1 >= 0.5 ? '½' : '';
  return '★'.repeat(full) + half;
};

/* ── PRODUCT CARD HTML ── */
window.productCardHTML = function(p, linkToProduct=true){
  const href = `product.html?id=${p.id}`;
  const discount = p.was ? Math.round((1-p.price/p.was)*100) : 0;
  return `
  <div class="product-card" onclick="${linkToProduct?`window.location='${href}'`:''}">
    <div class="product-img ${p.imgClass}">
      ${p.badge ? `<div class="product-badge badge-${p.badge==='new'?'new':'sale'}">${p.badge==='new'?'New':'Sale'}</div>` : ''}
      <span style="font-size:3.5rem">${p.icon}</span>
    </div>
    <div class="product-info">
      <div class="product-name">${p.name}</div>
      <div class="product-stars">${renderStars(p.rating)} <span>${p.rating} · ${p.reviewCount.toLocaleString()} reviews</span></div>
      <div class="product-price">
        <span class="price-new">$${p.price.toFixed(2)}</span>
        ${p.was?`<span class="price-old">$${p.was.toFixed(2)}</span><span style="font-size:.72rem;color:var(--coral);font-weight:600">−${discount}%</span>`:''}
      </div>
      <button class="btn-add" onclick="event.stopPropagation();Cart.add(${p.id},'${p.shades[0]}');showAddedFeedback(this)">Add to Bag</button>
    </div>
  </div>`;
};

window.showAddedFeedback = function(btn){
  const orig = btn.textContent;
  btn.textContent = '✓ Added!';
  btn.style.background = '#4CAF90';
  setTimeout(()=>{ btn.textContent=orig; btn.style.background=''; }, 2000);
};