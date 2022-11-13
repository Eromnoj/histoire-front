import React,{FC} from 'react'
import styles from '../../styles/formElementsStyle/TextArea.module.scss'
import type {TextAreaProps} from '../../types/componentsTypes'


const TextArea:FC<TextAreaProps> = ({id, name, label, value, onChange, rows}) => {
  return (
    <div className={styles.textAreaDiv}>
      <label htmlFor={name} className={styles.label}>{label} :</label>
      <textarea className={styles.field} id={id} name={name} value={value} onChange={onChange} rows={rows}/>
    </div>
  )
}

export default TextArea