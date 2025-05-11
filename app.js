const express = require("express");
const app = express();
const PORT = 3000;
// Root route responding with a welcome message
app.get('/', (req, res) => {
  res.send("Welcome to 3MTT Academy !");
});
// API route responding with a JSON message and timestamp
app.get('/api/data', (req, res) => {
  // Simulate delay for asynchronous response
  setTimeout(() => {
    res.json({ message: 'Hello from Bitrus Edward of Cohort 3!', timestamp: Date.now() });
  }, 100); // 100ms delay
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
