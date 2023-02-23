const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const authRouter = require('./routes/auth');
require('dotenv').config();

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

// ============================= ROUTES =============================
app.use('/auth', authRouter);
// app.use('/apartments', apartmentsRouter);
// app.use('/cities', citiesRouter);
// app.use('/orders', ordersRouter);
// ============================= ROUTES =============================

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server ERROR' } = err;
  res.status(status).json({ message });
});

module.exports = app;