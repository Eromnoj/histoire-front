import Head from 'next/head'
import styles from '../../../styles/Create.module.scss'

import Layout from '../../../components/layout/Layout'

import React from 'react'

import CategoryRadio from '../../../components/CategoryRadio'
import TagSelector from '../../../components/TagSelector'
import InputField from '../../../components/form/InputField'
import TextArea from '../../../components/form/TextArea'
import SubmitButton from '../../../components/form/SubmitButton'

import { useSelector, useDispatch } from 'react-redux'
import { bookDescription, bookTitle, RootState } from '../../../stores'
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

const Create = () => {
  const dispatch = useDispatch()
  const bookCreate = useSelector((state:RootState)=> state.create)
  const router = useRouter()


  return (
    <Layout>
      <Head>
        <title>Histoires | Parcourir</title>
        <meta name="description" content="Partagez vos histoires" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.sideBar}>
          <div className={styles.restrain}>
            <CategoryRadio />

          </div>
          <div className={styles.restrain}>
            <TagSelector method='create' />

          </div>

        </div>
        <form className={styles.bookDesc} onSubmit={(e)=> {
          e.preventDefault()
          handleBookSumbit(dispatch,bookCreate,router)
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
        </form>
      </div>
    </Layout>
  )
}

export default Create

const handleBookSumbit = async (dispatch:Dispatch, book:BookState, router: NextRouter) => {
    
  console.log(book);
  try {
    const res = await axios.post('/api/v1/book/createbook',book)
    const data = await res.data
    console.log(data.msg);
    router.push(`/book/write/${data.book._id}`)
  } catch (error) {
    console.log(error);
    
  }
}
