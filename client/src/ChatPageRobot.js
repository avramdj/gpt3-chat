import ChatPage from './ChatPage';
const ENDPOINT = '192.168.0.10:4000'

function ChatPageRobot(props) {
  return <ChatPage ENDPOINT={ENDPOINT}/>
}

export default ChatPageRobot;