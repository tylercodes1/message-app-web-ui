import { useState } from 'react'
import './ChatroomPage.css'
import Message from './Message/Message'

export default function ChatroomPage() {
   const [msg, setMsg] = useState([
      {
         message:
            'hello this is a  realllyrealllyrealllyrealllyrealllyrealllyreallly  realllyrealllyrealllyrealllyrealllyrealllyreallly  realllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyreallly realllyrealllyrealllyrealllyrealllyreallly long message',
         recipient: 'loggedInUser',
         sender: 'otherUser',
      },
      { message: 'world', recipient: 'otherUser', sender: 'loggedInUser' },
   ])
   const [user, setUser] = useState({ name: 'Tyler', username: 'loggedInUser' })
   return (
      <div className="chatroom-page">
         <div className="message-view">
            {msg.map((e, i) => {
               return handleMessage(e, user, i)
            })}
         </div>
         <div className="chat-bar">
            <input type="text" className="chat-input" />
            <button>send</button>
         </div>
      </div>
   )
}

function handleMessage(message, user, i) {
   return (
      <Message
         userSent={message.sender == user.username ? true : false}
         key={i}
         message={message.message}
         name={message.recipient}
      />
   )
}
