const express = require('express');
const app = express();
const PORT = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Route to test EJS
app.get('/', (req, res) => {
  res.render('test', { message: 'Hello, this is a test message from the server!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
