import { useState } from 'react'
import './ChatroomPage.css'
import Message from './Message/Message'

// TODO add form

export default function ChatroomPage() {
   const [msg, setMsg] = useState([
      {
         message:
            'hello this is a  realllyrealllyrealllyrealllyrealllyrealllyreallly  realllyrealllyrealllyrealllyrealllyrealllyreallly  realllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyrealllyreallly realllyrealllyrealllyrealllyrealllyreallly long message',
         recipient: 'loggedInUser',
         sender: 'otherUser',
      },
      {
         message: `This is v0 of the chatting feature!`,
         recipient: 'otherUser',
         sender: 'loggedInUser',
      },
      {
         message: `We currently support serverless, authenticationless, self messaging only LMFAO`,
         recipient: 'loggedInUser',
         sender: 'otherUser',
      },
   ])
   const users = [
      { name: 'Tyler', username: 'loggedInUser' },
      { name: 'Andrew', username: 'otherUser' },
   ]
   const [currUserNum, setCurrUserNum] = useState(0)
   const [user, setUser] = useState(users[0])
   const [chatValue, setChatValue] = useState('')

   function handleChange(e) {
      setChatValue(e.target.value)
   }

   function handleSubmit(e) {
      e.preventDefault()
      const msgString = chatValue.trim()
      if (msgString.length > 0) {
         const newMessage = {
            message: chatValue,
            recipient: users[currUserNum % 2].username,
            sender: users[(currUserNum + 1) % 2].username,
         }
         setMsg([...msg, newMessage])
         setChatValue('')
         setCurrUserNum(currUserNum + 1)
      }
   }

   return (
      <div className="chatroom-page">
         <div className="message-view">
            {msg.map((e, i) => {
               return handleMessage(e, user, i)
            })}
         </div>
         <form className="chat-bar" onSubmit={(e) => handleSubmit(e)}>
            <input
               type="text"
               className="chat-input"
               placeholder="say something nice!"
               value={chatValue}
               onChange={(e) => handleChange(e)}
            />
            <button>send</button>
         </form>
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
