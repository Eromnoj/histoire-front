import React, { FC, useState } from 'react'

import styles from '../styles/Chapter.module.scss'
import type { ChapterProps } from '../types/componentsTypes'

import Image from 'next/image'
import Offline from '../public/img/Cloud-off.png'
import Trash from '../public/img/Trash.png'
import Send from '../public/img/Send.png'
import Edit from '../public/img/Edit.png'
import { useRouter } from 'next/router'
import type { NextRouter } from 'next/router'

import axios from 'axios'
import Link from 'next/link'

const Chapter: FC<ChapterProps> = ({ id, title, isPublish }) => {
  const router = useRouter()
  const [showDeleteModal, setShowDeleteModal] = useState(false)

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
        <div className={styles.statusMod} onClick={() => modifyStatus(id, router)}>
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
        <Link
          href={`/book/write/editor/${id}`}
        >
          <div className={styles.modify}>
            <Image
              src={Edit}
              width={30}
              height={30}
              alt='Edit'
            />
          </div>
        </Link>
        <div className={styles.delete} onClick={() => setShowDeleteModal(true)}>
          <Image
            src={Trash}
            width={30}
            height={30}
            alt='Trash'
          />
        </div>
      </div>
      {showDeleteModal ?
        <div className={styles.delModal}>
          <div className={styles.modalBox}>

            <p>Voulez-vous supprimer le chapitre &quot;{title}&quot; ?</p>
            <p>Cette action est irréversible.</p>
            <button className={styles.buttonDelete} onClick={() => deleteChapter(id, setShowDeleteModal, router)}>Effacer</button>
            <button className={styles.buttonDiscard} onClick={() => setShowDeleteModal(false)}>Annuler</button>
          </div>
        </div>
        : null}
    </div>
  )
}

export default Chapter

const modifyStatus = async (id: string, router: NextRouter) => {
  try {
    const res = await axios.patch(`/api/v1/chapter/${id}`, { togglePublish: true })
    router.reload()
  } catch (error) {

  }
}

const deleteChapter = async (id: string,
  showModal: React.Dispatch<React.SetStateAction<boolean>>,
  router: NextRouter) => {
  try {
    const res = await axios.delete(`/api/v1/chapter/${id}`)
    const data = await res.data
    showModal(false)
    console.log(data.msg);
    router.reload()
  } catch (error) {

  }


}