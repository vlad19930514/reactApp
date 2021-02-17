import React, { useEffect, useState } from 'react';
import styles from './dropdown.css'
interface IDropdownProps {
    button: React.ReactNode
    children: React.ReactNode
    isOpen?:boolean
    onOpen?:()=>void
    onClose?:()=>void
}

const Dropdown: React.FC<IDropdownProps> = ({button,children,isOpen,onOpen,onClose}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen)
   
    useEffect(() => {
        setIsDropdownOpen(isOpen)
        
    }, [isOpen])
    const handleOpen = ()=>{
        if(isOpen === undefined){
            setIsDropdownOpen(!isDropdownOpen)
        }
    }
  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
          {button}
      </div>
      {isDropdownOpen && (
          <div className={styles.listContainer}>
              <div className={styles.list} onClick={()=>setIsDropdownOpen(false)}>
                  {children}
              </div>
          </div>
      )}
    </div>
  );
};

export default Dropdown;
