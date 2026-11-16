const navbar = document.querySelector('.navbar');
const navlinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  }
  else {
    navbar.classList.remove('scrolled');
  }
});

navlinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navlinks.forEach(function(link) {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});