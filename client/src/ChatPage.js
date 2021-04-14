import MessageBoard from './components/MessageBoard'
import NavBar from './components/NavBar'
import { useEffect, useState } from 'react';
import socketIOClient from "socket.io-client";
import { getUsername } from './isLoggedIn';

function ChatPage(props) {

  const [messages, setMessages] = useState({data: []})
  const [inputText, setInputText] = useState("")
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const newSocket = socketIOClient(props.ENDPOINT) 
    setSocket(newSocket)

  }, [])
  
  useEffect(() => {
    console.log("socket changed")
    if(socket != null){
      socket.on("response", data => {
        addMessage(data)
      });
      return () => socket.disconnect();
    }
  }, [socket])

  var inputEl = null;

  const addMessage = (msgObj) => {
    setMessages(oldMessages => ({ data: [...oldMessages.data, msgObj]}))
  }

  // const getRandomMessage = async () => {
  //   const id = Math.floor(Math.random()*499)
  //   const response = await API.get(`comments/${id}`)
  //   if(response.status == 200) {
  //     return response.data['name']
  //   }
  //   return "Api offline"
  // }
  
  const sendMessage = () => {
    setInputText(inputText.trim())
    if(socket == null){
      alert("socket is null")
      return
    }
    if(inputText != ""){
      const newMessageData = { text: inputText, isSent: true, sender: {uid: 0, name: getUsername()}, time: (new Date()).toLocaleString()}
      socket.emit("message", newMessageData)
      addMessage(newMessageData)
      inputEl.value = ""
    }
    setInputText("")
  }

  const handleKeyInput = (e) => {
    if(e.key === 'Enter'){
      sendMessage()
    }
  }

  const textInputChanged = (e) => {
    setInputText(e.target.value)
  }

  // const addRandomMessage = async () => {
  //   const newMessage = await getRandomMessage()
  //   const newMessageData = { text: inputText, isSent: false, sender: "me", time: new Date()}
  //   addMessage(newMessage)
  // }

  return (
    <div className="h-screen">
      <div className="h-1/10">
        <NavBar user={props.user} />
      </div>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0">
            <div class="border-4 shadow-lg border-gray-200 rounded-lg h-96">
              <MessageBoard messages={messages}/>
            </div>
          </div>
          <div className="flex flex-row items-center content-center gap-3">
            {/* <div className="mr-auto pl-px">
              <button className="text-black-300 border-gray-300 border-2 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none" onClick={addRandomMessage}>
                Add random message
              </button>
            </div> */}
            <div className="flex-grow">
              <input type="text" placeholder="Enter message" 
                onChange={textInputChanged}
                onKeyPress={handleKeyInput}
                ref={(el) => { inputEl = el}}
                class="px-3 py-3 w-full placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"/>
            </div>
            <div className="pr-px">
              <button className="text-black-300 border-gray-300 border-2 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none" onClick={sendMessage}>
                Send
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ChatPage;