const Avatar = require('../models/Avatar')

async function getAllAvatars(req, res) {
    try {
        const avatars = await Avatar.find()
        res.json(avatars)
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'error getting all your Avatar' })
    }
}

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

async function createAvatar(req, res) {
    try {
       await new Avatar({
            ...req.body
        }).save()

        res.status(201).json({'message': 'Avatar created'})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'error creating Avatar' })
    }
}

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
        const quiz = await Quiz.findBy(id)
        res.render('editQuiz', {
             quiz
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error retrieving Edit Page'})
    }
}

//Update Avatar
async function updateAvatar(req, res){
    try {
        const { id } = req.params
        const avatars = await Quiz.findByIdAndUpdate(id, req.body)
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