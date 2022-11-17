import React, { useState } from 'react'
import styles from '../../../../styles/Read.module.scss'
import { useRouter } from 'next/router'

import Image from 'next/image'
import Back from '../../../../public/img/Back.png'
import Save from '../../../../public/img/Save.png'
import dynamic from 'next/dynamic'
const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
	ssr: false,
	loading: () => <p>Loading ...</p>,
	})

const Edit = () => {
  const router = useRouter()
  const {id} = router.query

  const [text, setText] = useState('Commencez à écrire')

  console.log(text)
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <div className={styles.back}>
          <Image
            src={Back}
            width={75}
            height={75}
            alt='Go Back'
          />
        </div>
        <div className={styles.bookmarkSave}>
          <Image
            src={Save}
            width={75}
            height={75}
            alt='Bookmark'
          />
        </div>
      </div>

      <div className={styles.editor}>
       <QuillNoSSRWrapper theme='snow' style={{height: '100vh'}} value={text} onChange={(e) => setText(e)}/>
      </div>
    </div>
  )
}

export default Edit