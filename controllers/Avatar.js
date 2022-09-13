const Avatar = require('../models/Avatar')

//get all avatars a user creates
async function getAllAvatars(req, res) {
    try {
        const avatars = await Avatar.find()
        res.json(avatars)
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'error getting all your Avatar' })
    }
}

//get a specific avatar by id
async function getAvatarById(req, res) {
    try {
        const { id } = req.params
        const avatars = await Avatar.findById(id)
        res.json(avatars)
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'error getting Avatar' })
    }
}

//create an avatar
async function createAvatar(req, res) {
    try {
       await new Avatar({
            ...req.body
        }).save()

        res.status(201).json({'message': 'Avatar created'})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error creating Avatar' })
    }
}

//delete an avatar a user created
async function deleteAvatarById(req, res) {
    try {
        const { id } = req.params
        const avatars = await Avatar.findByIdAndDelete(id)
        res.json({ 'message': 'Avatar deleted'})
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'error deleting avatar' })
    }
}

//Get edit page
async function getEdit(req, res){
    try {
        const { id } = req.params
        const avatars = await Avatar.findBy(id)
        res.render('editAvatar', {
             avatar
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error retrieving Edit Page'})
    }
}

//Update/edit an Avatar
async function updateAvatar(req, res){
    try {
        const { id } = req.params
        const avatars = await Avatar.findByIdAndUpdate(id, req.body)
        res.redirect(`/avatar/${id}`)
    } catch (error) {
        console.log(error)
        res.send('error updating avatar')
    }
}


module.exports = {
    getAllAvatars,
    getAvatarById,
    createAvatar,
    deleteAvatarById,
    getEdit,
    updateAvatar 
}