const expect = require('chai')
const {
    usernameExists
} = require('../../Services/Users/User_db')

describe('User DB Test Suite', () => {
    it("should see if a username already exists in db", async () => {
        const check = await UsernameExists('sdfgdf');
        expect(check).to.be.false
        expect(check === undefined).to.be.false
        expect(check === null).to.be.false
    })
})