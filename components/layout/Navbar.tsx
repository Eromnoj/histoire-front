import React, { FC, useEffect, useState } from 'react'
import styles from '../../styles/layoutStyle/Navbar.module.scss'
import Image from 'next/image'
import burger from '../../public/img/Menu.png'
import Link from 'next/link'
const Navbar: FC = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [toggle, setToggle] = useState(false)

  useEffect(()=>{
    setWindowWidth(window.innerWidth)
  },[windowWidth])

  return (
    <header className={styles.header}>
      {windowWidth >= 900 ?
      null :
      <div className={styles.burger} onClick={()=> setToggle(prev => !prev)}>
        <Image
          src={burger}
          alt="Menu icon"
          width={45}
          height={45}
        />
        </div>
    }
    <nav className={windowWidth >= 900 ? styles.navbar : styles.dropdown} >
      {toggle || windowWidth >= 900  ? 
      <ul>
        <li><Link href='/book/write'>Ecrire</Link></li>
        <li><Link href='/'>Parcourir</Link></li>
        <li><Link href='/userinterface/infos/123'>Mon espace</Link></li>
        <li>Me déconnecter</li>
      </ul>
      :null }
    </nav>
    </header>
  )
}

export default Navbar