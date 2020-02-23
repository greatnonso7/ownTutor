const {
    expect
} = require("chai");
const {
    usernameExists, emailExists
} = require("../../Services/Users/User_db");
const db = require('../../models')

describe("User DB Test Suite", () => {
    it("should see if a username already exists in db", async () => {
        const check = await usernameExists("");
        expect(check).to.be.null;
        expect(check === undefined).to.be.false;
        expect(check === false).to.be.false;
    });
    it("should throw an error because no username is passed", async () => {
        try {
            const check = await usernameExists()
        } catch (e) {
            expect(e).to.be.an('Error')
            expect(e.message).to.equal('No username was passed as an argument')
        }
    })
    it("should create a user, see if username already exist and fail", async () => {
        const test = await createDummyUser();
        const check = await usernameExists('test_test')
        expect(check).to.be.an("Object")

        await destroyDummyUser(test)
    })

     it("should see if a email already exists in db", async () => {
        const check = await emailExists("");
        expect(check).to.be.null;
        expect(check === undefined).to.be.false;
        expect(check === false).to.be.false;
    });
    it("should throw an error because no email is passed", async () => {
        try {
            const check = await emailExists()
        } catch (e) {
            expect(e).to.be.an('Error')
            expect(e.message).to.equal('No email was passed as an argument')
        }
    })
    it("should create a user, see if email already exist and fail", async () => {
        const test = await createDummyUser();
        const check = await emailExists('test@test.com')
        expect(check).to.be.an("Object")

        await destroyDummyUser(test)
    })
});

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