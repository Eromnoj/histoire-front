import React, {FC} from 'react'
import type { SubmitButtonProps } from '../../types/componentsTypes'
import styles from '../../styles/formElementsStyle/SubmitButton.module.scss'


const SubmitButton:FC<SubmitButtonProps> = ({name, onClick}) => {
  return (
    <button type="submit" className={styles.submit} onClick={onClick}>{name}</button>
  )
}

export default SubmitButton