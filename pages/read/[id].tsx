import React from 'react'
import styles from '../../styles/Read.module.scss'

import Image from 'next/image'
import Back from '../../public/img/Back.png'
import Bookmark from '../../public/img/Bookmark.png'

const read = () => {
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
            src={Bookmark}
            width={75}
            height={75}
            alt='Bookmark'
          />
       
        </div>
      </div>

      <div className={styles.whiteBox}>
        <div className={styles.text}>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur, nisl in rhoncus tempor, odio sem tristique augue, et malesuada turpis ligula vel lectus. Fusce condimentum viverra neque eu vehicula. Donec sem quam, condimentum imperdiet neque iaculis, finibus dignissim enim. Aliquam at sapien ut libero imperdiet lacinia pharetra id orci. Nam feugiat, velit ut elementum eleifend, ligula libero semper ex, bibendum faucibus nisi nulla eu justo. Integer lacus odio, sagittis quis aliquam nec, ullamcorper eu dolor. Aenean eget sapien ornare, consequat ipsum ac, mattis sem. Praesent id magna porttitor, gravida ipsum eu, imperdiet lorem. Donec ullamcorper nisl ac mauris facilisis suscipit. Sed id purus mattis, fringilla odio non, faucibus nunc. Phasellus venenatis volutpat orci, ac suscipit elit fringilla eu. Etiam eu neque viverra metus faucibus pharetra.
          <br />
          <br />
          Curabitur nec lacinia elit. Donec et mi odio. Aliquam et nisi id justo porttitor rhoncus a et nisi. Donec congue vehicula dolor posuere pretium. Maecenas ornare nunc ac lacus ullamcorper, sit amet feugiat est scelerisque. Maecenas augue ipsum, mollis eget efficitur at, pulvinar at nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut maximus nibh. Pellentesque ornare luctus lacus nec scelerisque.
          <br />
          <br />
          In lectus velit, maximus in imperdiet sed, iaculis in ligula. Aenean orci est, sollicitudin eget aliquet at, aliquet vitae enim. Duis sed euismod turpis. Mauris fringilla quam auctor efficitur imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In iaculis eleifend libero nec luctus. Fusce dictum rhoncus augue, quis facilisis diam rhoncus vel. Mauris vitae elit ex.
          <br />
          <br />          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur, nisl in rhoncus tempor, odio sem tristique augue, et malesuada turpis ligula vel lectus. Fusce condimentum viverra neque eu vehicula. Donec sem quam, condimentum imperdiet neque iaculis, finibus dignissim enim. Aliquam at sapien ut libero imperdiet lacinia pharetra id orci. Nam feugiat, velit ut elementum eleifend, ligula libero semper ex, bibendum faucibus nisi nulla eu justo. Integer lacus odio, sagittis quis aliquam nec, ullamcorper eu dolor. Aenean eget sapien ornare, consequat ipsum ac, mattis sem. Praesent id magna porttitor, gravida ipsum eu, imperdiet lorem. Donec ullamcorper nisl ac mauris facilisis suscipit. Sed id purus mattis, fringilla odio non, faucibus nunc. Phasellus venenatis volutpat orci, ac suscipit elit fringilla eu. Etiam eu neque viverra metus faucibus pharetra.
          <br />
          <br />
          Curabitur nec lacinia elit. Donec et mi odio. Aliquam et nisi id justo porttitor rhoncus a et nisi. Donec congue vehicula dolor posuere pretium. Maecenas ornare nunc ac lacus ullamcorper, sit amet feugiat est scelerisque. Maecenas augue ipsum, mollis eget efficitur at, pulvinar at nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut maximus nibh. Pellentesque ornare luctus lacus nec scelerisque.
          <br />
          <br />
          In lectus velit, maximus in imperdiet sed, iaculis in ligula. Aenean orci est, sollicitudin eget aliquet at, aliquet vitae enim. Duis sed euismod turpis. Mauris fringilla quam auctor efficitur imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In iaculis eleifend libero nec luctus. Fusce dictum rhoncus augue, quis facilisis diam rhoncus vel. Mauris vitae elit ex.
          <br />
          <br />          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur, nisl in rhoncus tempor, odio sem tristique augue, et malesuada turpis ligula vel lectus. Fusce condimentum viverra neque eu vehicula. Donec sem quam, condimentum imperdiet neque iaculis, finibus dignissim enim. Aliquam at sapien ut libero imperdiet lacinia pharetra id orci. Nam feugiat, velit ut elementum eleifend, ligula libero semper ex, bibendum faucibus nisi nulla eu justo. Integer lacus odio, sagittis quis aliquam nec, ullamcorper eu dolor. Aenean eget sapien ornare, consequat ipsum ac, mattis sem. Praesent id magna porttitor, gravida ipsum eu, imperdiet lorem. Donec ullamcorper nisl ac mauris facilisis suscipit. Sed id purus mattis, fringilla odio non, faucibus nunc. Phasellus venenatis volutpat orci, ac suscipit elit fringilla eu. Etiam eu neque viverra metus faucibus pharetra.
          <br />
          <br />
          Curabitur nec lacinia elit. Donec et mi odio. Aliquam et nisi id justo porttitor rhoncus a et nisi. Donec congue vehicula dolor posuere pretium. Maecenas ornare nunc ac lacus ullamcorper, sit amet feugiat est scelerisque. Maecenas augue ipsum, mollis eget efficitur at, pulvinar at nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut maximus nibh. Pellentesque ornare luctus lacus nec scelerisque.
          <br />
          <br />
          In lectus velit, maximus in imperdiet sed, iaculis in ligula. Aenean orci est, sollicitudin eget aliquet at, aliquet vitae enim. Duis sed euismod turpis. Mauris fringilla quam auctor efficitur imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In iaculis eleifend libero nec luctus. Fusce dictum rhoncus augue, quis facilisis diam rhoncus vel. Mauris vitae elit ex.
          <br />
          <br />
        </div>
      </div>
    </div>
  )
}

export default read