const { usernameExists, emailExists } = require('./User_db')

async function ValidateUserExists(username, email) {
	let valid_username = null
	let valid_email = null
	if(username) {
		valid_username = await usernameExists(username) 
	}
	if(email) {
		valid_email = await emailExists(email)
	}
	if(valid_username && valid_username) return valid_username
		
	return null
}

module.exports = {
	ValidateUserExists
}