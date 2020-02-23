const db = require('../../models')

/**
 * Function checks if username already exists in the database
 * Return user if username is taken, otherwise null
 */
async function usernameExists(username) {
    if (username === null || username === undefined) {
        throw new Error('No username was passed as an argument')
    }
    const user = await db.user.findOne({
        where: {
            username
        }
    })
    if (user) return user;
    return null
}

/*
* Function checks if email already exists in the database
* Return user if email is taken, otherwise null
*/
async function emailExists(email) {
    if(email === null || email === undefined) {
        throw new Error('No email was passed as an argument')
    }
    const user = await db.user.findOne({
        where: {
            email
        }
    })
    if(email) return user;
    return null
}

module.exports = {
    usernameExists, emailExists
}