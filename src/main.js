



document.addEventListener('DOMContentLoaded', () => {
    // Navigation Buttons Animation and Page Switching
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');
    
    function switchPage(pageId) {
        // Hide all pages
        pages.forEach(page => {
            page.style.display = 'none';
        });
        
        // Show selected page
        const selectedPage = document.getElementById(pageId);
        if (selectedPage) {
            selectedPage.style.display = 'block';
        }
        
        // Update active state of nav buttons
        navButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.page === pageId) {
                btn.classList.add('active');
            }
        });
    }
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pageId = button.dataset.page;
            switchPage(pageId);
            
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Show home page by default
    switchPage('home-page');

    // Balance Cards Hover Animation
    const balanceCards = document.querySelectorAll('.balance-card');
    balanceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Action Buttons Animation
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Ads Button Animation
    const adsBtn = document.querySelector('.ads-btn');
    if (adsBtn) {
        adsBtn.addEventListener('click', () => {
            adsBtn.style.transform = 'translateX(5px)';
            setTimeout(() => {
                adsBtn.style.transform = 'translateX(0)';
            }, 150);
        });
    }

    // Header Icons Animation
    const headerIcons = document.querySelectorAll('.header-icons button');
    headerIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            icon.style.transform = 'scale(0.9)';
            setTimeout(() => {
                icon.style.transform = 'scale(1)';
            }, 150);
        });
    });
});