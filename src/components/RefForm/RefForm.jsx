import { useEffect, useRef } from "react";

const RefForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Note: Getting the values from the references
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };

  // Info: Declaring individual reference for each input field
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  useEffect(() => {
    // Note: Setting where the cursor will be on the form by default
    nameRef.current.focus();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          type="text"
          name="userName"
          defaultValue={"User"}
        />
        <br />
        <input ref={emailRef} type="email" name="userEmail" />
        <br />
        <input ref={passwordRef} type="password" name="userPassword" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefForm;
