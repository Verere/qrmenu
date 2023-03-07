
  import React from 'react'
  
  import { useState, useEffect, useContext } from 'react'
  
  import { DataContext } from '../store/GlobalState'
  import {postData, getData, putData } from '../utils/fetchData'
  
  import { imageUpload } from '../utils/imageUpload';
  import styles from '../styles/Products.module.css'
  
                
  const Crate = ({setClose}) => {                 
        
        const initialState = {
            name: '',
            address: '',
            slug: '',
            email: '',
            number: 0,
          }
          const [store, setStore] = useState(initialState)
          const [logo, setLogo]= useState('')
       
        const [onEdit, setOnEdit] = useState(false)
    
        const {name, address, slug, email, number} =store

        const {state, dispatch} = useContext(DataContext)
        const {categories, menus, auth, id} = state
      const {user}= auth
     
   
 
      
      const handleUploadInput =  (e) => {
          
        setLogo(e.target.files[0])  
        
      }
                   const handleChangeInput = e => {
                        const {name, value} = e.target
                        setProduct({...store, [name]:value})
                        dispatch({type: 'NOTIFY', payload: {}})
                    }

                    const handleSubmit = async(e) => {
                        e.preventDefault()
                     
                   if(!name || !address ||  !slug || !email|| !number) return dispatch({type: 'NOTIFY', payload: {error: 'Please enter all fields'}})
                
                    
                        dispatch({type: 'NOTIFY', payload: {loading: true}})
                       const url = await imageUpload(logo)
                
                        
                          const   res = await postData(`stores`, {...store, logo:url})
                        if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
                      
                
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
                                        placeholder="Add a new store" value={name}
                                        onChange={handleChangeInput} />               
                              </div> 
                          
                             <div className="input-group mb-3">
                                        <input type="text" name="address" className="d-block my-4 w-100 p-2"
                                        placeholder="Add Address" value={address}
                                        onChange={handleChangeInput} />               
                              </div> 
                              <div className="input-group mb-3">
                                        <input type="text" name="slug" className="d-block my-4 w-100 p-2"
                                        placeholder="Add Slug" value={slug}
                                        onChange={handleChangeInput} />               
                              </div> 
                              <div className="input-group mb-3"> 
                                      <input type="text" name="number" className="d-block w-100 p-2"
                                          placeholder="Add Contact number" value={number}
                                          onChange={handleChangeInput} />         
                              </div> 
                              <div className="input-group mb-3"> 
                                      <input type="email" name="email" className="d-block w-100 p-2"
                                          placeholder="Add  Email" value={email}
                                          onChange={handleChangeInput} />         
                              </div> 
                            
                                      
                                         <div className="input-group mt-3">
                                        <input type ="file" className='fileInput' accept='.jpeg, .png, .jpg' onChange={handleUploadInput}/>
                                        <div className="row img-up mx-0">                       
                                        
                                        </div>
                                      </div> 
                                     <div className="input-group mt-3">
                                        <button type="submit" className="btn btn-info my-2 px-4">
                                          Create Store
                                        </button>
                                    </div> 
                      </div>     
                     </form>
                  
                             
                        </div>  
                        </div> 
                  )
                }
                
   export default Crate
                
                
                
                
                
                
                    
                                          
                                          
                
                