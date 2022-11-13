import React, {FC} from 'react'
import styles from '../styles/componentsStyle/StoryLink.module.scss'
import type { StoryLinkProps } from '../types/componentsTypes'
import { categoryColor } from '../utils'

const StoryLink:FC<StoryLinkProps> = ({id, name, category, onClick}) => {

  const color = categoryColor(category)
  return (
    <div className={styles.storyLink} onClick={onClick} style={{backgroundColor: color}}>
      {name}
    </div>
  )
}

export default StoryLink