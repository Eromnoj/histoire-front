import React, { FC, ReactNode } from 'react'
import styles from '../../styles/formElementsStyle/Select.module.scss'
import type { SelectProps, OptionProps } from '../../types/componentsTypes'

const Select: FC<SelectProps> = ({ id, name, options }) => {
  return (
    <div className={styles.inputDiv}>

      <select name={name} id={id} className={styles.select}>
        {
          options.map((opt: OptionProps) => <option value={opt._id}>{opt.chapterName}</option>)
        }
      </select>
    </div>
  )
}

export default Select