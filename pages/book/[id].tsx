import Head from 'next/head'
import styles from '../../styles/BookDescription.module.scss'

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import Layout from '../../components/layout/Layout'

import React from 'react'
import { useRouter } from 'next/router'


import Book from '../../components/Book'
import Tag from '../../components/form/Tag'
import AuthorAvatar from '../../components/AuthorAvatar'
import Select from '../../components/form/Select'
import SubmitButton from '../../components/form/SubmitButton'

const BookDescription: NextPageWithLayout = () => {
  return <p>Book Description</p>
}

BookDescription.getLayout = function getLayout(page: ReactElement) {
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

          <div className={styles.book}>

            <Book
              id='adeggreg5'
              picture='/book.webp'
              title='Lorem Ipsum'
              author='Author Name'
              category='short_story'
              rating={4}
              favorite={true} />

            <div className={styles.tag}>
              <Tag
                name='Jeunesse'
                isSelected={false}
                onClick={() => null}
              />
              <Tag
                name='Aventure'
                isSelected={false}
                onClick={() => null}
              />
            </div>
          </div>

          <div className={styles.authorInfo}>
            <p>A propos de l'auteur :</p>

            <div className={styles.authorID}>
              <div className={styles.avatar}>
                <AuthorAvatar
                  id='blbabl'
                  name='Author Name'
                  imgUrl='/avatars/headshot.png'
                />
              </div>

              <div className={styles.authorName}>
                Author Name
              </div>
            </div>

            <div className={styles.authorPrez}>
              Fusce condimentum viverra neque eu vehicula. Donec sem quam, condimentum imperdiet neque iaculis, finibus dignissim enim
            </div>
          </div>


        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Lorem Ipsum</h2>
          <p className={styles.paragraph}>
            In lectus velit, maximus in imperdiet sed, iaculis in ligula. Aenean orci est, sollicitudin eget aliquet at, aliquet vitae enim. Duis sed euismod turpis. Mauris fringilla quam auctor efficitur imperdiet.
          </p><p className={styles.paragraph}>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In iaculis eleifend libero nec luctus. Fusce dictum rhoncus augue, quis facilisis diam rhoncus vel. Mauris vitae elit ex. Etiam iaculis euismod velit, ut sagittis massa condimentum eu. Aenean vitae erat vel purus tincidunt porttitor.
          </p><p className={styles.paragraph}>
            Pellentesque vulputate scelerisque tristique. Sed porttitor pellentesque odio et pharetra. Maecenas finibus porta fringilla. Vivamus tortor nisi, elementum non viverra sagittis, venenatis nec ipsum. Sed efficitur, velit sed elementum rhoncus, dui erat scelerisque tortor, non pharetra dolor leo non nisi.
          </p><p className={styles.paragraph}>
            In quis turpis sit amet ligula aliquet fermentum ac nec leo.
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