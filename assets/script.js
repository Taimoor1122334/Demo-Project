  AOS.init();

 document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
      link.addEventListener("click", (e) => {
        links.forEach(l => l.classList.remove("active")); // remove from all
        e.currentTarget.classList.add("active"); // add to clicked
      });
    });
  });


        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileOverlay = document.getElementById('mobileOverlay');
            
            mobileMenu.classList.toggle('active');
            mobileOverlay.classList.toggle('hidden');
        }
        
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
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("hidden");
  }
        