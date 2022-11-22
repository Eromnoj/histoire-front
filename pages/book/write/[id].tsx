import Head from 'next/head'
import styles from '../../../styles/Create.module.scss'

import Layout from '../../../components/layout/Layout'

import React from 'react'
import { useRouter } from 'next/router'
import Chapter from '../../../components/Chapter'
import NavArrow from '../../../components/NavArrow'

import CategoryRadio from '../../../components/CategoryRadio'
import TagSelector from '../../../components/TagSelector'
import InputField from '../../../components/form/InputField'
import TextArea from '../../../components/form/TextArea'
import SubmitButton from '../../../components/form/SubmitButton'

import Image from 'next/image'
import Book from '../../../public/book.webp'
import { useSelector, useDispatch } from 'react-redux'
import { bookDescription, bookTitle, RootState } from '../../../stores'

const EditBook = () => {
  const router = useRouter()
  const { id } = router.query
  const dispatch = useDispatch()
  const bookCreate = useSelector((state:RootState)=> state.create)
  console.log(bookCreate);
  
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
              {/* TODO : Intégrer le imgPath dans le state local après création du backend */}
            </form>
          </div>
          <div className={styles.restrain}>
            <CategoryRadio />

          </div>
          <div className={styles.restrain}>
            <TagSelector method='create' />

          </div>

        </div>
        <div className={styles.bookDesc}>
          <InputField
            id='title'
            name='title'
            label={`Titre de l'ouvrage`}
            value={bookCreate.title}
            onChange={(e) => dispatch(bookTitle({title: e.currentTarget.value}))}
          />
          <TextArea
            id='description'
            name='description'
            label='Description'
            rows={20}
            value={bookCreate.description}
            onChange={(e) => dispatch(bookDescription({description: e.currentTarget.value}))}
          />
          <div className={styles.button}>
            <SubmitButton
              name='Sauvegarder'
            />
          </div>

          <div className={styles.chapter}>
            <p className={styles.chapTitle}>Chapitre :</p>

            <Chapter
              id='zfzezfe'
              title='Lorem Ipsum'
              isPublish={true}
              onClickDel={() => null}
              onClickMod={() => null}
              onClickStatus={() => null}
            />
            <Chapter
              id='zfzezfe'
              title='Lorem Ipsum'
              isPublish={false}
              onClickDel={() => null}
              onClickMod={() => null}
              onClickStatus={() => null}
            />
            <Chapter
              id='zfzezfe'
              title='Lorem Ipsum'
              isPublish={false}
              onClickDel={() => null}
              onClickMod={() => null}
              onClickStatus={() => null}
            />
            <Chapter
              id='zfzezfe'
              title='Lorem Ipsum'
              isPublish={false}
              onClickDel={() => null}
              onClickMod={() => null}
              onClickStatus={() => null}
            />

            <div className={styles.nav}>
              <NavArrow direction='left' onClick={() => null} />
              <NavArrow direction='right' onClick={() => null} />
            </div>
          </div>
          <div className={styles.createChapter}>Créer un chapitre</div>
        </div>
      </div>
    </Layout>
  )
}

export default EditBook