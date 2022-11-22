import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import { useEffect,useState } from 'react'
import BookShowcase from '../components/BookShowcase'

import Layout from '../components/layout/Layout'
import Filters from '../components/Filters'
import type { RootState } from '../stores'
import { useSelector } from 'react-redux'

import React from 'react'

const Home = () => {


  const [windowWidth, setWindowWidth] = useState(0)

  const filter = useSelector((state:RootState) => state.filter)
  console.log(filter)
  useEffect(()=>{
    setWindowWidth(window.innerWidth)
  },[windowWidth])
  return (
    <Layout>
      <Head>
        <title>Histoires | Parcourir</title>
        <meta name="description" content="Partagez vos histoires" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={windowWidth >= 1066 ? styles.main : styles.mainResponsive}>
      <BookShowcase />
      {windowWidth <= 1066 ?
      null :
      <Filters />
    }
     
      </div>
    </Layout>
  )
}

export default Home




