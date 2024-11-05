const SimpleForm = () => {
  const handleSubmit = (e) => {
    // Note: e.preventDefault() form er default behavior ke prevent kore. Form er default behavior hocche submit korar shathe shathe page ta reload kora.
    e.preventDefault();

    // Note: To get the value of the input field with the name of userName and userEmail
    console.log(e.target.userName.value);
    console.log(e.target.userEmail.value);
  };
  return (
    <div>
      {/* onSubmit hoilo event handler. define kore je form submit howar pore ki korbe */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="userName" />
        <br />
        <input type="email" name="userEmail" />
        <br />
        <input type="password" name="" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
