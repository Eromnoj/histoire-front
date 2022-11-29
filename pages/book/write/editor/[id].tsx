import React, { useState } from 'react'
import styles from '../../../../styles/Read.module.scss'
import { useRouter } from 'next/router'

import Image from 'next/image'
import Back from '../../../../public/img/Back.png'
import Save from '../../../../public/img/Save.png'
import InputField from '../../../../components/form/InputField'

import { useSelector, useDispatch } from 'react-redux'

import dynamic from 'next/dynamic'
import { chapterContent, chapterTitle, RootState } from '../../../../stores'
// const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
// 	ssr: false,
// 	loading: () => <p>Loading ...</p>,
// 	})
const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false


const Edit = () => {
  const router = useRouter()
  const {id} = router.query

  const dispatch = useDispatch()
  const chapter = useSelector((state:RootState) => state.chapter)

  console.log(chapter);
  
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <div className={styles.back}>
          <div className={styles.image}>
          <Image
            src={Back}
            fill={true}
            alt='Go Back'
            />
            </div>
        </div>
        <div className={styles.bookmarkSave}>
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
          id='title'
          label='Titre'
          name='title'
          value={chapter.title}
          onChange={(e)=> dispatch(chapterTitle({title: e.currentTarget.value}))}
        
        />
       <ReactQuill theme='snow' style={{height: '100vh'}} value={chapter.content} onChange={(e:string) => dispatch(chapterContent({content: e}))}/>
      </div>
    </div>
  )
}

export default Edit