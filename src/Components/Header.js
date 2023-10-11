// import '../login.css'
import headerCSS from './Header.module.css';
// import {Link} from 'react-router-dom';
const Header = ({username}) => {
    return (
        <>
            <div className={headerCSS.header}>
                <div className={headerCSS.img1}>
                    <img id="blobby-1" src="./CSS/nipponlogo2.png" alt="Blobby" />
                </div>

                <nav>
                    <h3 style={{fontFamily: "cursive"}}>Hello {username}</h3> 
                {/* <Link to="/landing">Home</Link>

                <Link to="">Return</Link> */}
                </nav>
            </div>
        </>
    );
}
 
export default Header;