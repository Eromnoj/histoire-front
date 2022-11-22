import React, {FC} from 'react'
import type { RadioProps } from '../../types/componentsTypes'

import styles from '../../styles/formElementsStyle/Checker.module.scss'
import { categoryColor } from '../../utils'

import { useSelector, useDispatch } from 'react-redux'
import { bookCategory } from '../../stores'

const Radio:FC<RadioProps> = ({id, name, label}) => {
  const dispatch = useDispatch()
  
  let colorBg = categoryColor(id)

  return (
    <div className={styles.checker} style={{backgroundColor: colorBg}}>
    <input type="radio" 
    value={id}
    name={name} 
    id={id} 
    className={styles.checkbox} 
    onClick ={()=> dispatch(bookCategory({category:id}))}
    />
    <label htmlFor={id} className={styles.label}>{label}</label>
  </div>


  )
}

export default Radio