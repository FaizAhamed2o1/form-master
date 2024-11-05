import useInputState from "../../hooks/useInputState";

const CustomHookForm = () => {
  // Note: receiving from hook when we exported the data as object
  const nameChange = useInputState("Rubunda");
  const emailChange = useInputState("Rubunda@gmail.com");
  const passwordChange = useInputState("12345");

  // Note: Function to handle what happens when we click the submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("name:", nameC);
    // console.log("email:", email);
    // console.log("password:", password);

    console.log("name:", nameChange.value);
    console.log("email:", emailChange.value);
    console.log("password:", passwordChange.value);
  };

  // Note: receiving from hook when we exported the data as array
  // const [name, handleNameChange] = useInputState("John Doe");
  // const [email, handleEmailChange] = useInputState("johnDoe@gmail.com");
  // const [password, handlePasswordChange] = useInputState("12345");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Implementing the custom hook when exported as array */}
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="userName"
        />
        <br />
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          name="userEmail"
        />
        <br />
        <input
          value={password}
          onChange={handlePasswordChange}
          type="password"
          name="password"
          id=""
        />
        <br /> */}

        {/* Implementing the custom hook when exported as object */}
        <input {...nameChange} type="text" name="userName" />
        <br />
        <input {...emailChange} type="email" name="userEmail" />
        <br />
        <input {...passwordChange} type="password" name="password" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CustomHookForm;
