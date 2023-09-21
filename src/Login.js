import './Approval.css';
import {useState} from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";
const LoginPage = ({setToken,setUser}) => {
    const navigate = useNavigate();
    const pattern=new RegExp('^\s+');
    const [Username,setUsername]=useState('');
    const [Password,setPassword]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validate())
        {
           fetch(`https://localhost:7113/api/loginpage/get/${Username}`)
           .then(response=> response.json()).then(json=>
            {
                if(json.length!=0)
                {
                    if(json[0].username==Username)
                    {
                      if(json[0].password===Password)
                      {
                       
                        setUser(Username);
                        setToken(true);
                        navigate('/approvalformat')
  
                      }
                      else
                      {
                        toast('Password  is incorrect', {
                          position: "top-center",
                          autoClose: 50,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                          });
                      }
                    }
                    else
                    {
                      toast('Username is incorrect', {
                        position: "top-center",
                        autoClose: 50,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    }
                }
                else
                {
                  toast('Username is incorrect', {
                    position: "top-center",
                    autoClose: 50,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                }
            });
        }
        }
  
      const validate=()=>{
        let result=true;
        if(Username===''||Username===null|| Username.match(pattern)===true)
        {
          toast('Username is incorrect', {
            position: "top-center",
            autoClose: 50,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          result=false;
        }
        if(Password===''||Password===null)
        {
          result=false;
        }
        return result;
  
      }
    return ( 
        <div class="container1">
        <div class="login-box1">
            <h2 class="text-center1">Login</h2>
            <form onSubmit={handleSubmit}>
                <div class="form-group1">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" value={Username}
            onChange={(e)=>{setUsername(e.target.value)}} required />
                </div>
                <div class="form-group1">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password"  value={Password}
            onChange={(e)=>{setPassword(e.target.value)}} required />
                </div>
                <button type="submit"><span></span>Submit</button>
            </form>
        </div>
        <ToastContainer/>
          </div>
     );
}
 
export default LoginPage;    