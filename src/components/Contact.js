import { useState } from "react";

const Contact = ()=>{
    const [formData, setFormData] = useState({
        Username:"",
        Useremail:"",
        Userpassword:"",
    });


    return(
        <div id="container-form">
        <div>
            <h2>Contact Form</h2>
        </div>
    {/* <!-- form me action # bhar doo nahi too error aayegi  --> */}
        <div className="form">
        <form action="#" className="formmain" >  
            <div className="nameArea input-box">
                <label for="name">Name : </label>
                <input type="text"  id="name" placeholder="Enter your name" className="inputField" value={formData.Username}
                onChange={(e)=>{
                    setFormData({
                        Username:e.target.value,
                        Useremail:formData.Useremail,
                        Userpassword:formData.Userpassword,
                    })
                }}/>
            </div>

            <div className="emailArea input-box">
                <label for="email">Email : </label>
                <input type="email"  id="email"  placeholder="Enter your email" className="inputField" value={formData.Useremail} 
                onChange={(e)=>{
                    setFormData({
                        Username:formData.Username,
                        Useremail:e.target.value,
                        Userpassword:formData.Userpassword,
                    })
                }}/>
            </div>

            <div className="passwordArea input-box">
                <label for="password">Password : </label>
                <input type="password"  id="password" placeholder="Enter your password" className="inputField" value={formData.Userpassword}
                   onChange={(e)=>{
                    setFormData({
                        Username:formData.Username,
                        Useremail:formData.Useremail,
                        Userpassword:e.target.value,
                    })
                }}/>
            </div>

            <button id="sb-btn" onClick={()=>{
                console.log(formData);
                setFormData({
                    Username:"",
                    Useremail:"",
                    Userpassword:"",
                })
                
            }}>Submit</button>
        </form>
        </div>

        <div className="rule">
              <p id="mistake">If you have account now login using above form !</p>
              <p id="newAccount">New user so create your account</p>
        </div>
    </div>
    );
}

export default Contact;