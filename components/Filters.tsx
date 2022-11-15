import React, { FC } from 'react'
import styles from '../styles/componentsStyle/Filters.module.scss'

import CategorySelector from './CategorySelector'
import TagSelector from './TagSelector'
import InputField from './form/InputField'
import AuthorGrid from './AuthorGrid'
import BookList from './BookList'


const Filters: FC = () => {
  return (
    <div className={styles.filters}>
      <p className={styles.title}>Filtres</p>

      <CategorySelector />

      <TagSelector />

      <InputField
        id='fzfzefz'
        name='filter'
        label='Rechercher'
        onChange={() => null}
      />

      <AuthorGrid />

      <BookList />

    </div>
  )
}

export default Filters