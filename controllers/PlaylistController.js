const {Playlist} = require(`../models/index`)

class PlaylistController {
  static getPLaylists(req, res, next) {
    Playlist.findAll()
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }

  static postPlaylist(req, res, next) {
    const {playlist_name} = req.body
    const {id, name, email} = req.currentUser
    Playlist.create({playlist_name, UserId:id})
      .then(data=>{
        res.status(201).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }
}

module.exports = PlaylistController