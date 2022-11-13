import React, {FC} from 'react'
import styles from '../styles/componentsStyle/AuthorGrid.module.scss'

import AuthorAvatar from './AuthorAvatar'

import NavArrow from './NavArrow'

const AuthorGrid:FC = () => {
  return (
    <div className={styles.authors}>
        <p>Mes Auteurs :</p>

        <div className={styles.avatarGrid}>
          <div className={styles.avatar}>
            <AuthorAvatar
              id='blbabl'
              name='Author Name'
              imgUrl='/avatars/headshot.png'
            />
          </div>
          <div className={styles.avatar}>
            <AuthorAvatar
              id='blbabl'
              name='Author Name'
              imgUrl='/avatars/headshot.png'
            />
          </div>
          <div className={styles.avatar}>
            <AuthorAvatar
              id='blbabl'
              name='Author Name'
              imgUrl='/avatars/headshot.png'
            />
          </div>
          <div className={styles.avatar}>
            <AuthorAvatar
              id='blbabl'
              name='Author Name'
              imgUrl='/avatars/headshot.png'
            />
          </div>
          <div className={styles.avatar}>
            <AuthorAvatar
              id='blbabl'
              name='Author Name'
              imgUrl='/avatars/headshot.png'
            />
          </div>
        </div>
        <div className={styles.nav}>
          <NavArrow direction='up' onClick={() =>  null } />
          <NavArrow direction='down' onClick={() => null } />
        </div>
      </div>
  )
}

export default AuthorGrid