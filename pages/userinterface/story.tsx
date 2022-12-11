import Head from 'next/head'
import styles from '../../styles/Stories.module.scss'

import React, {FC, useEffect, useState } from 'react'

import Layout from '../../components/layout/Layout'
import UserNav from '../../components/UserNav'
import BookMin from '../../components/BookMin'
import Toast from '../../components/Toast'
import axios from 'axios'

import type { BookStoryType } from '../../types/dataTypes'

const Stories:FC = () => {

  const [myBooks, setMyBooks] = useState<BookStoryType[]>([])
  
  const [trigger, setTrigger]= useState(false)
  const [msg, setMsg] = useState('')

  useEffect(()=> {
    if(trigger){
      setTimeout(()=> {
        setTrigger(false)
      }, 5000)
    }
  },[trigger])

  useEffect(() => {
    getMyBooks(setMyBooks, setTrigger, setMsg)
  }, [])

  const displayBooks = myBooks.map(book => {
    return (
      <BookMin
        key={book._id}
        id={book._id}
        title={book.title}
        total={book.chaptersTotal}
        published={book.chaptersPublished}
        category={book.category}
        isPublished={book.isPublished}
      />
    )
  })
  return (
    <Layout>
      <Head>
        <title>Histoires | Mes histoires</title>
        <meta name="description" content="Parcourir et éditez mes histoires" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.sideBar}>
          <UserNav />
        </div>

        <div className={styles.content}>
          <div className={styles.books}>

            {displayBooks}

          </div>
        </div>
      </div>
      {trigger ? <Toast 
          message={msg}
          click={()=> setTrigger(false)}
        /> : null }
    </Layout>
  )
}

export default Stories

const getMyBooks = async (setMyBooks: React.Dispatch<React.SetStateAction<BookStoryType[]>>,
  setTrigger:React.Dispatch<React.SetStateAction<boolean>>,
  setMsg:React.Dispatch<React.SetStateAction<string>>) => {
  try {
    const res = await axios('/api/v1/book/getmybooks')
    const data = await res.data
    setMyBooks(data.books)
  } catch (error:any) {
    setTrigger(true)
    setMsg(error.response.data.msg)
  }

}