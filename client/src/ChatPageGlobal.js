import ChatPage from './ChatPage';
const ENDPOINT = process.env.REACT_APP_GLOBAL_URL

function ChatPageGlobal(props) {
  return <ChatPage ENDPOINT={ENDPOINT}/>
}

export default ChatPageGlobal;