import React, {useState, useContext, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import {useRouter} from 'next/router'
import  Link from 'next/link'
import {DataContext} from '../../store/GlobalState'
import Cookie from 'js-cookie'

import {
  Nav,
  NavbarContainer, 
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Buttons
} from './BarElements';
          

const Bar = ({ handleMenu, handleCategory}) => {
    const router = useRouter() 

    const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const {state, dispatch} = useContext(DataContext)
  const { auth } = state
  
    const handleLogout = () => {
        Cookie.remove('refreshtoken', {path: 'api/auth/accessToken'})
        localStorage.removeItem('firstLogin')
        dispatch({ type: 'AUTH', payload: {} })
        return  router.reload(window.location.pathname)
    }


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
         
        <NavbarContainer>                            
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>              
           
                  
               
            {
              Object.keys(auth).length === 0
              ?

              <NavItem>
              <Link href='/signin' >
              <NavLinks >login</NavLinks>
               </Link>
             </NavItem>
            
            :
            <>
            <Buttons onClick={handleMenu}>Create Menu</Buttons>
            <Buttons onClick={handleCategory}>Create Category</Buttons>
            <Buttons onClick={handleLogout} primary>Logout</Buttons>
            </>
            }  
                             
            </NavMenu>
          </NavbarContainer>
        </Nav>
    </>
  );
}

export default Bar;
