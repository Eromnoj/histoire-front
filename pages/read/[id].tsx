import React from 'react'
import styles from '../../styles/Read.module.scss'

import Image from 'next/image'
import Back from '../../public/img/Back.png'
import Bookmark from '../../public/img/Bookmark.png'



const read = () => {

  // Function to set the InnerHtml
  const contentText = () =>{
    return {__html:'<p>La vida esta loca</p><br/><p>Bonjour</p>' }
  }
  
  return (
    <div className={styles.container}>
     <div className={styles.button}>
        <div className={styles.back}>
          <div className={styles.image}>
          <Image
            src={Back}
            fill={true}
            alt='Go Back'
            />
            </div>
        </div>
        <div className={styles.bookmarkSave}>
        <div className={styles.image}>
          <Image
            src={Bookmark}
            fill={true}
            alt='Bookmark'
          />
        </div>
        </div>
      </div>

      <div className={styles.whiteBox}>
        <div className={styles.text} dangerouslySetInnerHTML={contentText()}>
        </div>
      </div>
    </div>
  )
}

export default read