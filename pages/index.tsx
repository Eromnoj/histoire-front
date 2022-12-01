import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import { useEffect, useState } from 'react'
import BookShowcase from '../components/BookShowcase'

import Layout from '../components/layout/Layout'
import Filters from '../components/Filters'
import { nextPage, RootState } from '../stores'
import { useDispatch } from 'react-redux'

import React from 'react'

const Home = () => {

  const dispatch = useDispatch()
  const [windowWidth, setWindowWidth] = useState(0)

  
  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [windowWidth])
  
  
  return (
    <Layout>
      <Head>
        <title>Histoires | Parcourir</title>
        <meta name="description" content="Partagez vos histoires" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={windowWidth >= 1066 ? styles.main : styles.mainResponsive}>
        <div className={styles.books}>
          <BookShowcase />
        </div>
        {windowWidth <= 1066 ?
          null :
          <Filters />
        }

      </div>
    </Layout>
  )
}

export default Home




