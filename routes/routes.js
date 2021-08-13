const UserController = require('../controllers/UserController')
const router = require (`express`).Router()
const apiRoutes = require(`./apiRoutes.js`)
const playlistRoutes = require(`./playlistRoutes.js`)

router.get(`/`, (req, res) =>{res.send(`Hello 12345`)})

router.post(`/register`, UserController.register)
router.post(`/login`, UserController.login)
router.use(`/api`, apiRoutes)
router.use(`/playlists`, playlistRoutes)

module.exports = router
