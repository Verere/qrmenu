import { useContext } from 'react'
import { DataContext } from '../store/GlobalState'
import { deleteItem } from '../store/Actions'
import { deleteData } from '../utils/fetchData'
import {useRouter} from 'next/router'
import styles from '../styles/Modal.module.css'

const Modal = ({setCloseModal}) => {
    const {state, dispatch} = useContext(DataContext)
    const { modal, auth } = state
    const router = useRouter()

  

    const deleteProduct = (item) => {
        dispatch({type: 'NOTIFY', payload: {loading: true}})
        deleteData(`product/${item.id}`, auth.token)
        .then(res => {
            if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
            dispatch({type: 'NOTIFY', payload: {success: res.msg}})
            return router.push('/')
        })
    }

    const handleSubmit = () => {
        if(modal.length !== 0){       
               
        
                if(item.type === 'DELETE_PRODUCT') deleteProduct(item)
        
                dispatch({ type: 'ADD_MODAL', payload: [] })
        }
        setCloseModal(false)
    }

    return(
        <div className={styles.modals}>
            <div  >
                <div className={styles.content}>
                <div >
                    <h5 className="text-capitalize" >
                        {modal.length !== 0 && modal[0].title}
                    </h5>
                    <button type="button" onClick={setCloseModal(true)}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className={styles.mod}>
                    Do you want to delete this item?
                </div>
                <div >
                    <button type="button" className="btn btn-secondary" onClick={handleSubmit}>Yes</button>
                    <button type="button" className="btn btn-primary" onClick={setCloseModal(true)}>Cancel</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal