import React from 'react'
import Dropdown from '../../../Dropdown/Dropdown'
import BlockIcon from '../../../icons/BlockIcon'
import MenuIcon from '../../../icons/MenuIcon'
import WarningIcon from '../../../icons/WarningIcon'
import Text, { Ecolors } from '../../../Text/Text'
import style from './menu.css'

function Menu() {
    return (
        <div className={style.menu}>
            

            <Dropdown 
            button={
                <button className={style.menuButton}>
                <MenuIcon/>
                            </button>
           }
           >
               <div className={style.dropdown}>
               Menu
               <WarningIcon/>пожаловаться
               <div><BlockIcon/>скрыть</div>
               
                 <button className={style.closeButton}>
<Text mobileSize={12} size={14} color={Ecolors.orange} bold> Закрыть</Text>
                </button> 
               </div >
                
            </Dropdown>
            
        </div>
    )
}

export default Menu
