const db = require('../../models')

/**
 * Function checks if username already exists in the database
 * Return user is username is taken, otherwise false
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
    return false
}

module.exports = {
    usernameExists
}