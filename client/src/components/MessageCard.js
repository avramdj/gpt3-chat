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
          className="break-all px-6 py-1 m-auto w-max max-w-full bg-white rounded-xl shadow-md flex flex-row-reverse space-x-4 self-end">
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
          className="break-all px-6 py-1 m-auto w-max max-w-full bg-white rounded-xl shadow-md flex space-x-4">
        <MessagePhoto />
        <MessageContent name={props.name} content={props.content}/>
      </motion.div>
    )
  }
}

export default MessageCard;