import Head from 'next/head'
import styles from '../styles/login.module.scss'

import Layout from '../components/layout/Layout'

import InputField from '../components/form/InputField'
import SubmitButton from '../components/form/SubmitButton'

import React, { useReducer } from 'react'

const Login = () => {
  const initialState = {
    email: '',
    password: ''
  }

  const reducer = (state: { email: string, password: string }, action: { field: string, payload: string }) => {
    switch (action.field) {
      case 'email':
        return { ...state, email: action.payload };
      case 'password':
        return { ...state, password: action.payload };
      default:
        return state

    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  
  return (
    <Layout>
      <Head>
        <title>Histoires | Se connecter</title>
        <meta name="description" content="Me connecter à mon compte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <p className={styles.title}>Se connecter</p>
        <form className={styles.loginForm}>
          <InputField
            id='email'
            type='email'
            name='email'
            label='Email'
            value={state.email}
            onChange={(e) => dispatch({field:'email', payload: e.currentTarget.value })}
          />
          <InputField
            id='password'
            type='password'
            name='password'
            label='Mot de passe'
            value={state.password}
            onChange={(e) => dispatch({field:'password', payload: e.currentTarget.value })}
          />

          <div className={styles.button}>
            <p>Mot de passe oublié ? <a href="#">Cliquez ici</a></p>
            <SubmitButton
              name="Se Connecter"
              onClick={() => null}
            />
          </div>
        </form>

        <div className={styles.account}>Pas encore inscrit ? <a href="#">Créer votre compte maintenant !</a></div>
      </div>
    </Layout>
  )
}

export default Login


