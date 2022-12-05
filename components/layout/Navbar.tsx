import React, { FC, useEffect, useState } from 'react'
import styles from '../../styles/layoutStyle/Navbar.module.scss'
import Image from 'next/image'
import burger from '../../public/img/Menu.png'
import Link from 'next/link'

import axios from 'axios'
import { useRouter } from 'next/router'

import { useDispatch, useSelector } from 'react-redux'
import { RootState, userSessionLogout } from '../../stores'
const Navbar: FC = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [toggle, setToggle] = useState(false)

  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [windowWidth])

  const handleLogout = async () => {
    try {
      await axios('/api/v1/auth/logout')
      dispatch(userSessionLogout())
      router.push('/login')

    } catch (error) {

    }
  }

  const { userId } = useSelector((state: RootState) => state.userSession)

  const isLogin = userId !== '' ? true : false
  
  return (
    <header className={styles.header}>
      {windowWidth >= 900 ?
        null :
        <div className={styles.burger} onClick={() => setToggle(prev => !prev)}>
          <Image
            src={burger}
            alt="Menu icon"
            width={45}
            height={45}
          />
        </div>
      }
      <nav className={windowWidth >= 900 ? styles.navbar : styles.dropdown} >
        {toggle || windowWidth >= 900 ?
          <ul>
            <li><Link href='/'>Parcourir</Link></li>
            {isLogin ?
              <>
                <li><Link href='/userinterface/infos/'>Mon espace</Link></li>
                <li><Link href='/book/write'>Ecrire</Link></li>
              </> : null
      }
            {isLogin ? 
            <li onClick={handleLogout}><a>Me déconnecter</a></li> :
            <li><Link href='/login'>Me Connecter</Link></li>
            } 
          </ul>
          : null}
      </nav>
    </header>
  )
}

export default Navbar