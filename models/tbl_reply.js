'use strict';
module.exports = (sequelize, DataTypes) => {
  var reply = sequelize.define('tbl_reply', {
    r_postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    r_writer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    r_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });

  reply.associate = function(models){
    reply.belongsTo(models.tbl_bbs, {
      foreignKey: "b_id"
    })
  };

  return reply;
};