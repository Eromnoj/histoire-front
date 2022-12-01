import React, { FC } from 'react'
import type { NavArrowProps } from '../types/componentsTypes'
import styles from '../styles/componentsStyle/NavArrow.module.scss'
import Image, { StaticImageData } from 'next/image'
import up from '../public/img/up.png'
import down from '../public/img/down.png'
import left from '../public/img/left.png'
import right from '../public/img/right.png'

const NavArrow: FC<NavArrowProps> = ({ direction, onClick, style }) => {

  let image: StaticImageData

  switch (direction) {
    case 'up':
      image = up
      break
    case 'down':
      image = down
      break
    case 'left':
      image = left
      break
    case 'right':
      image = right
      break
    default :
      image = down
      break
  }
  return (
    <button className={styles.arrow} onClick={onClick} style={style}><Image
    src={image}
    alt={`button ${direction}`}
    width={30}
    height={30}
    />
    </button>
  )
}

export default NavArrow