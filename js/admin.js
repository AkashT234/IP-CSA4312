document.addEventListener('DOMContentLoaded', function () {

  // Add Book
  const addBookButton = document.getElementById('addBook');
  addBookButton.addEventListener('click', function() {
    // Simulate the process of adding a book
    const bookTitle = document.getElementById('bookTitle').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    
    if(bookTitle && author && year) {
      alert('Book added successfully!');
      clearFields();
    } else {
      alert('Please fill out all fields!');
    }
  });

  // Update/Delete Book
  const updateBookButton = document.getElementById('updateBook');
  const deleteBookButton = document.getElementById('deleteBook');

  updateBookButton.addEventListener('click', function() {
    const bookId = document.getElementById('bookId').value;
    const newTitle = document.getElementById('newTitle').value;
    
    if(bookId && newTitle) {
      alert('Book updated successfully!');
      clearFields();
    } else {
      alert('Please fill out all fields!');
    }
  });

  deleteBookButton.addEventListener('click', function() {
    const bookId = document.getElementById('bookId').value;
    
    if(bookId) {
      alert('Book deleted successfully!');
      clearFields();
    } else {
      alert('Please enter a book ID!');
    }
  });

  // Issue Book for Student
  const issueBookButton = document.getElementById('issueBook');
  issueBookButton.addEventListener('click', function() {
    const studentId = document.getElementById('studentId').value;
    const bookId = document.getElementById('bookToIssue').value;
    
    if(studentId && bookId) {
      alert('Book issued to student!');
      clearFields();
    } else {
      alert('Please provide both student ID and book ID!');
    }
  });

  // Return Book Status
  const returnBookButton = document.getElementById('returnBook');
  returnBookButton.addEventListener('click', function() {
    const bookId = document.getElementById('bookToReturn').value;
    
    if(bookId) {
      alert('Book return status updated!');
      clearFields();
    } else {
      alert('Please enter a book ID!');
    }
  });

  // Make Fine
  const fineButton = document.getElementById('makeFine');
  fineButton.addEventListener('click', function() {
    const studentId = document.getElementById('studentIdFine').value;
    const fineAmount = document.getElementById('fineAmount').value;
    
    if(studentId && fineAmount) {
      alert('Fine applied!');
      clearFields();
    } else {
      alert('Please enter all required details!');
    }
  });

  // Helper function to clear input fields
  function clearFields() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
  }
  
});
