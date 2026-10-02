const express = require('express');
const app = express();
const PORT = 6767;

// Middleware to parse incoming JSON data
app.use(express.json());

// Define a simple GET endpoint
app.get('/todos', (req, res) => {
    res.json({ 
        status: 'success', 
        message: 'Your API is running perfectly!' 
    });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});