import React, { FC, useState, useEffect } from 'react'
import Book from './Book'
import styles from '../styles/componentsStyle/BookShowcase.module.scss'
import NavArrow from './NavArrow'
import Sort from './Sort'
import Filters from './Filters'
import Image from 'next/image'
import Down from '../public/img/down.png'

const bookShowcase: FC = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [toggleFilter, setToggleFilter] = useState(true)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [windowWidth])


  return (
    <div className={styles.showcase}>
      {windowWidth >= 1066 ?
        <div className={styles.showcaseNav}>
          <div className={styles.sort}>
            <Sort />
          </div>
          <div className={styles.nav}>
            <NavArrow direction='left' onClick={() => null} />
            <NavArrow direction='right' onClick={() => null} />
          </div>
        </div>
        :
        <>
        <div className={styles.toggleFilter} onClick={() => setToggleFilter(prev => !prev)}>Filtres <div className={toggleFilter ? styles.arrow : styles.arrowDown}><Image src={Down} width={30} height={30} alt='' /></div></div>
        
        <div className={toggleFilter ? styles.filtersHide : styles.filtersShow}>
          <Filters />
        </div>
        </>
      }
      <div className={styles.books}>

        <Book
          id='adeggreg5'
          picture='/book.webp'
          title='Lorem Ipsum'
          author='Author Name'
          category='novel'
          rating={2}
          favorite={false} />
        <Book
          id='adeggreg5'
          picture='/book.webp'
          title='Lorem Ipsum'
          author='Author Name'
          category='poetry'
          rating={2}
          favorite={false} />
        <Book
          id='adeggreg5'
          picture='/book.webp'
          title='Lorem Ipsum'
          author='Author Name'
          category='poetry'
          rating={2}
          favorite={false} />
        <Book
          id='adeggreg5'
          picture='/book.webp'
          title='Lorem Ipsum'
          author='Author Name'
          category='short_story'
          rating={2}
          favorite={false} />
        <Book
          id='adeggreg5'
          picture='/book.webp'
          title='Lorem Ipsum'
          author='Author Name'
          category='novel'
          rating={2}
          favorite={false} />
        <Book
          id='adeggreg5'
          picture='/book.webp'
          title='Lorem Ipsum'
          author='Author Name'
          category='short_story'
          rating={2}
          favorite={false} />
      </div>

      <div className={styles.navBottom}>
        <NavArrow direction='left' onClick={() => null} />
        <NavArrow direction='right' onClick={() => null} />
      </div>
    </div>
  )
}

export default bookShowcase