import React from 'react';
import Link from 'next/link'
const Index = ({store}) => {


    return (

        <div>
        <Link href={`stores/${store._id}`} passHref>
                               <h1>{store.name}</h1>  

                </Link>
                               <hr />       
      
        </div>
    );
}

export default Index;
