import React from 'react'
import type { FC, ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from '../../styles/layoutStyle/Layout.module.scss'

type ChildProp = {
  children: ReactNode
}

const Layout: FC<ChildProp> = ({ children }) => {
  return (
    <div className={styles.mainBody}>
      <Navbar />
      {/* <div></div> */}
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout