// DOM elements selection
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const exp = document.querySelector('#exp');

const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');
const expContent = document.querySelector('#exp-content');

const $loadingMessage = $('#loadingH1');

// Loading message handling
setTimeout(() => {
  clearInterval(loading);
  $loadingMessage.hide();
}, 1500);

$(document).ready(() => {
  setTimeout(() => {
    $('#loadingH1').hide(); // Hide the loading message
    $('.screen').fadeIn(1000, () => {      
      $(".terminal").typewriter();
    }); // Slowly fade in the screen content
  }, 2500);
});

const initDot = document.getElementById("loading");
const loading = setInterval(() => {
  if (initDot.innerHTML.length === 5) {
    initDot.innerHTML = "";
  } else {
    initDot.innerHTML += ".";
  }
}, 350);

const isMobile = window.innerWidth <= 768;

// WinBox creation function
function createWinBox(title, mountContent, additionalConfig = {}) {
  const baseConfig = {
    title: title,
    background: "radial-gradient(#444, #111)",
    mount: mountContent,
    width: isMobile ? '100%' : '400px',
    height: isMobile ? '100%' : '400px',
    top: 100,
    right: 40,
    bottom: 150,
    left: 40
  };

  const config = { ...baseConfig, ...additionalConfig };
  const winBox = new WinBox(config);

  // Automatically maximize if on mobile
  if (isMobile) {
    winBox.maximize();
  }
}

// Event listeners for buttons
about.addEventListener('click', () => createWinBox('About Me', aboutContent));
contact.addEventListener('click', () => createWinBox('Contact Me', contactContent));
exp.addEventListener('click', () => createWinBox('Experience', expContent));

// Typewriter.js
// https://github.com/ronv/Typewriter.js

$.fn.typewriter = function() {
  this.each(function() {
    const c = $(this);
    const b = c.html();
    let a = 0;
    let d = 0;
    c.html("");
    c.css('visibility', 'visible'); // Changing visibility to visible

    const e = function() {
      if ("<" === b.substring(a, a + 1)) {
        const f = new RegExp(/<span class="instant"/);
        const g = new RegExp(/<span class="clear"/);
        if (b.substring(a, b.length).match(f)) {
          a += b.substring(a, b.length).indexOf("</span>") + 7;
        } else if (b.substring(a, b.length).match(g)) {
          d = a;
          a += b.substring(a, b.length).indexOf("</span>") + 7;
        } else {
          while (">" !== b.substring(a, a + 1)) a++;
        }
      }
      c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
      if (a < b.length) setTimeout(e, 20 + 20 * Math.random());
    };
    e();
  });
  return this;
};
