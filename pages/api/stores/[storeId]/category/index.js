import connectDB from '../../../../../utils/connectDB'
import Categories from '../../../../../models/categoriesModel'


connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await createCategory(req, res)
            break;
        case "GET":
            await getCategories(req, res)
            break;
    }
}

const createCategory = async (req, res) => {
    try {
        const { storeId } = req.query;
      
        const { name, menu, image } = req.body
        if(!name) return res.status(400).json({err: "Name can not be left blank."})
        if(!menu) return res.status(400).json({err: "Please Select Menu."})

        const newCategory = new Categories({name, menu, image , store : storeId })

        await newCategory.save()
        res.json({
            msg: 'Success! Created a new category.',
            newCategory
        })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const getCategories = async (req, res) => {
    try {
        const { storeId } = req.query;
        const categories = await Categories.find({store : storeId } )

        res.json({categories})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}