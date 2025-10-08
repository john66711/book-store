// Store books in an array
let books = [];

// Add book event
document.getElementById("bookForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const price = document.getElementById("price").value.trim();

  if (title && author && price) {
    const book = { title, author, price };
    books.push(book);
    displayBooks();
    this.reset();
  }
});

// Display books
function displayBooks() {
  const tableBody = document.getElementById("bookTableBody");
  tableBody.innerHTML = "";

  books.forEach((book, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>₹${book.price}</td>
      <td><button class="delete-btn" onclick="deleteBook(${index})">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

// Delete book
function deleteBook(index) {
  books.splice(index, 1);
  displayBooks();
}

// Search functionality
document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const tableBody = document.getElementById("bookTableBody");
  tableBody.innerHTML = "";

  books
    .filter(book => book.title.toLowerCase().includes(query))
    .forEach((book, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>₹${book.price}</td>
        <td><button class="delete-btn" onclick="deleteBook(${index})">Delete</button></td>
      `;
      tableBody.appendChild(row);
    });
});
