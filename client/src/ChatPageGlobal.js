import ChatPage from './ChatPage';
const ENDPOINT = '192.168.0.10:4001'

function ChatPageGlobal(props) {
  return <ChatPage ENDPOINT={ENDPOINT}/>
}

export default ChatPageGlobal;