import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [role, setRole] = useState(2);

  const handleButtonClick = () => {
    // Call your API here
    fetch("http://127.0.0.1:8000/auth/api/signUp", {
      method: "POST", // Use the appropriate HTTP method
      // Add headers if needed
      headers: {
        "Content-Type": "application/json",
        // You might need to include authentication headers or other headers
      },
      // Add body if you need to send data
      body: JSON.stringify({
        // Your data to be sent in the request
        name: name,
        email: email,
        password: password,
        phone: phone,
        country: country,
        role: role,
      }),
    })
      .then((response) => {
        // Handle the response
        if (response.ok) {
          // If the response is okay, perform actions based on the response
          // For example, you can redirect or set some state
          history.push("/");
        } else {
          // If the response is not okay, handle the error
          throw new Error("Request failed!");
        }
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
        // You can set state to show an error message or perform other actions
      });
  };
  return (
    <>
      <div className="SignUpContainer">
        <label htmlFor="" name="name">
          Name
        </label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="" name="email">
          Email
        </label>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="" name="password">
          Password
        </label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label htmlFor="" name="phone">
          Phone
        </label>
        <input
          type="text"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <label htmlFor="" name="country">
          Country
        </label>
        <input
          type="text"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <label htmlFor="" name="role">
          Role
        </label>
        <input
          type="text"
          onChange={(e) => {
            setRole(e.target.value);
          }}
        />

        <button onClick={handleButtonClick}>click me</button>
      </div>
    </>
  );
};

export default SignUp;
