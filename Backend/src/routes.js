const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')
const PostController = require('./controllers/PostControllers')
const Post = require('./models/Post')
const LinkController = require('./controllers/LinkControllers')

const routes = new express.Router()
const upload = multer(uploadConfig)

routes.get('/posts',  PostController.index)
routes.post('/posts', upload.single('image') , PostController.store)

routes.post('/posts/:id/like', LinkController.store)

module.exports = routes