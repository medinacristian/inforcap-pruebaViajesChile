// Enable Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Bootstrap Toasts
const toastTrigger = document.getElementById('liveToastBtn')
const toastLive = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLive)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}


const minScroll = 10;
window.addEventListener('scroll', () => {
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

window.addEventListener('load', () => {
  document.querySelector('.navbar').classList.remove('d-none');
  if(window.scrollY > minScroll) {
    document.querySelector('.navbar').classList.remove('nav-transparent');
    document.querySelector('.navbar').classList.add('nav-color');
    document.querySelector('.navbar').classList.add('shadow');
  }
});
