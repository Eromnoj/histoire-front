import React,{FC} from 'react'
import type {CheckerProps} from '../../types/componentsTypes'
import styles from '../../styles/formElementsStyle/Checker.module.scss'
import { categoryColor } from '../../utils'


import { chooseCategory, RootState } from '../../stores'
import { useDispatch, useSelector } from 'react-redux'

const Checker: FC<CheckerProps> = ({
  id,
  name,
  label
}) => {

  const filter = useSelector((state:RootState) => state.filter)
  const {category} = filter
  const dispatch = useDispatch()
  let colorBg = categoryColor(name)
  return (
    <div className={styles.checker} style={{backgroundColor: colorBg}}>
      <input type="checkbox" 
      name={name} 
      id={id} 
      className={styles.checkbox} 
      onChange={() =>  dispatch(chooseCategory({category: name}))} 
      checked = {category.includes(name)}
      />
      <label htmlFor={id} className={styles.label}>{label}</label>
    </div>
  )
}

export default Checker