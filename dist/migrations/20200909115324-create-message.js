'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('messages', {
      message_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      chat_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: "chats",
          key: "chat_id"
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: "users",
          key: "user_id"
        }
      },
      message_text: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('messages');
  }
};