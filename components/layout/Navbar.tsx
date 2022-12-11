import React, { FC, useEffect, useState } from 'react'
import styles from '../../styles/layoutStyle/Navbar.module.scss'
import Image from 'next/image'
import burger from '../../public/img/Menu.png'
import Link from 'next/link'
import { deleteCookie, setCookie } from 'cookies-next'

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
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))

  }, [])

  const handleLogout = async () => {
    try {
      const res = await axios(`/api/v1/auth/logout`)
      dispatch(userSessionLogout())
      // deleteCookie('token')
      // router.push('/login')

    } catch (error) {
      console.log(error);
      
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
            <li 
            className={router.pathname === "/" || (router.pathname.startsWith('/book') && !router.pathname.startsWith('/book/write') || router.pathname.startsWith('/author'))  
            ? styles.selected: styles.notSelected}><Link href='/'><span className={styles.inner}>
                    <span className={styles.content}>
                      Parcourir
                    </span>
                  </span>
                  <span className={styles.inner} aria-hidden="true">
                    <span className={styles.content}>
                      Parcourir
                    </span>
                  </span></Link></li>
            {isLogin ?
              <>
                <li className={router.pathname.startsWith("/userinterface") ? styles.selected: styles.notSelected}><Link href='/userinterface/infos/'>
                  <span className={styles.inner}>
                    <span className={styles.content}>
                      Mon espace
                    </span>
                  </span>
                  <span className={styles.inner} aria-hidden="true">
                    <span className={styles.content}>
                      Mon espace
                    </span>
                  </span>
                </Link></li>
                <li className={router.pathname.startsWith("/book/write") ? styles.selected: styles.notSelected}><Link href='/book/write'><span className={styles.inner}>
                    <span className={styles.content}>
                      Ecrire
                    </span>
                  </span>
                  <span className={styles.inner} aria-hidden="true">
                    <span className={styles.content}>
                      Ecrire
                    </span>
                  </span></Link></li>
              </> : null
            }
            {isLogin ?
              <li onClick={handleLogout}><a><span className={styles.inner}>
              <span className={styles.content}>
                Me déconnecter
              </span>
            </span>
            <span className={styles.inner} aria-hidden="true">
              <span className={styles.content}>
                Me deconnecter
              </span>
            </span></a></li> :
              <li className={router.pathname.startsWith("/login") ? styles.selected: styles.notSelected}><Link href='/login'><span className={styles.inner}>
              <span className={styles.content}>
                Me connecter
              </span>
            </span>
            <span className={styles.inner} aria-hidden="true">
              <span className={styles.content}>
                Me connecter
              </span>
            </span></Link></li>
            }
          </ul>
          : null}
      </nav>
    </header>
  )
}

export default Navbar