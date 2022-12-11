import React, { FC } from 'react'
import styles from '../styles/componentsStyle/TagSelector.module.scss'

import type { TagSelectorProps } from '../types/componentsTypes'
import { useDispatch, useSelector } from 'react-redux'

import Tag from './form/Tag'
import { RootState } from '../stores'
import { chooseGenre, bookGenre } from '../stores'

const TagSelector: FC<TagSelectorProps> = ({ method }) => {

  const filterFilter = useSelector((state: RootState) => state.filter)
  const filterCreate = useSelector((state: RootState) => state.create)
  const filter = method === 'filter' ? filterFilter : filterCreate
  const { tags } = filter
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
    isSelected={tags.includes(`${itemGenre.id}`)}
    onClick={() => method === 'filter' ? dispatch(chooseGenre({ tags: itemGenre.id })) : dispatch(bookGenre({ tags: itemGenre.id }))}
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