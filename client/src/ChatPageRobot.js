import ChatPage from './ChatPage';

function ChatPageRobot(props) {
  return <ChatPage roomName={process.env.REACT_APP_ROBOT_ROOM}/>
}

export default ChatPageRobot;