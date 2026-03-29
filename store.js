/* store.js — product catalogue + cart helpers
   สินค้าดึงจาก Supabase database (fallback เป็น hardcode ถ้า offline)
*/

const SUPA_URL = 'https://qjmabovxjcabpveahfge.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqbWFib3Z4amNhYnB2ZWFoZmdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxODcwMzgsImV4cCI6MjA4OTc2MzAzOH0.ypzU22gs9qQZcCsyinhljXdqfnEWiogt3Mc1AHsq_F8';

const FALLBACK_PRODUCTS = [
  {id:0,name:"Barrier Repair Serum",brand:"Skindex",cat:"Serum",category:"Serum",price:38,was:null,price_was:null,icon:"\u{1F9F4}",img_class:"product-img-lavender",imgClass:"product-img-lavender",badge:"new",rating:4.9,reviewCount:2341,review_count:2341,stock:50,shades:["30 ml","50 ml","75 ml"],description:"A concentrated barrier-repair formula.",ingredients:"Aqua, Glycerin, Ceramide NP",active:true,reviews:[{author:"Aerin K.",stars:5,date:"Feb 2025",text:"Transformed my dry patches."},{author:"Yuna S.",stars:5,date:"Jan 2025",text:"Light texture."}]},
  {id:1,name:"Hydra-Boost Toner",brand:"Skindex",cat:"Toner",category:"Toner",price:28,was:35,price_was:35,icon:"\u{1F4A7}",img_class:"product-img-pink",imgClass:"product-img-pink",badge:null,rating:4.8,reviewCount:1876,review_count:1876,stock:80,shades:["150 ml","250 ml"],description:"Weightless hyaluronic acid toner.",ingredients:"Aqua, Sodium Hyaluronate",active:true,reviews:[{author:"Priya M.",stars:5,date:"Mar 2025",text:"My skin is plump."},{author:"Mei L.",stars:4,date:"Feb 2025",text:"Good hydration."}]},
  {id:2,name:"Cloud Moisturizer",brand:"Skindex",cat:"Moisturizer",category:"Moisturizer",price:42,was:null,price_was:null,icon:"\u{1FAD9}",img_class:"product-img-butter",imgClass:"product-img-butter",badge:"sale",rating:4.7,reviewCount:3102,review_count:3102,stock:35,shades:["30 ml","50 ml"],description:"Ultra-lightweight whipped moisturizer.",ingredients:"Aqua, Butyrospermum Parkii Butter",active:true,reviews:[{author:"Sofia R.",stars:5,date:"Mar 2025",text:"Incredible."},{author:"Lena P.",stars:5,date:"Jan 2025",text:"10/10."}]},
  {id:3,name:"SPF 50+ Sun Fluid",brand:"Skindex",cat:"SPF",category:"SPF",price:32,was:null,price_was:null,icon:"\u{1F33F}",img_class:"product-img-sage",imgClass:"product-img-sage",badge:null,rating:5.0,reviewCount:988,review_count:988,stock:60,shades:["50 ml"],description:"High-protection SPF 50+.",ingredients:"Aqua, Ethylhexyl Methoxycinnamate",active:true,reviews:[{author:"Aisha T.",stars:5,date:"Mar 2025",text:"No white cast."},{author:"Chloe W.",stars:5,date:"Feb 2025",text:"Best sunscreen."}]},
  {id:4,name:"Gentle Foam Cleanser",brand:"Skindex",cat:"Cleanser",category:"Cleanser",price:24,was:null,price_was:null,icon:"\u{1FAE7}",img_class:"product-img-lavender",imgClass:"product-img-lavender",badge:null,rating:4.8,reviewCount:1540,review_count:1540,stock:90,shades:["125 ml","200 ml"],description:"pH-balanced cleanser.",ingredients:"Aqua, Cocamidopropyl Betaine",active:true,reviews:[{author:"Min J.",stars:5,date:"Feb 2025",text:"So gentle."},{author:"Keiko R.",stars:4,date:"Jan 2025",text:"Great formula."}]},
  {id:5,name:"Vitamin C Brightening Serum",brand:"Skindex",cat:"Serum",category:"Serum",price:52,was:null,price_was:null,icon:"\u2728",img_class:"product-img-butter",imgClass:"product-img-butter",badge:"new",rating:4.9,reviewCount:2108,review_count:2108,stock:45,shades:["15 ml","30 ml"],description:"15% Vitamin C serum.",ingredients:"Aqua, Ascorbic Acid",active:true,reviews:[{author:"Diane L.",stars:5,date:"Mar 2025",text:"Faded dark spots."},{author:"Nora B.",stars:5,date:"Feb 2025",text:"No irritation."}]},
  {id:6,name:"Pore-Refining BHA Toner",brand:"Skindex",cat:"Toner",category:"Toner",price:34,was:40,price_was:40,icon:"\u{1F338}",img_class:"product-img-pink",imgClass:"product-img-pink",badge:null,rating:4.6,reviewCount:876,review_count:876,stock:70,shades:["100 ml"],description:"BHA pore treatment.",ingredients:"Aqua, Salicylic Acid",active:true,reviews:[{author:"Jade F.",stars:5,date:"Jan 2025",text:"Pores look smaller."},{author:"Tamara S.",stars:4,date:"Dec 2024",text:"Start slow."}]},
  {id:7,name:"Overnight Recovery Mask",brand:"Skindex",cat:"Moisturizer",category:"Moisturizer",price:48,was:null,price_was:null,icon:"\u{1F319}",img_class:"product-img-lavender",imgClass:"product-img-lavender",badge:"new",rating:4.9,reviewCount:1230,review_count:1230,stock:30,shades:["75 ml"],description:"Retinol + peptides sleeping mask.",ingredients:"Aqua, Retinol",active:true,reviews:[{author:"Vivienne C.",stars:5,date:"Mar 2025",text:"Wake up glowing."},{author:"Hana K.",stars:5,date:"Feb 2025",text:"Best sleeping mask."}]},
];

function normalizeProduct(p) {
  return {
    id:p.id,name:p.name,brand:p.brand||"Skindex",
    cat:p.category||"",category:p.category||"",
    price:parseFloat(p.price)||0,
    was:p.price_was?parseFloat(p.price_was):null,
    price_was:p.price_was?parseFloat(p.price_was):null,
    icon:p.icon||"\u{1F4E6}",
    image_url:p.image_url||null,
    imgClass:p.img_class||"product-img-lavender",
    img_class:p.img_class||"product-img-lavender",
    badge:p.badge||null,
    rating:parseFloat(p.rating)||5.0,
    reviewCount:parseInt(p.review_count)||0,
    review_count:parseInt(p.review_count)||0,
    stock:parseInt(p.stock)||0,
    shades:Array.isArray(p.shades)?p.shades:["One size"],
    shade_prices:(p.shade_prices && typeof p.shade_prices==='object')?p.shade_prices:{},
    description:p.description||"",desc:p.description||"",
    ingredients:p.ingredients||"",
    active:p.active!==false,
    reviews:p.reviews||[],
  };
}

window.SKINDEX_PRODUCTS=[];
window.productsLoaded=false;

async function fetchProducts(){
  try{
    if(typeof supabase==="undefined") throw new Error("SDK not loaded");
    const sb=supabase.createClient(SUPA_URL,SUPA_KEY);
    const {data,error}=await sb.from("products").select("*").eq("active",true).order("id");
    if(error) throw error;
    if(!data||!data.length) throw new Error("No products in DB");
    window.SKINDEX_PRODUCTS=data.map(normalizeProduct);
    window.productsLoaded=true;
    console.log("Products loaded from Supabase:",window.SKINDEX_PRODUCTS.length);
    console.log("Products with images:", window.SKINDEX_PRODUCTS.filter(p=>p.image_url).map(p=>({name:p.name, image_url:p.image_url})));
  }catch(e){
    console.warn("Using fallback products:",e.message);
    window.SKINDEX_PRODUCTS=FALLBACK_PRODUCTS;
    window.productsLoaded=true;
  }
  window.dispatchEvent(new Event("productsReady"));
}
fetchProducts();

window.onProductsReady=function(cb){
  if(window.productsLoaded){cb(window.SKINDEX_PRODUCTS);return;}
  window.addEventListener("productsReady",function(){cb(window.SKINDEX_PRODUCTS);},{once:true});
};

window.renderStars=function(rating){
  const full=Math.floor(rating);
  const half=rating%1>=0.5?"\u00BD":"";
  return "\u2605".repeat(full)+half;
};

window.productCardHTML=function(p,linkToProduct=true){
  const href="product.html?id="+p.id;
  const discount=p.was?Math.round((1-p.price/p.was)*100):0;
  const imgClass = p.imgClass||p.img_class||"product-img-lavender";
  const hasPhoto = !!p.image_url;
  return `<div class="product-card" onclick="${linkToProduct?"window.location=\'"+href+"\'":""}">
    <div class="${hasPhoto?'product-img':'product-img '+imgClass}"
         style="${hasPhoto?'height:180px;overflow:hidden;position:relative;display:block;padding:0':''}">
      ${p.badge?`<div class="product-badge badge-${p.badge==="new"?"new":p.badge==="hot"?"hot":"sale"}" style="position:absolute;top:.6rem;left:.6rem;z-index:1">${p.badge.charAt(0).toUpperCase()+p.badge.slice(1)}</div>`:""}
      ${hasPhoto
        ? `<img src="${p.image_url}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block">`
        : `<span style="font-size:3.5rem">${p.icon}</span>`
      }
    </div>
    <div class="product-info">
      <div class="product-name">${p.name}</div>
      <div class="product-stars">${renderStars(p.rating)} <span>${p.rating} \u00B7 ${(p.reviewCount||0).toLocaleString()} reviews</span></div>
      <div class="product-price">
        <span class="price-new">$${p.price.toFixed(2)}</span>
        ${p.was?`<span class="price-old">$${p.was.toFixed(2)}</span><span style="font-size:.72rem;color:var(--coral);font-weight:600">-${discount}%</span>`:""}
      </div>
      <button class="btn-add" onclick="event.stopPropagation();Cart.add(${p.id},\'${(p.shades||["One size"])[0]}\');showAddedFeedback(this)">Add to Bag</button>
    </div>
  </div>`;
};

window.showAddedFeedback=function(btn){
  const orig=btn.textContent;
  btn.textContent="\u2713 Added!";
  btn.style.background="#4CAF90";
  setTimeout(()=>{btn.textContent=orig;btn.style.background="";},2000);
};

window.Cart={
  KEY:"skindex_cart",
  get(){return JSON.parse(localStorage.getItem(this.KEY)||"[]");},
  save(c){localStorage.setItem(this.KEY,JSON.stringify(c));window.dispatchEvent(new Event("storage"));},
  add(productId,shade){
    const cart=this.get();
    const key=productId+"__"+shade;
    const ex=cart.find(i=>i.key===key);
    const p=window.SKINDEX_PRODUCTS.find(x=>String(x.id)===String(productId));
    if(!p)return;
    if(ex){ex.qty++;}
    else{cart.push({key,id:p.id,shade,qty:1,name:p.name,price:p.price,icon:p.icon,imgClass:p.imgClass||p.img_class,image_url:p.image_url||null});}
    this.save(cart);
  },
  remove(key){this.save(this.get().filter(i=>i.key!==key));},
  setQty(key,qty){const c=this.get();const i=c.find(x=>x.key===key);if(i){if(qty<1)this.remove(key);else{i.qty=qty;this.save(c);}}},
  clear(){this.save([]);},
  total(){return this.get().reduce((s,i)=>s+i.price*i.qty,0);},
  count(){return this.get().reduce((s,i)=>s+i.qty,0);},
};