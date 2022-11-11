import React, { FC } from 'react'
import styles from '../styles/Filters.module.scss'

import Checker from './form/Checker'

import AuthorAvatar from './AuthorAvatar'
import StoryLink from './StoryLink'
import SubmitButton from './form/SubmitButton'
import TextField from './form/TextField'

const Filters: FC = () => {
  return (
    <div className={styles.filters}>
      <p>Filtres :</p>

      <div className={styles.category}>
        <p>Catégorie :</p>
        <Checker
          id='novel'
          name='novel'
          label='Roman'
        />
        <Checker
          id='poetry'
          name='poetry'
          label='Poésie'
        />
        <Checker
          id='short_story'
          name='short_story'
          label='Nouvelle'
        />
      </div>


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

      </div>

      <div className={styles.myStories}>
        <StoryLink
          id='gzrzrgz'
          name='Lorem Ipsum'
          category='novel'
          onClick={() => null}
        />

      </div>

      <SubmitButton name={`Envoyer`} />

      <TextField 
      id='fzfzefz'
      name='filter'
      label='Rechercher'
      onChange={()=> null}
      />
    </div>
  )
}

export default Filters