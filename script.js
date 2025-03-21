document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faqItem');
  
  faqItems.forEach(item => {
      const question = item.querySelector('.faq');
      
      question.addEventListener('click', () => {
          // Close other open items
          faqItems.forEach(otherItem => {
              if (otherItem !== item && otherItem.classList.contains('active')) {
                  otherItem.classList.remove('active');
              }
          });
          
          // Toggle current item
          item.classList.toggle('active');
      });
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
}); 