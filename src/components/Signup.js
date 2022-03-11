import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

export const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {    
        const auth = localStorage.getItem("user");
        if (auth) {
          navigate('/');
        }
      })

    const collectData = async () => {
        console.log(name, email, password);

        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json()
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result));
        if(result)
        {
                navigate('/');
        }
    }
    return (
        <div className="form_wrapper">
            <div className="form_container">
                <div className="title_container">
                    <h2>Responsive Registration Form</h2>
                </div>
                <div className="row clearfix">
                    <div className="">
                        <form>

                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                <input type="text" placeholder=" Name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                            </div>
                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                            </div>
                            {/* <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                <input type="password" name="password" placeholder="Re-type Password" required />
                            </div> */}

                            <button type='button' onClick={collectData}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
