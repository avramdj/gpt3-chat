import NavBar from './components/NavBar';
import MessageBoard from './components/MessageBoard'
import { useState } from 'react';
import API from './Api'

function App() {

  const [messages, setMessages] = useState({data: []})
  const [inputText, setInputText] = useState("")

  var inputEl = null;

  const addMessage = (text, isSent, sender = "unknown", time = "unknown") => {
    const newMessageData = { text: text, sender: sender, time: time, isSent: isSent}
    setMessages({ data: [...messages.data, newMessageData]})
  }
  
  const getRandomMessage = async () => {
    const id = Math.floor(Math.random()*499)
    const response = await API.get(`comments/${id}`)
    if(response.status == 200) {
      return response.data['name']
    }
    return "Api offline"
  }
  
  const sendMessage = () => {
    setInputText(inputText.trim())
    if(inputText != ""){
      addMessage(inputText, true)
      inputEl.value = ""
    }
    setInputText("")
  }

  const textInputChanged = (e) => {
    setInputText(e.target.value)
  }

  const addRandomMessage = async () => {
    const newMessage = await getRandomMessage()
    addMessage(newMessage)
  }

  return (
    <div className="h-screen flex-col">
      <div className="h-1/10">
        <NavBar />
      </div>
      {/* <div className="h-4/5 rounded shadow-lg"></div> */}
      {/* <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">
        Dashboard
        </h1>
        </div>
      </header> */}
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0">
            <div class="border-4 shadow-lg border-gray-200 rounded-lg h-96">
              <MessageBoard messages={messages}/>
            </div>
          </div>
          <div className="flex content-center gap-3">
            <div>
              <button className="text-black-300 border-gray-300 border-2 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none" onClick={addRandomMessage}>
                Add random message
              </button>
            </div>
            <div>
              <input type="text" placeholder="Enter message" onChange={textInputChanged}
                ref={(el) => { inputEl = el}}
                class="px-3 py-3 w-full placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
            </div>
            <div>
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



export default App;