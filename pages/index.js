
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Info from '../components/Info'
import Footer from '../components/Footer'
import { homeObjOne, homeObjTwo } from '../components/Info/data'
import Hero from '../components/Hero'


export default function Home() {  
  
   return (    

    < > 

      <Head>
        <title>myqrglobalmenu</title>  
        <link rel="icon" href="/averit.ico" />      
      </Head>  

       <Navbar/>         
       <Hero/>

     <Info {...homeObjOne} /> 
     <Info {...homeObjTwo} /> 
     <Info {...homeObjOne} /> 
<Footer/>
    </>
  
  )
 }
