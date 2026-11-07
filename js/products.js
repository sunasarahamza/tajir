/**
 * TAJIR TRADER — Products Catalog & Modal Controller
 * File: js/products.js
 * Version: 2.0
 */

// State Management
let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'default';
let activeModalProduct = null;

document.addEventListener('DOMContentLoaded', () => {
    // If on Products Page
    if (document.getElementById('catalogProductsGrid')) {
        initProductsCatalog();
    }

    // If on Home Page
    if (document.getElementById('featuredProductsGrid')) {
        renderFeaturedProducts();
    }

    // Common Modal Listeners
    initModalEvents();
});

/**
 * Initialize Products Catalog Page
 */
function initProductsCatalog() {
    // Parse URL Query Parameters for deep linking (?category=Fruits or ?product=14)
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    const productParam = urlParams.get('product');

    if (categoryParam) {
        currentCategory = categoryParam;
    }

    // Initialize Category Counts & Buttons
    renderCategoryFilters();

    // Initialize Search & Sort Listeners
    initSearchAndSort();

    // Initial Filter & Render
    applyFiltersAndRender();

    // Check if deep linked to a specific product
    if (productParam) {
        const targetProduct = PRODUCTS.find(p => p.id === parseInt(productParam, 10));
        if (targetProduct) {
            openProductModal(targetProduct);
        }
    }
}

/**
 * Render Category Sidebar and Mobile Chips with Counts
 */
function renderCategoryFilters() {
    const sidebarList = document.getElementById('sidebarCategoryList');
    const mobileChipBar = document.getElementById('mobileCategoryBar');
    const totalCountBadge = document.getElementById('totalProductsCount');

    if (totalCountBadge) {
        totalCountBadge.textContent = PRODUCTS.length;
    }

    // Calculate Category Counts
    const counts = { all: PRODUCTS.length };
    CATEGORIES.forEach(cat => {
        counts[cat.name] = PRODUCTS.filter(p => p.category.toLowerCase() === cat.name.toLowerCase()).length;
    });

    // Populate Desktop Sidebar
    if (sidebarList) {
        let sidebarHtml = `
            <li>
                <button type="button" class="category-filter-btn ${currentCategory.toLowerCase() === 'all' ? 'active' : ''}" data-category="all">
                    <span>All Products</span>
                    <span class="category-count">${counts.all}</span>
                </button>
            </li>
        `;

        CATEGORIES.forEach(cat => {
            const isActive = currentCategory.toLowerCase() === cat.name.toLowerCase();
            sidebarHtml += `
                <li>
                    <button type="button" class="category-filter-btn ${isActive ? 'active' : ''}" data-category="${cat.name}">
                        <span>${cat.name}</span>
                        <span class="category-count">${counts[cat.name] || 0}</span>
                    </button>
                </li>
            `;
        });

        sidebarList.innerHTML = sidebarHtml;

        // Attach Click Handlers
        sidebarList.querySelectorAll('.category-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const cat = btn.getAttribute('data-category');
                setCategory(cat);
            });
        });
    }

    // Populate Mobile Chips
    if (mobileChipBar) {
        let mobileHtml = `
            <button type="button" class="mobile-chip ${currentCategory.toLowerCase() === 'all' ? 'active' : ''}" data-category="all">
                All Products (${counts.all})
            </button>
        `;

        CATEGORIES.forEach(cat => {
            const isActive = currentCategory.toLowerCase() === cat.name.toLowerCase();
            mobileHtml += `
                <button type="button" class="mobile-chip ${isActive ? 'active' : ''}" data-category="${cat.name}">
                    ${cat.name} (${counts[cat.name] || 0})
                </button>
            `;
        });

        mobileChipBar.innerHTML = mobileHtml;

        // Attach Click Handlers
        mobileChipBar.querySelectorAll('.mobile-chip').forEach(btn => {
            btn.addEventListener('click', () => {
                const cat = btn.getAttribute('data-category');
                setCategory(cat);
            });
        });
    }
}

/**
 * Change Active Category Filter
 */
function setCategory(catName) {
    currentCategory = catName;

    // Update active classes on desktop sidebar
    document.querySelectorAll('.category-filter-btn').forEach(btn => {
        const cat = btn.getAttribute('data-category');
        if (cat.toLowerCase() === catName.toLowerCase()) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update active classes on mobile chips
    document.querySelectorAll('.mobile-chip').forEach(btn => {
        const cat = btn.getAttribute('data-category');
        if (cat.toLowerCase() === catName.toLowerCase()) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update URL query string without reloading page
    const url = new URL(window.location);
    if (catName.toLowerCase() === 'all') {
        url.searchParams.delete('category');
    } else {
        url.searchParams.set('category', catName);
    }
    window.history.replaceState({}, '', url);

    applyFiltersAndRender();
}

/**
 * Initialize Search & Sort Event Listeners
 */
function initSearchAndSort() {
    const searchInput = document.getElementById('catalogSearchInput');
    const searchClear = document.getElementById('searchClearBtn');
    const sortSelect = document.getElementById('catalogSortSelect');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            if (searchClear) {
                if (searchQuery.length > 0) {
                    searchClear.classList.add('visible');
                } else {
                    searchClear.classList.remove('visible');
                }
            }
            applyFiltersAndRender();
        });
    }

    if (searchClear && searchInput) {
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            searchClear.classList.remove('visible');
            searchInput.focus();
            applyFiltersAndRender();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            applyFiltersAndRender();
        });
    }
}

/**
 * Filter, Sort, and Render Product Cards
 */
function applyFiltersAndRender() {
    let filtered = [...PRODUCTS];

    // 1. Filter by Category
    if (currentCategory.toLowerCase() !== 'all') {
        filtered = filtered.filter(p => p.category.toLowerCase() === currentCategory.toLowerCase());
    }

    // 2. Filter by Search Query
    if (searchQuery.length > 0) {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.shortDescription.toLowerCase().includes(q) ||
            p.fullDescription.toLowerCase().includes(q)
        );
    }

    // 3. Apply Sorting
    if (currentSort === 'name-asc') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort === 'name-desc') {
        filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (currentSort === 'latest') {
        filtered.sort((a, b) => b.id - a.id);
    }

    // 4. Update Results Counter
    const resultsCountEl = document.getElementById('catalogResultsCount');
    if (resultsCountEl) {
        resultsCountEl.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} products`;
    }

    // 5. Render to DOM
    renderProductCards('catalogProductsGrid', filtered);

    // 6. Update Active Filter Badges
    renderActiveFilterBadges();
}

/**
 * Active Filter Badges Bar
 */
function renderActiveFilterBadges() {
    const filterTagsContainer = document.getElementById('activeFilterTags');
    if (!filterTagsContainer) return;

    let tagsHtml = '';

    if (currentCategory.toLowerCase() !== 'all') {
        tagsHtml += `
            <span class="active-filter-tag">
                Category: <strong>${currentCategory}</strong>
                <button type="button" onclick="setCategory('all')" title="Remove filter">&times;</button>
            </span>
        `;
    }

    if (searchQuery.length > 0) {
        tagsHtml += `
            <span class="active-filter-tag">
                Search: "<strong>${escapeHtml(searchQuery)}</strong>"
                <button type="button" onclick="clearSearch()" title="Remove filter">&times;</button>
            </span>
        `;
    }

    if (tagsHtml !== '') {
        tagsHtml += `
            <button type="button" class="reset-all-filters-btn" onclick="resetAllFilters()">Reset All Filters</button>
        `;
    }

    filterTagsContainer.innerHTML = tagsHtml;
}

function clearSearch() {
    const searchInput = document.getElementById('catalogSearchInput');
    const searchClear = document.getElementById('searchClearBtn');
    if (searchInput) searchInput.value = '';
    if (searchClear) searchClear.classList.remove('visible');
    searchQuery = '';
    applyFiltersAndRender();
}

function resetAllFilters() {
    clearSearch();
    setCategory('all');
}

/**
 * Render Product Grid Cards
 */
function renderProductCards(containerId, productList) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (productList.length === 0) {
        container.innerHTML = `
            <div class="empty-catalog-state">
                <div class="empty-icon-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                </div>
                <h3>No Matching Products Found</h3>
                <p>We could not find any wholesale products matching your current search or category filter. Try clearing your search or browsing all categories.</p>
                <button type="button" class="btn btn-primary" onclick="resetAllFilters()">
                    Reset All Filters
                </button>
            </div>
        `;
        return;
    }

    let cardsHtml = '';
    productList.forEach(product => {
        cardsHtml += `
            <article class="product-card" data-product-id="${product.id}">
                <div class="product-img-wrap" onclick="triggerProductModal(${product.id})">
                    <img src="${product.image}" alt="${product.name} — Wholesale Supply" loading="lazy" onerror="handleProductImgError(this)">
                    <div class="product-card-badge">
                        <span class="badge badge-category">${product.category}</span>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-title" onclick="triggerProductModal(${product.id})" style="cursor: pointer;">
                        ${product.name}
                    </h3>
                    <p class="product-desc">${product.shortDescription}</p>
                    <div class="product-actions">
                        <button type="button" class="btn btn-secondary btn-sm" onclick="triggerProductModal(${product.id})" title="View Product Details">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                            View Details
                        </button>
                        <button type="button" class="btn btn-whatsapp btn-sm" onclick="contactOnWhatsApp('${escapeJs(product.name)}')" title="Contact via WhatsApp">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                            </svg>
                            Contact to Buy
                        </button>
                    </div>
                </div>
            </article>
        `;
    });

    container.innerHTML = cardsHtml;
}

/**
 * Render Featured Products on Homepage (6-8 items)
 */
function renderFeaturedProducts() {
    const featured = PRODUCTS.filter(p => p.featured).slice(0, 8);
    renderProductCards('featuredProductsGrid', featured);
}

/**
 * Trigger Product Detail Modal
 */
function triggerProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    openProductModal(product);
}

/**
 * Open Modal with Full Wholesale Details
 */
function openProductModal(product) {
    activeModalProduct = product;
    const modalBackdrop = document.getElementById('productDetailModal');
    if (!modalBackdrop) return;

    // Fill Modal Data
    const modalImg = document.getElementById('modalProductImg');
    const modalTitle = document.getElementById('modalProductTitle');
    const modalCategory = document.getElementById('modalProductCategory');
    const modalDesc = document.getElementById('modalProductDesc');
    const modalPackaging = document.getElementById('modalSpecPackaging');
    const modalOrigin = document.getElementById('modalSpecOrigin');
    const modalGrade = document.getElementById('modalSpecGrade');
    const modalMinOrder = document.getElementById('modalSpecMinOrder');
    const modalShelfLife = document.getElementById('modalSpecShelfLife');
    const modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');
    const modalEmailBtn = document.getElementById('modalEmailBtn');

    if (modalImg) {
        modalImg.dataset.errorAttempts = "0";
        modalImg.onerror = function() { handleProductImgError(this); };
        modalImg.src = product.image;
        modalImg.alt = `${product.name} — Wholesale Supply`;
    }
    if (modalTitle) modalTitle.textContent = product.name;
    if (modalCategory) modalCategory.textContent = product.category;
    if (modalDesc) modalDesc.textContent = product.fullDescription;
    if (modalPackaging) modalPackaging.textContent = product.packaging || "Export Cartons / Master Sacks";
    if (modalOrigin) modalOrigin.textContent = product.origin || "Prime Agricultural Sourcing";
    if (modalGrade) modalGrade.textContent = product.grade || "Export Standard Grade A";
    if (modalMinOrder) modalMinOrder.textContent = product.minOrder || "Commercial Wholesale Lots";
    if (modalShelfLife) modalShelfLife.textContent = product.shelfLife || "Transit & Cold-Chain Optimized";

    if (modalWhatsAppBtn) {
        modalWhatsAppBtn.onclick = () => contactOnWhatsApp(product.name);
    }
    if (modalEmailBtn) {
        modalEmailBtn.href = getEmailInquiryUrl(product.name);
        modalEmailBtn.setAttribute('target', '_blank');
        modalEmailBtn.setAttribute('rel', 'noopener noreferrer');
        modalEmailBtn.onclick = (e) => {
            contactByEmail(product.name);
        };
    }

    // Open Modal
    modalBackdrop.classList.add('open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Update URL hash/query without reloading
    const url = new URL(window.location);
    url.searchParams.set('product', product.id);
    window.history.replaceState({}, '', url);
}

/**
 * Close Product Modal
 */
function closeProductModal() {
    const modalBackdrop = document.getElementById('productDetailModal');
    if (!modalBackdrop) return;

    modalBackdrop.classList.remove('open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    activeModalProduct = null;

    // Remove product param from URL
    const url = new URL(window.location);
    url.searchParams.delete('product');
    window.history.replaceState({}, '', url);
}

/**
 * Modal Event Listeners
 */
function initModalEvents() {
    const modalBackdrop = document.getElementById('productDetailModal');
    const closeBtn = document.getElementById('modalCloseBtn');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeProductModal);
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                closeProductModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('productDetailModal');
            if (modal && modal.classList.contains('open')) {
                closeProductModal();
            }
        }
    });
}

/**
 * Utility: HTML Escape
 */
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

/**
 * Utility: JS string escape
 */
function escapeJs(str) {
    if (!str) return '';
    return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

/**
 * Image Error Fallback Handler
 * If an image fails to load (e.g. extension changed between .jpg and .png),
 * automatically attempts alternative common extensions.
 */
function handleProductImgError(img) {
    if (!img) return;
    const currentSrc = img.getAttribute('src') || img.src;
    const attempts = parseInt(img.dataset.errorAttempts || '0', 10);
    
    if (attempts >= 3) {
        img.onerror = null;
        return;
    }
    
    img.dataset.errorAttempts = (attempts + 1).toString();
    
    if (currentSrc.includes('.jpg')) {
        img.src = currentSrc.replace(/\.jpg($|\?)/, '.png$1');
    } else if (currentSrc.includes('.png')) {
        img.src = currentSrc.replace(/\.png($|\?)/, '.jpg$1');
    } else if (currentSrc.includes('.jpeg')) {
        img.src = currentSrc.replace(/\.jpeg($|\?)/, '.png$1');
    } else if (currentSrc.includes('.webp')) {
        img.src = currentSrc.replace(/\.webp($|\?)/, '.png$1');
    }
}

