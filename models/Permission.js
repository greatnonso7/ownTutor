"use strict"

module.exports = (sequelize, datatypes) => {
    return sequelize.define("permission", {
        id: {
            type: datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        type: {
            type: datatypes.STRING,
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