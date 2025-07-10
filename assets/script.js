  AOS.init();
 
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

  // Carousel functionality

     const carousel = document.getElementById("carousel");
    const progress = document.getElementById("progress");
    const title = document.getElementById("title");
    const desc = document.getElementById("desc");

    const slides = [
      {
        title: "ANGOLA",
        desc: "Prepare for a life-changing mission as we journey through the heart of Angola! Our dedicated team will be serving in vibrant communities like Luanda, Huambo, Benguela, Lubango, and Malanje, sharing love, hope, and the message of faith.",
      },
      {
        title: "PHILIPPINES",
        desc: "Join us in the beautiful Philippines, working alongside local communities to bring hope, joy, and practical help through faith-driven outreach programs in rural and urban areas.",
      },
      {
        title: "TANZANIA",
        desc: "Experience the heart of Africa in Tanzania. Our mission will focus on education, medical aid, and spiritual growth in cities and villages across the region.",
      },
    ];

    let currentIndex = 0;

    function updateContent() {
      title.textContent = slides[currentIndex].title;
      desc.textContent = slides[currentIndex].desc;
      carousel.style.transform = `translateX(-${currentIndex * 50}%)`;
      progress.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;
    }

    function slideRight() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateContent();
    }

    function slideLeft() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateContent();
    }

    updateContent();
        
   function setActive(clickedBtn) {
    const buttons = document.querySelectorAll(".arrow-btn");
    
    // Reset all buttons
    buttons.forEach(btn => {
        const svg = btn.querySelector("svg path");
        svg.setAttribute("stroke", "white");
        svg.setAttribute("fill", "none");
    });
    
    // Set active state for clicked button
    const activeSvg = clickedBtn.querySelector("svg path");
    activeSvg.setAttribute("stroke", "gray");
    activeSvg.setAttribute("fill", "gray");
}

window.onload = () => {
    const defaultBtn = document.querySelector(".arrow-btn.rotate-180"); // Target right arrow
    if (defaultBtn) {
        setActive(defaultBtn);
    }
};


    // Navbar Fixed on Scroll
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNavbar');
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercentage > 10) {
      navbar.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'animate__animated', 'animate__fadeInDown');
      navbar.classList.remove('relative');
    } else {
      navbar.classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'animate__animated', 'animate__fadeInDown');
      navbar.classList.add('relative');
    }
  });



  //header-video
   function toggleVideo() {
    const video = document.getElementById("headerVideo");

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
  
