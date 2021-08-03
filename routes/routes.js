const UserController = require('../controllers/UserController')
const router = require (`express`).Router()
const apiRoutes = require(`./apiRoutes.js`)

router.use(`/api`, apiRoutes)
router.get(`/`, (req, res) =>{res.send(`Hello 12345`)})
router.get(`/register`, (req, res) =>{res.send(`Hello JING`)})

module.exports = router
