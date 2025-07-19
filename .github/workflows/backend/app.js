// Entry point for Express backend
const express = require('express');
const app = express();
app.use(express.json());

module.exports = app;