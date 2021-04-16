import ChatPage from './ChatPage';

function ChatPageGlobal(props) {
  return <ChatPage roomName={process.env.REACT_APP_GLOBAL_ROOM}/>
}

export default ChatPageGlobal;