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
          class="px-6 py-1 mt-auto min-w-max max-w-lg w-min ml-auto bg-white rounded-xl shadow-md flex flex-row-reverse items-center space-x-4">
        <MessagePhoto isSent/>
        <MessageContent isSent content={props.content}/>
      </motion.div>
    )
  } else {
    return (
      <motion.div
          style={{opacity: 0}}
          animate={
            {opacity: 1}
          }
          class="px-6 py-1 mt-auto min-w-max max-w-lg w-min mr-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <MessagePhoto />
        <MessageContent content={props.content}/>
      </motion.div>
    )
  }
}

export default MessageCard;