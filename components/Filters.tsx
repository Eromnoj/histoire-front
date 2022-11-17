import React, { FC, useState,useEffect } from 'react'
import styles from '../styles/componentsStyle/Filters.module.scss'

import CategorySelector from './CategorySelector'
import TagSelector from './TagSelector'
import InputField from './form/InputField'
import AuthorGrid from './AuthorGrid'
import BookList from './BookList'
import Sort from './Sort'

const Filters: FC = () => {

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [windowWidth])

  return (
    <div className={styles.filters}>
      {windowWidth >= 1066 ? 
      null:
      <div>
      <Sort />
      </div>
      }

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