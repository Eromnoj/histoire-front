import React from 'react'
import type { FC } from 'react'
import type {BookProps} from '../types/componentsTypes'
import styles from '../styles/componentsStyle/Book.module.scss'
import Image from 'next/image'
import {categoryColor, countStars } from '../utils/'
import star from '../public/img/Star.png'
import starHalf from '../public/img/Star-half.png'
import heart from '../public/img/Heart.png'
import heartFull from '../public/img/Heartfull.png'
import { useRouter } from 'next/router'


const Book: FC<BookProps> = ({
  id,
  picture,
  title,
  author,
  authorId,
  category,
  rating,
  favorite,
  slug,
  favClick }) => {
    const router = useRouter()
    const showStars = countStars(rating).map((value,index) => value ? 
    <Image
    key={index}
      src={star}
      alt={"full star"}
      width={45}
      height={45}
    /> : <Image
    key={index}
    src={starHalf}
    alt={"half star"}
    width={45}
    height={45}
  /> )

  let colorTag = categoryColor(category)
  return (

    <div className={styles.bookCard}>
      <div className={styles.image}>
        <Image
          src={picture}
          alt={"picture of a book"}
          width={300}
          height={300}
        />
      </div>
      <div className={styles.bookInfo} style={{backgroundColor: colorTag}} >
        <div className={styles.title} onClick={() => {
        router.push(`/book/${slug}`)
      }
      }>{title}</div>
        <div className={styles.author} onClick={() => {
        router.push(`/author/${authorId}`)
      }
      }>{author}</div>
      </div>
      <div className={styles.votes}>
        <div className={styles.rating}>{showStars}</div>
        <div className={styles.favorites} onClick={favClick}>{favorite ? 
        <Image
          src={heartFull}
          alt={"favorite trully"}
          width={45}
          height={45}
        /> : <Image
        src={heart}
        alt={"Want it favorite ?"}
        width={45}
        height={45}
      />}</div>
      </div>

    </div>
  )
}



export default Book