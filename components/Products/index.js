import React, {useState, useContext} from 'react'
import { DataContext } from '../../store/GlobalState'
import {ProductsContainer,  Img,
    ProductWrapper, ProductCard, ProductImg,
    ProductInfo, ProductTitle,
    ProductPrice, Btn, EditBtn, DeleteBtn,
    } from './ProductElements'
import {currencyFormat} from '../../utils/currency'    



const Products = ({ product, darkMode, setClose}) => {  
 const { state, dispatch } = useContext(DataContext)
 const {auth} = state
 const [closeModal, setCloseModal] = useState(true);  

 const handleEdit=(id)=>{
    dispatch({type: "ADD_ID", payload: {id}})
    setClose(false)
 }

    return (
        <ProductsContainer darkMode={darkMode}>
   
            <ProductWrapper >      
                     
                      {
                          product.length === 0 
                          ? <h2>No Products</h2>
  
                          : product?.map(product => (
                            <ProductCard key={product._id}>
                            <ProductImg >
                            {product.image?
                                <Img  src ={product.image} alt={product.alt}  />
                               :
                                <Img  src ='/fork.jpg' alt='' />
                          }
                                </ProductImg>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                               
                                <ProductPrice> {currencyFormat(product.price)}</ProductPrice>
                           
                            </ProductInfo>
                           {
                            auth.user &&
                           <Btn>
                             <EditBtn onClick={()=>handleEdit(product._id)}>Edit
                                            </EditBtn>
                            <DeleteBtn  
                             data-toggle="modal" data-target="#exampleModal"
                            onClick={() =>                                                            
                                dispatch({
                                type: 'ADD_MODAL',
                                payload: [{ 
                                    data: '', 
                                    id: product._id, 
                                    title: product.name,
                                     type: 'DELETE_PRODUCT' 
                                }]})}>Delete</DeleteBtn>
                            </Btn>
                           }
                        </ProductCard>
                  
                          ))
                        }     
            
            </ProductWrapper>

        </ProductsContainer>
    )
}

export default  React.memo(Products)
