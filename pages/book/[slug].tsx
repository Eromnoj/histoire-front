import Head from 'next/head'
import styles from '../../styles/BookDescription.module.scss'

import Layout from '../../components/layout/Layout'

import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'


import Book from '../../components/Book'
import Tag from '../../components/form/Tag'
import AuthorAvatar from '../../components/AuthorAvatar'
import Select from '../../components/form/Select'
import SubmitButton from '../../components/form/SubmitButton'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import Star from '../../public/img/Star.png'
import { GetServerSideProps } from 'next'
import { useSelector } from 'react-redux'
import { RootState } from '../../stores'



type dataProps = {
  data: {
    _id: string
    tags: string[]
    description: string
    coverPath: string
    title: string
    author: { username: string, description: string, _id: string, imgPath: string }[]
    category: string
    avgRate: number[]
    favorite: boolean
  }
}

const BookDescription: FC<dataProps> = ({ data }) => {

  const { userId } = useSelector((state: RootState) => state.userSession)
  const router = useRouter()
  const { slug } = router.query

  const [isFavorite, setIsFavorite] = useState(data.favorite)
  const [rate, setRate] = useState(0)

  const showTags = data.tags.map((tag: string) => {
    let tagDisplay
    switch (tag) {
      case 'adventure':
        tagDisplay = 'Aventure'
        break
      case 'fiction':
        tagDisplay = 'Fiction'
        break
      case 'youth':
        tagDisplay = 'Jeunesse'
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


  useEffect(() => {
    if (userId) {
      getFavorites(slug, userId, setIsFavorite)
      getUserRate(data._id, setRate)
    }
  }, [])


  let rateDisplay = []
  const star = (key:number, styleArray:string[]) => { 
    return(
   <li key={key} className={styleArray.join(' ')} onClick={async () => {
    try {
      const res = await axios.post('/api/v1/book/ratebook',{bookId: data._id, rate: key.toString()})
      const resData = await res.data
      getUserRate(data._id, setRate)
      console.log((resData));
    } catch (error) {
      console.log(error);
      
    }
   }}>
    <Image
      src={Star}
      width={45}
      height={45}
      alt={`Star vote ${key}`}
    />
  </li>)}
  for(let i=0; i < 5; i++ ){
    if(i < 5 - rate){
      rateDisplay.push(star(Math.abs(i-5),[styles.star]))
    } else {
      rateDisplay.push(star(Math.abs(i-5),[styles.star, styles.ok]))
    }
  }


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
              authorId={data.author[0]._id}
              category={data.category}
              rating={data.avgRate[0]}
              favorite={isFavorite}
              favClick={() => handleFav(slug, userId, data._id, setIsFavorite)}
            />

            <div className={styles.tag}>
              {showTags}
            </div>
          </div>

          <div className={styles.authorInfo}>
            <p>A propos de l'auteur :</p>

            <div className={styles.authorID}>
              <div className={styles.avatar}>
                <Link href={`/author/${data.author[0]._id}`}>

                  <AuthorAvatar
                    id={data.author[0]._id}
                    name={data.author[0].username}
                    imgUrl={data.author[0].imgPath}
                  />
                </Link>
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
          <div className={styles.rate}>
            <ul className={styles.starsList}>
              {rateDisplay}
            </ul>
          </div>
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

const getFavorites = async (slug: any,
  userId: string,
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>) => {
  const res = await axios(`http://localhost:3000/api/v1/book/byslug/${slug}?userId=${userId}`)
  const favorites = await res.data.book.favorite
  setIsFavorite(favorites)

}


const handleFav = async (slug: any,
  userId: string,
  id: string, setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    const res = await axios.post(`/api/v1/user/favorites/${id}`)
    getFavorites(slug, userId, setIsFavorite)
    // TODO Ajouter le toast avec le message d'Ajout

  } catch (error) {
    console.log(error);

  }
}

const getUserRate = async (id: string, setRate: React.Dispatch<React.SetStateAction<number>>) => {
  try {
    const res = await axios(`/api/v1/user/rate/${id}`)
    const rate = await res.data.rate
    setRate(rate)

  } catch (error) {

  }
}