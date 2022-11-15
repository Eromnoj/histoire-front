import Head from 'next/head'
import styles from '../styles/login.module.scss'

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

import Layout from '../components/layout/Layout'

import InputField from '../components/form/InputField'
import SubmitButton from '../components/form/SubmitButton'

const Register: NextPageWithLayout = () => {
  return <p>Register</p>
}

Register.getLayout = function getLayout(page: ReactElement) {
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
            onChange={() => null}
          />

          <InputField
            id='username'
            name='username'
            label={`Nom d'utilisateur`}
            onChange={() => null}
          />
          <InputField
            id='password'
            name='password'
            label='Mot de passe'
            onChange={() => null}
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

