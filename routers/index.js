const router = require('express').Router()

const photocontroller = require('../controllers/photocontroller')
const usercontroller = require('../controllers/usercontroller')
const auth = require('../middleware/auth')


router.post('/users/login',usercontroller.login)
router.post('/users/register',usercontroller.register)
router.use(auth)
router.get('/photos',photocontroller.GetAllPhoto)
router.get('/photos/:id',photocontroller.getonephotobyID)
router.post('/photo',photocontroller.createphoto)
router.put('/photos/:id',photocontroller.updateonephotobyID)
router.delete('/photos/:id',photocontroller.deleteonephotobyID)

module.exports = router