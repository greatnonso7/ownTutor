const db = require('../../models')

/**
 * Function checks if username already exists in the database
 * Return true is username is taken, otherwise false
 */
async function usernameExists(username) {
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