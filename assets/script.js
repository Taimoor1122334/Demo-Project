  AOS.init();


    function playVideo() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    iframe.src = "https://www.youtube.com/embed/s2skans2dP4?si=YXzO_RBgpN917yal";
  }

  function closeVideo() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    iframe.src = "";
  }
 
   const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
    link.addEventListener('click', function () {
      links.forEach(l => {
        l.classList.remove('text-green-600');
        l.classList.add('text-gray-700');
      });
      this.classList.remove('text-gray-700');
      this.classList.add('text-green-600');
    });
  });


  function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const menuIconPath = document.getElementById("menuIconPath");

    // Toggle visibility
    mobileMenu.classList.toggle("hidden");

    // Toggle icon between hamburger and X
    const isMenuOpen = !mobileMenu.classList.contains("hidden");
    if (isMenuOpen) {
      menuIconPath.setAttribute("d", "M6 18L18 6M6 6l12 12"); // Cross icon
    } else {
      menuIconPath.setAttribute("d", "M4 6h16M4 12h16M4 18h16"); // Hamburger
    }
  }

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById("mobileMenu").classList.add("hidden");
      document.getElementById("menuIconPath").setAttribute("d", "M4 6h16M4 12h16M4 18h16");
    });
  });
        