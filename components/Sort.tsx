import React from 'react'
import Tag from './form/Tag'

const Sort = () => {
  return (
    <>
    <p>
      Trier par :
    </p>
    <Tag
      name='Popularité'
      isSelected={true}
      onClick={() => null}
    />
    <Tag
      name='Favoris'
      isSelected={false}
      onClick={() => null}
    />
  </>
  )
}

export default Sort