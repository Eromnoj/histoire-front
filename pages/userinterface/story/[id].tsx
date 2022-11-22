import Head from 'next/head'
import styles from '../../../styles/Stories.module.scss'

import Layout from '../../../components/layout/Layout'

import React from 'react'
import { useRouter } from 'next/router'

import UserNav from '../../../components/UserNav'
import BookMin from '../../../components/BookMin'
import NavArrow from '../../../components/NavArrow'

const Stories = () => {
  const router = useRouter()
  const { id } = router.query

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

            <BookMin
              id='ggdfgdf'
              title='Lorem Ipsum'
              total={22}
              published={18}
              category='novel'
            />
            <BookMin
              id='ggdfgdf'
              title='Lorem Ipsum'
              total={22}
              published={18}
              category='poetry'
            />
            <BookMin
              id='ggdfgdf'
              title='Lorem Ipsum'
              total={22}
              published={18}
              category='short_story'
            />
            <BookMin
              id='ggdfgdf'
              title='Lorem Ipsum'
              total={22}
              published={18}
              category='novel'
            />
          </div>
          <div className={styles.nav}>
          <NavArrow direction='left' onClick={() =>  null } />
          <NavArrow direction='right' onClick={() => null } />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Stories