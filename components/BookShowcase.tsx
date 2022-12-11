import React, { FC, useState, useEffect } from 'react'
import styles from '../styles/componentsStyle/BookShowcase.module.scss'

import type {BookType, FilterType} from '../types/dataTypes'

import Book from './Book'
import NavArrow from './NavArrow'
import Sort from './Sort'
import Filters from './Filters'
import Toast from './Toast'
import Image from 'next/image'
import Down from '../public/img/down.png'

import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { nextPage, prevPage, RootState } from '../stores'


const BookShowcase: FC = () => {
  const [trigger, setTrigger]= useState(false)
  const [msg, setMsg] = useState('')

  useEffect(()=> {
    if(trigger){
      setTimeout(()=> {
        setTrigger(false)
      }, 5000)
    }
  },[trigger])

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
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))
    
  }, [])


  const [books, setBooks] = useState<Array<BookType>>([])

  useEffect(() => {
    getBooks(userId, filter, setBooks, setNoResult, setTotalBook, setlimitBook, setMsg, setTrigger)
  }, [filter])

  const showBooks = books.map(book => {
    return (
      <Book
        key={book._id}
        id={book._id}
        picture={process.env.NEXT_PUBLIC_API_URL+book.coverPath}
        title={book.title}
        author={book.author[0].username}
        authorId={book.author[0]._id}
        category={book.category}
        rating={book.avgRate}
        favorite={book.favorite}
        slug={book.slug}
        favClick={() => handleFav(book._id,userId, filter, setBooks, setNoResult, setTotalBook, setlimitBook, setMsg, setTrigger)} />
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
              opacity: filter.page >= Math.floor(totalBook / limitBook) ? '50%' : '100%',
              cursor: filter.page >= Math.floor(totalBook / limitBook) ? 'default' : 'pointer'
            }}
            />
          </div>
        </div>
        :
        <>
          <div className={styles.toggleFilter} onClick={() => setToggleFilter(prev => !prev)}>
            Filtres 
            <div className={toggleFilter ? styles.arrow : styles.arrowDown}>
              <Image src={Down} width={30} height={30} alt='' />
              </div>
              </div>

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
            opacity: filter.page >= Math.floor(totalBook / limitBook) ? '50%' : '100%',
            cursor: filter.page >= Math.floor(totalBook / limitBook) ? 'default' : 'pointer'
          }}
        />
      </div>
      {trigger ? <Toast
        message={msg}
        click={() => setTrigger(false)}
      /> : null}
    </div>
  )
}

export default BookShowcase

const getBooks = async (id: string,
  filter: FilterType,
  setBooks: React.Dispatch<React.SetStateAction<BookType[]>>,
  setNoResult: React.Dispatch<React.SetStateAction<boolean>>,
  setTotalBook: React.Dispatch<React.SetStateAction<number>>,
  setlimitBook: React.Dispatch<React.SetStateAction<number>>,
  msgSetter: React.Dispatch<React.SetStateAction<string>>,
  showSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
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
    msgSetter(error.response.data.msg)
    showSetter(true)
    setNoResult(true)
  }
}


const handleFav = async (id: string,
  userId: string,
  filter: FilterType,
  setBooks: React.Dispatch<React.SetStateAction<BookType[]>>,
  setNoResult: React.Dispatch<React.SetStateAction<boolean>>,
  setTotalBook: React.Dispatch<React.SetStateAction<number>>,
  setlimitBook: React.Dispatch<React.SetStateAction<number>>,
  msgSetter: React.Dispatch<React.SetStateAction<string>>,
  showSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    const res = await axios.post(`/api/v1/user/favorites/${id}`)
    getBooks(userId, filter, setBooks, setNoResult, setTotalBook, setlimitBook, msgSetter, showSetter)
    const data = res.data
    msgSetter(data.msg)
    showSetter(true)
  } catch (error:any) {
    msgSetter(error.response.data.msg)
    showSetter(true)

  }
}