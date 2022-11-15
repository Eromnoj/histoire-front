import React, { FC } from 'react'

import styles from '../styles/Chapter.module.scss'
import type { ChapterProps } from '../types/componentsTypes'

import Image from 'next/image'
import Offline from '../public/img/Cloud-off.png'
import Trash from '../public/img/Trash.png'
import Send from '../public/img/Send.png'
import Edit from '../public/img/Edit.png'

const Chapter: FC<ChapterProps> = ({ id, title, isPublish, onClickStatus, onClickDel, onClickMod }) => {
  return (
    <div className={styles.chapter}>
      <div className={styles.title}>{title}</div>
      <div className={styles.status}>
        <div className={styles.statusDisplay}>
          {
            isPublish ?
              <div className={styles.published}>Publié</div> :
              <div className={styles.draft}>En attente</div>
          }
        </div>
        <div className={styles.statusMod}>
          {
            isPublish ?
              <div className={styles.published}>
                <Image
                src={Offline}
                width={30}
                height={30}
                alt='Offline'
              />
              </div> :
              <div className={styles.draft}>
                <Image
                src={Send}
                width={30}
                height={30}
                alt='Published'
              />
              </div>
          }

        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.modify}>
        <Image
                src={Edit}
                width={30}
                height={30}
                alt='Edit'
              />
        </div>
        <div className={styles.delete}>
        <Image
                src={Trash}
                width={30}
                height={30}
                alt='Trash'
              />
        </div>
      </div>
    </div>
  )
}

export default Chapter