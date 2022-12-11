import React, { FC } from 'react'
import styles from '../styles/componentsStyle/BookList.module.scss'

import StoryLink from './StoryLink'
import NavArrow from './NavArrow'

const BookList: FC = () => {
  return (
    <div className={styles.bookList}>
      <p className={styles.title}>Mes Histoires :</p>

      <div className={styles.myStories}>
        <StoryLink
          id='gzrzrgz'
          name='Lorem Ipsum'
          category='novel'
          onClick={() => null}
        />
        <StoryLink
          id='gzrzrgz'
          name='Lorem Ipsum'
          category='short_story'
          onClick={() => null}
        />
        <StoryLink
          id='gzrzrgz'
          name='Lorem Ipsum'
          category='poetry'
          onClick={() => null}
        />

      </div>
      <div className={styles.nav}>
          <NavArrow direction='up' onClick={() =>  null } />
          <NavArrow direction='down' onClick={() => null } />
        </div>
    </div>
  )
}

export default BookList