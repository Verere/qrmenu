import styled from "styled-components";


export const FooterContainer = styled.footer`
width: 100vw;
background: #0d0909;
bottom: 0;
left: 0;
`;

export const FooterWrap = styled.div`
padding: 16px 24px;
display: flex;
flex-direction: column;
justify-content: center;
max-width: 1300px;
margin: 0 auto;
bottom: 0;
left: 0;

max-width:30vw;

`

export const SocialMedia = styled.section`
max-width: 1300px;
width: 100%;
` 
export const SociaMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 16px auto ;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`



export const SocialIcons = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
width: 240px;
`


export const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;`