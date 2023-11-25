// Get all submenu items
const subMenus = document.querySelectorAll('.submenu');

// Loop through each submenu
subMenus.forEach(subMenu => {
    // Add an event listener to each submenu link
    subMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (event) => {
            // Prevent the default behavior of the link
            event.preventDefault();
            
            // Add a class to the submenu to keep it visible
            subMenu.classList.add('visible');
            
            // You can also remove the 'visible' class from other submenus if needed
            subMenus.forEach(otherSubMenu => {
                if (otherSubMenu !== subMenu) {
                    otherSubMenu.classList.remove('visible');
                }
            });
            
            // Navigate to the clicked link's href
            window.location.href = link.getAttribute('href');
        });
    });
});
