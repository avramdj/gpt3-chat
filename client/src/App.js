import NavBar from './components/NavBar';
import MessageBoard from './components/MessageBoard'
import { useState } from 'react';
import API from './Api'

function App() {

  const [messages, setMessages] = useState({data: []})

  const addMessage = (newMessage) => [
    setMessages({ data: [...messages.data, newMessage]})
  ]

  const getRandomMessage = async () => {
    const id = Math.floor(Math.random()*499)
    const response = await API.get(`comments/${id}`)
    if(response.status == 200) {
      return response.data['name']
    }
    return "Api offline"
  }

  const addRandomMessage = async () => {
    const newMessage = await getRandomMessage()
    setMessages({ data: [...messages.data, newMessage]})
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
          <div>
            <button className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={addRandomMessage}>
              Add message
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}



export default App;