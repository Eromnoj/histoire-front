import React, { FC } from 'react'
import Radio from './form/Radio'
import styles from '../styles/componentsStyle/CategorySelector.module.scss'


const CategorySelector: FC = () => {

  return (
    <div className={styles.category}>
      <p className={styles.title}>Catégorie :</p>
      <div className={styles.selectors}>

        <Radio
          name='bookType'
          id='novel'
          label='Roman'
        />
        <Radio
          name='bookType'
          id='poetry'
          label='Poésie'
        />
        <Radio
          name='bookType'
          id='short_story'
          label='Nouvelle'
        />
      </div>
    </div>
  )
}

export default CategorySelector