import React, {FC} from 'react'
import type { TextFieldProps } from '../../types/componentsTypes'

import styles from '../../styles/formElementsStyle/TextField.module.scss'


const TextField:FC<TextFieldProps> = ({id, name, type, label, value, onChange}) => {

  return (
    <div className={styles.inputDiv}>
      <label htmlFor={name} className={styles.label}>{label} :</label>
      <input className={styles.field} type={type ? type : 'text'} id={id} name={name} value={value} onChange={onChange}/>
    </div>
  )
}

export default TextField