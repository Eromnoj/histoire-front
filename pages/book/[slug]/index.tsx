import Head from 'next/head'
import styles from '../../../styles/BookDescription.module.scss'

import Layout from '../../../components/layout/Layout'

import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'


import Book from '../../../components/Book'
import Tag from '../../../components/form/Tag'
import AuthorAvatar from '../../../components/AuthorAvatar'
import Select from '../../../components/form/Select'
import SubmitButton from '../../../components/form/SubmitButton'
import Toast from '../../../components/Toast'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import Star from '../../../public/img/Star.png'
import { GetServerSideProps } from 'next'
import { useSelector } from 'react-redux'
import { RootState } from '../../../stores'

import type { BookDescProps } from '../../../types/pagesPropsTypes'
import type { ChapterType } from '../../../types/dataTypes'


const BookDescription: FC<BookDescProps> = ({ data }) => {
  const { userId } = useSelector((state: RootState) => state.userSession)
  const router = useRouter()
  const { slug } = router.query
  const [chapSlug, setChapSlug] = useState<string | undefined>('Pas de chapitres')


  if (data.chapters.length > 0) {
    setChapSlug(data.chapters[0].slug)
  }

  const [trigger, setTrigger] = useState(false)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    if (trigger) {
      setTimeout(() => {
        setTrigger(false)
      }, 5000)
    }
  }, [trigger])

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
      getUserRate(data._id, setRate, setMsg, setTrigger)
    }
  }, [])


  let rateDisplay = []
  const star = (key: number, styleArray: string[]) => {
    return (
      <li key={key} className={styleArray.join(' ')} onClick={() => handleRate(data._id, key, setRate, setMsg, setTrigger)}>
        <Image
          src={Star}
          width={45}
          height={45}
          alt={`Star vote ${key}`}
        />
      </li>)
  }
  for (let i = 0; i < 5; i++) {
    if (i < 5 - rate) {
      rateDisplay.push(star(Math.abs(i - 5), [styles.star]))
    } else {
      rateDisplay.push(star(Math.abs(i - 5), [styles.star, styles.ok]))
    }
  }

  const displayChapter = data.chapters.length > 0 ? data.chapters.map((chapter: ChapterType) => {
    return {
      key: chapter._id,
      _id: chapter.slug,
      chapterName: `Chapitre ${chapter.chapterOrder} - ${chapter.title}`
    }
  }) : [
    {
      key: 3,
      _id: 'none',
      chapterName: `Pas de chapitres`
    }
  ]
  return (
    <Layout>
      <Head>
        <title>Histoires | {data.title}</title>
        <meta name="description" content={`${data.title} par ${data.author[0].username} : ${data.description}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.sideBar}>

          <div className={styles.book}>

            <Book
              id={data._id}
              picture={process.env.NEXT_PUBLIC_API_URL + data.coverPath}
              title={data.title}
              author={data.author[0].username}
              authorId={data.author[0]._id}
              category={data.category}
              rating={data.avgRate}
              favorite={isFavorite}
              favClick={() => handleFav(slug, userId, data._id, setIsFavorite, setMsg, setTrigger)}
            />

            <div className={styles.tag}>
              {showTags}
            </div>
          </div>

          <div className={styles.authorInfo}>
            <p>A propos de l&apos;auteur :</p>

            <div className={styles.authorID}>
              <div className={styles.avatar}>
                <Link href={`/author/${data.author[0]._id}`}>

                  <AuthorAvatar
                    id={data.author[0]._id}
                    name={data.author[0].username}
                    imgUrl={process.env.NEXT_PUBLIC_API_URL + data.author[0].imgPath}
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
            <h3>Notez cet ouvrage :</h3>
            <ul className={styles.starsList}>
              {rateDisplay}
            </ul>
          </div>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.paragraph}>
            {data.description}
          </p>


          <form className={styles.selectChapter} onSubmit={data.chapters.length > 0 ? (e) => {
            e.preventDefault()
            console.log(e);
            router.push(`/book/${slug}/${chapSlug}`)
          } : (e) => e.preventDefault()  // If there's no chapters, do nothing
          }>
            <div>

              <Select
                id='select_chapter'
                name='select_chapter'
                onChange={(e) => { setChapSlug(e.currentTarget.value) }}
                options={displayChapter}
              />
            </div>
            <div>

              <SubmitButton
                name='Commencer'
              />
            </div>
          </form>
        </div>
        {trigger ? <Toast
          message={msg}
          click={() => setTrigger(false)}
        /> : null}
      </div>
    </Layout>
  )
}

export default BookDescription

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query

  const res = await axios(`${process.env.API_URL}api/v1/book/byslug/${slug}`)
  const data = await res.data.book

  return { props: { data } }
}

const getFavorites = async (slug: any,
  userId: string,
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>) => {
  const res = await axios(`/api/v1/book/byslug/${slug}?userId=${userId}`)
  const favorites = await res.data.book.favorite
  setIsFavorite(favorites)

}


const handleFav = async (slug: any,
  userId: string,
  id: string, setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>,
  msgSetter: React.Dispatch<React.SetStateAction<string>>,
  showSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    const res = await axios.post(`/api/v1/user/favorites/${id}`)
    getFavorites(slug, userId, setIsFavorite)
    // TODO Ajouter le toast avec le message d'Ajout
    const data = res.data
    console.log(data);

    msgSetter(data.msg)
    showSetter(true)
  } catch (error) {
    console.log(error);

  }
}

const handleRate = async (bookId: string, rate: number,
  setRate: React.Dispatch<React.SetStateAction<number>>,
  msgSetter: React.Dispatch<React.SetStateAction<string>>,
  showSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    const res = await axios.post('/api/v1/book/ratebook', { bookId: bookId, rate: rate.toString() })
    const data = await res.data
    getUserRate(bookId, setRate, msgSetter, showSetter)
    msgSetter(data.msg)
    showSetter(true)
  } catch (error) {
    msgSetter('Une erreur est survenue.')
    showSetter(true)
  }
}

const getUserRate = async (id: string, setRate: React.Dispatch<React.SetStateAction<number>>,
  msgSetter: React.Dispatch<React.SetStateAction<string>>,
  showSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    const res = await axios(`/api/v1/user/rate/${id}`)
    const rate = await res.data.rate
    setRate(rate)
  } catch (error: any) {
    if (error.code === 'ERR_BAD_REQUEST') {
      msgSetter(`N'hésitez pas à donner une note !`)
      showSetter(true)
    }

  }
}