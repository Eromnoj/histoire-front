import React, { FC, useEffect, useRef, useState } from 'react'
import styles from '../../../styles/Read.module.scss'

import Image from 'next/image'
import Back from '../../../public/img/Back.png'
import Bookmark from '../../../public/img/Bookmark.png'
import Toast from '../../../components/Toast'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '../../../stores'

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
type BookMark = {
  chapterId : string,
  bookmark: number
}
const read: FC<dataProps> = ({ data }) => {

  const chapterEl = useRef<HTMLInputElement>(null)
  const [chapterScroll, setChapterScroll] = useState(0)
  const [trigger, setTrigger]= useState(false)
  const [msg, setMsg] = useState('')
  const {userId} = useSelector((state:RootState)=> state.userSession)

  // Function to set the InnerHtml
  const router = useRouter()
  const contentText = () => {
    return { __html: data.content }
  }
  useEffect(() => {//Get the scroll position relatively to the element height to create the progression percent
    
    const handleScroll = () => {
      if (chapterEl.current !== null) {
      const percent = Math.floor(chapterEl.current.scrollTop * 100 / (chapterEl.current.scrollHeight - window.innerHeight))
      setChapterScroll(percent)
    }}
    chapterEl.current?.addEventListener('scroll', handleScroll)
    return () => chapterEl.current?.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(()=>{
    getBookmark(userId, chapterEl, data._id, setMsg, setTrigger)
  },[])

  useEffect(()=> {
    if(trigger){
      setTimeout(()=> {
        setTrigger(false)
      }, 5000)
    }
  },[trigger])
  
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
        <div className={styles.bookmarkSave} onClick={() => setBookmark(userId, data._id, chapterScroll, setMsg, setTrigger)}>
          <div className={styles.image}>
            <Image
              src={Bookmark}
              fill={true}
              alt='Bookmark'
            />
          </div>
        </div>
      </div>

      <div className={styles.whiteBox} ref={chapterEl}>
        
        <div className={styles.text} dangerouslySetInnerHTML={contentText()}>

        </div>
      </div>
      {trigger ? <Toast 
          message={msg}
          click={()=> setTrigger(false)}
        /> : null }
    </div>
  )
}

export default read

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { chlug } = context.query

  const res = await axios(`${process.env.API_URL}api/v1/chapter/getbyslug/${chlug}`)
  const data = await res.data.chapter

  return { props: { data } }
}

const setBookmark = async (userId: string, 
  id:string, 
  scrollPosition: number, 
  setMessage:React.Dispatch<React.SetStateAction<string>>,
  setTrigger:React.Dispatch<React.SetStateAction<boolean>>) => {
 
    const bookmark:BookMark = {
      chapterId: id,
      bookmark: scrollPosition
    }
    try {
      const res = await axios.post('/api/v1/user/bookmark', bookmark)
      const resData = await res.data
      setTrigger(true)
      setMessage(resData.msg)
    
    } catch (error: any) {
      setTrigger(true)
      setMessage(error.response.data.msg)
      
    }
  
}

const getBookmark = async (userId: string, chapterEl: React.RefObject<HTMLInputElement>, chapterId:string, 
  setMessage:React.Dispatch<React.SetStateAction<string>>,
  setTrigger:React.Dispatch<React.SetStateAction<boolean>>) => {
  if(userId){
    try {
      const res = await axios(`/api/v1/user/bookmark?chapterId=${chapterId}`)
      const bmData = res.data
      if (chapterEl.current !== null) {
        const scroll = bmData.bookmark.bookmark * (chapterEl.current.scrollHeight - window.innerHeight) /100
        chapterEl.current.scrollTo(0, scroll)
      }
    } catch (error:any) {
      setTrigger(true)
      setMessage(error.response.data.msg)
    }
  }
}