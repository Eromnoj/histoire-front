import React, { FC } from 'react'
import styles from '../styles/componentsStyle/SocialLinks.module.scss'
import type { SocialLinkProps } from '../types/componentsTypes'
import Link from 'next/link'
import Image from 'next/image'
import Facebook from '../public/img/Facebook.png'
import Twitter from '../public/img/Twitter.png'
import Mail from '../public/img/Envelope.png'

const SocialLink: FC<SocialLinkProps> = ({ twitter, facebook, email }) => {

  return (
    <div className={styles.links}>

      {twitter ?
        <div className={styles.socialLink}>
          <Link href={twitter}>
            <Image
              src={Twitter}
              width={45}
              height={45}
              alt='Facebook'
            />
          </Link>
        </div>
        : null}
      {facebook ?
        <div className={styles.socialLink}>
          <Link href={facebook}>
            <Image
              src={Facebook}
              width={45}
              height={45}
              alt='Facebook'
            />
          </Link>
        </div>
        : null}
      {email ?
        <div className={styles.socialLink}>
          <Link href={'mailto:' + email}>
            <Image
              src={Mail}
              width={45}
              height={45}
              alt='Facebook'
            />
          </Link>
        </div>
        : null}
    </div>
  )
}

export default SocialLink