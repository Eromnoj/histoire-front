import Head from 'next/head'
import styles from '../styles/login.module.scss'

import Layout from '../components/layout/Layout'

import InputField from '../components/form/InputField'
import SubmitButton from '../components/form/SubmitButton'

import React, { useReducer } from 'react'

const Register = () => {
  const initialState = {
    email: '',
    username: '',
    password: ''
  }

  const reducer = (state: { email: string, username: string, password: string }, action: { field: string, payload: string }) => {
    switch (action.field) {
      case 'email':
        return { ...state, email: action.payload };
      case 'username':
        return { ...state, username: action.payload };
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
        <title>Histoires | S' inscrire</title>
        <meta name="description" content="Créer un compte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <p className={styles.title}>Se connecter</p>
        <form className={styles.loginForm}>
          <InputField
            id='email'
            name='email'
            label='Email'
            value={state.email}
            onChange={(e) => dispatch({field:'email', payload: e.currentTarget.value })}
          />

          <InputField
            id='username'
            name='username'
            label={`Nom d'utilisateur`}
            value={state.username}
            onChange={(e) => dispatch({field:'username', payload: e.currentTarget.value })}
          />
          <InputField
            id='password'
            name='password'
            label='Mot de passe'
            value={state.password}
            onChange={(e) => dispatch({field:'password', payload: e.currentTarget.value })}
          />

          <div className={styles.button}>
            <p></p>
            <SubmitButton
              name="Se Connecter"
              onClick={() => null}
            />
          </div>
        </form>

        <div className={styles.account}>Vous avez un compte ? <a href="#">Connectez-vous ici !</a></div>
      </div>
    </Layout>
  )
}

export default Register
