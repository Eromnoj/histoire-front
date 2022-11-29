import Head from 'next/head'
import styles from '../../styles/UserInfo.module.scss'

import Layout from '../../components/layout/Layout'

import React, { useEffect, useState } from 'react'

import UserNav from '../../components/UserNav'
import InputField from '../../components/form/InputField'
import SubmitButton from '../../components/form/SubmitButton'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, userInfoEmail, userInfoFacebook, userInfoName, userInfoPassword, userInfoTwitter } from '../../stores'

import axios from 'axios'
import { Dispatch } from '@reduxjs/toolkit'

const UserInfo = () => {
  const dispatch = useDispatch()


  const userInfo = useSelector((state: RootState) => state.userInfo)
  const userSession = useSelector((state: RootState) => state.userSession)

  const [password, setPassword] = useState('')

  const [msg, setMsg] = useState('')
  const [showMsg, setShowMsg] = useState(false)


  useEffect(() => {
    fetchUserData(userSession.userId,
      dispatch,
      setMsg,
      setShowMsg)
  }, [])

  useEffect(() => {
    if (showMsg) {
      setTimeout(() => {
        setShowMsg(false)
      }, 5000)
    }
  }, [showMsg])

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
          {showMsg ? <p>{msg}</p> : null}
          <form className={styles.infoForm} onSubmit={(e) => {
            e.preventDefault()
            submitChange(userInfo,
              password,
              userSession.userId,
              setMsg,
              setShowMsg)
            setPassword('')
          }}>
            <InputField
              id='name'
              name='name'
              label='Nom'
              value={userInfo.username}
              onChange={(e) => dispatch(userInfoName({ username: e.currentTarget.value }))}
            />
            <InputField
              id='email'
              type='email'
              name='email'
              label='Email'
              value={userInfo.email}
              onChange={(e) => dispatch(userInfoEmail({ email: e.currentTarget.value }))}
            />
            <InputField
              id='facebook'
              type='url'
              name='facebook'
              label='Facebook'
              value={userInfo.facebook}
              onChange={(e) => dispatch(userInfoFacebook({ facebook: e.currentTarget.value }))}
            />
            <InputField
              id='twitter'
              type='url'
              name='twitter'
              label='Twitter'
              value={userInfo.twitter}
              onChange={(e) => dispatch(userInfoTwitter({ twitter: e.currentTarget.value }))}
            />
            <InputField
              id='newPassword'
              type='newPassword'
              name='newPassword'
              label='Nouveau Mot de passe'
              value={userInfo.newPassword}
              onChange={(e) => dispatch(userInfoPassword({ password: e.currentTarget.value }))}
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
    </Layout>
  )
}

export default UserInfo


//Functions

const fetchUserData = async (id: string,
  dispatch: Dispatch,
  msgSetter: React.Dispatch<React.SetStateAction<string>>,
  showSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    const res = await axios(`/api/v1/user/${id}`)
    const user = res.data.user
    dispatch(userInfoEmail({ email: user.email }))
    dispatch(userInfoName({ username: user.username }))
    dispatch(userInfoTwitter({ twitter: user.twitter }))
    dispatch(userInfoFacebook({ facebook: user.facebook }))

  } catch (error: any) {
    msgSetter(error.response.data.msg)
    showSetter(true)
  }
}

const submitChange = async (info: {},
  password: string,
  id: string,
  msgSetter: React.Dispatch<React.SetStateAction<string>>,
  showSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
  let infoToSend = { ...info, password }

  try {
    const res = await axios.patch(`/api/v1/user/${id}`, infoToSend)
    msgSetter(res.data.msg)
    showSetter(true)


  } catch (error: any) {
    msgSetter(error.response.data.msg)
    showSetter(true)
  }
}