import Head from 'next/head'
import styles from '../../styles/Stories.module.scss'

import React, { useEffect, useState } from 'react'

import Layout from '../../components/layout/Layout'
import UserNav from '../../components/UserNav'
import BookMin from '../../components/BookMin'
import axios from 'axios'

type book = {
  _id: string,
  title: string,
  category: string,
  chaptersTotal: number,
  chaptersPublished: number
}
const Stories = () => {

  const [myBooks, setMyBooks] = useState<book[]>([])


  useEffect(() => {
    getMyBooks(setMyBooks)
  }, [])

  console.log(myBooks);

  const displayBooks = myBooks.map(book => {
    return (
      <BookMin
        key={book._id}
        id={book._id}
        title={book.title}
        total={book.chaptersTotal}
        published={book.chaptersPublished}
        category={book.category}
      />
    )
  })
  return (
    <Layout>
      <Head>
        <title>Histoires | Parcourir</title>
        <meta name="description" content="Partagez vos histoires" />
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
    </Layout>
  )
}

export default Stories

const getMyBooks = async (setMyBooks: React.Dispatch<React.SetStateAction<book[]>>) => {
  try {
    const res = await axios('/api/v1/book/getmybooks')
    const data = await res.data
    setMyBooks(data.books)
  } catch (error) {

  }

}