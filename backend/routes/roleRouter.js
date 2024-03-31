const express = require("express")

const roleRouter = express.Router()

const {createRole} = require("../controllers/roleFun")


roleRouter.get('/',createRole)

module.exports = roleRouter