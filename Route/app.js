const express = require('express');
const { dashboard, users, insert_from_data, filterUser, insert_csv } = require('../Controller/homeController');
const upload = require('../Middleware/upload');
const route = express.Router();

route.get('/',dashboard)
route.post('/',insert_from_data)
route.get('/usersTable',users)
route.get('/filter',filterUser)
route.post('/insertCsv',upload.single('csv'),insert_csv)


module.exports = route