import MessageContent from './MessageContent';
import MessagePhoto from './MessagePhoto';
import {motion} from 'framer-motion'

function MessageCard(props) {

  // const anim = useSpring({config: { duration: 500 }, opacity: 1, from: {opacity: 0}})

  if(props.isSent){
    return (
      <motion.div
          style={{opacity: 0}}
          animate={
            {opacity: 1}
          }
          class="break-words px-6 py-1 mt-auto w-max max-w-full bg-white rounded-xl shadow-md flex flex-row-reverse items-center space-x-4 place-self-end">
        <MessagePhoto isSent/>
        <MessageContent isSent name={props.name} content={props.content}/>
      </motion.div>
    )
  } else {
    return (
      <motion.div
          style={{opacity: 0}}
          animate={
            {opacity: 1}
          }
          class="break-words px-6 py-1 mt-auto w-max max-w-full mr-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <MessagePhoto />
        <MessageContent name={props.name} content={props.content}/>
      </motion.div>
    )
  }
}

export default MessageCard;