//Script Contact card
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('toggle-contact').addEventListener('click', function() {
    document.getElementById('contact-card').classList.toggle('show');
  });
});


//Script untuk popout image
var modal = document.getElementById('myModal');

var img = document.getElementsByClassName('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var showModal = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

for (var i = 0; i < img.length; i++) {
    img[i].addEventListener('click', showModal);
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}

//Script untuk Navigation Bar
const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-expanded", "true");
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-expanded", "false");
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

const navbarMenu = navbar.querySelector("#navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);

document
  .getElementById("options")
  .querySelectorAll("input[name='navtype']")
  .forEach((option) => {
    option.addEventListener("change", (e) => {
      const navType = e.target.id.split("-").join(" ");
      navbarMenu.classList = navType;
    });
  });


/*
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const contactModal = document.getElementById('contactModal');

// Open the modal when the button is clicked
openModal.addEventListener('click', () => {
  contactModal.classList.add('active');
});

// Close the modal when the close button is clicked
closeModal.addEventListener('click', () => {
  contactModal.classList.remove('active');
});

// Also close the modal if user clicks outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === contactModal) {
    contactModal.classList.remove('active');
  }
});


/*

===== SCROLL REVEAL ANIMATION =====
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

SCROLL HOME
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

SCROLL ABOUT
sr.reveal('.card',{}); 
sr.reveal('.card',{delay: 400}); 
sr.reveal('.card',{delay: 400}); 

SCROLL SKILLS
sr.reveal('.card',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

SCROLL WORK
sr.reveal('.work__img',{interval: 200}); 

SCROLL CONTACT
sr.reveal('.contact__input',{interval: 200}); 

*/