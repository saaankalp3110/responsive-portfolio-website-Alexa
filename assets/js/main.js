/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }
  

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }
  

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) {
      scrollUp.classList.add('show-scroll');
    } else {
      scrollUp.classList.remove('show-scroll');
    }
  }
  window.addEventListener('scroll', scrollUp);
  
  

/*==================== DARK LIGHT THEME ====================*/ 
/*change this */

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activate
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

const letters = {
  anniversary: `
    First of all, happy 6 months to us being together. Every moment I’m with you, I just wish it could last even longer.<br><br>

    There’s sooo many things I wanna try with you — arcades, hopefully night drives sometime, definitely diving (I seriously can’t wait to see you swim in real life). It’s wild ‘cause we’ve done so much already but also like… so little? It’s kinda crazy.<br><br>

    Thinking back on how everything led up to us is so cute. Like, the number of things that had to happen the exact way they did for us to end up here — it’s insane, and honestly, it makes this feel so special.<br><br>

    Fav pastime? Looking at your pics.<br>
    Fav thing to look forward to? Being with you.<br>
    Fav time I have? When I’m with you.<br><br>

    Being with you makes me wanna be better, you know? Like I wanna cook better food, be smarter, maybe even try my hand at random new things — just so you can be proud of having me as your boyfriend.<br><br>

    So… here’s to half a year, and sooo many more to come.<br>
    Love you.
  `,
  birthday: `
    Helloooo<br>

    Hyappyyy 22 blobbu!<br><br>

    I so wish you would have been okay with me gifting you a walking stick but i rather not be all beaten up.<BR><br>

    It's your first time celebrating your birthday away from your family and IK it doesnt feel right for you but I hope you enjoy it, I am prissure with time there will be a lot of people here that you would call family and a few you already do. <br><br>

    You are so special, and I hope you feel it not just today, but every single day.<br>
    I love you so, so much.<br><br>

    Here’s to a year filled with joy, growth, and everything your heart wants.
  `
};

let currentLetter = null;

function showLetter(type) {
  const letterContent = document.getElementById('letter-content');
  const letterBox = document.querySelector('.home__letter-box');

  if (currentLetter === type) {
    // If the same letter is clicked again, hide it
    letterContent.innerHTML = '';
    currentLetter = null;
    letterBox.style.display = 'none';
  } else {
    // Show the selected letter
    letterContent.innerHTML = letters[type];
    currentLetter = type;
    letterBox.style.display = 'block';
  }
}

const galleryPhotos = document.querySelectorAll('.gallery__photo');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      entry.target.classList.remove('hidden');
    } else {
      entry.target.classList.remove('show');
      entry.target.classList.add('hidden');
    }
  });
}, {
  threshold: 0.2
});

galleryPhotos.forEach(photo => {
  observer.observe(photo);
});


