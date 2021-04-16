import ChatPage from './ChatPage';
const ENDPOINT = process.env.REACT_APP_GPT_URL

function ChatPageRobot(props) {
  return <ChatPage ENDPOINT={ENDPOINT}/>
}

export default ChatPageRobot;