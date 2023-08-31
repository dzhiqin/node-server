// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import indexRouter from './routes/index'
import usersRouter from './routes/users'
import booksRouter from './routes/books.route'
import categoriesRouter from './routes/category.route'
import morgan from 'morgan'
import fs from 'fs'
import FileStreamRotator from 'file-stream-rotator/lib/FileStreamRotator'

var app = express()

// view engine setup
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))

// 日志落地
morgan.token('body',function(req){
	return req.body ? JSON.stringify(req.body) : '-'
})
morgan.format('short', ':remote-addr :remote-user [:date[clf]] :method :body :url HTTP/:http-version :status :res[content-length] - :response-time ms')
const env = process.env.NODE_ENV
if(env !== 'production'){
	app.use(morgan('short'))
}else{
	const logDirectory = path.join(__dirname, '../logs')
	fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
	const rotateLogStream = FileStreamRotator.getStream({
		date_format: 'YYYYMMDD',
		filename: path.join(logDirectory,'access-%DATE%.log'),
		frequency: 'daily',
		verbose: false,
		max_logs: 10,
		size: '50k'
	})
	app.use(morgan('short',{stream: rotateLogStream}))
}

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/books', booksRouter)
app.use('/categories',categoriesRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404))
})
//跨域问题解决方面
// const cors = require('cors');  
app.use(cors({  
	origin:['http://localhost:8080'],
	methods:['GET','POST'],
}))
//跨域问题解决方面
app.all('*',function (req, res, next) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
	next()
})

// error handler
app.use(function(err, req, res) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render('error')
})

module.exports = app
