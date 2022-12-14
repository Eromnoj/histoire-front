import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Tag from './form/Tag'
import { backFirstPage, RootState } from '../stores'
import { sortBy } from '../stores'

const Sort:FC = () => {

  const filter = useSelector((state:RootState)=> state.filter)
  const {sorted} = filter
  const dispatch = useDispatch()

  const sortTags = [{label: 'Popularit√©', id:'popularity'}, {label:'Favoris', id:'favorite'}]

  const allSortTags = sortTags.map(tag=> <Tag 
  key={tag.id}
  name={tag.label}
  isSelected={sorted === tag.id}
  onClick={() => {
    dispatch(backFirstPage())
    dispatch(sortBy({sorted: tag.id}))}}
  
  />)
  return (
    <>
    <p>
      Trier par :
    </p>
    {allSortTags}
  </>
  )
}

export default Sort