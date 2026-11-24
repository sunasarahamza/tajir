/**
 * TAJIR — Main Script
 * Brand Tagline: Trading with Integrity
 * Version: 2.0
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initHeaderScroll();
    initScrollToTop();
    initFloatingWhatsApp();
    initContactPageForm();
    populateBusinessMetadata();
});

/**
 * Mobile Navigation Drawer & Hamburger Toggle
 */
function initNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileDrawer = document.getElementById('mobileNavDrawer');
    const mobileBackdrop = document.getElementById('mobileNavBackdrop');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!menuToggle || !mobileDrawer || !mobileBackdrop) return;

    function openMenu() {
        menuToggle.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        mobileDrawer.classList.add('open');
        mobileBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.classList.remove('open');
        mobileBackdrop.classList.remove('open');
        document.body.style.overflow = '';
    }

    menuToggle.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.contains('open');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    const mobileClose = document.getElementById('mobileNavClose');
    if (mobileClose) {
        mobileClose.addEventListener('click', closeMenu);
    }

    mobileBackdrop.addEventListener('click', closeMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
            closeMenu();
        }
    });

    // Highlight active nav link based on current path
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    allNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        } else if (href !== 'index.html' && currentPath.includes(href)) {
            link.classList.add('active');
        }
    });
}

/**
 * Sticky / Elevated Header on Scroll
 */
function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });
}

/**
 * Scroll to Top Button
 */
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 350) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }, { passive: true });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Floating WhatsApp Quick Action Button
 */
function initFloatingWhatsApp() {
    const floatingBtn = document.getElementById('floatingWhatsAppBtn');
    if (!floatingBtn) return;

    floatingBtn.addEventListener('click', (e) => {
        e.preventDefault();
        contactOnWhatsApp(""); // General inquiry
    });
}

/**
 * Dynamic replacement of placeholders with TAJIR_CONFIG values
 */
function populateBusinessMetadata() {
    if (typeof TAJIR_CONFIG === 'undefined') return;

    // Elements with data-tajir="phoneDisplay"
    document.querySelectorAll('[data-tajir="phoneDisplay"]').forEach(el => {
        el.textContent = TAJIR_CONFIG.whatsappDisplay;
    });

    // Elements with data-tajir="email"
    document.querySelectorAll('[data-tajir="email"]').forEach(el => {
        el.textContent = TAJIR_CONFIG.businessEmail;
        if (el.tagName === 'A') {
            el.setAttribute('href', `mailto:${TAJIR_CONFIG.businessEmail}`);
        }
    });

    // Elements with data-tajir="address"
    document.querySelectorAll('[data-tajir="address"]').forEach(el => {
        el.textContent = TAJIR_CONFIG.address;
    });

    // Elements with data-tajir="hours"
    document.querySelectorAll('[data-tajir="hours"]').forEach(el => {
        el.textContent = TAJIR_CONFIG.hours;
    });
}

/**
 * Interactive Client-Side Inquiry Assistant (Contact Page)
 * Builds prefilled WhatsApp or Email messages based on customer's exact inputs
 */
function initContactPageForm() {
    const form = document.getElementById('wholesaleInquiryForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('inquiryName')?.value || "";
        const company = document.getElementById('inquiryCompany')?.value || "";
        const category = document.getElementById('inquiryCategory')?.value || "General";
        const products = document.getElementById('inquiryProducts')?.value || "";
        const notes = document.getElementById('inquiryNotes')?.value || "";
        const channel = document.querySelector('input[name="inquiryChannel"]:checked')?.value || "whatsapp";

        let customSummary = `Name: ${name}`;
        if (company) customSummary += ` | Company: ${company}`;
        customSummary += ` | Category: ${category}`;
        if (products) customSummary += ` | Products: ${products}`;
        if (notes) customSummary += ` | Details: ${notes}`;

        if (channel === 'whatsapp') {
            const message = `Hello Tajir,\n\nI am contacting you regarding a wholesale inquiry:\n- Name: ${name}\n- Business/Company: ${company || 'N/A'}\n- Category of Interest: ${category}\n- Products: ${products || 'General wholesale inquiry'}\n- Requirements/Quantity: ${notes || 'Standard wholesale inquiry'}\n\nPlease share your current availability, pricing list, and wholesale supply terms.`;
            const url = `https://wa.me/${TAJIR_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank", "noopener,noreferrer");
        } else if (channel === 'gmail') {
            const subject = `Wholesale Inquiry – ${company || name || 'Wholesale Client'}`;
            const body = `Hello Tajir,\n\nI would like to inquire about your wholesale catalog and bulk trading terms:\n\nName: ${name}\nCompany: ${company || 'Individual / Retailer'}\nCategory: ${category}\nProducts Needed: ${products}\nAdditional Requirements / Quantities:\n${notes}\n\nPlease reply with your wholesale price catalog and delivery schedule.\n\nThank you,\n${name}`;
            const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(TAJIR_CONFIG.businessEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(url, "_blank", "noopener,noreferrer");
        } else {
            const subject = `Wholesale Inquiry – ${company || name || 'Wholesale Client'}`;
            const body = `Hello Tajir,\n\nI would like to inquire about your wholesale catalog and bulk trading terms:\n\nName: ${name}\nCompany: ${company || 'Individual / Retailer'}\nCategory: ${category}\nProducts Needed: ${products}\nAdditional Requirements / Quantities:\n${notes}\n\nPlease reply with your wholesale price catalog and delivery schedule.\n\nThank you,\n${name}`;
            const url = `mailto:${TAJIR_CONFIG.businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            document.body.appendChild(link);
            link.click();
            setTimeout(() => link.remove(), 300);
        }
    });
}

