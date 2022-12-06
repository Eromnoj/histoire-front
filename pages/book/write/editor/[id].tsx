import React, { useEffect, useState } from 'react'
import styles from '../../../../styles/Read.module.scss'
import { useRouter } from 'next/router'

import Image from 'next/image'
import Back from '../../../../public/img/Back.png'
import Save from '../../../../public/img/Save.png'
import InputField from '../../../../components/form/InputField'
import Toast from '../../../../components/Toast'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch } from '@reduxjs/toolkit'

import { chapterContent, chapterOrder, chapterTitle, RootState } from '../../../../stores'
import axios from 'axios'

const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false

type Chapter = {
  title: string,
  content: string,
  chapterOrder: number
}

const Edit = () => {
  const router = useRouter()
  const {id} = router.query

  const dispatch = useDispatch()
  const chapter:Chapter = useSelector((state:RootState) => state.chapter)
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
    getChapterContent(id, dispatch, setMsg, setTrigger)
  },[])
  

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <div className={styles.back} onClick={() => router.back()}>
          <div className={styles.image}>
          <Image
            src={Back}
            fill={true}
            alt='Go Back'
            />
            </div>
        </div>
        <div className={styles.bookmarkSave} onClick={()=> saveChapter(id, chapter, setMsg, setTrigger)}>
        <div className={styles.image}>
          <Image
            src={Save}
            fill={true}
            alt='Save'
          />
        </div>
        </div>
      </div>

      <div className={styles.editor}>
        <InputField
        id='chapterOrder'
        label='Numéro de chapitre'
        name='chapterOrder'
        type='number'
        value={String(chapter.chapterOrder)}
        onChange={(e)=> dispatch(chapterOrder({chapterOrder: Number(e.currentTarget.value)}))} 
        />
        <InputField 
          id='title'
          label='Titre'
          name='title'
          value={chapter.title}
          onChange={(e)=> dispatch(chapterTitle({title: e.currentTarget.value}))}
        
        />
       <ReactQuill theme='snow' style={{height: '100vh'}} value={chapter.content} onChange={(e:string) => dispatch(chapterContent({content: e}))}/>
      </div>
      {trigger ? <Toast
        message={msg}
        click={() => setTrigger(false)}
      /> : null}
    </div>
  )
}

export default Edit

const getChapterContent = async (id:any, dispatch:Dispatch,
  msgSetter: React.Dispatch<React.SetStateAction<string>>,
  showSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    const res = await axios(`/api/v1/chapter/${id}`)
    const data = await res.data.chapter
    dispatch(chapterContent({content: data.content}))
    dispatch(chapterOrder({chapterOrder: data.chapterOrder}))
    dispatch(chapterTitle({title: data.title}))
  } catch (error:any) {
    msgSetter(error.response.data.msg)
    showSetter(true)
  }
}

const saveChapter = async (id: any, chapterData:Chapter,
  msgSetter: React.Dispatch<React.SetStateAction<string>>,
  showSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    const res = await axios.patch(`/api/v1/chapter/${id}`, chapterData)
    const data = await res.data
    const msg = await data.msg
    msgSetter(msg)
    showSetter(true)
    
  } catch (error:any) {
    msgSetter(error.response.data.msg)
    showSetter(true)
  }
}