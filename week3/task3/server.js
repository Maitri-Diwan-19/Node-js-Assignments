//Know difference between http and https.
//- Create `server.js` file in that you create http server using node js ‘http’ module.
// - Read about REST APIs. GET, POST, PUT, DELETE. There are PATCH and TRACE but not mostly used so you can read brief about it.
// - Create one JSON array of object which is containing books.
// - Implement GET, POST, PUT, DELETE basically CRUD APIs using built in http module only and use the file system as persistence data storage and to store JSON that you created in last step.
// 1. Get all the books.
// 2. Get a book by id.
// 3. Create a book.
// 4. Modify a book.
// 5. Delete a book.
// - Install [Postman](https://www.postman.com/) to test out the all APIs.

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4000;
const DATA_FILE_PATH = path.join(__dirname, 'books.json');

const server = http.createServer((req, res) => {
  const { method, url } = req;
  
  if (url === '/books' && method === 'GET') {
    handleReadBooks(res);
  } else if (url === '/books' && method === 'POST') {
    handleRequestBody(req, (body) => {
      handleCreateBook(res, body);
    });
  } else if (url.startsWith('/books/') && method === 'GET') {
    const id = url.split('/')[2];
    handleGetBookById(res, id);
  } else if (url.startsWith('/books/') && method === 'PUT') {
    const id = url.split('/')[2];
    handleRequestBody(req, (body) => {
      handleUpdateBook(res, id, body);
    });
  } else if (url.startsWith('/books/') && method === 'DELETE') {
    const id = url.split('/')[2];
    handleDeleteBook(res, id);
  } else {
    sendResponse(res, 404, { error: 'Route Not Found' });
  }
});

server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/books`));

// Function to read data
function readData() {
  if (!fs.existsSync(DATA_FILE_PATH)) {
    fs.writeFileSync(DATA_FILE_PATH, '[]');
  }
  return JSON.parse(fs.readFileSync(DATA_FILE_PATH, 'utf-8'));
}

// Function to write data 
function writeData(data) {
  fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2));
}

// Function GET request to get all books
function handleReadBooks(res) {
  const data = readData();
  sendResponse(res, 200, data);
}

// Function GET request to get a book by ID
function handleGetBookById(res, id) {
  const data = readData();
  const book = data.find(book => book.id == id);
  
  if (!book) {
    sendResponse(res, 404, { error: 'Book Not Found' });
    return;
  }
  sendResponse(res, 200, book);
}

// Function POST request to create a book
function handleCreateBook(res, body) {
  const data = readData();
  const newBook = { id: data.length ? data[data.length - 1].id + 1 : 1, ...JSON.parse(body) };
  data.push(newBook);
  writeData(data);
  sendResponse(res, 201, newBook);
}

// Handle PUT request to update a book
function handleUpdateBook(res, id, body) {
  const data = readData();
  const index = data.findIndex(book => book.id == id);
  
  if (index === -1) {
    sendResponse(res, 404, { error: 'Book Not Found' });
    return;
  }
  
  const updatedBook = { id: parseInt(id), ...JSON.parse(body) };
  data[index] = updatedBook;
  writeData(data);
  sendResponse(res, 200, updatedBook);
}

// Handle DELETE request to remove a book
function handleDeleteBook(res, id) {
  let data = readData();
  const bookId = parseInt(id, 10); // Ensure id is a number
  const index = data.findIndex(book => book.id === bookId); // Use strict comparison

  if (index === -1) {
    sendResponse(res, 404, { error: 'Book Not Found' });
    return;
  }

  data.splice(index, 1); // Remove the book from the array
  writeData(data); // Save the updated books.json
  sendResponse(res, 200, { message: `Book with ID ${bookId} deleted.` });
}


// Function to handle request body
function handleRequestBody(req, callback) {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => callback(body));
}

// Function to send response
function sendResponse(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}
