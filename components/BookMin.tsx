import React, { FC } from 'react'
import styles from '../styles/BookMin.module.scss'

import { BookMinProps } from '../types/componentsTypes'
import { categoryColor } from '../utils'
import Image from 'next/image'
import Edit from '../public/img/Edit.png'

const BookMin: FC<BookMinProps> = ({ id, title, total, published, category }) => {
  
  const color = categoryColor(category)
  return (
    <div className={styles.bookDiv}>
      <div className={styles.title} style={{backgroundColor: color}}>{title}</div>

      <div className={styles.bookInfo}>

        <div className={styles.count}>
          <div className={styles.chapterCount}>Chapitres : {total}</div>
          <div className={styles.publishedCount}>Publiés : {published}</div>
        </div>
        <div className={styles.modify}>
          <Image
            src={Edit}
            width={30}
            height={30}
            alt='Edit'
          />
        </div>
      </div>


    </div>
  )
}

export default BookMin