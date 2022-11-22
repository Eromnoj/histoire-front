import Head from 'next/head'
import styles from '../../../styles/Description.module.scss'

import Layout from '../../../components/layout/Layout'

import React from 'react'
import { useRouter } from 'next/router'

import UserNav from '../../../components/UserNav'
import AuthorAvatar from '../../../components/AuthorAvatar'
import TextArea from '../../../components/form/TextArea'
import SubmitButton from '../../../components/form/SubmitButton'


import { useSelector, useDispatch } from 'react-redux'
import { RootState, userDescriptionContent } from '../../../stores'
const Description = () => {
  const router = useRouter()
  const { id } = router.query

  const dispatch = useDispatch()
  const userDescription = useSelector((state:RootState) => state.userDescription)

  console.log(userDescription)
  
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
              <AuthorAvatar
                id='blbabl'
                name='Author Name'
                imgUrl='/avatars/headshot.png'
              />
            </div>
            <form method="post" encType="multipart/form-data" className={styles.avatarForm}>
            <label htmlFor="avatar" className={styles.avatarLabel}>
              Changer ma photo de profil
            <input type="file" accept="image/*" name="avatar" id="avatar" className={styles.avatarInput} />
            </label>
            {/* Integrer imgPath dans l'état */}
            </form>
          </div>
          <div className={styles.description}>
            <form className={styles.descForm}>

              <TextArea
                id='textarea'
                name='textarea'
                label='Ma description'
                value={userDescription.content}
                onChange={(e)=> dispatch(userDescriptionContent({content: e.currentTarget.value}))}
                rows={30}
              />
              <div className={styles.button}>
                <SubmitButton
                  name='Enregistrer'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Description