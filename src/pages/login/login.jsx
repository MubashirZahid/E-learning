import { useState } from "react";
import "./login.css";
import ForgotPwd from "./forgotPwd";



export default function LogIn() {
    const [uiState, setUiState] = useState("login");
    
    function showComponent(st) {
        switch(st){
            case "login": 
                return <LogInForm setUiState={setUiState} />
            case 'forgot':
                return <ForgotPwd setUiState={setUiState} />
        }
    }
    return (
        <div className="logInContainer">
            {
                showComponent(uiState)
            }
        </div>
    );
}

// eslint-disable-next-line react/prop-types
const LogInForm =({ setUiState })=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleButtonClick = () => {
        // Call your API here
        fetch("http://127.0.0.1:8000/auth/api/logIn", {
            method: "POST", // Use the appropriate HTTP method
            // Add headers if needed
            headers: {
                "Content-Type": "application/json"
                // You might need to include authentication headers or other headers
            },
            // Add body if you need to send data
            body: JSON.stringify({
                // Your data to be sent in the request
                email: email,
                password: password
            })
        })
            .then(response => {
                // Handle the response
                if (response.ok) {
                    // If the response is okay, perform actions based on the response
                    // For example, you can redirect or set some state
                } else {
                    // If the response is not okay, handle the error
                    throw new Error('Request failed!');
                }
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
                // You can set state to show an error message or perform other actions
            });


        }
    return (
        <>
            <label htmlFor="" name="email">Email</label>
            <input type="text" onChange={(e) =>{
                setEmail(e.target.value)
            }}/>
            <label htmlFor="" name="pwd">Pwd</label>
            <input type="password"onChange={(e) =>{
                setPassword(e.target.value)
            }}/>
            <span 
                className="forgotPwd"
                onClick={() => setUiState("forgot")}    
            >Forgot password</span>
            <button onClick={handleButtonClick}>
                click me 
            </button>
        </>
    );
}