const express = require("express")
const routs = express.Router()

const basePath = __dirname + "/views"

routes.get('/', (request, response) => response.sendFile("/index.html"))
routes.get('/job', (request, response) => response.sendFile("/job.html"))
routes.get('/job/edit', (request, response) => response.sendFile("/job-edit.html"))
routes.get('/profile', (request, response) => response.sendFile("/profile.html"))

module.exports = routes