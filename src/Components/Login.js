
import LoginCSS from './Login.module.css';
import {useState} from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom"
const  LoginPage= ({ setToken, setUser }) => 
{
  const navigate = useNavigate();
    const pattern=new RegExp('^\s*$');
    const [Username,setUsername]=useState('');
    const [Password,setPassword]=useState('');
    const [con,setCon]=useState(false);
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(validate())
      {
         fetch(`http://localhost:5147/api/login/get/${Username}`)
         .then(response=> response.json()).then(json=>
          {
              if(json.length!=0)
              {
                  if(json[0].username==Username)
                  {
                    if(json[0].password===Password)
                    {
                     
                      setToken(true);
                      setUser(Username)
                      navigate("/landing")

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
      if(Username===''||Username===null|| Username.match(pattern)===false)
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
    <div className={LoginCSS.adjustment}>    
        <div className={LoginCSS.login_container}>

            <h2>Login</h2>
            <form  onSubmit={handleSubmit}>
            <input
                type="text"
                className={LoginCSS.login_input}
                placeholder="Username"
                value={Username}
                onChange={(e)=>{setUsername(e.target.value)}}
                required
            />
            <input
                type="password"
                className={LoginCSS.login_input}
                placeholder="Password"
                value={Password}
                onChange={(e)=>{setPassword(e.target.value)}}
                required
            />
            <button type="submit" className={LoginCSS.login_button}>Login</button>
            </form>
            <ToastContainer/>
        </div>
    </div>

     );
}

export default LoginPage;