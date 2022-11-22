import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Tag from './form/Tag'
import { RootState } from '../stores'
import { sortBy } from '../stores'

const Sort = () => {

  const filter = useSelector((state:RootState)=> state.filter)
  const {sorted} = filter
  const dispatch = useDispatch()

  const sortTags = ['Popularité', 'Favoris']

  const allSortTags = sortTags.map(tag=> <Tag 
  key={tag}
  name={tag}
  isSelected={sorted === tag}
  onClick={() => dispatch(sortBy({sorted: tag}))}
  
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