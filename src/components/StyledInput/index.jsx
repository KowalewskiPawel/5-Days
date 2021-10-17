import { useCallback } from "react";
import debounce from "lodash.debounce";

import Input from "./Input";

const StyledInput = ({ doFetch }) => {
  // eslint-disable-next-line
  const debouncedSetCityName = useCallback(
    debounce((value) => doFetch(value), 300),
    []
  );

  const handleChange = (event) => {
    const { value } = event.target;

    debouncedSetCityName(value);
  };

  return (
    <Input
      placeholder='Enter city name'
      onChange={(e) => handleChange(e)}></Input>
  );
};

export default StyledInput;
