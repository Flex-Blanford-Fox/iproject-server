const ApiController = require('../controllers/ApiController')
const router = require (`express`).Router()


router.get(`/search`, ApiController.search)
router.get(`/searchArtist`, ApiController.searchArtist)
router.get(`/searchAlbum`, ApiController.searchAlbum)

module.exports = router