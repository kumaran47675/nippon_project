import MainPage from './Components/MainPage';
import Login from './Components/Login';
import { useState } from 'react';
import './App.css';

function App() {
  const [token, setToken] = useState(false);
  const [userId , setUserId] = useState();
  const [userName , setUserName] = useState('');
  const [requestId,setRequestId]=useState('');
  const [depot,setDepot]=useState('');
  return (
    <div className="App">
      { !token &&
        <Login setToken={setToken} setUserId={setUserId} setUserName={setUserName} setDepot={setDepot}/>
      }
      {token &&
        <MainPage userId={userId} userName={userName} requestId={requestId} setRequestId={setRequestId}  depot={depot}/>
      }
      
    </div>
  );
}

export default App;