import Head from 'next/head'
import styles from '../../styles/AuthorDescription.module.scss'

import { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'

import React, { FC } from 'react'

import Image from 'next/image'
import Facebook from '../../public/img/Facebook.png'
import Twitter from '../../public/img/Twitter.png'
import Mail from '../../public/img/Envelope.png'

import AuthorAvatar from '../../components/AuthorAvatar'
import Book from '../../components/Book'
import NavArrow from '../../components/NavArrow'

import { GetServerSideProps } from 'next'
import axios from 'axios'
import Link from 'next/link'

type SocialLinkProps = {
  twitter?: string
  facebook?: string
  email?: string
}
const SocialLink: FC<SocialLinkProps> = ({ twitter, facebook, email }) => {
  return (
    <div className={styles.links}>

      {twitter ?
        <div className={styles.socialLink}>
          <Link href={twitter}>
            <Image
              src={Twitter}
              width={45}
              height={45}
              alt='Facebook'
            />
          </Link>
        </div>
        : null}
      {facebook ?
        <div className={styles.socialLink}>
          <Link href={facebook}>
            <Image
              src={Facebook}
              width={45}
              height={45}
              alt='Facebook'
            />
          </Link>
        </div>
        : null}
      {email ?
        <div className={styles.socialLink}>
          <Link href={'mailto:' + email}>
            <Image
              src={Mail}
              width={45}
              height={45}
              alt='Facebook'
            />
          </Link>
        </div>
        : null}
    </div>
  )
}

type dataProps = {
  data: {
    _id: string
    email: string
    twitter: string
    facebook: string
    description: string
    imgPath: string
    username: string
    books: { category: string, favorites: boolean, _id: string, coverPath: string, title: string }[]


  }
}

const AuthorDescription: FC<dataProps> = ({ data }) => {
  console.log(data);

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])


  const showBooks = data.books.map(book => {
    return (
      <Book
        key={book._id}
        id={book._id}
        picture={book.coverPath}
        title={book.title}
        author={data.username}
        category={book.category}
        rating={4}
        favorite={true}
        favClick={() => null}
      />
    )
  })
  return (
    <Layout>
      <Head>
        <title>Histoires | {data.username}</title>
        <meta name="description" content="Partagez vos histoires" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.authorInfo}>
          <div className={styles.sideBar}>
            <div className={styles.avatar}>
              <AuthorAvatar
                id={data._id}
                name={data.username}
                imgUrl={data.imgPath}
              />
            </div>
            <div className={styles.social}>
              {windowWidth >= 768 && windowWidth <= 1066 ?
                <>
                  <h2 className={styles.authorName}>{data.username}</h2>

                  <SocialLink twitter={data.twitter} facebook={data.facebook} email={data.email} />
                </>

                : <SocialLink twitter={data.twitter} facebook={data.facebook} email={data.email} />

              }
            </div>
          </div>
          <div className={styles.authorDescription}>
            {windowWidth >= 768 && windowWidth <= 1066 ?
              null

              :
              <h2 className={styles.authorName}>{data.username}</h2>

            }
            <p className={styles.paragraph}>
              {data.description}
            </p>

          </div>
        </div>
        <div className={styles.bookNav}>
          {showBooks}
          <div className={styles.nav}>
            <NavArrow direction='left' onClick={() => null} />
            <NavArrow direction='right' onClick={() => null} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AuthorDescription

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query
  const res = await axios(`http://localhost:3000/api/v1/user/${id}`)
  const data = await res.data.user


  return { props: { data } }
}