const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(require('./config').mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const authRoutes = require('./routes/auth');
const codeRoutes = require('./routes/code');
const chatRoutes = require('./routes/chat');
const userRoutes = require('./routes/user');

app.use('/api/auth', authRoutes);
app.use('/api/code', codeRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/user', userRoutes);

// Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
