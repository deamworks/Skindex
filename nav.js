(function(){

  const PAGES = {
    home:    {label:'Home',    href:'index.html'},
    shop:    {label:'Shop',    href:'shop.html'},
    quiz:    {label:'Skin Quiz', href:'quiz.html'},
    product: {label:'Product', href:'product.html'},
    cart:    {label:'Cart',    href:'cart.html'},
    checkout:{label:'Checkout',href:'checkout.html'},
  };

  /* ── SVG ICONS (inline, no CDN needed) ── */
  const SVG = {
    search: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    user:   '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    heart:  '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    bag:    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    close:  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    tw:     '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    ig:     '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    fb:     '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    yt:     '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>',
  };

  /* ── โหลด Font Awesome (ถ้ายังไม่มี) ── */
  if(!document.querySelector('link[href*="font-awesome"]')){
    const faLink = document.createElement('link');
    faLink.rel = 'stylesheet';
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
    document.head.appendChild(faLink);
  }

  /* ── TOPBAR ── */
  const topbar = document.createElement('div');
  topbar.className = 'topbar';
  topbar.innerHTML = '✦ FREE SHIPPING ON ALL ORDERS $500+ &nbsp;|&nbsp; USE CODE: <strong>GLOW20</strong> FOR 20% OFF ✦';
  document.body.insertBefore(topbar, document.body.firstChild);

  /* ── NAV ── */
  const activePage = window.SKINDEX_PAGE || 'home';
  const navLinks = Object.entries(PAGES)
    .filter(([k]) => !['product','checkout','cart'].includes(k))
    .map(([k,v]) =>
      '<a href="' + v.href + '" class="' + (k===activePage?'active':'') + '">' + v.label + '</a>'
    ).join('');

  const nav = document.createElement('nav');
  nav.innerHTML =
    '<div class="nav-top">' +
      '<div class="nav-social">' +
        '<a href="#">' + SVG.tw + '</a>' +
        '<a href="#">' + SVG.ig + '</a>' +
        '<a href="#">' + SVG.fb + '</a>' +
        '<a href="#">' + SVG.yt + '</a>' +
      '</div>' +
      '<a href="index.html" class="nav-logo">Skindex</a>' +
      '<div class="nav-actions">' +
        '<button class="nav-icon" id="search-trigger" title="Search">' + SVG.search + '</button>' +
        '<a href="account.html" class="nav-icon nav-hide-mobile" id="nav-account-btn" title="Account" style="text-decoration:none;color:inherit;display:flex;align-items:center;position:relative">' +
          SVG.user +
          '<span id="nav-account-dot" style="display:none;position:absolute;top:-3px;right:-3px;width:8px;height:8px;background:var(--green,#4CAF7D);border-radius:50%;border:2px solid white"></span>' +
        '</a>' +
        '<button class="nav-icon nav-hide-mobile" title="Wishlist">' + SVG.heart + '</button>' +
        '<a href="cart.html" class="nav-icon nav-cart-btn" title="Cart" style="text-decoration:none;color:inherit;display:flex;align-items:center;gap:.35rem;position:relative">' +
          SVG.bag +
          '<span id="nav-cart-count" style="display:none;position:absolute;top:-5px;right:-5px;width:17px;height:17px;background:var(--coral);color:white;border-radius:50%;font-size:.58rem;font-weight:700;align-items:center;justify-content:center;line-height:1"></span>' +
        '</a>' +
        '<button class="nav-icon nav-hamburger" id="nav-hamburger" title="Menu"><i class="fa-solid fa-bars";font-size:1.1rem"></i></button>' +
      '</div>' +
    '</div>' +
    '<div class="nav-main" id="nav-main-links">' + navLinks + '</div>';
  document.body.insertBefore(nav, topbar.nextSibling);

  /* ── SEARCH OVERLAY ── */
  const tags = ['Serum','Moisturizer','SPF','Toner','Cleanser','New Arrivals','Sale'];
  const tagBtns = tags.map(function(t){
    return '<button class="stag" data-q="' + t + '">' + t + '</button>';
  }).join('');

  const overlayEl = document.createElement('div');
  overlayEl.id = 'search-overlay';
  overlayEl.innerHTML =
    '<div class="so-box">' +
      '<div class="so-input-row">' +
        '<span class="so-search-icon">' + SVG.search + '</span>' +
        '<input id="search-input" placeholder="Search products, categories..." autocomplete="off">' +
        '<button id="search-close">' + SVG.close + '</button>' +
      '</div>' +
      '<div id="search-suggestions">' +
        '<p class="so-label">Popular searches</p>' +
        '<div class="so-tags">' + tagBtns + '</div>' +
      '</div>' +
      '<div id="search-results" style="display:none">' +
        '<p id="search-count" class="so-label"></p>' +
        '<div id="search-list"></div>' +
        '<div id="search-empty" style="display:none;text-align:center;padding:2.5rem 0">' +
          '<p style="font-size:2rem;margin-bottom:.5rem">&#128269;</p>' +
          '<p style="color:rgba(255,255,255,.4);font-size:.88rem">No products found.</p>' +
        '</div>' +
      '</div>' +
    '</div>';
  document.body.appendChild(overlayEl);

  /* ── CSS: MOBILE NAV + DRAWER + SEARCH ── */
  const style = document.createElement('style');
  style.textContent =
    /* Mobile nav layout */
    '@media(max-width:768px){' +
      '.nav-social{display:none!important}' +
      '.nav-main{display:none!important}' +
      '.nav-hide-mobile{display:none!important}' +
      '.nav-hamburger{display:flex!important}' +
      '.nav-top{' +
        'display:grid!important;' +
        'grid-template-columns:44px 1fr 44px;' +
        'align-items:center;' +
        'padding:.6rem 1rem!important;' +
        'gap:.5rem;' +
      '}' +
      '.nav-logo{' +
        'position:static!important;' +
        'transform:none!important;' +
        'font-size:1.45rem!important;' +
        'text-align:center;' +
        'grid-column:2;' +
      '}' +
      '.nav-actions{' +
        'grid-column:3;' +
        'justify-content:flex-end;' +
        'gap:.4rem!important;' +
      '}' +
    '}' +
    /* Hamburger hidden on desktop */
    '.nav-hamburger{display:none}' +
    /* ── DRAWER ── */
    '#mobile-drawer{position:fixed;inset:0;z-index:9998;pointer-events:none}' +
    '.drawer-overlay{position:absolute;inset:0;background:rgba(28,28,46,.55);opacity:0;transition:opacity .3s;backdrop-filter:blur(2px)}' +
    '.drawer-panel{position:absolute;top:0;right:0;height:100%;width:min(300px,85vw);background:white;box-shadow:-8px 0 32px rgba(0,0,0,.15);display:flex;flex-direction:column;padding:1.5rem;transform:translateX(100%);transition:transform .3s cubic-bezier(.4,0,.2,1)}' +
    '#mobile-drawer.open{pointer-events:all}' +
    '#mobile-drawer.open .drawer-overlay{opacity:1}' +
    '#mobile-drawer.open .drawer-panel{transform:translateX(0)}' +
    '.drawer-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem}' +
    '.drawer-close{background:none;border:none;cursor:pointer;color:var(--muted);padding:.25rem;display:flex;border-radius:6px;transition:background .2s}' +
    '.drawer-close:hover{background:var(--light)}' +
    '.drawer-nav{display:flex;flex-direction:column;gap:.25rem}' +
    '.drawer-link{display:flex;align-items:center;gap:.65rem;padding:.75rem 1rem;border-radius:10px;font-size:.95rem;font-weight:500;color:var(--text);text-decoration:none;transition:all .15s}' +
    '.drawer-link:hover{background:var(--light);color:var(--coral)}' +
    '.drawer-link.active{background:var(--coral-light,#FFF0EE);color:var(--coral);font-weight:600}' +
    '.drawer-divider{height:1px;background:rgba(0,0,0,.07);margin:1rem 0}' +
    '.drawer-social{display:flex;gap:.75rem;padding:.5rem 0}' +
    '.drawer-social a{color:var(--muted);transition:color .2s;display:flex}' +
    '.drawer-social a:hover{color:var(--coral)}' +
    /* ── SEARCH ── */
    '#search-overlay{position:fixed;inset:0;z-index:9999;background:rgba(28,28,46,.97);display:flex;align-items:flex-start;justify-content:center;padding-top:7rem;opacity:0;pointer-events:none;transition:opacity .22s ease}' +
    '.so-box{width:min(680px,90vw)}' +
    '.so-input-row{display:flex;align-items:center;gap:1rem;border-bottom:2px solid rgba(255,255,255,.2);padding-bottom:1.25rem;margin-bottom:1.75rem}' +
    '.so-search-icon{color:rgba(255,255,255,.35);display:flex;flex-shrink:0}' +
    '.so-search-icon svg{width:22px;height:22px}' +
    '#search-input{flex:1;background:none;border:none;outline:none;font-family:"Playfair Display",serif;font-size:1.75rem;font-weight:400;color:white;letter-spacing:.02em}' +
    '#search-input::placeholder{color:rgba(255,255,255,.2)}' +
    '#search-close{background:none;border:none;cursor:pointer;color:rgba(255,255,255,.35);padding:.3rem;display:flex;align-items:center;transition:color .2s}' +
    '#search-close:hover{color:white}' +
    '.so-label{font-size:.68rem;letter-spacing:.15em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:.8rem}' +
    '.so-tags{display:flex;flex-wrap:wrap;gap:.5rem}' +
    '.stag{background:rgba(255,255,255,.08);color:rgba(255,255,255,.65);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:.38rem 1rem;font-size:.78rem;cursor:pointer;transition:all .18s;font-family:"DM Sans",sans-serif}' +
    '.stag:hover{background:rgba(255,255,255,.18);color:white;border-color:rgba(255,255,255,.3)}' +
    '.sr-item{display:flex;align-items:center;gap:1rem;padding:.85rem 1rem;border-radius:10px;background:rgba(255,255,255,.05);cursor:pointer;transition:background .15s;margin-bottom:.45rem}' +
    '.sr-item:hover{background:rgba(255,255,255,.11)}' +
    '.sr-thumb{width:50px;height:50px;border-radius:8px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:1.5rem;background:rgba(255,255,255,.1);overflow:hidden}' +
    '.sr-name{color:white;font-size:.9rem;font-weight:500;margin-bottom:.15rem}' +
    '.sr-cat{color:rgba(255,255,255,.32);font-size:.72rem;letter-spacing:.06em;text-transform:uppercase}' +
    '.sr-price{text-align:right;flex-shrink:0}' +
    '.sr-price-now{color:white;font-weight:700;font-size:.95rem}' +
    '.sr-price-was{color:rgba(255,255,255,.3);font-size:.72rem;text-decoration:line-through}' +
    '.sr-badge{display:inline-block;font-size:.6rem;font-weight:700;padding:.12rem .45rem;border-radius:4px;letter-spacing:.06em;text-transform:uppercase;margin-left:.4rem;vertical-align:middle}' +
    '.sr-badge-new{background:#4CAF90;color:white}' +
    '.sr-badge-sale{background:#E8604A;color:white}' +
    '.so-view-all{display:block;width:100%;margin-top:1.25rem;padding:.7rem;text-align:center;border:1px solid rgba(255,255,255,.15);border-radius:8px;color:rgba(255,255,255,.55);font-size:.8rem;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;background:none;font-family:"DM Sans",sans-serif;transition:all .2s}' +
    '.so-view-all:hover{border-color:rgba(255,255,255,.4);color:white}' +
    '.nav-icon svg{pointer-events:none}';
  document.head.appendChild(style);

  /* ── MOBILE DRAWER ── */
  const SVG_close = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
  const drawer = document.createElement('div');
  drawer.id = 'mobile-drawer';
  drawer.innerHTML =
    '<div class="drawer-overlay" id="drawer-overlay"></div>' +
    '<div class="drawer-panel">' +
      '<div class="drawer-head">' +
        '<a href="index.html" style="font-family:\'Playfair Display\',serif;font-size:1.4rem;font-weight:700;color:var(--coral);text-decoration:none">Skindex</a>' +
        '<button class="drawer-close" id="drawer-close">' + SVG_close + '</button>' +
      '</div>' +
      '<nav class="drawer-nav">' +
        Object.entries(PAGES)
          .filter(function(e){ return !['product','checkout','cart'].includes(e[0]); })
          .map(function(e){
            return '<a href="'+e[1].href+'" class="drawer-link'+(e[0]===activePage?' active':'')+'">' + e[1].label + '</a>';
          }).join('') +
      '</nav>' +
      '<div class="drawer-divider"></div>' +
      '<nav class="drawer-nav">' +
        '<a href="account.html" class="drawer-link">👤 Account</a>' +
        '<a href="cart.html" class="drawer-link">🛍️ Cart <span id="drawer-cart-count" style="background:var(--coral);color:white;border-radius:20px;font-size:.65rem;font-weight:700;padding:.1rem .5rem;margin-left:.3rem;display:none"></span></a>' +
      '</nav>' +
      '<div class="drawer-divider"></div>' +
      '<div class="drawer-social">' +
        '<a href="#">' + SVG.tw + '</a>' +
        '<a href="#">' + SVG.ig + '</a>' +
        '<a href="#">' + SVG.fb + '</a>' +
        '<a href="#">' + SVG.yt + '</a>' +
      '</div>' +
    '</div>';
  document.body.appendChild(drawer);

  function openDrawer(){ drawer.classList.add('open'); document.body.style.overflow='hidden'; }
  function closeDrawer(){ drawer.classList.remove('open'); document.body.style.overflow=''; }

  var hamBtn = document.getElementById('nav-hamburger');
  if(hamBtn) hamBtn.addEventListener('click', openDrawer);
  document.getElementById('drawer-close').addEventListener('click', closeDrawer);
  document.getElementById('drawer-overlay').addEventListener('click', closeDrawer);

  /* ── OPEN / CLOSE SEARCH ── */
  function openSearch(){
    overlayEl.style.opacity = '1';
    overlayEl.style.pointerEvents = 'all';
    document.body.style.overflow = 'hidden';
    setTimeout(function(){ document.getElementById('search-input').focus(); }, 80);
  }

  function closeSearch(){
    overlayEl.style.opacity = '0';
    overlayEl.style.pointerEvents = 'none';
    document.body.style.overflow = '';
    document.getElementById('search-input').value = '';
    showSuggestions();
  }

  function showSuggestions(){
    document.getElementById('search-suggestions').style.display = 'block';
    document.getElementById('search-results').style.display = 'none';
  }

  /* ── SEARCH LOGIC ── */
  function doSearch(q){
    var query = q.toLowerCase().trim();
    document.getElementById('search-suggestions').style.display = 'none';
    document.getElementById('search-results').style.display = 'block';

    var products = window.SKINDEX_PRODUCTS || [];
    var hits = products.filter(function(p){
      return p.name.toLowerCase().indexOf(query) > -1 ||
             p.cat.toLowerCase().indexOf(query) > -1 ||
             p.brand.toLowerCase().indexOf(query) > -1 ||
             (query === 'sale' && p.was) ||
             (query === 'new arrivals' && p.badge === 'new') ||
             (p.badge && p.badge.toLowerCase().indexOf(query) > -1);
    });

    var countEl = document.getElementById('search-count');
    countEl.textContent = hits.length
      ? hits.length + ' result' + (hits.length !== 1 ? 's' : '') + ' for "' + q + '"'
      : '';

    var listEl  = document.getElementById('search-list');
    var emptyEl = document.getElementById('search-empty');

    if(!hits.length){
      listEl.innerHTML = '';
      emptyEl.style.display = 'block';
      return;
    }
    emptyEl.style.display = 'none';

    var html = hits.map(function(p){
      var discount = p.was ? Math.round((1 - p.price / p.was) * 100) : 0;
      var badge = p.badge
        ? '<span class="sr-badge sr-badge-' + (p.badge==='new'?'new':'sale') + '">' + p.badge + '</span>'
        : '';
      return '<div class="sr-item" onclick="window.location=\'product.html?id=' + p.id + '\'">' +
        '<div class="sr-thumb">' + p.icon + '</div>' +
        '<div style="flex:1;min-width:0">' +
          '<div class="sr-name">' + p.name + badge + '</div>' +
          '<div class="sr-cat">' + p.cat + '</div>' +
        '</div>' +
        '<div class="sr-price">' +
          '<div class="sr-price-now">$' + p.price.toFixed(2) + '</div>' +
          (p.was ? '<div class="sr-price-was">$' + p.was.toFixed(2) + '</div>' : '') +
          (discount ? '<div style="color:#E8604A;font-size:.68rem;font-weight:700">-' + discount + '%</div>' : '') +
        '</div>' +
      '</div>';
    }).join('');

    if(hits.length < products.length){
      html += '<button class="so-view-all" onclick="window.location=\'shop.html?q=' + encodeURIComponent(q) + '\'">View all results in shop &#8594;</button>';
    }
    listEl.innerHTML = html;
  }

  /* ── EVENTS ── */
  document.getElementById('search-trigger').addEventListener('click', openSearch);
  document.getElementById('search-close').addEventListener('click', closeSearch);

  document.getElementById('search-input').addEventListener('input', function(){
    if(this.value.trim()) doSearch(this.value.trim());
    else showSuggestions();
  });

  document.getElementById('search-input').addEventListener('keydown', function(e){
    if(e.key === 'Enter' && this.value.trim()){
      closeSearch();
      window.location = 'shop.html?q=' + encodeURIComponent(this.value.trim());
    }
    if(e.key === 'Escape') closeSearch();
  });

  overlayEl.addEventListener('click', function(e){
    if(e.target === overlayEl) closeSearch();
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeSearch();
    if((e.metaKey || e.ctrlKey) && e.key === 'k'){ e.preventDefault(); openSearch(); }
  });

  document.querySelectorAll('.stag').forEach(function(btn){
    btn.addEventListener('click', function(){
      var q = this.dataset.q;
      document.getElementById('search-input').value = q;
      doSearch(q);
    });
  });

  /* ── FOOTER ── */
  const footer = document.createElement('footer');
  footer.innerHTML =
    '<div class="footer-top">' +
      '<div class="footer-brand">' +
        '<div class="footer-logo">Skindex</div>' +
        '<div class="footer-desc">Natural beauty products made with love. Cruelty-free, dermatologist tested, and made for every skin type.</div>' +
      '</div>' +
      '<div>' +
        '<div class="footer-col-title">Shop</div>' +
        '<ul class="footer-links">' +
          '<li><a href="shop.html">Skincare</a></li>' +
          '<li><a href="shop.html">Makeup</a></li>' +
          '<li><a href="shop.html">Bodycare</a></li>' +
          '<li><a href="shop.html">Gift Sets</a></li>' +
        '</ul>' +
      '</div>' +
      '<div>' +
        '<div class="footer-col-title">Help</div>' +
        '<ul class="footer-links">' +
          '<li><a href="#">FAQ</a></li>' +
          '<li><a href="#">Shipping</a></li>' +
          '<li><a href="#">Returns</a></li>' +
          '<li><a href="#">Track Order</a></li>' +
        '</ul>' +
      '</div>' +
      '<div>' +
        '<div class="footer-col-title">About</div>' +
        '<ul class="footer-links">' +
          '<li><a href="#">Our Story</a></li>' +
          '<li><a href="#">Sustainability</a></li>' +
          '<li><a href="#">Press</a></li>' +
          '<li><a href="#">Contact</a></li>' +
        '</ul>' +
      '</div>' +
    '</div>' +
    '<div class="footer-bottom">' +
      '<div class="footer-copy">&#169; 2025 Skindex Beauty. All rights reserved.</div>' +
      '<div class="footer-social">' +
        '<a href="#" class="fsoc">' + SVG.tw + '</a>' +
        '<a href="#" class="fsoc">' + SVG.ig + '</a>' +
        '<a href="#" class="fsoc">' + SVG.fb + '</a>' +
        '<a href="#" class="fsoc">' + SVG.yt + '</a>' +
      '</div>' +
    '</div>';
  document.body.appendChild(footer);

  /* ── CART + ACCOUNT SYNC ── */
  function initSupabaseNav(){
    var sb = (typeof window.getSB === 'function') ? window.getSB() : null;
    if(!sb) return;
    try{
      sb.auth.getSession().then(function(r){
        var dot = document.getElementById('nav-account-dot');
        if(dot && r.data && r.data.session) dot.style.display = 'block';
      });
    } catch(e){}
  }

  function syncCartNav(){
    var cart = JSON.parse(localStorage.getItem('skindex_cart')||'[]');
    var count = cart.reduce(function(s,i){ return s+i.qty; }, 0);
    var badge = document.getElementById('nav-cart-count');
    var drawerBadge = document.getElementById('drawer-cart-count');
    if(badge){ badge.textContent = count; badge.style.display = count ? 'flex' : 'none'; }
    if(drawerBadge){ drawerBadge.textContent = count; drawerBadge.style.display = count ? 'inline' : 'none'; }
  }
  syncCartNav();
  window.addEventListener('storage', syncCartNav);
  setTimeout(initSupabaseNav, 300);

  /* ── REVEAL on scroll ── */
  const revObs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting) e.target.classList.add('visible'); });
  },{threshold:.1});
  document.querySelectorAll('.reveal').forEach(function(el){ revObs.observe(el); });

})();