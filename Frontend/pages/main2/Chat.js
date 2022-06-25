import React from 'react'
import { useRouter } from 'next/router';
import styles from './Chat.module.css';

const Chat = (props) => {
  const router = useRouter();
  const intoChat = () => {
    router.replace('https://mihee.herokuapp.com/chat.html')
  }
  return (
    <div className={styles.con}>
      <li className={styles.li}>
        <button className={styles.button} onClick={intoChat}>
          <div className={styles.info} >
            <img className={styles.img} src='https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-speech-bubble-comments-thin.png'></img>
            <div className={styles.title} ><h3>{props.title} </h3></div>
            <div className={styles.chat}>
              <span className={styles.say}>{props.location} 에서 {props.foodCategory} 같이 먹어요 ~~~~~ *^^* </span>
              <span className={styles.person}>{props.limitedPerson}</span>
            </div>
          </div>
        </button>
      </li>
    </div>
  )
}
export default Chat;