import connectDB from '../../../../utils/connectDB'
import Stores from '../../../../models/storeModel'
import auth from '../../../../middleware/auth'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getStore(req, res)
            break;
        case "PUT":
            await updateStore(req, res)
            break;
        case "DELETE":
            await deleteStore(req, res)
            break;
    }
}

const getStore = async (req, res) => {
    try {
        const { storeId } = req.query;

        const store = await Stores.findById(storeId)
        if(!store) return res.status(400).json({err: 'This store does not exist.'})
        
        res.json({ store })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const updateStore = async (req, res) => {
    try {
        const result = await auth(req, res)
        if(result.role !== 'admin') 
        return res.status(400).json({err: 'Authentication is not valid.'})

        const {id} = req.query
        const {title, price, description} = req.body

        if(!title || !price )
        return res.status(400).json({err: 'Please add all the fields.'})

        await Stores.findOneAndUpdate({_id: id}, {
            title: title.toLowerCase(), price, description
        })

        res.json({msg: 'Success! Updated a store'})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const deleteStore = async(req, res) => {
    try {
        const result = await auth(req, res)
        
        if(result.role !== 'admin') 
        return res.status(400).json({err: 'Authentication is not valid.'})

        const {id} = req.query

        await Stores.findByIdAndDelete(id)
        res.json({msg: 'Store Deleted.'})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}