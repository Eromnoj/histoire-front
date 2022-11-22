import React, { FC } from 'react'
import styles from '../styles/componentsStyle/TagSelector.module.scss'

import type { TagSelectorProps } from '../types/componentsTypes'
import { useDispatch, useSelector } from 'react-redux'

import Tag from './form/Tag'
import { RootState } from '../stores'
import { chooseGenre, bookGenre } from '../stores'

const TagSelector: FC<TagSelectorProps> = ({ method }) => {

  const filter = method === 'filter' ? useSelector((state: RootState) => state.filter) : useSelector((state: RootState) => state.create)
  const { genre } = filter
  const dispatch = useDispatch()
  const allGenres = [{ id: 'youth', label: 'Jeunesse' },
  { id: 'adventure', label: 'Aventure' },
  { id: 'horror', label: 'Horreur' },
  { id: 'fantastic', label: 'Fantastique' },
  { id: 'love_story', label: 'Romance' },
  { id: 'fiction', label: 'Fiction' }]

  const allTags = allGenres.map(itemGenre => <Tag
    key={itemGenre.id}
    name={itemGenre.label}
    isSelected={genre.includes(`${itemGenre.id}`)}
    onClick={() => method === 'filter' ? dispatch(chooseGenre({ genre: itemGenre.id })) : dispatch(bookGenre({ genre: itemGenre.id }))}
  />)
  return (
    <div className={styles.tagSelector}>
      <p className={styles.title}>Genres :</p>

      <div className={styles.tags}>
        {allTags}
      </div>

    </div>
  )
}

export default TagSelector