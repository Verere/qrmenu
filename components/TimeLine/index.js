import React, { useContext } from 'react';
import {Nav, ProductsHeading,
   ProductsHeading2, Container,
    CarouselWrapper, ImgContainer,
     TextContainer, CarouselContainer, CarouselItemText, } from './TimeLineStyles';
import { DataContext } from '../../store/GlobalState';
import styles from '../../styles/TimeLine.module.css'

const Timeline = ({ setClose, handleClick, menu}) => {
  const {state} = useContext(DataContext)
  const {categories, auth} = state

  const handleProduct = () =>{
     setClose(!close)}

  
  return (
    <Container>
      <Nav>     
<ProductsHeading2>Categories</ProductsHeading2>
 {auth.user && <button type="button" onClick={handleProduct} className="btn btn-danger">
  Create Products
</button>}
      </Nav>
     
      
      <CarouselContainer >
      
   
      <CarouselWrapper >
          {categories.categories?.map((item) => (   

            <ImgContainer key={item._id} onClick={()=>handleClick(item.name)}>
             
                  {item.image ?        
                 
                     <img src={item.image} alt ='' height='75' width ='75' className={styles.imageWrapper}/>               
                      :
                      <img src='/fork.jpg' alt ='' height='75' width ='75'className={styles.imageWrapper}/>               
               
                  }
                  <TextContainer>
                <CarouselItemText>{item.name}</CarouselItemText>
                  </TextContainer>
             
            </ImgContainer>
          ))}
      
    </CarouselWrapper>
     
            </CarouselContainer>
    <ProductsHeading>{menu} </ProductsHeading>

    </Container>
  );
};

export default React.memo(Timeline);
