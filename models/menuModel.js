import mongoose from 'mongoose'

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },       
     store: {
        type: mongoose.Types.ObjectId,
        ref: 'store'
    },
}, {
    timestamps: true
})

let Dataset = mongoose.models.menu || mongoose.model('menu', menuSchema)
export default Dataset