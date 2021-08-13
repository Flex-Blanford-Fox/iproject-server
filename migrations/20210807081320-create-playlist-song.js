'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PlaylistSongs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PlaylistId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Playlists',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      SongId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Songs',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    // .then(() => {
    //   // Create Unique CompoundIndex
    //   let sql = `CREATE UNIQUE INDEX "PlaylistSongCompoundIndex"
    //           ON public."PlaylistSong"
    //           USING btree
    //           ("PlaylistId", "SongId");
    //         `;
    //   return queryInterface.sequelize.query(sql, {raw: true});
    //   });;
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PlaylistSongs');
  }
};