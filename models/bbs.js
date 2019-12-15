module.exports = (sequelize, DataTypes) => {
    return sequelize.define('bbs', {
        b_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        b_time: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },

        b_date: {
            type: DataTypes.STRING(10),
            allowNull: false,
            
        },
        b_time: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        b_writer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        b_subject: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        b_text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        timestamps: true,
    });


};