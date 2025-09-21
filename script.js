// Part 2: Functions with Parameters & Scope
let animationCount = 0;

function triggerBoxAnimation() {

  const box = document.querySelector('.box');
  

  // Remove the class if it's already there to allow re-triggering
  box.classList.remove('animate');
  void box.offsetWidth; 
  // Re-add the class to trigger animation
  box.classList.add('animate');
}



