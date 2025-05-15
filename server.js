const express = require('express');
const app = express();
const PORT = 3000;

const users = [
  { username: 'alice', age: 25, email: 'alice@example.com' },
  { username: 'bob', age: 30, email: 'bob@example.com' },
  { username: 'charlie', age: 28, email : 'charlie@example.com' }
];

app.get('/user', (req, res) => {
  const username = req.query.user;

  if (!username || username.trim() === '') {
    return res.status(400).json({ message: 'User parameter cannot be empty' });
  }

  const userDetails = users.find(u => u.username.toLowerCase() === username.toLowerCase());

  if (userDetails) {
    res.json({
      message: 'User found',
      data: userDetails
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});