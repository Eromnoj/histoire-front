import React, { FC } from 'react'
import Checker from './form/Checker'
import styles from '../styles/componentsStyle/CategorySelector.module.scss'

const CategorySelector: FC = () => {
  return (
    <div className={styles.category}>
      <p className={styles.title}>Catégorie :</p>
      <div className={styles.selectors}>

        <Checker
          id='novel'
          name='novel'
          label='Roman'
        />
        <Checker
          id='poetry'
          name='poetry'
          label='Poésie'
        />
        <Checker
          id='short_story'
          name='short_story'
          label='Nouvelle'
        />
      </div>
    </div>
  )
}

export default CategorySelector