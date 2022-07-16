import Cars from '../models/Cars.js'
import UserModel from '../models/User.js'

export const getAll = async (req, res) => {
    try {
        const limit = req.query.limit
        const page = req.query.page
        const sortBy = req.query.sortBy
        const sortOrder = req.query.sortOrder
        const search = req.query.search
        const cars = await Cars.find()
            .limit(limit).skip(limit * (page - 1))
            .sort({ [sortBy]: sortOrder, _id: sortOrder })
            .or([{ brand: { $regex: search, $options: 'i' } }, { model: { $regex: search, $options: 'i' } }])

        res.json(cars)
    }
    catch (err) {
        console.log('Could not get cars')
        res.status(500).json({ message: err.message })
    }
}

// export const getOne = async (req, res) => {
//     try {
//         const carId = await req.params.id

//         Cars.findOne({ _id: carId }, (err, res) => {
//             if (err) {
//                 console.log('Could not get car')
//                 return res.status(500).json({ message: err.message })
//             }

//             if (!res) {
//                 return res.status(404).json({ message: 'Car not found' })
//             }

//             res.json(res)
//         })
//     }
//     catch (err) {
//         console.log('Could not get cars')
//         res.status(500).json({ message: err.message })
//     }
// }

export const setCar = async (req, res) => {
    try {
        const user = await UserModel.findOne({ _id: req.userId })
        console.log(user)
        const doc = new Cars({
            brand: req.body.brand,
            model: req.body.model,
            year: req.body.year,
            fuel_type: req.body.fuel_type,
            engine_capacity: req.body.engine_capacity,
            engine_power: req.body.engine_power,
            traction_type: req.body.traction_type,
            gearbox_type: req.body.gearbox_type,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
            added_by: user.name,
        })

        const cars = await doc.save()

        res.json(cars)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Could not create car' })
    }
}

export const updateCar = async (req, res) => {
    try {
        const carId = await req.params.id

        const car = await Cars.findOneAndUpdate({ _id: carId }, req.body, { new: true })

        res.json({
            success: true,
        })
    }
    catch (err) {
        console.log('Could not update car')
    }
}

export const deleteCar = async (req, res) => {
    try {
        const carId = await req.params.id

        Cars.findOneAndDelete({ _id: carId }, (err, car) => {
            if (err) {
                console.log('Could not delete car')
                return res.status(500).json({ message: err.message })
            }

            if (!car) {
                return res.status(404).json({ message: 'Car not found' })
            }

            res.json({
                success: true,
            })
        })
    }
    catch (err) {
        console.log('Could not get cars')
        res.status(500).json({ message: err.message })
    }
}