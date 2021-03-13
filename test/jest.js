require('../server')
var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};
const userRouter = require('../routes/api-routes');
const taskRouter = require('../routes/html-routes');
const express = require('express')
const app = express();
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


module.exports = app