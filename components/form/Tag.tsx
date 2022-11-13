import React, { FC, useEffect, useState } from 'react'
import type { TagProps } from '../../types/componentsTypes'
import styles from '../../styles/formElementsStyle/Tag.module.scss'

const Tag: FC<TagProps> = ({name, isSelected, onClick}) => {

  const [style, setStyle] = useState({backgroundColor: 'hsla(23, 100%, 95%, 1)', color: 'hsla(356, 100%, 8%, 1)'} )
  
  useEffect(()=>{
    setStyle(() =>{
      return isSelected ? {backgroundColor: 'hsla(356, 100%, 8%, 1)', color: 'hsla(23, 100%, 95%, 1)'} : {backgroundColor: 'hsla(23, 100%, 95%, 1)', color: 'hsla(356, 100%, 8%, 1)'}
    }
      )
  },[])
  
  return (
    <div className={styles.tag} onClick={onClick} style={style}>{name}</div>
  )
}

export default Tag