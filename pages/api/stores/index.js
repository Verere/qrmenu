import connectDB from '../../../utils/connectDB'
import Stores from '../../../models/storeModel'
import auth from '../../../middleware/auth'

connectDB()

export default async function handler (req, res){
    switch(req.method){
        case "GET":
            await getStores(req, res)
            break;
        case "POST":
            await createStore(req, res)
            break;
    }
}


const getStores = async (req, res) => {
     try {
        const stores = await Stores.find().limit(10)

      res.json({stores})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }   
   
}

const createStore = async (req, res) => {
  
    try {
        const result = await auth(req, res)
        const {name, address, number, whatsapp} = req.body

        if(!name || !email || !number || !address||  !whatsapp || !user)
        return res.status(400).json({err: 'Please add all the fields.'})

        
        const newStore = new Stores({
            name: name.toLowerCase(), email, address, number,  whatsapp, user: result.id
        })

        await newStore.save()

        res.json({msg: 'Success! Created a new Store'})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}