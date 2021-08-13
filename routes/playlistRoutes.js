const PlaylistController = require('../controllers/PlaylistController')
const {authorization, authentication} = require(`../middlewares/auth`)
const router = require(`express`).Router()

router.use(authentication)
router.get(`/`, PlaylistController.getPLaylists)
router.post(`/`, PlaylistController.postPlaylist)
// router.put(`/:id`, PlaylistController.putPlaylist)


module.exports = router