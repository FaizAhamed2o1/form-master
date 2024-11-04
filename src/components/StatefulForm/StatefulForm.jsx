import { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState("User");
  const [email, setEmail] = useState("user@gmail.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Info: Form submission callback function
  const handleSubmit = (e) => {
    e.preventDefault();

    // Note: Checks if password length is greater than 6. If it is not, an error msg will be shown. and if password length is greater than 6,the form will be submitted how it's supposed to be.
    if (password.length < 6) {
      setError("Password length must be at least 6 characters");
    } else {
      setError("");
      console.log("Name: ", name);
      console.log("Email: ", email);
      console.log("Password: ", password);
    }
  };

  // Info: Tracks the change in the name input field and sets the change on state
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  // Info: Tracks the change in the email input field and sets the change on state
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  // Info: Tracks the change in the password input field and sets the change on state
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          name="userName"
          placeholder="user name"
          onChange={handleNameChange}
        />
        <br />
        <input
          value={email}
          type="email"
          name="userEmail"
          onChange={handleEmailChange}
        />
        <br />
        <input
          type="password"
          name="userPassword"
          onChange={handlePasswordChange}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default StatefulForm;
