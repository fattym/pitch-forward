document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileSolutionsBtn = document.getElementById('mobileSolutionsBtn');
    const mobileSolutionsMenu = document.getElementById('mobileSolutionsMenu');
    mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('ri-menu-line');
    icon.classList.toggle('ri-close-line');
    });
    mobileSolutionsBtn.addEventListener('click', function() {
    mobileSolutionsMenu.classList.toggle('hidden');
    const icon = mobileSolutionsBtn.querySelector('i');
    icon.classList.toggle('ri-arrow-down-s-line');
    icon.classList.toggle('ri-arrow-up-s-line');
    });
    document.addEventListener('click', function(event) {
    if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
    mobileMenu.classList.add('hidden');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.add('ri-menu-line');
    icon.classList.remove('ri-close-line');
    }
    });
    });
      document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const contactModal = document.getElementById('contactModal');
    const contactUsBtn = document.getElementById('contactUsBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const contactForm = document.getElementById('contactForm');
    function toggleModal() {
    contactModal.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
    }
    contactUsBtn.addEventListener('click', toggleModal);
    closeModalBtn.addEventListener('click', toggleModal);
    contactModal.addEventListener('click', function(e) {
    if (e.target === contactModal) {
    toggleModal();
    }
    });
    contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    fetch(contactForm.action, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(data),
    })
    .then(response => {
    if (response.ok) {
    contactForm.reset();
    toggleModal();
    const successMessage = document.createElement('div');
    successMessage.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg';
    successMessage.textContent = 'Thank you for your message. We\'ll get back to you soon!';
    document.body.appendChild(successMessage);
    setTimeout(() => {
    successMessage.remove();
    }, 5000);
    }
    })
    .catch(error => {
    console.error('Error:', error);
    });
    });
    const headerHeight = header.offsetHeight;
    const homeLink = document.getElementById('homeLink');
    const mobileMenu = document.getElementById('mobileMenu');
    const solutionsBtn = document.getElementById('solutionsBtn');
    const solutionsMenu = document.getElementById('solutionsMenu');
    let isDropdownOpen = false;
    function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
    solutionsMenu.classList.toggle('hidden');
    solutionsBtn.setAttribute('aria-expanded', isDropdownOpen);
    }
    solutionsBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleDropdown();
    });
    solutionsBtn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleDropdown();
    } else if (e.key === 'Escape' && isDropdownOpen) {
    toggleDropdown();
    }
    });
    document.addEventListener('click', function(e) {
    if (!solutionsBtn.contains(e.target) && isDropdownOpen) {
    toggleDropdown();
    }
    });
    const menuItems = solutionsMenu.querySelectorAll('a');
    menuItems.forEach((item, index) => {
    item.setAttribute('role', 'menuitem');
    item.setAttribute('tabindex', '-1');
    item.addEventListener('keydown', function(e) {
    const items = Array.from(menuItems);
    const currentIndex = items.indexOf(e.target);
    if (e.key === 'ArrowDown') {
    e.preventDefault();
    const nextItem = items[(currentIndex + 1) % items.length];
    nextItem.focus();
    } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    const prevItem = items[(currentIndex - 1 + items.length) % items.length];
    prevItem.focus();
    } else if (e.key === 'Escape') {
    toggleDropdown();
    solutionsBtn.focus();
    }
    });
    });
    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'index.html';
    });
    homeLink.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
    mobileMenu.classList.add('hidden');
    });
    function updateHeader() {
    if (window.scrollY > 50) {
    header.classList.add('shadow');
    } else {
    header.classList.remove('shadow');
    }
    }
    window.addEventListener('scroll', updateHeader);
    updateHeader();
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
    mobileMenu.classList.add('hidden');
    const menuBtn = document.getElementById('mobileMenuBtn');
    const icon = menuBtn.querySelector('i');
    icon.classList.add('ri-menu-line');
    icon.classList.remove('ri-close-line');
    });
    });
    });

    // Show the navbar in mobile view by removing the 'hidden' class from mobileMenu






