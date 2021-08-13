'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      api_id_artist: {
        type: Sequelize.INTEGER
      },
      api_id_album: {
        type: Sequelize.INTEGER
      },
      api_id_track: {
        type: Sequelize.INTEGER
      },
      api_image: {
        type: Sequelize.STRING
      },
      artist_name: {
        type: Sequelize.STRING
      },
      album_title: {
        type: Sequelize.STRING
      },
      song_title: {
        type: Sequelize.STRING
      },
      song_bpm: {
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Songs');
  }
};