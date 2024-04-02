const express = require("express")

const roleRouter = express.Router()

const authorization = require('../middleware/authorization')

const {createRole} = require("../controllers/roleFun")


roleRouter.get('/',authorization,createRole)

module.exports = roleRouter