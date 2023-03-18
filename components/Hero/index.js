       import  {HeroContainer, HeroContent, HeroItems, HeroH1, }  from './HeroElements';
       import styles from '../../styles/TimeLine.module.css'
const Hero = () => {
 
 
    return(
      <>
      <header className={styles.header}>

      <HeroContainer >            
          <HeroContent>
             <HeroItems >
              <HeroH1>QR GLOBAL MENU</HeroH1>
             
            </HeroItems>            
          </HeroContent>  
        </HeroContainer>     
      </header>
      </>
    )
};
export default Hero;