import 'regenerator-runtime';
import '../styles/styles.css';
import '../styles/responsive.css';
import App from './views/app';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

function checkTeamCardVisibility() {
  const teamCards = document.querySelectorAll('.profile-card');
  teamCards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      card.classList.add('visible');
    }
  });
}

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  checkTeamCardVisibility();
});

window.addEventListener('scroll', checkTeamCardVisibility);
window.addEventListener('resize', checkTeamCardVisibility);

window.addEventListener('DOMContentLoaded', () => {
  const navigationList = document.querySelector('#navigationDrawer ul');
  const navigationItems = navigationList.querySelectorAll('li');

  const setCurrentPage = () => {
    const currentPath = window.location.hash.substr(2);

    navigationItems.forEach((item) => {
      const link = item.querySelector('a');
      const href = link.getAttribute('href').substr(2);

      if (href === currentPath) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  };

  setCurrentPage();

  window.addEventListener('hashchange', setCurrentPage);
});
