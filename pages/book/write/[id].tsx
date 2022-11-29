import Head from 'next/head'
import styles from '../../../styles/Create.module.scss'

import Layout from '../../../components/layout/Layout'

import React, { useEffect } from 'react'
import Chapter from '../../../components/Chapter'
import NavArrow from '../../../components/NavArrow'

import CategoryRadio from '../../../components/CategoryRadio'
import TagSelector from '../../../components/TagSelector'
import InputField from '../../../components/form/InputField'
import TextArea from '../../../components/form/TextArea'
import SubmitButton from '../../../components/form/SubmitButton'

import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { bookDescription, bookTitle, RootState, bookImgPath, bookCategory, bookGenre } from '../../../stores'
import { Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import { NextRouter, useRouter } from 'next/router'

type BookState = {
  category: string,
  tags: string[],
  title: string,
  description: string,
  coverPath: string
}

const EditBook = () => {
  const router = useRouter()
  const { id } = router.query
  const dispatch = useDispatch()
  const bookCreate = useSelector((state:RootState)=> state.create)
  console.log(bookCreate);
  const imgPath = `http://localhost:5000${bookCreate.coverPath}`
  
  console.log(id);
  useEffect(()=>{
    
    getBook(id, dispatch)
  },[id])

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
                src={imgPath}
                alt='livre'
                width={300}
                height={300}
              />
            </div>
            <form method="post" encType="multipart/form-data" className={styles.bookImgForm}>
              <label htmlFor="avatar" className={styles.bookImgLabel}>
                Choisir une couverture
                <input 
                type="file" 
                accept="image/*" 
                name="avatar" 
                id="avatar" 
                className={styles.bookImgInput}
                onChange={(e) => updateBookCover(e.target.files, dispatch, id)}
                />
              </label>
            </form>
          </div>
          <div className={styles.restrain}>
            <CategoryRadio />

          </div>
          <div className={styles.restrain}>
            <TagSelector method='create' />

          </div>

        </div>
        <form className={styles.bookDesc} onSubmit={(e)=> {
          e.preventDefault()
          handleBookSumbit(bookCreate,router, id)
        }}>
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
        </form>
      </div>
    </Layout>
  )
}

export default EditBook


const handleBookSumbit = async (book:BookState, router: NextRouter, id: any) => {
    
  console.log(book);
  try {
    const res = await axios.patch(`/api/v1/book/${id}`,book)
    const data = await res.data
    console.log(data.msg);
  } catch (error) {
    console.log(error);
    
  }
}

const updateBookCover = async (file: FileList | null, 
  dispatch: Dispatch, id:any ) => {
  if (file !== null) {
    console.log(file[0]);
    const formData = new FormData();
    formData.append('image', file[0])
    formData.append('bookId', id)
    try {
      const res = await axios.post('/api/v1/book/uploadcover', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      const img = await res.data.image
      console.log(img);
      
      dispatch(bookImgPath({coverPath: img}))

    } catch (error) {
      console.log(error);

    }
  }
}

const getBook = async (id: any, dispatch:Dispatch)=>{
  try {
    const res = await axios(`/api/v1/book/${id}`)
    const data = await res.data.book
    dispatch(bookTitle({title : data.title}))
    dispatch(bookDescription({description : data.description}))
    dispatch(bookCategory({category : data.category}))
    data.tags.forEach((tag: string) => {

      dispatch(bookGenre({tags : tag}))
    })
    dispatch(bookImgPath({coverPath : data.coverPath}))
  } catch (error) {
    
  }

}