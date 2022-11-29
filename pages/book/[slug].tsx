import Head from 'next/head'
import styles from '../../styles/BookDescription.module.scss'

import Layout from '../../components/layout/Layout'

import React, { FC } from 'react'
import { useRouter } from 'next/router'


import Book from '../../components/Book'
import Tag from '../../components/form/Tag'
import AuthorAvatar from '../../components/AuthorAvatar'
import Select from '../../components/form/Select'
import SubmitButton from '../../components/form/SubmitButton'
import axios from 'axios'
import { GetServerSideProps } from 'next'

type dataProps = {
  data: {
    _id:string
    tags:string[]
    description: string
    coverPath:string
    title:string
    author: {username: string, description: string, _id: string, imgPath: string}[]
    category: string

  }
}

const BookDescription: FC<dataProps> = ({ data }) => {

  console.log(data.author);
  
  const showTags = data.tags.map((tag: string)=> {
    let tagDisplay
    switch (tag){
      case 'adventure':
        tagDisplay = 'Aventure'
        break
      case 'fiction':
        tagDisplay = 'Fiction'
        break
      case 'youth':
        tagDisplay= 'Jeunesse'
        break
      case 'horror':
        tagDisplay = 'Horreur'
        break
      case 'fantastic':
        tagDisplay = 'Fantastique'
        break
      case 'love_story':
        tagDisplay = 'Romance'
        break
      default:
        tagDisplay = tag
        break
    }

    return (
      <Tag
      key={tag}
      name={tagDisplay}
      isSelected={false}
      onClick={() => null}
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

          <div className={styles.book}>

            <Book
              id={data._id}
              picture={data.coverPath}
              title={data.title}
              author={data.author[0].username}
              category={data.category}
              rating={4}
              favorite={true}
              favClick={() => null}
            />

            <div className={styles.tag}>
              {showTags}
            </div>
          </div>

          <div className={styles.authorInfo}>
            <p>A propos de l'auteur :</p>

            <div className={styles.authorID}>
              <div className={styles.avatar}>
                <AuthorAvatar
                  id={data.author[0]._id}
                  name={data.author[0].username}
                  imgUrl={data.author[0].imgPath}
                />
              </div>

              <div className={styles.authorName}>
              {data.author[0].username}
              </div>
            </div>

            <div className={styles.authorPrez}>
            {data.author[0].description}
            </div>
          </div>


        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.paragraph}>
          {data.description}
          </p>


          <form className={styles.selectChapter}>
            <div>

              <Select
                id='select_chapter'
                name='select_chapter'
                options={[
                  {
                    _id: 'sfddsfsdfsd',
                    chapterName: 'Chapitre 1 - La rue des ombres'
                  },
                  {
                    _id: 'sfddsfsdfsd',
                    chapterName: 'Chapitre 1 - La cabanes au fond du jardin'
                  }
                ]}
              />
            </div>
            <div>

              <SubmitButton
                name='Commencer'
              />
            </div>
          </form>
        </div>

      </div>
    </Layout>
  )
}

export default BookDescription

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query
  const res = await axios(`http://localhost:3000/api/v1/book/byslug/${slug}`)
  const data = await res.data.book

  return { props: { data } }
}