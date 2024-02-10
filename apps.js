
//  const button = document.getElementById('myButton');

//  button.addEventListener('click', function() {
//    alert('Button Clicked!');
//  });
// =======================================================================
const div = document.getElementById('d1');

// Add event listener for mouseenter event
div.addEventListener('mouseenter', function() {
  // Change background color when mouse enters
  div.style.backgroundColor = 'lightgreen';
});

// Add event listener for mouseleave event
div.addEventListener('mouseleave', function() {
  // Revert back to original background color when mouse leaves
  div.style.backgroundColor = 'lightblue';
});