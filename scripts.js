// Get modal and modal content elements
const modal = document.getElementById('album-modal');
const closeModal = document.getElementById('close-modal');
const modalImg = document.getElementById('album-modal').querySelector('img');
const albumTitle = document.getElementById('album-title');
const albumDate = document.getElementById('data-date');
const albumDetails = document.getElementById('album-details');
const spotifyLink = document.getElementById('spotify-link');
const overlay = document.getElementById('overlay'); // dimmed BG

// Get all album elements
const albums = document.querySelectorAll('.album');

// Add event listener to each album
albums.forEach(album => {
  album.addEventListener('click', function() {
    // Get album data from the clicked album
    const title = this.getAttribute('data-title');
    const date = this.getAttribute('data-date');
    const tracklistingHTML = this.querySelector('.tracklisting').innerHTML;
    const spotify = this.getAttribute('data-spotify');
    const imgSrc = this.querySelector('img').src;

    // Update modal content
    albumTitle.textContent = title;
    albumDate.textContent = `Released: ${date}`;
    albumDetails.innerHTML = tracklistingHTML;
    spotifyLink.href = spotify;
    modalImg.src = imgSrc;

    // Show the modal and trigger the animations
    modal.classList.remove('hidden');
    modal.style.opacity = 1; // Fade in the modal content
    overlay.style.opacity = '1';
    overlay.style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
    modal.addEventListener('keydown', trapFocus);
    closeModal.focus(); // Set initial focus
    document.body.classList.add('modal-open');
  });
});

// Close the modal when the close button is clicked
closeModal.addEventListener('click', function() {
  modal.classList.add('hidden');
  overlay.style.opacity = '0';
  overlay.style.visibility = 'hidden';
  document.body.style.overflow = '';
  modal.removeEventListener('keydown', trapFocus);

  document.body.style.overflow = '';
  document.body.classList.remove('modal-open');
  
  // Reset background opacity and modal opacity when closing
  modal.style.opacity = 0;
  modal.querySelector('::before').style.opacity = 0;
});

// Close the modal if clicked outside the modal content
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.classList.add('hidden');
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
    document.body.style.overflow = '';
    modal.removeEventListener('keydown', trapFocus);

    document.body.style.overflow = '';
    document.body.classList.remove('modal-open');
    
    // Reset background opacity when the modal is closed
    modal.style.opacity = 0;
    modal.querySelector('::before').style.opacity = 0;
  }
});



// Discography section controls
document.addEventListener('DOMContentLoaded', () => {
  const openGridImage = document.getElementById('sandie-album');
  const closeGridButton = document.getElementById('back-button');
  const blurOverlay = document.getElementById('blur-overlay');
  const textContainer = document.querySelector('.discography-text');
  const grid = document.getElementById('album-grid');
  const clickMeImage = document.getElementById('click-me-arrow');

  // Function to handle visibility based on viewport width
  const checkViewportWidth = () => {
    if (window.innerWidth <= 899) {
      // Ensure grid is hidden and initial content is visible for smaller screens
      textContainer.classList.remove('hidden');
      textContainer.classList.add('visible');
      openGridImage.classList.remove('hidden');
      blurOverlay.classList.remove('blurred');
      grid.classList.remove('active');
      closeGridButton.classList.add('hidden');
      clickMeImage.classList.remove('hidden');
    }
  };

  // Event listener for clicking the image
  openGridImage.addEventListener('click', () => {
    textContainer.classList.remove('visible');
    textContainer.classList.add('hidden');
    openGridImage.classList.add('hidden');
    blurOverlay.classList.add('blurred');
    grid.classList.add('active');
    closeGridButton.classList.remove('hidden');
    clickMeImage.classList.add('hidden');
  });

  // Event listener for the close button
  closeGridButton.addEventListener('click', () => {
    textContainer.classList.remove('hidden');
    textContainer.classList.add('visible');
    openGridImage.classList.remove('hidden');
    blurOverlay.classList.remove('blurred');
    grid.classList.remove('active');
    closeGridButton.classList.add('hidden');
    clickMeImage.classList.remove('hidden');
  });

  // Check viewport width on initial load
  checkViewportWidth();

  // Event listener for resizing the window
  window.addEventListener('resize', checkViewportWidth);
});



// Back-to-top button
let mybutton = document.getElementById('back-to-top');

// Show or hide the button based on scroll position
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.classList.add('show');
    } else {
        mybutton.classList.remove('show');
    }
}

// Scroll to the top when the button is clicked
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}



const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stops observing after animation
      }
    });
  },
  {
    threshold: 0.4
  }
);

document.querySelectorAll('.slide-up').forEach(el => observer.observe(el));



// Function to trap focus
function trapFocus(event) {
  const focusableElements = modal.querySelectorAll(
    '[href], span, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  // Shift + Tab
  if (event.shiftKey && event.key === 'Tab') {
    if (document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }
  }
  // Tab
  else if (event.key === 'Tab') {
    if (document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
}

const sandieAlbum = document.getElementById('sandie-album');

  sandieAlbum.addEventListener('click', () => {
    textContainer.classList.remove('visible');
    textContainer.classList.add('hidden');
    openGridImage.classList.add('hidden');
    blurOverlay.classList.add('blurred');
    grid.classList.add('active');
    closeGridButton.classList.remove('hidden');
    clickMeImage.classList.add('hidden');})

  sandieAlbum.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevent spacebar scrolling
      sandieAlbum.click(); // Trigger the click event
    }
  });


const backButton = document.getElementById('back-button');

  backButton.addEventListener('click', () => {
    textContainer.classList.remove('hidden');
    textContainer.classList.add('visible');
    openGridImage.classList.remove('hidden');
    blurOverlay.classList.remove('blurred');
    grid.classList.remove('active');
    closeGridButton.classList.add('hidden');
    clickMeImage.classList.remove('hidden');
  });

  backButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      backButton.click();
    }
  });


const albumButtons = document.querySelectorAll('.album');

  albumButtons.forEach((albumButton) => {
    albumButton.addEventListener('click', function () {
      // Get album data from the clicked album
      const title = this.getAttribute('data-title'); // `this` refers to the clicked element
      const date = this.getAttribute('data-date');
      const tracklistingHTML = this.querySelector('.tracklisting').innerHTML;
      const spotify = this.getAttribute('data-spotify');
      const imgSrc = this.querySelector('img').src;
  
      // Update modal content
      albumTitle.textContent = title;
      albumDate.textContent = `Released: ${date}`;
      albumDetails.innerHTML = tracklistingHTML;
      spotifyLink.href = spotify;
      modalImg.src = imgSrc;
  
      // Show the modal and trigger the animations
      modal.classList.remove('hidden');
      modal.style.opacity = 1;
      overlay.style.opacity = '1';
      overlay.style.visibility = 'visible';
      document.body.style.overflow = 'hidden';
      modal.addEventListener('keydown', trapFocus);
      closeModal.focus();
    });
  
    albumButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        albumButton.click();
      }
    });
  });


const closeButton = document.getElementById('close-modal');

  closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
    document.body.style.overflow = '';
    modal.removeEventListener('keydown', trapFocus);
    
    // Reset background opacity and modal opacity when closing
    modal.style.opacity = 0;
    modal.querySelector('::before').style.opacity = 0;
  });

  closeButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      closeButton.click();
    }
  });



// hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const hamburgerContainer = document.getElementById("hamburger-container");
  const overlayMobile = document.getElementById("overlay-mobile");
  const menuLinks = document.querySelectorAll("#ul-mobile a");

  // Toggle the menu and dim the background when the hamburger button is clicked
  hamburgerBtn.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent triggering the outside click listener
      const isOpen = hamburgerContainer.classList.toggle("open");
      if (isOpen) {
          overlayMobile.style.opacity = '1';
          overlayMobile.style.visibility = 'visible';
      } else {
          overlayMobile.style.opacity = '0';
          overlayMobile.style.visibility = 'hidden';
      }
  });

  // Close the menu and undim the background when clicking outside
  document.addEventListener("click", (event) => {
      if (!hamburgerContainer.contains(event.target) && !hamburgerBtn.contains(event.target)) {
          hamburgerContainer.classList.remove("open");
          overlayMobile.style.opacity = '0';
          overlayMobile.style.visibility = 'hidden';
      }
  });

  // Close the menu when a menu link is clicked
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburgerContainer.classList.remove("open");
        overlayMobile.style.opacity = '0';
        overlayMobile.style.visibility = 'hidden';
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const biographyButton = document.getElementById("header-btn1-mobile");
  const chevronRight = document.querySelector(".fa-chevron-right");
  const dropdownContentMobile = document.querySelector(".dropdown-content-mobile");

  biographyButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click from propagating
    dropdownContentMobile.classList.toggle("open");
    chevronRight.classList.toggle("clicked");
  });

  // Close dropdown and reset chevron when clicking outside
  document.addEventListener("click", (event) => {
    // If the click is not on the biography button or the dropdown, close the dropdown and reset the chevron
    if (!biographyButton.contains(event.target) && !dropdownContentMobile.contains(event.target)) {
      dropdownContentMobile.classList.remove("open");
      chevronRight.classList.remove("clicked"); // Reset the chevron to its normal position
    }
  });

  // Close dropdown and reset chevron when clicking on links inside the dropdown
  const menuLinks = document.querySelectorAll(".dropdown-content-mobile a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      dropdownContentMobile.classList.remove("open");
      chevronRight.classList.remove("clicked");
    });
  });
});