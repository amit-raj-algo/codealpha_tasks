// Simple fade-in animation on scroll using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('fade-in');
    }
  });
});

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});
