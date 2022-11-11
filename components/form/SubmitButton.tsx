import React, {FC} from 'react'
import type { SubmitButtonProps } from '../../types/componentsTypes'
import styles from '../../styles/SubmitButton.module.scss'


const SubmitButton:FC<SubmitButtonProps> = ({name}) => {
  return (
    <button type="submit" className={styles.submit}>{name}</button>
  )
}

export default SubmitButton