const smoothScroll = () => {
  const homeBtn = document.querySelector('.homeBtn')
  const startBtn = document.querySelector('.startBtn')

  homeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    homeBtn.classList.add('hidden');
  })
  
  const setupPanel = document.querySelector(startBtn.getAttribute('href'));
  startBtn.addEventListener('click', (event) => {
    homeBtn.classList.remove('hidden');
  })
}

smoothScroll()