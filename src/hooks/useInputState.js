import { useState } from "react";

const useInputState = (defaultValue = "") => {
  const [value, setInputValue] = useState(defaultValue);

  //   note: since we will call this function on the onchange attribute of the input property, it always takes event as parameter by default. Then it sets it's value inside the state's function
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // note: returning as array
  //   return [value, handleChange];

  // note: returning as object
  return { value, handleChange };
};

export default useInputState;
