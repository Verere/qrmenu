import { useState, useEffect } from 'react'
import { getData } from '../../utils/fetchData'
import StoreList from '../../components/StoreLists'
import { useRouter } from 'next/router'

const Store = ({stores}) => {

    const [loaded,setLoaded] = useState(false)
    const Router = useRouter()

    useEffect(() => {
        const {pathname} = Router
        // conditional redirect
        if(pathname == '/stores'  ){
            // with router.push the page may be added to history
            // the browser on history back will  go back to this page and then forward again to the redirected page
            // you can prevent this behaviour using location.replace
            Router.push('/')

           //location.replace("/hello-nextjs")
        }else{
            setLoaded(true)
        }
      },[]);

    if(!loaded){
        return <div></div> //show nothing or a loader
    }

   
     
    return(
        <div >
       
                 {
                stores.map(store=> (
                    < >
                    <StoreList key={store._id} store ={store}/>

                    </>
                ))
            }
           

        </div>
    )
}

export default Store

export async function getServerSideProps() {
  
    const res = await getData(`stores`)
    // server side rendering
    return {
      props: { stores: res.stores }, // will be passed to the page component as props
    }
}

