import React, { FC } from 'react'
import Book from './Book'
import styles from '../styles/BookShowcase.module.scss'
import NavArrow from './NavArrow'
import Tag from './form/Tag'

const bookShowcase: FC = () => {
  return (
    <div className={styles.showcase}>

      <div className={styles.showcaseNav}>
        <div className={styles.sort}>
          <p>
            Trier par :
          </p>
            <Tag 
            name='Popularité'
            isSelected={true}
            onClick={() => null}
            />
            <Tag 
            name='Favoris'
            isSelected={false}
            onClick={() => null}
            />
        </div>
        <div className={styles.nav}>
          <NavArrow direction='left' onClick={() =>  null } />
          <NavArrow direction='right' onClick={() => null } />
        </div>
      </div>
      <div className={styles.books}>

        <Book
          id='adeggreg5'
          picture='/book.webp'
          title='Lorem Ipsum'
          author='Author Name'
          category='novel'
          rating={2}
          favorite={false} />
        <Book
          id='adeggreg5'
          picture='/book.webp'
          title='Lorem Ipsum'
          author='Author Name'
          category='poetry'
          rating={2}
          favorite={false} />
        <Book
          id='adeggreg5'
          picture='/book.webp'
          title='Lorem Ipsum'
          author='Author Name'
          category='poetry'
          rating={2}
          favorite={false} />
        <Book
          id='adeggreg5'
          picture='/book.webp'
          title='Lorem Ipsum'
          author='Author Name'
          category='short_story'
          rating={2}
          favorite={false} />
        <Book
          id='adeggreg5'
          picture='/book.webp'
          title='Lorem Ipsum'
          author='Author Name'
          category='novel'
          rating={2}
          favorite={false} />
        <Book
          id='adeggreg5'
          picture='/book.webp'
          title='Lorem Ipsum'
          author='Author Name'
          category='short_story'
          rating={2}
          favorite={false} />
      </div>
    </div>
  )
}

export default bookShowcase