document.addEventListener('DOMContentLoaded', function () {

  // User Registration
  const registerButton = document.getElementById('registerButton');
  registerButton.addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(username && email && password) {
      // Successful registration
      showToast('Registration successful!', 'success');
      clearFields();
    } else {
      // Show error message
      showToast('Please fill out all fields!', 'error');
    }
  });

  // Search Book
  const searchButton = document.getElementById('searchBookButton');
  searchButton.addEventListener('click', function() {
    const searchQuery = document.getElementById('searchQuery').value;
    
    if(searchQuery) {
      // Simulate book search
      showToast('Searching for: ' + searchQuery, 'info');
    } else {
      showToast('Please enter a search term!', 'error');
    }
  });

  // View Borrow History
  const historyButton = document.getElementById('borrowHistory');
  historyButton.addEventListener('click', function() {
    // Simulate fetching borrow history
    showToast('Fetching borrow history...', 'info');
  });

  // Check Fine
  const checkFineButton = document.getElementById('checkFineButton');
  checkFineButton.addEventListener('click', function() {
    const userId = document.getElementById('userIdForFine').value;
    
    if(userId) {
      showToast('Checking fine for user ID: ' + userId, 'info');
    } else {
      showToast('Please enter your user ID!', 'error');
    }
  });

  // Download Material
  const downloadButton = document.getElementById('downloadMaterial');
  downloadButton.addEventListener('click', function() {
    const materialId = document.getElementById('materialId').value;
    
    if(materialId) {
      showToast('Downloading material with ID: ' + materialId, 'success');
    } else {
      showToast('Please provide a material ID!', 'error');
    }
  });

  // My Profile
  const profileButton = document.getElementById('viewProfile');
  profileButton.addEventListener('click', function() {
    showToast('Displaying user profile...', 'info');
  });

  // Helper function to clear input fields
  function clearFields() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
  }

  // Toast Notification Helper Function
  function showToast(message, type) {
    const toast = document.createElement('div');
    toast.classList.add('toast', type);
    toast.textContent = message;
    
    document.body.appendChild(toast);

    // Show toast and remove after a delay
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 300); // Wait for animation to finish before removing the toast element
    }, 3000); // Toast duration
  }

});
