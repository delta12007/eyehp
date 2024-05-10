document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-item a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute('href').substring(1); // Get target section id
            const targetSection = document.getElementById(targetId); // Get target section element

            if (targetSection) {
                const offsetTop = targetSection.offsetTop; // Get target section offset from the top of the page

                // Smooth scroll to the target section
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

  // Script to activate Bootstrap dropdowns
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => dropdown.addEventListener('click', () => {
      dropdown.classList.toggle('show');
  }));
 