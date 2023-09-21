import ApprovalFormat from "./ApprovalFormat";
import LoginPage from "./Login";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import {useState} from 'react';

function App() {
    const [token, setToken] = useState(false);
    const [user,setUser]=useState("");


    return(
        <Router>
            <Routes>
                <Route path="/" element={token ? <ApprovalFormat /> : <LoginPage setToken={setToken} setUser={setUser} />} />
                <Route exact path="/approvalformat" element= {token ? <ApprovalFormat/>:<LoginPage setToken={setToken} setUser={setUser} />} />
            </Routes>
        </Router>
    )
}

export default App;
