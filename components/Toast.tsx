import React, { FC } from 'react'
import styles from '../styles/componentsStyle/Toast.module.scss'
import Image from 'next/image'
import Cross from '../public/img/Cross.png'

import type { ToastProps } from '../types/componentsTypes'

const Toast: FC<ToastProps> = ({ message, click }) => {

  return (
    <div className={styles.toastBox}>
      <div className={styles.toastBody}>
        {message}
      </div>
      <div className={styles.toastClose} onClick={click}>
        <Image
          src={Cross}
          width={45}
          height={45}
          alt='Fermer'
        />
      </div>
    </div>
  )
}

export default Toast