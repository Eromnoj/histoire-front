import React,{FC} from 'react'
import styles from '../styles/UserNav.module.scss'


const UserNav:FC = () => {
  return (
    <div className={styles.userNav}>
      <ul className={styles.linksList}>
        <li className={styles.link}>Ma description</li>
        <li className={styles.link}>Mes infos</li>
        <li className={styles.link}>Mes histoires</li>
      </ul>
    </div>
  )
}

export default UserNav