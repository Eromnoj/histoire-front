import Head from 'next/head'
import styles from '../../../styles/Create.module.scss'

import Layout from '../../../components/layout/Layout'

import React,{useEffect, useState} from 'react'

import CategoryRadio from '../../../components/CategoryRadio'
import TagSelector from '../../../components/TagSelector'
import InputField from '../../../components/form/InputField'
import TextArea from '../../../components/form/TextArea'
import SubmitButton from '../../../components/form/SubmitButton'
import Toast from '../../../components/Toast'
import { useSelector, useDispatch } from 'react-redux'
import { bookDescription, bookReinit, bookTitle, RootState } from '../../../stores'
import axios from 'axios'
import { NextRouter, useRouter } from 'next/router'

import type { BookStateType } from '../../../types/dataTypes'

const Create = () => {
  const dispatch = useDispatch()
  const bookCreate = useSelector((state:RootState)=> state.create)
  const router = useRouter()
  const [trigger, setTrigger]= useState(false)
  const [msg, setMsg] = useState('')

  useEffect(()=> {
    if(trigger){
      setTimeout(()=> {
        setTrigger(false)
      }, 5000)
    }
  },[trigger])

  useEffect(() => {
    dispatch(bookReinit())
  },[])
  return (
    <Layout>
      <Head>
        <title>Histoires | Ecrire une nouvelle histoire</title>
        <meta name="description" content="J'écris mon histoire" />
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
          handleBookSumbit(bookCreate,router, setMsg, setTrigger)
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
        {trigger ? <Toast 
          message={msg}
          click={() => setTrigger(false)}
        /> : null }
      </div>
    </Layout>
  )
}

export default Create

const handleBookSumbit = async (book:BookStateType, router: NextRouter,
  msgSetter: React.Dispatch<React.SetStateAction<string>>,
  showSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
    
  console.log(book);
  try {
    const res = await axios.post('/api/v1/book/createbook',book)
    const data = await res.data
    router.push(`/book/write/${data.book._id}`)
  } catch (error: any) {
    msgSetter(error.response.data.msg)
    showSetter(true)
  }
}
