
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;      
    background-color: rgb(15, 27, 27); 
    width: 100%;
    height: 30vh;
    position: fixed;
    top: 0;
    z-index: 23;
  
`
export const CarouselContainer = styled.div`
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;  
  position: relative;
  width: 100%;
  height:100%;
  margin:  .5rem;
position:relative;
background-color: rgb(15, 27, 27); 
overflow: hidden;
  /* margin-top:1rem; */
  @media ${props => props.theme.breakpoints.sm} {
      align-content: start;
      scroll-snap-align: start;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x mandatory;
      touch-action: pan-x;
      justify-content: initial;
      margin-bottom: 8px;
    }
`

export const CarouselWrapper= styled.div`
    display: flex;  
  padding:0 .5rem;
  align-items: center;  
  width: 80%;
  height: 100%;  
 
  transition: all 1.5s ease-in-out;
  @media ${props => props.theme.breakpoints.sm} {
    width: 500vw;
    align-content: center;
    scroll-snap-align: start;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }`

export const Img = styled.img`
/* width: 8rem;
max-height:60%; */

   width: 100%;
   max-height: 60%;
object-fit: cover;


@media ${(props) => props.theme.breakpoints.sm }{
  
max-height:60%;
}
`

export const ImgContainer = styled.div`
  display: flex;
   flex-direction: column;
  justify-content: space-between; 
  align-items: center;
  margin-right: 2rem;
  border: 2px solid rosybrown;
  border-radius: 20%;
width:15rem;
height: 80%;
overflow: hidden;
@media ${props => props.theme.breakpoints.md} {
  width:8rem;
    margin-right: 1rem;
    /* padding-right: 32px; */
  }
`

export const TextContainer = styled.div` 
  height:40%;
`
export const ProductsHeading2 = styled.h1`
font-size: clamp(1.0rem, 1.5vw, 2.0rem);
text-align: center;
text-transform: uppercase;
margin-bottom: 0;`
  
  export const ProductsHeading = styled.h2`
  font-size:  clamp(1.2rem, 2vw, 3rem);
  text-align: center;
  text-transform: uppercase;
  height:10%;
  background-color:  rgb(15, 27, 27);  
  `
     

export const CarouselItemText = styled.h2`
 font-weight: bold;
font-size: clamp(1.0rem, 1.5vw, 2.0rem);
max-height:5rem;
margin-top: .1rem;
text-transform: uppercase;
  color: white;

  @media ${props => props.theme.breakpoints.md} {
    /* font-size: 1.8rem; */
    display:flex;
  align-self:center;
  justify-self: center;
    line-height: 18px;
    padding: 1rem 0; 
    font-size: clamp(1rem, 1.5vw, 2.0rem);
  }
  @media ${props => props.theme.breakpoints.sm} {
    /* font-size: 10px; */
    line-height: 16px;
    padding-right: 0;
  }
`
export const Nav = styled.div`
padding: 0 1rem 0 1rem;
display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height:10%;
  margin-top:.5rem;
  background-color:  rgb(15, 27, 27);  
`
//export const CarouselItemImg = styled.svg`
//   margin-left: 21px;
//   width: 100%;

//   @media ${props => props.theme.breakpoints.sm} {
//     -webkit-mask-image: none;
//     margin-left: 2rem;
//     overflow: visible;
//   }
// `
// export const CarouselItem = styled.div`
//   background: #fff;
//   border-radius: 3px;
//   max-width: 100%;
// color: #fff;
//   @media ${props => props.theme.breakpoints.md} {
//     max-width: 124px;
//   }
  
//   @media ${props => props.theme.breakpoints.sm} {
//     margin-left: 32px;
//     min-width: 120px;
//     background: #0E131F;
//     padding: 4px;
//     align-content: start;
//     scroll-snap-align: start;
//     border-radius: 3px;
//     overflow: visible;
//     position: relative;
//     height: fit-content;
    
//     ${(props) => props.active === props.index ? `opacity: 1` : `opacity: 0.5`}; 
//   }
// `

// export const CarouselItemTitle = styled.h4`
//   font-weight: bold;
//   font-size: 24px;
//   line-height: 32px;
//   letter-spacing: 0.02em;
//   display: flex;
//   /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
//   /* background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
//   -webkit-background-clip: text; */
//   -webkit-text-fill-color: transparent;
//   margin-bottom: 8px;

//   @media ${props => props.theme.breakpoints.md} {
//     font-size: 20px;
//     line-height: 28px;
//     margin-bottom: 4px;
//   }
  
//   @media ${props => props.theme.breakpoints.sm} {
//     font-size: 16px;
//     line-height: 24px;
//   }
// `
// export const CarouselButtons = styled.div`
//   width: 288px;

//   display: none;
//   visibility: hidden;

//   @media ${props => props.theme.breakpoints.sm} {
//     display: flex;
//     visibility: visible;
//     margin-bottom: 48px;
//   }
// `

// export const CarouselButton = styled.button`
//   box-sizing: border-box;
//   background: none;
//   padding: 4px;
//   border: none;
//   cursor: pointer;
//   margin-right: 4px;
//   opacity: ${(props) => props.active === props.index ? `1` : `.33`};
//   transform: ${(props) => props.active === props.index ? `scale(1.6)` : `scale(1)`};

//   &:focus {
//     outline: none;
//   }
// `

// export const CarouselButtonDot = styled.div`
//   background-color: white;
//   border-radius: 10px;
//   margin: auto;
//   width: 3px;
//   height: 3px;
// `