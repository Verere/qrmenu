import Head from 'next/head'
import {useContext, useState} from 'react'
import useRouter from 'next/router'
import { DataContext } from '../../../../store/GlobalState';
import {postData } from '../../../../utils/fetchData';

const Menus = () => {
    const [name, setName] = useState('')
    const {state, dispatch} = useContext(DataContext)
    const {menus} = state
    const {router}= useRouter
    const [id, setId] = useState('')

  
    

    const createMenu = async () => {

     const  {storeId}  = router.query
   
        if(!name) return dispatch({type: 'NOTIFY', payload: {error: 'Name can not be left blank.'}})

        dispatch({type: 'NOTIFY', payload: {loading: true}})

        let res;
      
            res = await postData(`stores/${storeId}/menu`, {name, store: storeId})
         dispatch({type: 'NOTIFY', payload: {error: res.err}})
            dispatch({type: "ADD_MENUS", payload: [...menus, res.menus]})
        
        setName('')
        setId('')
        return dispatch({type: 'NOTIFY', payload: {success: res.msg}})
    }


    return(
        <div className="col-md-6 mx-auto my-3">
            <Head>
                <title>Categories</title>
            </Head>

            <div className="input-group mb-3">
                <input type="text" className="form-control"
                placeholder="Add a new Menu" value={name}
                onChange={e => setName(e.target.value)} />

                <button className="btn btn-secondary ml-1"
                onClick={createMenu}>
                    {id ? "Update": "Create"}
                </button>
            </div>
           

           
           
        </div>
    )
}

export default Menus