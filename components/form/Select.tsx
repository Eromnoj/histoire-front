import React, { FC, ReactNode } from 'react'
import styles from '../../styles/formElementsStyle/Select.module.scss'
import type { SelectProps, OptionProps } from '../../types/componentsTypes'

const Select: FC<SelectProps> = ({ id, name, options, onChange }) => {
  return (
    <div className={styles.inputDiv}>

      <select name={name} id={id} className={styles.select} onChange={onChange}>
        {
          options.map((opt: OptionProps) => <option key={opt._id}value={opt._id}>{opt.chapterName}</option>)
        }
      </select>
    </div>
  )
}

export default Select