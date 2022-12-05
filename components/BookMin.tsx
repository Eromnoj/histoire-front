import React, { FC, useState } from 'react'
import styles from '../styles/BookMin.module.scss'

import { BookMinProps } from '../types/componentsTypes'
import { categoryColor } from '../utils'
import Image from 'next/image'
import Edit from '../public/img/Edit.png'
import Trash from '../public/img/Trash.png'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import type { NextRouter } from 'next/router'

const BookMin: FC<BookMinProps> = ({ id, title, total, published, category }) => {
  const router = useRouter()
  const [showDeleteModal, setShowDeleteModal] = useState(false)


  const color = categoryColor(category)
  return (
    <div className={styles.bookDiv}>
      <div className={styles.title} style={{ backgroundColor: color }}>{title}</div>

      <div className={styles.bookInfo}>

        <div className={styles.count}>
          <div className={styles.chapterCount}>Chapitres : {total}</div>
          <div className={styles.publishedCount}>Publiés : {published}</div>
        </div>
        <div className={styles.buttons}>
          <Link
            href={`/book/write/${id}`}
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
              alt='Edit'
            />
          </div>
        </div>
      </div>

      {showDeleteModal ?
        <div className={styles.delModal}>
          <div className={styles.modalBox}>

            <p>Voulez-vous supprimer le livre "{title}" ?</p>
            <p>Cette action est irréversible.</p>
            <button className={styles.buttonDelete} onClick={() => deleteBook(id, setShowDeleteModal, router)}>Effacer</button>
            <button className={styles.buttonDiscard} onClick={() => setShowDeleteModal(false)}>Annuler</button>
          </div>
        </div>
        : null}
    </div>
  )
}

export default BookMin

const deleteBook = async (id: string,
  showModal: React.Dispatch<React.SetStateAction<boolean>>,
  router: NextRouter) => {
  try {
    const res = await axios.delete(`/api/v1/book/${id}`)
    const data = await res.data
    showModal(false)
    console.log(data.msg);
    router.reload()
  } catch (error) {

  }


}