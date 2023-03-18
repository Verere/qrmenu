import styled from "styled-components";


export const HeroContainer = styled.div`
background-image: linear-gradient(to right bottom, rgba(10,60,10,0.8), rgba(241, 208, 20,0.8));
height: 100vh;
width:100vw;
z-index : 1;
overflow: hidden;
`;

 
export const HeroContent= styled.div`
position: absolute;
height: calc (100vh-80px);
max-height: 100%;
width: 100vw;
margin-top: 6rem;
`

export const HeroItems= styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items: flex-start;
height:100vh;
max-height: 100%;
padding: 0 2rem;
width: 650px;
color: #fff;
text-transform: capitalize;
line-height:1;
font-weight: bold;

@media screen and (max-width: 650px){
    width: 100%;
}`





 export const HeroH1 = styled.h1`
 font-size: clamp(2.5rem, 10vw, 5rem);
 margin-bottom: 2rem;
 box-shadow: 3px 5px #e9ba23;
 letter-spacing: 2px;`

