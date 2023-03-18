import { createContext, useReducer, useEffect } from 'react'
import reducers from './Reducers'
import { getData } from '../utils/fetchData'
import {useRouter} from 'next/router'
import Cookie from 'js-cookie'



export const DataContext = createContext()
const getCokies=()=>{
  //  const cky = true
   const cky=  Cookie.get('darkMode')==='ON'?true:false
//   if (cky ==='ON')  cky=true
//   if (cky ==='OFF')  cky=false
  return cky
}

export const DataProvider = ({children}) => {
    const initialState = { 
        notify: {}, 
        auth: {}, 
         modal: [], 
         menus: [], 
         users: [], 
         categories: [], 
         stores: [],
          Cat:'',
           storedProducts:[],
           storeId:'',
           darkMode: getCokies(),
           id:''
    }

    const [state, dispatch] = useReducer(reducers, initialState)
    const {auth } = state

    useEffect(() => {

        const firstLogin = localStorage.getItem("firstLogin");
        if(firstLogin){
            getData('auth/accessToken').then(res => {
                if(res.err) return localStorage.removeItem("firstLogin")
                dispatch({ 
                    type: "AUTH",
                    payload: {
                        token: res.access_token,
                        user: res.user
                    }
                })
            })
        }
    })

useEffect(() => {
   
        // getData('menus').then(res => {
        //     if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})

        //     dispatch({ 
        //         type: "ADD_MENUS",
        //         payload: res.menus
        //     })
        // })
if (auth.token){
    getData('stores').then(res => {
        if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})

        dispatch({ 
            type: "ADD_STORES",
            payload: res.stores
        })
    })
}
    
    },[auth.token])

    useEffect(() => {
        if(auth.token){  
                getData('user', auth.token)
                .then(res => {
                    if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
                
                    dispatch({type: 'ADD_USERS', payload: res.users})
                })
           
        }else{
            dispatch({type: 'ADD_USERS', payload: []})
        }
    },[auth.token])
    return(
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}