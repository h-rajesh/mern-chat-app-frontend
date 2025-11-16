import './App.css';
import Chatpage from './Pages/Chatpage';
import Homepage from './Pages/Homepage';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route path='/' component={Homepage} exact/>
      <Route path='/chats' component={ Chatpage} />
    </div>
  );
}

export default App;
