const { expect } = require('chai')
const db = require('../../models')
const { ValidateUserExists } = require('../../Services/Users/User_service')

describe('User Test Suite', () => {
    it("should see if a user already exists on non existent user", async () => {
        const user = await ValidateUserExists('test', 'test@test.com')
        expect(user).to.be.null;
    })
    it("should see if a user already exists on an existent username", async () => {
    	const test = await createDummyUser();
    	const user = await ValidateUserExists('test_test', 'test@test.com')
    	expect(user).to.be.an('object')
    	await destroyDummyUser(test)

    })
})

async function createDummyUser() {
    return await db.user.create({
            first_name: 'test',
            last_name: 'test',
            username: 'test_test',
            password: 'test_test',
            email: 'test@test.com',
            permission_id: 1,
        })
}

async function destroyDummyUser(user) {
    return await user.destroy({force: true
    })
}