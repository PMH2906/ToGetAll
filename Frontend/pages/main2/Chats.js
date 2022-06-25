import React from 'react'
import Chat from './Chat';
import styles from './Chats.module.css'

const Chats = (props) => {
  const chats = props.chats && props.chats.map(chat => (
    <Chat
      key={chat.chatNum}
      location={chat.location}
      foodCategory={chat.foodCategory}
      title={chat.title}
      limitedPerson={chat.limitedPerson}
    />
  ));
  return (
    <>
      <div className={styles.div} >ToGet:All Chat List</div>
      <ul>
        {chats}
      </ul>
    </>
  )
}
export default Chats