const express = require('express')
const connectDB = require('./config/db.js')
const landmarkRoutes = require('./routes/landmark.js')
const userRoutes = require('./routes/user.js')
const {errorHandler} = require('./middleware/errorHandler.js')
connectDB();
const app = express();

app.use(express.json());
app.use('/api/landmarks', landmarkRoutes);
app.use('/api/users', userRoutes);
app.use(errorHandler);

