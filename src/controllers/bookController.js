const books = require('../models/bookModel');

// Get all books
exports.getAllBooks = (req, res) => {
    let { page, limit } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 5;

    const startIndex = (page - 1) * limit;
    const paginatedBooks = books.slice(startIndex, startIndex + limit);

    res.json({
        page,
        limit,
        totalBooks: books.length,
        data: paginatedBooks
    });
};


// Get book by ID
exports.getBookById = (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
};

// Add a new book
exports.addBook = (req, res) => {
    const { name, author, publishedYear } = req.body;

    if (!name || !author || !publishedYear) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newBook = {
        id: books.length + 1,
        name,
        author,
        publishedYear
    };

    books.push(newBook);
    res.status(201).json(newBook);
};

// Update a book
exports.updateBook = (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ message: "Book not found" });

    const { name, author, publishedYear } = req.body;
    if (name) book.name = name;
    if (author) book.author = author;
    if (publishedYear) book.publishedYear = publishedYear;

    res.json(book);
};

// Delete a book
exports.deleteBook = (req, res) => {
    const index = books.findIndex(b => b.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "Book not found" });

    books.splice(index, 1);
    res.json({ message: "Book deleted successfully" });
};
