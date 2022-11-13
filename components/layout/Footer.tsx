import React, {FC} from 'react'
import styles from '../../styles/layoutStyle/Footer.module.scss'
const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        <ul>
          <li>A propos</li>
          <li>CGU</li>
          <li>Jonathan Moreschi</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer