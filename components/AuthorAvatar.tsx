import React, {FC} from 'react'
import type { AuthorAvatarProps } from '../types/componentsTypes'
import Image from 'next/image'
import styles from '../styles/componentsStyle/AuthorAvatar.module.scss'

const AuthorAvatar: FC<AuthorAvatarProps> = ({id, name, imgUrl}) => {

  console.log(imgUrl);
  
  return (
    <div className={styles.avatar} id={id}>
      <Image 
        src={imgUrl}
        alt={name}
        fill={true}
        className={styles.img}
      />
    </div>
  )
}

export default AuthorAvatar