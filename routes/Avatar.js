const router = require('express').Router()
const { getAllAvatars, getAvatarById, createAvatar, deleteAvatarById, getEdit, updateAvatar  } = require('../controllers/Avatar')

router.get('/all', getAllAvatars)
router.get('/:id', getAvatarById)
router.post('/', createAvatar)
router.delete('/:id', deleteAvatarById)
router.get('/:id/edit', getEdit )
router.put('/:id', updateAvatar )

module.exports = router