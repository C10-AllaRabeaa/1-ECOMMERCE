const express = require("express")

const roleRouter = express.Router()

const authorization = require('../middleware/authorization')

const {createRole} = require("../controllers/roleFun")


roleRouter.post('/',createRole)

module.exports = roleRouter