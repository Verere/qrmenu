import connectDB from '../../../../../utils/connectDB'
import Products from '../../../../../models/productModel'
// import auth from '../../../middleware/auth'

connectDB()

export default  async (req, res) => {
    switch(req.method){
        case "GET":
            await getProducts(req, res)
            break;
        case "POST":
            await createProduct(req, res)
            break;
    }
}

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
        const queryObj = {...this.queryString}

       
            
        if(queryObj.menu !== ''){
            this.query.find({menu: queryObj.menu})  
        }else if  (queryObj.category !== ''){
            this.query.find({category: queryObj.category}) 
        }
        this.query.find()
        return this;
    }  
   
}

const getProducts = async (req, res) => {
    try {
        const { storeId } = req.query;
         const features = new APIfeatures(Products.find({store: storeId}), req.query).filtering()
        const products = await features.query      
        res.json({         
            result: products.length,
            products
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const createProduct = async (req, res) => {
    try {
        const { storeId } = req.query;

        const {name, price, description, category , menu, image} = req.body

        if(!name || !price ||  !category || !menu)
        return res.status(400).json({err: 'Please add all the fields.'})

        const newProduct = new Products({
            name: name.toLowerCase(), price, description, menu, category, image, store: storeId
        })

        await newProduct.save()

        res.json({msg: 'Success! Product Created'})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}