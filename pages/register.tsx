import Head from 'next/head'
import styles from '../styles/login.module.scss'

import Layout from '../components/layout/Layout'

import InputField from '../components/form/InputField'
import SubmitButton from '../components/form/SubmitButton'
import Toast from '../components/Toast'

import React, { useEffect, useReducer, useState } from 'react'
import axios, { AxiosError } from 'axios'

import { NextRouter, useRouter } from 'next/router'
import  {useDispatch } from 'react-redux'
import { userSessionLogin } from '../stores'
import Link from 'next/link'
import { Dispatch } from '@reduxjs/toolkit'

import { initialState, reducer, RegisterData } from '../reducers/register'

const Register = () => {

  const router = useRouter()
  const dispatchSession = useDispatch()

 

  const [registerData, dispatch] = useReducer(reducer, initialState)
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
        <title>Histoires | S' inscrire</title>
        <meta name="description" content="Créer un compte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <p className={styles.title}>Créer mon compte</p>
        
        <form className={styles.loginForm} onSubmit={(e) => {
          e.preventDefault()
          handleRegister(registerData,setMsg,setTrigger,dispatchSession,router)
        }
        } >
          <InputField
            id='email'
            name='email'
            label='Email'
            value={registerData.email}
            onChange={(e) => dispatch({ field: 'email', payload: e.currentTarget.value })}
          />

          <InputField
            id='username'
            name='username'
            label={`Nom d'utilisateur`}
            value={registerData.username}
            onChange={(e) => dispatch({ field: 'username', payload: e.currentTarget.value })}
          />
          <InputField
            id='password'
            name='password'
            type='password'
            label='Mot de passe'
            value={registerData.password}
            onChange={(e) => dispatch({ field: 'password', payload: e.currentTarget.value })}
          />

          <div className={styles.button}>
            <p></p>
            <SubmitButton
              name="S'enregistrer"
            />
          </div>
        </form>

        <div className={styles.account}>Vous avez un compte ? <Link href="/login">Connectez-vous ici !</Link></div>
      </div>
      {trigger ? <Toast 
          message={msg}
          click={()=> setTrigger(false)}
        /> : null }
    </Layout>
  )
}

export default Register


// Functions
const handleRegister = async (data: RegisterData,
  msgSetter: React.Dispatch<React.SetStateAction<string>>,
  showSetter: React.Dispatch<React.SetStateAction<boolean>>,
  dispatchSession:Dispatch,
  router: NextRouter) => {

    try {
      const res = await axios.post('/api/v1/auth/register', data)
      const userData = await res.data
      dispatchSession(userSessionLogin(userData.user))
      router.push(`/userinterface/infos/`)
   
    } catch (error: any | AxiosError) {
      msgSetter(error.response.data.msg)
      showSetter(true)
    }

  }