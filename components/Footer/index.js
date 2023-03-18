import React from 'react'
import  Link from 'next/link'

import { FaFacebook,
    FaLinkedin,
    FaYoutube,
    FaTwitter,
    FaInstagram,
    FaWhatsapp
} from 'react-icons/fa'

import {FooterContainer,
    FooterWrap, 
    SocialMedia, 
    SociaMediaWrap,
    SocialIcons,
    SocialIconLink} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SociaMediaWrap>
                    <SocialIcons>       

                        <Link href="/">  
                        <SocialIconLink>
                            
                          <FaFacebook/>
                        </SocialIconLink>
                        </Link> 
                        <Link href="/">          
                        <SocialIconLink>
                            
                          <FaYoutube/>
                        </SocialIconLink>
                        </Link>
                        <Link href="/">          
                        <SocialIconLink>
                            
                          <FaTwitter/>
                        </SocialIconLink>
                        </Link>
                        <Link href="/">          
                        <SocialIconLink>
                            
                          <FaInstagram/>
                        </SocialIconLink>
                        </Link> 
                        <Link href="/">          
                        <SocialIconLink>
                            
                          <FaLinkedin/>
                        </SocialIconLink>
                        </Link>  
                        </SocialIcons> 
                         <Link href="http://api.whatsapp.com/send?phone=2348060967320">          
                        <SocialIconLink>
                            
                          <FaWhatsapp/>
                        </SocialIconLink> 
                         </Link>          
                    </SociaMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
