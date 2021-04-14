import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ChatPage from './ChatPage';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="h-screen">
      <div className="h-1/10">
        <NavBar />
      </div>
      <ChatPage />
    </div>
  );
}
    
function Chat() {
  return <ChatPage />;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


export default App;