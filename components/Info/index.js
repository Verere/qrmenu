import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TopLine, TextWrapper, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements'

const Info = ({lightBg, id, imgStart, topline, lightText, heading, darkText, description,}) => {
    return (
        <>
         <InfoContainer lightBg={lightBg} id={id}>
         <InfoWrapper>
         <InfoRow imgStart={imgStart}>
         <Column1>
         <TextWrapper>
         <TopLine>{topline}</TopLine>
         <Heading lightText={lightText}>{heading}</Heading>
         <Subtitle darkText= {darkText}>{description}</Subtitle>
         <BtnWrap>
        </BtnWrap>
         </TextWrapper></Column1>
         <Column2>
         <ImgWrap>
         <Img /></ImgWrap></Column2>
         </InfoRow></InfoWrapper>
         </InfoContainer>   
        </>
    );
}

export default Info;
