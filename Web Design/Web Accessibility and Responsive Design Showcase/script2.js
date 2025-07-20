// Updated script.js content
document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile menu
    const toggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');

    function toggleMenu() {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            toggle.querySelector('a').innerHTML = "<i class='fas fa-bars'></i>";
        } else {
            menu.classList.add('active');
            toggle.querySelector('a').innerHTML = "<i class='fas fa-times'></i>";
        }
    }

    // Toggle submenu
    const items = document.querySelectorAll('.has-submenu');

    function toggleSubmenu() {
        if (this.classList.contains('submenu-active')) {
            this.classList.remove('submenu-active');
        } else {
            items.forEach(item => {
                if (item !== this && item.classList.contains('submenu-active')) {
                    item.classList.remove('submenu-active');
                }
            });
            this.classList.add('submenu-active');
        }
    }

    // Close submenu when clicking outside
    function closeSubmenu(e) {
        if (!menu.contains(e.target)) {
            items.forEach(item => {
                if (item.classList.contains('submenu-active')) {
                    item.classList.remove('submenu-active');
                }
            });
        }
    }

    // Event listeners
    toggle.addEventListener('click', toggleMenu);

    items.forEach(item => {
        item.addEventListener('click', toggleSubmenu);
    });

    // Keyboard navigation for accessibility
    items.forEach(item => {
        item.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                toggleSubmenu.call(item);
            }
        });
    });

    document.addEventListener('click', closeSubmenu);
});