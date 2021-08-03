'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Song.belongsToMany(models.Playlist, {through:"Playlist_Song", foreignKey:"SongId"})
    }
  };
  Song.init({
    api_id_artist: DataTypes.INTEGER,
    api_id_album: DataTypes.INTEGER,
    api_id_track: DataTypes.INTEGER,
    api_image: DataTypes.STRING,
    artist_name: DataTypes.STRING,
    album_title: DataTypes.STRING,
    song_title: DataTypes.STRING,
    song_bpm: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};