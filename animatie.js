// JavaScript voor scrollfunctionaliteit
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.section');

  window.addEventListener('scroll', function() {
    let currentSection = '';

    sections.forEach(function(section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - sectionHeight / 2)) {
        currentSection = section.getAttribute('id');
      }
    });

    activateNav(currentSection);
  });

  function activateNav(currentSection) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-link[href="#${currentSection}"]`);
    activeLink.classList.add('active');
  }
});
document.getElementById('scrollButton').addEventListener('click', function() {
  window.scrollBy(0, window.innerHeight);
});
