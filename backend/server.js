const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage
let messages = [];

// Routes
app.get('/api/messages', (req, res) => {
    res.json(messages);
});

app.post('/api/messages', (req, res) => {
    const { author, content } = req.body;
    if (author && content) {
        const newMessage = {
            author,
            content,
            timestamp: new Date().toISOString()
        };
        messages.push(newMessage);
        // Keep only last 100 messages to avoid memory overflow in this simple exam
        if (messages.length > 100) {
            messages = messages.slice(-100);
        }
        res.status(201).json(newMessage);
    } else {
        res.status(400).json({ error: 'Author and content are required' });
    }
});

// Health check
app.get('/', (req, res) => {
    res.send('Backend is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
