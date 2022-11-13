import React, {FC} from 'react'
import styles from '../styles/componentsStyle/TagSelector.module.scss'

import Tag from './form/Tag'

const TagSelector:FC = () => {
  return (
    <div className={styles.tagSelector}>
      <p className={styles.title}>Genres :</p>

    <div className={styles.tags}>

      <Tag 
        name='Jeunesse'
        isSelected={true}
        onClick={() => null}
        />
      <Tag 
        name='Aventure'
        isSelected={false}
        onClick={() => null}
        />
      <Tag 
        name='Romance'
        isSelected={false}
        onClick={() => null}
        />
      <Tag 
        name='Fantastique'
        isSelected={true}
        onClick={() => null}
        />
      <Tag 
        name='Horreur'
        isSelected={false}
        onClick={() => null}
        />
      <Tag 
        name='Fiction'
        isSelected={false}
        onClick={() => null}
        />
        </div>

    </div>
  )
}

export default TagSelector