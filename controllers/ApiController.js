const axios = require (`../helpers/axios`)

class ApiController {

  static search(req, res, next) {
    console.log(req.query.q, "#################################################################");
    axios.get(`/music?q=${req.query.q}`, {headers: {"x-happi-key" : process.env.APIKEY}})
      .then(data=>{
        console.log(data.data.result);
        res.status(200).json(data.data.result)
      })
      .catch(err =>{
        res.status(400).json(err)
      })
  }

  static searchArtist(req, res, next) {
    axios.get(`/music/artists/${req.query.id}/albums`, {headers: {"x-happi-key" : process.env.APIKEY}})
      .then(data=>{
        console.log(data.data.result);
        res.status(200).json(data.data.result)
      })
      .catch(err =>{
        res.status(400).json(err)
      })
  }

  static searchAlbum (req, res, next) {
    console.log(req.query.id, req.query.id2, "############################################################################");
    axios.get(`/music/artists/${req.query.id}/albums/${req.query.id2}/tracks`, {headers: {"x-happi-key" : process.env.APIKEY}})
      .then(data=>{
        console.log(data.data.result);
        res.status(200).json(data.data.result)
      })
      .catch(err =>{
        res.status(400).json(err)
      })
  }
}

module.exports = ApiController