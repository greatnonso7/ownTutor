"use strict"

module.exports = (sequelize, datatypes) => {
    return sequelize.define("user", {
        id: {
            type: datatypes.UUID,
            primaryKey: true
        },
        first_name: {
            type: datatypes.STRING,
            isAlphanumeric: true,
            required: true,
            allowNull: true
        },
        last_name: {
            type: datatypes.STRING,
            required: true,
            allowNull: true
        },
        username: {
            type: datatypes.STRING,
            required: true,
            allowNull: true,
            len: [6, 20]
        },
        email: {
            type: datatypes.STRING,
            required: true,
            allowNull: true,
            len: [5, 100],
            isEmail: true
        },
        password: {
            type: datatypes.STRING,
            required: true,
            allowNull: true,
            len: [6, 20]
        },
        updated_at: {
            type: datatypes.DATETIME
        },
        deleted_at: {
            type: datatypes.DATETIME
        }
    }, {
        underscored: true,
        paranoid: true
    })
}