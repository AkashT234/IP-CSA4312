// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.querySelector(".search-form");
    const searchInput = document.querySelector(".search-form input[type='text']");
    const resultsContainer = document.querySelector(".results-container");

    // Simulate a book database
    const sampleBooks = [
        { title: "JavaScript for Beginners", author: "John Doe", year: "2020" },
        { title: "Mastering CSS", author: "Jane Smith", year: "2019" },
        { title: "HTML & Web Design", author: "David Lee", year: "2021" },
        { title: "Advanced JavaScript", author: "Emily Clark", year: "2022" },
        { title: "React Essentials", author: "Sarah Johnson", year: "2023" }
    ];

    // Function to render search results dynamically
    function displayResults(results) {
        resultsContainer.innerHTML = ""; // Clear previous results

        if (results.length === 0) {
            const noResults = document.createElement("p");
            noResults.textContent = "No results found.";
            resultsContainer.appendChild(noResults);
        } else {
            results.forEach(book => {
                const resultItem = document.createElement("div");
                resultItem.classList.add("result-item");

                const resultContent = `
                    <div>
                        <h3 class="result-title">${book.title}</h3>
                        <p class="result-details">Author: ${book.author} | Published: ${book.year}</p>
                    </div>
                    <div class="result-actions">
                        <button class="view-details">View Details</button>
                        <button class="borrow">Borrow</button>
                    </div>
                `;

                resultItem.innerHTML = resultContent;
                resultsContainer.appendChild(resultItem);

                // Optional: Add event listeners for buttons if needed
                resultItem.querySelector(".view-details").addEventListener("click", () => {
                    alert("Viewing details for " + book.title);
                });
                resultItem.querySelector(".borrow").addEventListener("click", () => {
                    alert("You have borrowed " + book.title);
                });
            });
        }
    }

    // Handle form submission
    searchForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent page reload

        const query = searchInput.value.trim();

        if (query === "") {
            alert("Please enter a search term.");
        } else {
            const filteredBooks = sampleBooks.filter(book => 
                book.title.toLowerCase().includes(query.toLowerCase()) ||
                book.author.toLowerCase().includes(query.toLowerCase())
            );

            displayResults(filteredBooks);
        }
    });
});
