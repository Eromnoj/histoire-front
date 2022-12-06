import Head from 'next/head'
import styles from '../styles/login.module.scss'

import Layout from '../components/layout/Layout'

import InputField from '../components/form/InputField'
import SubmitButton from '../components/form/SubmitButton'
import Toast from '../components/Toast'
import React, { useReducer, useState, useEffect } from 'react'

import axios, { AxiosError } from 'axios'

import { NextRouter, useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { userSessionLogin } from '../stores'
import Link from 'next/link'
import { Dispatch } from '@reduxjs/toolkit'

import {LoginData, initialState, reducer} from '../reducers/login'
const Login = () => {

  const router = useRouter()
  const dispatchSession = useDispatch()



  const [loginData, dispatch] = useReducer(reducer, initialState)
  const [trigger, setTrigger]= useState(false)
  const [msg, setMsg] = useState('')

  useEffect(()=> {
    if(trigger){
      setTimeout(()=> {
        setTrigger(false)
      }, 5000)
    }
  },[trigger])
  return (
    <Layout>
      <Head>
        <title>Histoires | Se connecter</title>
        <meta name="description" content="Me connecter à mon compte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <p className={styles.title}>Se connecter</p>
       
        <form className={styles.loginForm} onSubmit={(e) => {
          e.preventDefault()
          handleLogin(loginData, setMsg, setTrigger, dispatchSession, router)
        }}>
          <InputField
            id='email'
            type='email'
            name='email'
            label='Email'
            value={loginData.email}
            onChange={(e) => dispatch({ field: 'email', payload: e.currentTarget.value })}
          />
          <InputField
            id='password'
            type='password'
            name='password'
            label='Mot de passe'
            value={loginData.password}
            onChange={(e) => dispatch({ field: 'password', payload: e.currentTarget.value })}
          />

          <div className={styles.button}>
            <p>Mot de passe oublié ? <Link href='/forgot'>Cliquez ici</Link></p>
            <SubmitButton
              name="Se Connecter"
            />
          </div>
        </form>

        <div className={styles.account}>Pas encore inscrit ? <Link href='/register'>Créer votre compte maintenant !</Link></div>
      </div>
      {trigger ? <Toast 
          message={msg}
          click={()=> setTrigger(false)}
        /> : null }
    </Layout>
  )
}

export default Login


const handleLogin = async (data: LoginData,
  msgSetter: React.Dispatch<React.SetStateAction<string>>,
  showSetter: React.Dispatch<React.SetStateAction<boolean>>,
  dispatchSession: Dispatch,
  router: NextRouter) => {

  try {
    const res = await axios.post('/api/v1/auth/login', data)
    const userData = await res.data
    dispatchSession(userSessionLogin(userData.user))
    const { userId } = userData.user
    router.push(`/userinterface/infos/`)

  } catch (error: any | AxiosError) {
    // console.log(error)
    msgSetter(error.response.data.msg)
    showSetter(true)
  }

}

