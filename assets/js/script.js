// Enable Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


window.addEventListener('scroll', () => {
  let minScroll = 10;
  if(window.scrollY > minScroll) {
    document.querySelector('.navbar').classList.remove('nav-transparent');
    document.querySelector('.navbar').classList.add('nav-color');
    document.querySelector('.navbar').classList.add('shadow');
  } else {
    document.querySelector('.navbar').classList.remove('nav-color');
    document.querySelector('.navbar').classList.remove('shadow');
    document.querySelector('.navbar').classList.add('nav-transparent');
  }
});
