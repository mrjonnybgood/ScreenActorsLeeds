const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// Serve static files from the root directory (where index.html and images/ are)
app.use(express.static(__dirname));

// Explicitly serve the images directory (extra safety)
app.use('/images', express.static(path.join(__dirname, 'images')));

// Handle SPA routing: return index.html for any route not found (fixes refresh on /contact)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});