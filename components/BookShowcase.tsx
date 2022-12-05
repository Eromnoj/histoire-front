import React, { FC, useState, useEffect } from 'react'
import Book from './Book'
import styles from '../styles/componentsStyle/BookShowcase.module.scss'
import NavArrow from './NavArrow'
import Sort from './Sort'
import Filters from './Filters'
import Image from 'next/image'
import Down from '../public/img/down.png'

import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { nextPage, prevPage, RootState } from '../stores'

type BookType = {
  _id: string
  coverPath: string
  title: string
  author: { username: string, description: string, _id: string }[],
  category: string
  avgRate: number
  slug: string
  favorite: boolean
}


type FilterType = {
  category: string[],
  tags: string[],
  search: string,
  sorted: string,
  page: number
}
const bookShowcase: FC = () => {


  const [windowWidth, setWindowWidth] = useState(0)
  const [toggleFilter, setToggleFilter] = useState(true)

  const [isNoResult, setNoResult] = useState(true)

  const { userId } = useSelector((state: RootState) => state.userSession)
  const filter = useSelector((state: RootState) => state.filter)
  const dispatch = useDispatch()
  const [totalBook, setTotalBook] = useState(0)
  const [limitBook, setlimitBook] = useState(0)
  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [windowWidth])



  const handleFav = async (id: string) => {
    try {
      const res = await axios.post(`/api/v1/user/favorites/${id}`)
      getBooks(userId, filter, setBooks, setNoResult, setTotalBook, setlimitBook)
      // TODO Ajouter le toast avec le message d'Ajout

    } catch (error) {
      console.log(error);

    }
  }

  const [books, setBooks] = useState<Array<BookType>>([])

  useEffect(() => {
    getBooks(userId, filter, setBooks, setNoResult, setTotalBook, setlimitBook)
  }, [filter])

  const showBooks = books.map(book => {
    return (
      <Book
        key={book._id}
        id={book._id}
        picture={book.coverPath}
        title={book.title}
        author={book.author[0].username}
        authorId={book.author[0]._id}
        category={book.category}
        rating={book.avgRate}
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
            <NavArrow direction='left' onClick={() => dispatch(prevPage())}
              style={{
                opacity: filter.page === 1 ? '50%' : '100%',
                cursor: filter.page === 1 ? 'default' : 'pointer'
              }}
            />
            <NavArrow direction='right' onClick={() => dispatch(nextPage({ total: totalBook, limit: limitBook }))}
              style={{
                opacity: filter.page > Math.floor(totalBook / limitBook) || totalBook / limitBook === 1 ? '50%' : '100%',
                cursor: filter.page > Math.floor(totalBook / limitBook) || totalBook / limitBook === 1 ? 'default' : 'pointer'
              }}
            />
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
        {isNoResult ? <p>Aucun résultats</p> : showBooks}
      </div>

      <div className={styles.navBottom}>
        <NavArrow direction='left' onClick={() => dispatch(prevPage())}
          style={{
            opacity: filter.page === 1 ? '50%' : '100%',
            cursor: filter.page === 1 ? 'default' : 'pointer'
          }}
        />
        <NavArrow direction='right' onClick={() => dispatch(nextPage({ total: totalBook, limit: limitBook }))}
          style={{
            opacity: filter.page >= Math.ceil(totalBook / limitBook) ? '50%' : '100%',
            cursor: filter.page >= Math.ceil(totalBook / limitBook) ? 'default' : 'pointer'
          }}
        />
      </div>
    </div>
  )
}

export default bookShowcase

const getBooks = async (id: string,
  filter: FilterType,
  setBooks: React.Dispatch<React.SetStateAction<BookType[]>>,
  setNoResult: React.Dispatch<React.SetStateAction<boolean>>,
  setTotalBook: React.Dispatch<React.SetStateAction<number>>,
  setlimitBook: React.Dispatch<React.SetStateAction<number>>) => {
  try {
    let path = ''
    if (id) {
      path = `/api/v1/book/getall?userId=${id}`
    } else {
      path = '/api/v1/book/getall?'
    }
    if (filter.search) path += `&search=${filter.search}`
    if (filter.tags.length > 0) path += `&tags=${filter.tags}`
    if (filter.category.length > 0) path += `&category=${filter.category}`
    if (filter.sorted) path += `&sorted=${filter.sorted}`
    path += `&page=${filter.page}`
    const res = await axios(path)
    const data = await res.data
    setTotalBook(data.total)
    setlimitBook(data.limit)
    setBooks(data.books)
    setNoResult(false)
  } catch (error: any) {
    console.log(error)
    setNoResult(true)
  }
}