// DOM selectors
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navs = [nav1, nav2, nav3, nav4, nav5];
function toggleNav() {
  // Toggle:menu bars open/close
  menuBars.classList.toggle('change');
  //   Toggle:Menu Active
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // Animate overlay
    overlay.classList.remove('overlay-slide-left');
    overlay.classList.add('overlay-slide-right');
    // Animate In
    // TODO:
    removeAndAddClassToNavs('slide-out', 'slide-in');
  } else {
    overlay.classList.remove('overlay-slide-right');
    overlay.classList.add('overlay-slide-left');
    // Animate Out
    removeAndAddClassToNavs('slide-in', 'slide-out');
  }
}

const removeAndAddClassToNavs = (remove, add) => {
  for (let i = 0; i < 5; i++) {
    navs[i + 1].classList.remove(`${remove}-${i + 1}`);
    navs[i + 1].classList.add(`${add}-${i + 1}`);
  }
};
// Event Listeners

menuBars.addEventListener('click', toggleNav);

for (nav of navs) {
  nav.addEventListener('click', toggleNav);
}
