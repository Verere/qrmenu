import Head from 'next/head'
import {useContext, useState} from 'react'
import useRouter from 'next/router'
import { DataContext } from '../../../../store/GlobalState';
import { postData } from '../../../../utils/fetchData';
import { imageUpload } from '../../../../utils/imageUpload';


const Categories = () => {
   
    const [menu, setMenu]= useState('')
    const [name, setName]= useState('')
    const [image, setImage]= useState()
    const {state, dispatch} = useContext(DataContext)
    const {menus} = state
    const {router}= useRouter
    const [id, setId] = useState('')
  

    const createCategory = async () => {
      const {storeId} = router.query
        const url = await imageUpload(image)
       
        
        if(!name) return dispatch({type: 'NOTIFY', payload: {error: 'Name can not be left blank.'}})
        if(!menu) return dispatch({type: 'NOTIFY', payload: {error: 'Please select menu.'}})

        dispatch({type: 'NOTIFY', payload: {loading: true}})
       
        let res;
       
            res = await postData(`stores/${storeId}/category`, {name, menu, image:url, store:storeId})
            if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
           
      
        setName('')
        setId('')
        return dispatch({type: 'NOTIFY', payload: {success: res.msg}})
    }

    const handleUploadInput =  (e) => {
    
        setImage(e.target.files[0])
    //     let err 
    // if (file.size> 1024 * 1024)
    // return err ='Image should not be larger than 1mb'
    // if (file.type !== 'image/jpeg' && file.type !== 'image/png'){

    //     return err = 'Only jpeg or png format is supported'
    // }
     
    // if (err) dispatch({type: 'NOTIFY', payload: {error:err}})

         
}
const handleChangeInput = e => {
    setMenu(e.target.value)
    dispatch({type:'NOTIFY', payload:{}})
}
    return(
        <div className="col-md-6 mx-auto my-3">
            <Head>
                <title>Categories</title>
            </Head>
            <div>
                <select onChange={handleChangeInput}>
                    <option>Select Menu</option>
                    {
                       menus.menus?.map(menu =>(
                            <option key={menu._id} value ={menu.name}>{menu.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className='col-md-6 my-4'>
                <div className='input-group mb-3'>
                    <span className='input-group-text'>Upload</span>
                </div>
                <div className='custom-file border rounded'>
                    <input type ="file" className='fileInput' accept='.jpeg, .png, .jpg' onChange={handleUploadInput}/>
                </div>
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control"
                placeholder="Add a new category" value={name}
                onChange={(e)=>setName(e.target.value)} />

                <button className="btn btn-secondary ml-1"
                onClick={createCategory}>
                    {id ? "Update": "Create"}
                </button>
            </div>

                      
        </div>
    )
}

export default Categories