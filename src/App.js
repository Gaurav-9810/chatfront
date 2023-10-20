import socketIO from "socket.io-client";
import './App.css';
import {BrowserRouter  , Route, Routes} from 'react-router-dom'
import Join from "./component/Join";
import Chat from "./component/Chat/Chat";

const ENDPOINT="http://localhost:5000/"

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Join/>}>

          </Route>
          <Route  exact path='/chat' element={<Chat/>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
