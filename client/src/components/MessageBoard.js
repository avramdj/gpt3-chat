import MessageCard from './MessageCard'
import {useEffect, useState} from 'react';
import API from '../Api'

function MessageBoard(props) {

  var messagesEnd = null;

  useEffect(() => {
    scrollToBottom()
  })

  const getMessages = () => {
    return props.messages.data.map((msgObj, index) => 
      <MessageCard isSent={msgObj.isSent} name={msgObj.sender} content={msgObj.text} key={index}/>
    )
  }

  const scrollToBottom = () => {
    messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  // useEffect(async () => {
  //   const id = Math.floor(Math.random()*499)
  //   const response = await API.get(`comments/${id}`)
  //   console.log(response.data['name'])
  // }, [])

  return (
    <div className="scrollContainer max-h-full space-x-5 space-y-5 overflow-y-scroll">
      <div></div>
      {getMessages()}
      <div id="dummyDiv" ref={(el) => { messagesEnd = el}}></div>
    </div>
  )
}

export default MessageBoard;