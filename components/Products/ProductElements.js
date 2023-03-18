import styled from "styled-components";


export const ProductsContainer = styled.div`
position:absolute;
top: 30vh;
width: 100vw;
min-height: 70vh;
//padding: 5rem 1rem; //calc((100vw -1300px)/2);
background: ${(props) => props.darkMode ? props.theme.colors.background1 : props.theme.colors.background2};
color: ${(props) => props.darkMode ? props.theme.colors.colorWhite : props.theme.colors.colorDark};
@media ${props => props.theme.breakpoints.md} {

     top:25;
     min-height:75vh;
     margin:0;
  }
`
 
export const ProductWrapper= styled.div`
display: flex;
flex-wrap:wrap;
justify-content: center;
margin: 0 auto;
`
    
export const ProductCard = styled.div`
margin: 1rem 1.5rem;
line-height: 2;
width: 20rem;

@media ${(props) => props.theme.breakpoints.sm }{
display: flex;
margin: .5rem 0;
width: 100%;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid ${(props) => props.darkMode ? props.theme.colors.colorWhite :props.theme.colors.colorWhite};

}
`
export const Img = styled.img`
width: 20rem;
height:20rem;

@media ${(props) => props.theme.breakpoints.sm }{
    width: 7.5rem;
height:7.5rem;
}
`
export const ProductImg =styled.div`
max-width: 100%;
min-width: 15rem;
height:auto;
box-shadow: 8px 8px #fdc500;


@media ${(props) => props.theme.breakpoints.sm }{
    height:8rem;
min-width: 8rem;
max-width: 8rem;
box-shadow:none;
overflow: hidden;
margin-left: 1rem;
border-radius: 1rem;
}
`
export const ProductInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
text-align: center;

@media ${(props) => props.theme.breakpoints.sm }{
 width:75%;
 margin-right:.8rem;
 justify-content: space-between;
}`
export const ProductsHeading = styled.h1`
font-size: clamp(2rem, 2.5vw, 3rem);
text-align: center;
margin-bottom: 5rem;
`
  
  

export const ProductTitle = styled.h2`
font-weight: bold;
font-size: clamp(1.6rem, 2.0vw, 2.3rem);
max-height:5rem;
text-transform: capitalize;

@media ${(props) => props.theme.breakpoints.sm }{
font-size: clamp(1.2rem, 1.5vw, 2rem);
}`

export const ProductDes = styled.p`
margin-bottom : 0.1rem;
`

export const ProductPrice = styled.div`
font-size: clamp(1.7rem, 2.0vw, 2.3rem);
@media ${(props) => props.theme.breakpoints.sm }{
font-size: clamp(1.2rem, 1.5vw, 2rem);
}`


export const ProductButton= styled.button`
font-size: 2rem;
padding: 1rem 1.5rem;
border: none;
background: #e31837;
color: #fff;
transition: 0.2 ease-out;
border-radius: 50px;


&:hover {
    background: #ffc500;
    transition: 0.2 ease-out;
    cursor: pointer;
    color: #000;
}
`
export const EditBtn= styled.button`
font-size: 2rem;
padding: 1rem 1.5rem;
border: none;
background: #ffc500;
color: #fff;
transition: 0.2 ease-out;
border-radius: 50px;
margin-bottom: .2rem;

&:hover {
    background: #f033;
    transition: 0.2 ease-out;
    cursor: pointer;
    color: #fff;
}
@media ${(props) => props.theme.breakpoints.sm }{
font-size: clamp(1.2rem, 1.5vw, 2rem);
padding: .7rem 1rem;
}`
export const DeleteBtn= styled.button`
font-size: 2rem;
padding: 1rem 1.5rem;
border: none;
background: #e31837;
color: #fff;
transition: 0.2 ease-out;
border-radius: 50px;


&:hover {
    background: #ffc500;
    transition: 0.2 ease-out;
    cursor: pointer;
    color: #000;
}
@media ${(props) => props.theme.breakpoints.sm }{
font-size: clamp(1.2rem, 1.5vw, 2rem);
padding: .7rem 1rem;
}`
export const Btn= styled.div`
display: flex;
flex-direction: column;
@media ${(props) => props.theme.breakpoints.sm }{
margin-right: .3rem;
}`