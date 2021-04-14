import { useEffect, useState } from 'react';
import ChatPage from './ChatPage';
import ChatPageRobot from './ChatPageRobot';
const ENDPOINT = '192.168.0.10:4001'

function MainApp(props) {

  if(props.page == "chatpagerobot"){
    return <ChatPageRobot />
  } else if (props.page == "chatpage") {
    return <ChatPage />
  } else if (props.page == "login") {
    return <ChatPage />
  }
}

export default MainApp;