import React,{FC} from 'react'
import type {CheckerProps} from '../../types/componentsTypes'
import styles from '../../styles/Checker.module.scss'
import { categoryColor } from '../../utils'

const Checker: FC<CheckerProps> = ({
  id,
  name,
  label
}) => {

  let colorBg = categoryColor(name)
  return (
    <div className={styles.checker} style={{backgroundColor: colorBg}}>
      <input type="checkbox" name={name} id={id} className={styles.checkbox} />
      <label htmlFor={id} className={styles.label}>{label}</label>
    </div>
  )
}

export default Checker