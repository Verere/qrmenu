import {useContext} from 'react'
import {DataContext} from '../store/GlobalState'
import Loading from './Loading'
import Toast from './Toast'

const Notify = () => {
    const {state, dispatch} = useContext(DataContext)
    const { notify } = state


    return(
        <> 
       
           {notify.loading && <Loading />}
             {notify.error && 
                <Toast
                    msg={{ msg: notify.error, title: "Error" }}
                    bgColor="bg-danger"
                    handleShow ={() => dispatch({ type: 'NOTIFY', payload: {} })}
                />
            }

            {notify.success && 
                <Toast
                    msg={{ msg: notify.success, title: "Success" }}
                    bgColor="bg-success"
                     handleShow ={() => dispatch({ type: 'NOTIFY', payload: {} })}
                />
            } 
        </>
    )
}


export default Notify
