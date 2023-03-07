import connectDB from '../../../../../utils/connectDB'
import Menus from '../../../../../models/menuModel'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await createMenu(req, res)
            break;
        case "GET":
            await getMenus(req, res)
            break;
    }
}

const createMenu = async (req, res) => {
    try {
        const { storeId } = req.query;
      
        const { name } = req.body
        if(!name) return res.status(400).json({err: "Name can not be left blank."})

        const newMenu = new Menus({name, store: storeId})

        await newMenu.save()
        res.json({
            msg: 'Success! Created a new menu.',
            newMenu
        })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const getMenus = async (req, res) => {
    try {       
        const { storeId } = req.query;
        const newMenu = await Menus.find({store :storeId})

        res.json({newMenu})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}