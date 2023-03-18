
import Head from 'next/head'
import { useState, useContext, useEffect } from 'react'
import {useRouter} from 'next/router'

import { DataContext } from '../../../../store/GlobalState'
import { getData } from '../../../../utils/fetchData'
import Products from '../../../../components/Products'

import Timeline from '../../../../components/TimeLine'
import AddProduct from '../../../../components/AddProduct'

export default function Home(props) { 

  const [products, setProducts] = useState(props.products);
const [close, setClose] = useState(true); 
const [closeModal, setCloseModal] = useState(true);  
  const router = useRouter()
  const {state, dispatch} = useContext(DataContext)
  const {storedProducts, darkMode} = state
  const {storeId, menu} = router.query
  
 useEffect(()=>{
   dispatch({type: "ADD_PRODUCT",  payload: {storedProducts: products}})  
 },[menu])

    function handleClick(name){
    let tempProducts= [...storedProducts.storedProducts]
const filteredProducts = tempProducts.filter(product => product.category === name)
    setProducts(filteredProducts)  
  }
   return (
     
    < >  
      <Head>
        <title>QR GLOBAL MENU</title>
        <link rel="icon" href="/averit.ico" />
      </Head>  
 <Timeline setClose={setClose} handleClick ={handleClick} menu={menu}/>
   <Products heading='Our menu' product ={products} darkMode={darkMode} setClose={setClose} setCloseModal={setCloseModal} />           
 {!close  && <AddProduct storeId={storeId} setClose={setClose} /> }

    </>
  
  )
 }

export async function getServerSideProps({params, query}) {
    const {storeId}= params
    const menu = query.menu 

  const res = await getData(
      `stores/${storeId}/product?menu=${menu}`
  )

  return {
    props: {
      products:res.products|| null,
      result: res.result|| null
    }, // will be passed to the page component as props
  }
}