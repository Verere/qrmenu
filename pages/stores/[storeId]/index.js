import { useEffect, useContext } from 'react'
import useRouter from 'next/router'
import { getData } from '../../../utils/fetchData'
import { DataContext } from '../../../store/GlobalState'
import Menu from '../../../components/Menu'
import Bar from '../../../components/Bar'
import StoreCover from '../../../components/StoreCover'


const DetailStore = ({storeId, store}) => {
    const {state, dispatch} = useContext(DataContext)
    const {menus} = state    
    const {router}= useRouter

  useEffect(() => {
  async function fetchData() {
           const res = await getData(`stores/${storeId}/menu`)
        dispatch({type: "ADD_MENUS", payload: {menus: res.newMenu}})
  }
  fetchData();
},[]);
  
      
    async function handleCat(name){       
        const res = await getData(`stores/${storeId}/category?menu=${name}`)
        const sefCat = res.categories.filter(cat => cat.menu === name)
        dispatch({type: "ADD_CATEGORIES", payload: {categories: sefCat}})
        dispatch({type: "ADD_CAT", payload: {Cat: name}})

        router.push(`${storeId}/products?menu=${name}`) }
    



    const handleMenu = async ()=> {        
    router.push(`${storeId}/menu`)
    }

    const handleCategory = async ()=> {          
        router.push(`${storeId}/category`)        
    }

  
    return(
        <>
           
            <Bar handlemenu={handleMenu} handleCategory={handleCategory}  />    
        <StoreCover  store= {store} /> 

      <Menu menus={menus} handleCat ={handleCat}/>            
         
        </>

            )

    }
export default DetailStore

export async function getServerSideProps(context) {
    const {params}= context
    const {storeId}= params
    const res = await getData(`stores/${storeId}`)
 
    return {
      props: { store: res.store,
    storeId: storeId,
     }, 
    }
}

