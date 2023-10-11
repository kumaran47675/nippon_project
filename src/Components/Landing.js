// import { Link } from "react-router-dom";
// const Landing = () => {
//     return ( 
//         <div className="menu-container">
            
//             <div className="menu-heading">
//                 <img src="./CSS/menu_icon.png" style={{width:"16px",}} /> 
//                 <h2>Menu</h2>
//             </div>
//             <ul>
            
//                 <li> <Link to="/observation">Observation</Link></li>
//                 <li> <Link to="/tinting">Tinting-Banco & D180-Bangalore</Link></li>
//                 <li> <Link to="">Colourants-Banco & D180-Bangalore</Link></li>
//                 <li> <Link to="">Asset-Banco & D180-Bangalore</Link></li>
//                 <li> <Link to="">Tinting-Noombal</Link></li>
//                 <li> <Link to="">Colourants-Noombal</Link></li>
//                 <li> <Link to="">Asset-Noombal</Link></li>
//                 <li> <Link to="">Tinting-Madurai</Link></li>
//                 <li> <Link to="">Colourants-Madurai</Link></li>
//                 <li> <Link to="">Asset-Madurai</Link></li>
//                 <li> <Link to="">Tinting-Coimbatore</Link></li>
//                 <li> <Link to="">Colourants-Coimbatore</Link></li>
//                 <li> <Link to="">Asset-Coimbatore</Link></li>
//                 <li> <Link to="">Tinting-Hyderabad</Link></li>
//                 <li> <Link to="">Colourants-Hyderabad</Link></li>
//                 <li> <Link to="">Asset-Hyderabad</Link></li>
//                 <li> <Link to="">Tinting-Vijayawada</Link></li>
//                 <li> <Link to="">Colourants-Vijayawada</Link></li>
//                 <li> <Link to="">Asset-Vijayawada</Link></li>
//                 <li> <Link to="">Tinting-Vizag</Link></li>
//                 <li> <Link to="">Colourants-Vizag</Link></li>
//                 <li> <Link to="">Asset-Vizag</Link></li>
//                 <li> <Link to="">Tinting-CTC Park Town</Link></li>
//                 <li> <Link to="">Colourants-CTC Park Town</Link></li>
//                 <li> <Link to="">Asset-CTC Park Town</Link></li>
//                 <li> <Link to="">Tinting-Salem</Link></li>
//                 <li> <Link to="">Colourants-Salem</Link></li>
//                 <li> <Link to="">Asset-Salem</Link></li>
//                 <li> <Link to="">Tinting-Hubli</Link></li>
//                 <li> <Link to="">Colourants-Hubli</Link></li>
//                 <li> <Link to="">Asset-Hubli</Link></li>
//                 <li> <Link to="">Tinting-Mangalore</Link></li>
//                 <li> <Link to="">Colourants-Mangalore</Link></li>
//                 <li> <Link to="">Asset-Mangalore</Link></li>
//                 <li> <Link to="">Tinting-Kalburgi</Link></li>
//                 <li> <Link to="">Colourants-Kalburgi</Link></li>
//                 <li> <Link to="">Asset-Kalburgi</Link></li>
//                 <li> <Link to="">Tinting-Villupuram-Pondy</Link></li>
//                 <li> <Link to="">Colourants-Villupuram-Pondy</Link></li>
//                 <li> <Link to="">Asset-Villupuram-Pondy</Link></li>
//                 <li> <Link to="">Tinting-Trichy</Link></li>
//                 <li> <Link to="">Colourants-Trichy</Link></li>
//                 <li> <Link to="">Asset-Trichy</Link></li>
//                 <li> <Link to="">Tinting-Mysore</Link></li>
//                 <li> <Link to="">Colourants-Mysore</Link></li>
//                 <li> <Link to="">Asset-Mysore</Link></li>
//             </ul>
           
//         </div>
//      );
// }
 
// export default Landing;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Landing.css"; // Create a CSS file for styling pawan



const Landing = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);



    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };



    return (
    <div className="landing-container">


        <button className="menu-button" onClick={toggleMenu}>
            {isMenuOpen ? "Close" : "Open Menu"}
        </button>



        <nav className={`sidebar ${isMenuOpen ? "open" : ""}`}>
       
    <ul>
        <li>
        <Link to="/observation">Observation</Link>
        </li>
        <li>
        <Link to="/tintingbanglore">Tinting-Banco & D180-Bangalore</Link>
        </li>
        <li>
        <Link to="/colourantbanglore">Colourants-Banco & D180-Bangalore</Link>
        </li>
        <li>
        <Link to="/tintingnoombal">Tinting-Noombal</Link>
        </li>
        <li>
        <Link to="/colourantnoombal">Colourants-Noombal</Link>
        </li>
        <li>
        <Link to="/asset-noombal">Asset-Noombal</Link>
        </li>
        <li>
        <Link to="/tinting-madurai">Tinting-Madurai</Link>
        </li>
        <li>
        <Link to="/colourants-madurai">Colourants-Madurai</Link>
        </li>
        <li>
        <Link to="/asset-madurai">Asset-Madurai</Link>
        </li>
        <li>
        <Link to="/tinting-coimbatore">Tinting-Coimbatore</Link>
        </li>
        <li>
        <Link to="/colourants-coimbatore">Colourants-Coimbatore</Link>
        </li>
        <li>
        <Link to="/asset-coimbatore">Asset-Coimbatore</Link>
        </li>
        <li>
        <Link to="/tinting-hyderabad">Tinting-Hyderabad</Link>
        </li>
        <li>
        <Link to="/colourants-hyderabad">Colourants-Hyderabad</Link>
        </li>
        <li>
        <Link to="/asset-hyderabad">Asset-Hyderabad</Link>
        </li>
        <li>
        <Link to="/tinting-vijayawada">Tinting-Vijayawada</Link>
        </li>
        <li>
        <Link to="/colourants-vijayawada">Colourants-Vijayawada</Link>
        </li>
        <li>
        <Link to="/asset-vijayawada">Asset-Vijayawada</Link>
        </li>
        <li>
        <Link to="/tinting-vizag">Tinting-Vizag</Link>
        </li>
        <li>
        <Link to="/colourants-vizag">Colourants-Vizag</Link>
        </li>
        <li>
        <Link to="/asset-vizag">Asset-Vizag</Link>
        </li>
        <li>
        <Link to="/tinting-ctc-park-town">Tinting-CTC Park Town</Link>
        </li>
        <li>
        <Link to="/colourants-ctc-park-town">Colourants-CTC Park Town</Link>
        </li>
        <li>
        <Link to="/asset-ctc-park-town">Asset-CTC Park Town</Link>
        </li>
        <li>
        <Link to="/tinting-salem">Tinting-Salem</Link>
        </li>
        <li>
        <Link to="/colourants-salem">Colourants-Salem</Link>
        </li>
        <li>
        <Link to="/asset-salem">Asset-Salem</Link>
        </li>
        <li>
        <Link to="/tinting-hubli">Tinting-Hubli</Link>
        </li>
        <li>
        <Link to="/colourants-hubli">Colourants-Hubli</Link>
        </li>
        <li>
        <Link to="/asset-hubli">Asset-Hubli</Link>
        </li>
        <li>
        <Link to="/tinting-mangalore">Tinting-Mangalore</Link>
        </li>
        <li>
        <Link to="/colourants-mangalore">Colourants-Mangalore</Link>
        </li>
        <li>
        <Link to="/asset-mangalore">Asset-Mangalore</Link>
        </li>
        <li>
        <Link to="/tinting-kalburgi">Tinting-Kalburgi</Link>
        </li>
        <li>
        <Link to="/colourants-kalburgi">Colourants-Kalburgi</Link>
        </li>
        <li>
        <Link to="/asset-kalburgi">Asset-Kalburgi</Link>
        </li>
        <li>
        <Link to="/tinting-villupuram-pondy">Tinting-Villupuram-Pondy</Link>
        </li>
        <li>
        <Link to="/colourants-villupuram-pondy">Colourants-Villupuram-Pondy</Link>
        </li>
        <li>
        <Link to="/asset-villupuram-pondy">Asset-Villupuram-Pondy</Link>
        </li>
        <li>
        <Link to="/tinting-trichy">Tinting-Trichy</Link>
        </li>
        <li>
        <Link to="/colourants-trichy">Colourants-Trichy</Link>
        </li>
        <li>
        <Link to="/asset-trichy">Asset-Trichy</Link>
        </li>
        <li>
        <Link to="/tinting-mysore">Tinting-Mysore</Link>
        </li>
        <li>
        <Link to="/colourants-mysore">Colourants-Mysore</Link>
        </li>
        <li>
        <Link to="/asset-mysore">Asset-Mysore</Link>
        </li>
    </ul>
    </nav>
    </div>
    );
};



export default Landing;