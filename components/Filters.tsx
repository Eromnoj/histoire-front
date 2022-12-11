import React, { FC, useState,useEffect, ReactNode } from 'react'
import styles from '../styles/componentsStyle/Filters.module.scss'

import CategorySelector from './CategorySelector'
import TagSelector from './TagSelector'
import InputField from './form/InputField'
import Sort from './Sort'



import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../stores'
import { searchFromTitle } from '../stores'


const Filters: FC = () => {

  const [windowWidth, setWindowWidth] = useState(0)
  const dispatch = useDispatch()
  const filter = useSelector((state:RootState)=> state.filter)
  const {search} = filter

  const handleSearch = (e:React.FormEvent<HTMLInputElement>)=> {
    e.preventDefault()
    const {value} = e.currentTarget
    dispatch(searchFromTitle({search: value}))

  }
  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))
    
  }, [])

  return (
    <div className={styles.filters}>
      {windowWidth >= 1066 ? 
      null:
      <div>
      <Sort />
      </div>
      }

      <CategorySelector />

      <TagSelector method='filter' />

      <InputField
        id='fzfzefz'
        name='filter'
        label='Rechercher'
        value={search}
        onChange={(e) => handleSearch(e) }
      />
      
    </div>
  )
}

export default Filters