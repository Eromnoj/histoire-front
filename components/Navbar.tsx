import React, { FC, useEffect, useState } from 'react'
import styles from '../styles/Navbar.module.scss'
import Image from 'next/image'
import burger from '../public/img/Menu.png'

const Navbar: FC = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [toggle, setToggle] = useState(false)

  useEffect(()=>{
    setWindowWidth(window.innerWidth)
  },[])

  return (
    <header className={styles.header}>
      {windowWidth >= 1066 ?
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
    <nav className={windowWidth >= 1066 ? styles.navbar : styles.dropdown} >
      {toggle || windowWidth >= 1066  ? 
      <ul>
        <li>Ecrire</li>
        <li>Parcourir</li>
        <li>Mon espace</li>
        <li>Me déconnecter</li>
      </ul>
      :null }
    </nav>
    </header>
  )
}

export default Navbar