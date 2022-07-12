import mongoose from 'mongoose'

const CarsSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    fuelType: {
        type: String,
        required: true,
    },
    engineCapacity: {
        type: Number,
        required: true,
    },
    enginePower: {
        type: Number,
        required: true,
    },
    tractionType: {
        type: String,
        required: true,
    },
    gearboxType: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    }
})

export default mongoose.model('Cars', CarsSchema)