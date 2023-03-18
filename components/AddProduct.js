
  import React from 'react'
  
  import { useState, useEffect, useContext } from 'react'
  
  import { DataContext } from '../store/GlobalState'
  import {postData, getData, putData } from '../utils/fetchData'
  
  import { imageUpload } from '../utils/imageUpload';
  import styles from '../styles/Products.module.css'
  
                
  const AddProduct = ({setClose, storeId}) => {                 
        
        const initialState = {
              menu: '',
              name: '',
              price: 0,
              category: ''
          }
          const [product, setProduct] = useState(initialState)
          const [image, setImage]= useState('')
       
        const [onEdit, setOnEdit] = useState(false)
    
        const {menu, name, price, category } =product

        const {state, dispatch} = useContext(DataContext)
        const {categories, menus, auth, id} = state
      const {user}= auth
     
    // get product Id
    useEffect(() => {
      
        if(id){
          const jsonData = JSON.stringify(id)

          localStorage.setItem("ids", jsonData);
          
          // Retrieving data:
          let text = localStorage.getItem("ids");
          let obj = JSON.parse(text);

            setOnEdit(true)  
            async function fetchData() {
              const res = await getData(`stores/${storeId}/product/${obj.id}`).then(res =>{

                setProduct(res.product) 
                  setImage(res.product.image) 
              })
          }                   
      fetchData();
        }else{
            setOnEdit(false)
            setProduct(initialState)
              setImage('')  
        }
    },[id])
                
                useEffect(() => {
                  const handleMenu = async e => {
                    const res = await getData(`stores/${storeId}/menu`)
                        dispatch({type: "ADD_MENUS", payload: {menus: res.newMenu}})}

                        const handleCat = async e => {
                          const res = await getData(`stores/${storeId}/category`)
                           const sefCat = res.categories.filter(cat => cat.menu === menu)
                              dispatch({type: "ADD_CATEGORIES", payload: {categories: sefCat}})}
                handleMenu()
                handleCat()         
                   
                })
              
 
      
      const handleUploadInput =  (e) => {
          
        setImage(e.target.files[0])  
        
      }
                   const handleChangeInput = e => {
                        const {name, value} = e.target
                        setProduct({...product, [name]:value})
                        dispatch({type: 'NOTIFY', payload: {}})
                    }

                    const handleSubmit = async(e) => {
                        e.preventDefault()
                        let text = localStorage.getItem("ids");
                        let obj = JSON.parse(text);
                        const {id}=obj
                   if(!name || !price ||  !category || !menu) return dispatch({type: 'NOTIFY', payload: {error: 'Please enter all fields'}})
                
                    
                        dispatch({type: 'NOTIFY', payload: {loading: true}})
                       const url = await imageUpload(image)
                
                        let res;
                        if(onEdit){
                       
                            res = await putData(`stores/${storeId}/product/${id}`,  {...product, image:url, store:storeId})
                            if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
                        }else{
                             res = await postData(`stores/${storeId}/product`, {...product, image:url, store:storeId})
                        if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
                        }
                
                        return dispatch({type: 'NOTIFY', payload: {success: res.msg}})
                        
                    }
                 
                  return (
                    <div className={styles.container} user={user}>
                    <div className={styles.wrapper}>
                    <h1 className={styles.close} onClick={()=>setClose(true)}>x</h1>
                             
                     <form className="row" onSubmit={handleSubmit}>
                      <div className="col-md-6 mx-auto my-3">           
                             <div className="input-group mb-3">
                                        <input type="text" name="name" className="d-block my-4 w-100 p-2"
                                        placeholder="Add a new product" value={name}
                                        onChange={handleChangeInput} />               
                              </div> 
                              <div className="input-group mb-3"> 
                                      <input type="number" name="price" className="d-block w-100 p-2"
                                          placeholder="Add price" value={price}
                                          onChange={handleChangeInput} />         
                              </div> 
                                 <div className="input-group-prepend px-0 my-2">   
                                          <select name="menu" id ="menu" value ={menu}
                                           onChange={handleChangeInput} className="custom-select text-capitalize">
                                              <option>Select Menu</option>
                                              {
                                              menus.menus?.map(menu =>(
                                                      <option key={menu._id} value ={menu.name}>{menu.name}</option>
                                                  ))
                                              }
                                          </select>  
                                  </div>
                                  <div className="input-group-prepend px-0 my-2">           
                                          <select name="category" id ="category" value ={category}
                                           onChange={handleChangeInput} className="custom-select text-capitalize">
                                              <option>Select Category</option>
                                              {
                                              categories.categories?.map(category =>(
                                                      <option key={category._id} value ={category.name}>{category.name}</option>
                                                  ))
                                              }
                                          </select>               
                                  </div>         
                                         <div className="input-group mt-3">
                                        <input type ="file" className='fileInput' accept='.jpeg, .png, .jpg' onChange={handleUploadInput}/>
                                        <div className="row img-up mx-0">                       
                                        
                                        </div>
                                      </div> 
                                     <div className="input-group mt-3">
                                        <button type="submit" className="btn btn-info my-2 px-4">
                                            {onEdit ? 'Update Product': 'Create Product'}
                                        </button>
                                    </div> 
                      </div>     
                     </form>
                  
                             
                        </div>  
                        </div> 
                  )
                }
                
   export default AddProduct
                
                
                
                
                
                
                    
                                          
                                          
                
                