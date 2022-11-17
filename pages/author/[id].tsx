import Head from 'next/head'
import styles from '../../styles/AuthorDescription.module.scss'

import { ReactElement, useEffect, useState } from 'react'
import type { NextPageWithLayout } from '../_app'
import Layout from '../../components/layout/Layout'

import React, { FC } from 'react'
import { useRouter } from 'next/router'

import Image from 'next/image'
import Facebook from '../../public/img/Facebook.png'
import Twitter from '../../public/img/Twitter.png'
import Mail from '../../public/img/Envelope.png'

import AuthorAvatar from '../../components/AuthorAvatar'
import Book from '../../components/Book'
import NavArrow from '../../components/NavArrow'

const SocialLink: FC = () => {
  return (
    <div className={styles.links}>
      <div className={styles.socialLink}>
        <Image
          src={Facebook}
          width={45}
          height={45}
          alt='Facebook'
        />
      </div>
      <div className={styles.socialLink}>
        <Image
          src={Twitter}
          width={45}
          height={45}
          alt='Twitter'
        />
      </div>
      <div className={styles.socialLink}>
        <Image
          src={Mail}
          width={45}
          height={45}
          alt='Mail'
        />
      </div>
    </div>
  )
}

const AuthorDescription: NextPageWithLayout = () => {
  return <p>Author description</p>
}

AuthorDescription.getLayout = function getLayout(page: ReactElement) {
  const router = useRouter()
  const { id } = router.query

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])


  return (
    <Layout>
      <Head>
        <title>Histoires | Parcourir</title>
        <meta name="description" content="Partagez vos histoires" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.authorInfo}>
          <div className={styles.sideBar}>
            <div className={styles.avatar}>
              <AuthorAvatar
                id='blbabl'
                name='Author Name'
                imgUrl='/avatars/headshot.png'
              />
            </div>
            <div className={styles.social}>
              {windowWidth >= 768 && windowWidth <= 1066 ?
                <>
                  <h2 className={styles.authorName}>Author Name</h2>
          
                  <SocialLink />
                </>

                : <SocialLink />
              }
            </div>
          </div>
          <div className={styles.authorDescription}>
            {windowWidth >= 768 && windowWidth <= 1066 ?
              null

              :
              <h2 className={styles.authorName}>Author Name</h2>

            }
            <p className={styles.paragraph}>
              In lectus velit, maximus in imperdiet sed, iaculis in ligula. Aenean orci est, sollicitudin eget aliquet at, aliquet vitae enim. Duis sed euismod turpis. Mauris fringilla quam auctor efficitur imperdiet.
            </p><p className={styles.paragraph}>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In iaculis eleifend libero nec luctus. Fusce dictum rhoncus augue, quis facilisis diam rhoncus vel. Mauris vitae elit ex. Etiam iaculis euismod velit, ut sagittis massa condimentum eu. Aenean vitae erat vel purus tincidunt porttitor.
            </p><p className={styles.paragraph}>
              Pellentesque vulputate scelerisque tristique. Sed porttitor pellentesque odio et pharetra. Maecenas finibus porta fringilla. Vivamus tortor nisi, elementum non viverra sagittis, venenatis nec ipsum. Sed efficitur, velit sed elementum rhoncus, dui erat scelerisque tortor, non pharetra dolor leo non nisi.
            </p><p className={styles.paragraph}>
              In quis turpis sit amet ligula aliquet fermentum ac nec leo.
            </p>

          </div>
        </div>
        <div className={styles.bookNav}>
          <div className={styles.books}>
            <Book
              id='adeggreg5'
              picture='/book.webp'
              title='Lorem Ipsum'
              author='Author Name'
              category='short_story'
              rating={4}
              favorite={true} />
            <Book
              id='adeggreg5'
              picture='/book.webp'
              title='Lorem Ipsum'
              author='Author Name'
              category='short_story'
              rating={4}
              favorite={true} />
              {windowWidth <1066 ? null :
            <Book
            id='adeggreg5'
            picture='/book.webp'
            title='Lorem Ipsum'
            author='Author Name'
            category='short_story'
            rating={4}
            favorite={true} />
          }
          </div>
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