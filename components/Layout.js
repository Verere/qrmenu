import React from 'react'
import Notify from './Notify'
import Modal from './Modal'

function Layout({children}) {
    return (
        <>
           <Notify />
            <Modal />
            {children}
        </>
    )
}

export default Layout
