import React, { FC, useState, useEffect } from 'react'
import Book from './Book'
import styles from '../styles/componentsStyle/BookShowcase.module.scss'
import NavArrow from './NavArrow'
import Sort from './Sort'
import Filters from './Filters'
import Image from 'next/image'
import Down from '../public/img/down.png'

import axios from 'axios'
import { useSelector } from 'react-redux'
import { RootState } from '../stores'

interface BookType {
  _id: string
  coverPath: string
  title: string
  author: {username: string, description: string}[],
  category: string
  rating: number
  slug: string
  favorite: boolean
}

const bookShowcase: FC = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [toggleFilter, setToggleFilter] = useState(true)
  const { userId } = useSelector((state: RootState) => state.userSession)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [windowWidth])

  const getBooks = async () => {
    try {
      let path = ''
      if (userId) {
        path = `/api/v1/book/getall?userId=${userId}`
      } else {
        path = '/api/v1/book/getall'
      }
      const res = await axios(path)
      const data = await res.data
      setBooks(data.books)
    } catch (error) {
      console.log(error)
    }
  }

  const handleFav = async (id: string) => {

    console.log(id);
    
    try {
      const res = await axios.post(`/api/v1/user/favorites/${id}`)
      getBooks()
      // TODO Ajouter le toast avec le message d'Ajout
      
    } catch (error) {
      console.log(error);
      
    }
  }

  const [books, setBooks] = useState<Array<BookType>>([])
  useEffect(() => {
    getBooks()
  }, [])

  const showBooks = books.map(book => {
    return (
      <Book
        key={book._id}
        id={book._id}
        picture={book.coverPath}
        title={book.title}
        author={book.author[0].username}
        category={book.category}
        rating={2}
        favorite={book.favorite}
        slug={book.slug}
        favClick={() => handleFav(book._id)} />
    )
  })
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
        {showBooks}
      </div>

      <div className={styles.navBottom}>
        <NavArrow direction='left' onClick={() => null} />
        <NavArrow direction='right' onClick={() => null} />
      </div>
    </div>
  )
}

export default bookShowcase