import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import config from 'config'

import UserModel from '../models/User.js'

export const register = async (req, res) => {
    try {
        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const doc = new UserModel({
            email: req.body.email,
            name: req.body.name,
            avatarUrl: req.body.avatarUrl,
            passwordHash: hash,
        })

        const user = await doc.save()

        const token = jwt.sign({ _id: user._id }, config.get('jwtSecret'), { expiresIn: '30d' })

        const { passwordHash, ...userData } = user._doc

        res.json({
            ...userData,
            token,
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Could not register user' })
    }
}

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email })

        if (!user) {
            return res.status(404).json({ message: 'Invalid email or password' })
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash)

        if (!isValidPass) {
            return res.status(400).json({ message: 'Invalid email or password' })
        }

        const token = jwt.sign({ _id: user._id }, config.get('jwtSecret'), { expiresIn: '30d' })

        const { passwordHash, ...userData } = user._doc

        res.json({
            ...userData,
            token,
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Could not register user' })
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId)

        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        const { passwordHash, ...userData } = user._doc

        res.json(userData)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Acces denied' })
    }
}