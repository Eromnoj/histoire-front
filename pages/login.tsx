import Head from 'next/head'
import styles from '../styles/login.module.scss'

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

import Layout from '../components/layout/Layout'

import TextField from '../components/form/TextField'
import SubmitButton from '../components/form/SubmitButton'

const Login: NextPageWithLayout = () => {
  return <p>Login</p>
}

Login.getLayout = function getLayout(page: ReactElement) {
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
          <TextField
            id='email'
            name='email'
            label='Email'
            onChange={() => null}
          />
          <TextField
            id='password'
            name='password'
            label='Mot de passe'
            onChange={() => null}
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

