import React, { FC } from 'react'
import styles from '../../../styles/Read.module.scss'

import Image from 'next/image'
import Back from '../../../public/img/Back.png'
import Bookmark from '../../../public/img/Bookmark.png'

import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

type dataProps = {
  data: {
    _id: string,
    title: string,
    chapterOrder: number,
    isPublished: boolean,
    content: string,
    slug: string
  }
}
const read:FC<dataProps> = ({data}) => {

  // Function to set the InnerHtml
  const router = useRouter()
  const contentText = () =>{
    return {__html: data.content }
  }
  
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
        <div className={styles.bookmarkSave}>
        <div className={styles.image}>
          <Image
            src={Bookmark}
            fill={true}
            alt='Bookmark'
          />
        </div>
        </div>
      </div>

      <div className={styles.whiteBox}>
        <div className={styles.text} dangerouslySetInnerHTML={contentText()}>
          
        </div>
      </div>
    </div>
  )
}

export default read

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { chlug } = context.query

  const res = await axios(`http://localhost:3000/api/v1/chapter/getbyslug/${chlug}`)
  const data = await res.data.chapter
  console.log(data);
  
  return { props: { data } }
}