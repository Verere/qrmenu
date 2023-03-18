 import React, {useState,useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from '../../styles/TimeLine.module.css'
import  Link from 'next/link'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements';
          

const Navbar = () => {

    const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  


  useEffect(() => {
      const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(!button);
    } else {
      setButton(true);
    }
  }
    showButton();
  }, []);
  

  
   
  return (
    <>
        <Nav>          
          <Link  href="#">
            <NavLogo className="navbar-brand logo">
              <div className={styles.logoBox}>
                <img className= {styles.logo } 
                        src="/fork.jpg"
                        alt="logo"
                        
                    />
              </div>
            <span className={styles.logoText}  style={{color: '#fff', paddingLeft:'5px'}}>Qr Global Menu</span>
            </NavLogo>
        </Link>

        <NavbarContainer>                            
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>              
        
                <NavItem>
                  
                  <Link href='#' >
                  <NavLinks >Contact Us</NavLinks>
                   </Link>
                 </NavItem>
               <NavItem>
               <Link href='/stores' >
               <NavLinks >Register</NavLinks>
                </Link>
              </NavItem> 
                 <NavItem>
               <Link href='#' >
               <NavLinks >FAQ</NavLinks>
                </Link>
              </NavItem> 
               <NavItem>
               <Link href='/signin' >
               <NavLinks >login</NavLinks>
                </Link>
              </NavItem>
             
             
                             
            </NavMenu>
          </NavbarContainer>
        </Nav>
    </>
  );
}

export default  Navbar;
