// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  const searchForm = document.querySelector(".search-form");
  const searchInput = document.querySelector(".search-form input[type='text']");
  const resultsContainer = document.querySelector(".results-container");
  const noResultsMessage = document.querySelector(".no-results-message");

  // Sample books data (replace with real data from backend if needed)
  const books = [
    { title: "JavaScript for Beginners", author: "John Doe", year: "2020" },
    { title: "Mastering CSS", author: "Jane Smith", year: "2019" },
    { title: "HTML & Web Design", author: "David Lee", year: "2021" },
    { title: "Advanced JavaScript", author: "Emily Clark", year: "2022" },
    { title: "React Essentials", author: "Sarah Johnson", year: "2023" }
  ];

  // Function to handle search result display
  function displayResults(results) {
    resultsContainer.innerHTML = ""; // Clear any previous results
    noResultsMessage.style.display = "none"; // Hide the "No results" message

    if (results.length === 0) {
      // If no results, display "No results found"
      noResultsMessage.style.display = "block";
    } else {
      results.forEach(book => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("result-item");

        resultItem.innerHTML = `
          <div class="result-content">
            <h3 class="result-title">${book.title}</h3>
            <p class="result-details">Author: ${book.author} | Year: ${book.year}</p>
          </div>
          <div class="result-actions">
            <button class="view-details">View Details</button>
            <button class="borrow">Borrow</button>
          </div>
        `;

        // Append the result to the results container
        resultsContainer.appendChild(resultItem);

        // Handle View Details and Borrow button clicks
        resultItem.querySelector(".view-details").addEventListener("click", () => {
          alert(`Viewing details for ${book.title}`);
        });
        resultItem.querySelector(".borrow").addEventListener("click", () => {
          alert(`You have borrowed ${book.title}`);
        });
      });
    }
  }

  // Handle form submission
  searchForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form refresh

    const query = searchInput.value.trim(); // Get search term

    // Validate the input
    if (query === "") {
      alert("Please enter a search term.");
      return;
    }

    // Filter books based on title or author
    const filteredBooks = books.filter(book => 
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
    );

    // Display results
    displayResults(filteredBooks);
  });

  // Optional: Allow pressing Enter to trigger search
  searchInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      searchForm.submit();
    }
  });
});
