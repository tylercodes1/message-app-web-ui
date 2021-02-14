import './Message.css'

/**
 *
 * @param {message: string, name: string, i: int, userSent: boolean} props
 */
export default function Message(props) {
   return (
      <div
         key={props.i}
         className={
            props.userSent ? 'message-container user-sent' : 'message-container'
         }
      >
         <p>
            {props.message} and {props.name}
         </p>
      </div>
   )
}
