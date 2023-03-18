import {useState, useEffect} from 'react'
const Toast = ({msg, handleShow, bgColor}) => {

  const [tost, setTost] = useState('show')

    useEffect(()=>{       
     setTimeout(() => {
         setTost('hide')
    }, 4000);
    },[]);
    
    return(
        <div id="liveToast"  role="alert" aria-live="assertive" aria-atomic="true"
        className={`toast ${tost} position-fixed text-light ${bgColor}`} 
        style={{ top: '5px', right: '5px', zIndex: 9, minWidth: '270px' }} >

            <div className={`toast-header ${bgColor} text-light`}>
                <strong className="mr-auto text-light">{msg.title}</strong>

                <button type="button" className="ml-2 mb-1 close text-light" 
                data-dismiss="toast" style={{ outline: 'none'}} 
                onClick={handleShow}>x</button>
            </div>

            <div className="toast-body">{msg.msg}</div>

        </div>
    )
}

export default Toast