import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    description: {
        type: String,
   
    },
       
     category: {
        type: String,
        required: true
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
    },    
  
}, {
    timestamps: true
})

let Dataset = mongoose.models.product || mongoose.model('product', productSchema)
export default Dataset