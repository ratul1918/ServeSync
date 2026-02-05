const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// In-memory user store
const users = [];

// Helper to find user
const findUser = (email) => users.find(u => u.email === email);

// Auth Routes

// SIGNUP
app.post('/api/auth/signup', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    if (findUser(email)) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = { id: Date.now(), email, password };
    users.push(newUser);

    console.log('User Registered:', email);
    res.status(201).json({ message: 'User created successfully', user: { email: newUser.email } });
});

// SIGNIN
app.post('/api/auth/signin', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = findUser(email);

    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    console.log('User Logged In:', email);
    res.status(200).json({ message: 'Login successful', user: { email: user.email } });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
