/**
 * Gateway for user routes
 */
const express = require('express');
const router = express.Router()
const asyncHandler = require('../helpers/asyncHandler')
const validate = require('validate.js')

/**
 * route to create user
 * @body
 */
router.post('/', asyncHandler((req, res) => {
    const constraints = {}
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    const validation = validate({
        first_name,
        last_name,
        username,
        password,
        email
    }, constraints)

    if (validation) res.status(400).json({
        error: validation
    });
}))

module.exports = router;