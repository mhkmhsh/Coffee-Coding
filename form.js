// Display the specified page
function showPage(pageNum) {
    const pages = document.querySelectorAll('.form-page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById('page' + pageNum).classList.add('active');
  }
  
  // Switch to the next page
  function nextPage(pageNum) {
    showPage(pageNum);
  }
  
  // Switch to the previous page
  function previousPage(pageNum) {
    showPage(pageNum);
  }
  
  // Initialize the form by showing the first page
  window.onload = function() {
    showPage(1);
  };
  
  const form = document.getElementById('multiPageForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();  // Prevent form from submitting normally

  // Show a success message (instead of redirecting)
  alert('Form submitted successfully!');

  // Optionally, reset the form
  form.reset();
});