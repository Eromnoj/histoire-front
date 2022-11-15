import Head from 'next/head'
import styles from '../../../styles/Create.module.scss'

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../../_app'
import Layout from '../../../components/layout/Layout'

import React from 'react'
import { useRouter } from 'next/router'

import CategorySelector from '../../../components/CategorySelector'
import TagSelector from '../../../components/TagSelector'
import InputField from '../../../components/form/InputField'
import TextArea from '../../../components/form/TextArea'
import SubmitButton from '../../../components/form/SubmitButton'

import Image from 'next/image'
import Book from '../../../public/book.webp'

const Create: NextPageWithLayout = () => {
  return <p>Book Description</p>
}

Create.getLayout = function getLayout(page: ReactElement) {
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
          <div className={styles.bookImgMod}>
            <div className={styles.bookImg}>
              <Image
                src={Book}
                alt='livre'
                width={300}
                height={300}
              />
            </div>
            <form method="post" encType="multipart/form-data" className={styles.bookImgForm}>
              <label htmlFor="avatar" className={styles.bookImgLabel}>
                Choisir une couverture
                <input type="file" accept="image/*" name="avatar" id="avatar" className={styles.bookImgInput} />
              </label>
            </form>
          </div>
          <div className={styles.restrain}>
            <CategorySelector />

          </div>
          <div className={styles.restrain}>
            <TagSelector />

          </div>

        </div>
        <div className={styles.bookDesc}>
          <InputField
            id='title'
            name='title'
            label={`Titre de l'ouvrage`}
            onChange={() => null}
          />
          <TextArea
            id='description'
            name='description'
            label='Description'
            rows={20}
            onChange={() => null}
          />
          <div className={styles.button}>
            <SubmitButton
              name='Sauvegarder'
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Create