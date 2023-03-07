import styled from "styled-components";

export const DisplayContainer = styled.div`
 display:flex;
justify-content:center;
align-items: center;
margin-bottom:5rem;
margin-top: 5rem;
height: 45vh;
max-width: 50vw;
border: .2rem solid wheat;
margin: 0 auto;
margin-top: 7rem;
border-radius:100px;
overflow:hidden;
@media ${props => props.theme.breakpoints.md} {
    /* font-size: 1.8rem; */
    max-width: 80vw;
    padding: 1rem 0; 
  }
`
export const DisplayWrapper = styled.div`
width:100%;
height: 120%;
  z-index :-9;
  overflow:hidden;
`
export const StoreImg = styled.img`
width: 100%;
height:120%;
@media ${props => props.theme.breakpoints.md} {
    /* font-size: 1.8rem; */
    max-width: 80vw;
  }
`
export const Img = styled.img`
height:100vh;
width: 100vw;
object-fit: cover;
`
export const StoreTitle = styled.h2`
font-size: 3rem;
`