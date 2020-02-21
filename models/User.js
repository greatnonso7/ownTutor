"use strict"

module.exports = (sequelize, datatypes) => {
    return sequelize.define("user", {
        id: {
            type: datatypes.UUID,
            primaryKey: true,
            defaultValue: datatypes.UUIDV4
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
        permission_id: {
            // foreign Key in permission table
            type: datatypes.INTEGER,
            required: true,
            allowNull: false
        },
        updated_at: {
            type: datatypes.DATE
        },
        deleted_at: {
            type: datatypes.DATE
        }
    }, {
        underscored: true,
        paranoid: true
    })
}