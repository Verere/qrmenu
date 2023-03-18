import React from 'react'
import styles from '../../styles/Menu.module.css'

const Menu = ({menus, handleCat}) => {
  return (
    <div className={styles.btncontainer}>
        <h1 className={styles.btnMenu}>Menu</h1>
               {menus.menus?.map(menu =>(
                        <button key={menu._id} className={styles.btn} onClick={()=>handleCat(menu.name)}>{menu.name}</button>
                        ))
                    }
    </div>
  )
}

export default React.memo(Menu)