const express = require('express')
const User = require('../models/user')
const comment=require('../models/comment')
const data=require('../models/data')
const auth = require('../middleware/auth')
const router = new express.Router()





router.post('/users/register', async (req, res) => {

    const userExists = await User.findOne({ email: req.body.email })

    if (userExists) {
        return res.status(400).send('User with this email already exists')
    }

    const user = new User(req.body)

    try {
        await user.save()

        const token = await user.generateAuthToken()


        res.status(201).send({ user, token })
    } catch (e) {

        res.status(400).send(e)
    }

})

router.post('/users/addcomment', async (req, res) => {

 

    const comment1 = new comment(req.body)

    try {
        await comment1.save()

        


        res.status(201).send({ comment1 })
    } catch (e) {

        res.status(400).send(e)
    }

})

router.post('/users/post', async (req, res) => {

 

    const data1 = new data(req.body)

    try {
        await data1.save()

        


        res.status(201).send({ data1 })
    } catch (e) {

        res.status(400).send(e)
    }

})



router.post('/users/update', async (req, res) => {

    try {
        const data1= await data.find({ id: req.body.id })
        

        res.send({ data1})
    } catch (e) {
        res.status(400).send()
    }
})




router.post('/users/getcomment', async (req, res) => {

    try {
        const comment1= await comment.find({ companyid: req.body.companyid })
        

        res.send({ comment1})
    } catch (e) {
        res.status(400).send()
    }
})


router.post('/users/login', async (req, res) => {

    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()

        res.send({ user, token })
    } catch (e) {
        res.status(400).send()
    }
})

router.post('/users/logout', auth, async (req, res) => {

    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })

        await req.user.save()

        res.send("logout successfull")
    } catch (e) {

        res.status(500).send()

    }
})

router.post('/users/logoutAll', auth, async (req, res) => {

    try {
        req.user.tokens = []

        await req.user.save()

        res.send()
    } catch (e) {

        res.status(500).send()

    }
})

router.get('/users/me', auth, async (req, res) => {

    res.send(req.user)

})


router.patch('/users/me', auth, async (req, res) => {

    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => {

        return allowedUpdates.includes(update)
    })

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates' })
    }

    try {

        updates.forEach((update) => {
            req.user[update] = req.body[update]
        })

        await req.user.save()

        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }

})

router.delete('/users/me', auth, async (req, res) => {

    try {

        await req.user.remove()

        res.send(req.user)

    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router