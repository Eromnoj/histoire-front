import React,{FC} from 'react'
import styles from '../styles/UserNav.module.scss'

import Link from 'next/link'

const UserNav:FC = () => {


  return (
    <div className={styles.userNav}>
      <ul className={styles.linksList}>
       <Link href={`/userinterface/description/` } className={styles.link}><li >Ma description</li></Link> 
       <Link href={`/userinterface/infos/`} className={styles.link}><li >Mes infos</li></Link> 
       <Link href={`/userinterface/story/`} className={styles.link}><li >Mes histoires</li></Link> 
      </ul>
    </div>
  )
}

export default UserNav