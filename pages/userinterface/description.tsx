import React, { FC, useEffect, useState } from 'react'
import styles from '../../styles/Description.module.scss'

import Head from 'next/head'
import Image from 'next/image'

import UserNav from '../../components/UserNav'
import TextArea from '../../components/form/TextArea'
import InputField from '../../components/form/InputField'
import SubmitButton from '../../components/form/SubmitButton'
import Toast from '../../components/Toast'
import Layout from '../../components/layout/Layout'

import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux'
import { RootState, userDescriptionContent, userDescriptionImgPath } from '../../stores'
import { Dispatch } from '@reduxjs/toolkit'

const Description: FC = () => {

  const dispatch = useDispatch()
  const userDescription = useSelector((state: RootState) => state.userDescription)
  const userSession = useSelector((state: RootState) => state.userSession)
  const [password, setPassword] = useState('')
  const [authorAvatar, setAuthorAvatar] = useState('/uploads/headshot.png')
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
    fetchUserData(userSession.userId,
      dispatch,
      setAuthorAvatar,
      setMsg,
      setTrigger)
  }, [])


  return (
    <Layout>
      <Head>
        <title>Histoires | Parcourir</title>
        <meta name="description" content="Partagez vos histoires" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.sideBar}>
          <UserNav />
        </div>

        <div className={styles.content}>
          <div className={styles.avatarMod}>
            <div className={styles.avatar}>
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL+authorAvatar}
                  alt='Avatar'
                  fill={true}
                  style={{borderRadius: '100%',objectFit:'cover'}}
                  sizes='100%'
                />
            </div>
            <form method="post" encType="multipart/form-data" className={styles.avatarForm}>
              <label htmlFor="image" className={styles.avatarLabel}>
                Changer ma photo de profil
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  id="image"
                  className={styles.avatarInput}
                  onChange={(e) => updateAvatar(e.target.files, setAuthorAvatar, setMsg, setTrigger)} />
              </label>

            </form>
          </div>
          <div className={styles.description}>
            <form className={styles.descForm} onSubmit={(e) => {
              e.preventDefault()
              submitChange(userDescription.content,
                password,
                userSession.userId,
                setMsg,
                setTrigger)
              setPassword('')
            }}>

              <TextArea
                id='textarea'
                name='textarea'
                label='Ma description'
                value={userDescription.content}
                onChange={(e) => dispatch(userDescriptionContent({ content: e.currentTarget.value }))}
                rows={30}

              />
              <div>
                <InputField
                  id='password'
                  type='password'
                  name='password'
                  label='Entrer votre Mot de passe actuel pour valider les changements'
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />

              </div>
              <div className={styles.button}>
                <SubmitButton
                  name='Enregistrer'
                />
              </div>
            </form>
          </div>
        </div>
        {trigger ? <Toast 
          message={msg}
          click={() => setTrigger(false)}
        /> : null }
      </div>
      
    </Layout>
  )
}

export default Description

//Functions

const submitChange = async (description: string,
  password: string,
  id: string,
  msgSetter: React.Dispatch<React.SetStateAction<string>>,
  showSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
  let infoToSend = { description, password }

  try {
    const res = await axios.patch(`/api/v1/user/${id}`, infoToSend)
    msgSetter(res.data.msg)
    showSetter(true)

  } catch (error: any) {
    msgSetter(error.response.data.msg)
    showSetter(true)
  }
}

const updateAvatar = async (file: FileList | null, 
  avatarSetter: React.Dispatch<React.SetStateAction<string>>,
  msgSetter: React.Dispatch<React.SetStateAction<string>>,
  showSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
  if (file !== null) {
    const formData = new FormData();
    formData.append('image', file[0])
    try {
      const res = await axios.post('/api/v1/user/uploadavatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      const imgPath = await res.data.image

      avatarSetter(imgPath)

    } catch (error:any) {
      msgSetter(error.response.data.msg)
    showSetter(true)
    }
  }
}

const fetchUserData = async (id: string, 
  dispatch:Dispatch,
  avatarSetter: React.Dispatch<React.SetStateAction<string>>,
  msgSetter: React.Dispatch<React.SetStateAction<string>>,
  showSetter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
  try {
    const res = await axios(`/api/v1/user/${id}`)
    const user = await res.data.user
    dispatch(userDescriptionContent({ content: user.description }))
    dispatch(userDescriptionImgPath({ imgPath: user.imgPath }))
    const imgPath = user.imgPath
    avatarSetter(imgPath)
  } catch (error: any) {
    msgSetter(error.response.data.msg)
    showSetter(true)
  }
}
