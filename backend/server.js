require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const api = require('./routes/api');

const app = express();
app.use(express.json());
app.use(cors());

// routes
app.use('/api', api);

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://aliyanasghar77_db_user:1234ABCD@juice.talguyr.mongodb.net/?appName=juice';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
