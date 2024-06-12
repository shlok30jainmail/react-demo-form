import { useState } from "react";


const Header =()=>{
    const [hide, setHide] = useState({
        display:"",
    })
    return(
        <div id="container">
               <div id="navbar">
                   <div className="navitems">
                       <div className="logo">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/012/986/755/small/abstract-circle-logo-icon-free-png.png" alt="Logo img" width="55px"/>
                        <h2>Share Chat</h2>
                       </div>
                   </div>
       
                   <div className="nav-menu hide" id="nav-m" style={hide}>
                       <span className="menu-items">Home</span>
                       <span className="menu-items">About</span>
                       <span className="menu-items">Career</span>
                       <span className="menu-items">Services</span>
                   </div>
       
                   <div className="nav-btn hide" id="nav-b" style={hide}>
                       <button className="n-btn">Sign in</button>
                       <button className="n-btn">Sign up</button>      
                   </div>
                    <span id="drop-down"><img src="https://static.vecteezy.com/system/resources/previews/019/858/503/original/dropdown-flat-color-outline-icon-free-png.png" alt="dropdown" width="45px" onClick={()=>{
                       if(hide.display==""){
                        setHide({
                            display:"block",
                        })
                       }else{
                        setHide({
                            display:"",
                        })
                       }
                    }} /></span>
               </div>
       
       
           </div>

    );
};

export default Header;

