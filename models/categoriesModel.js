import mongoose from 'mongoose'

const CategoriesSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
        trim: true
    },
    menu: {
        type: String,
        required: true
    }, 
    image: {
        type: String,       
    },     
     store: {
        type: mongoose.Types.ObjectId,
        ref: 'store'
    }
}, {
    timestamps: true
})

let Dataset = mongoose.models.categories || mongoose.model('categories', CategoriesSchema)
export default Dataset