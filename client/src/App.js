import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ChatPage from './ChatPage';
import NavBar from './components/NavBar'

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    console.log("user changed")
  }, [user])

  return (
    <div className="h-screen">
      <div className="h-1/10">
        <NavBar user={user} />
      </div>
      <ChatPage user={user}/>
    </div>
  );
}
    
export default App;