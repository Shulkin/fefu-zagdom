console.log('123')

const headerMenu = document.querySelector('.menu');
const headerMenuToggle = document.querySelector('.menu-toggle');
if (headerMenuToggle) {
  headerMenuToggle.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
    headerMenuToggle.classList.toggle('active');
  })
}