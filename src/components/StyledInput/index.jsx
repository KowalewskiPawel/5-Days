import Input from "./Input";

const StyledInput = ({ setCityName }) => (
  <Input
    placeholder='Enter city name'
    onChange={(e) => setCityName(e.target.value)}></Input>
);

export default StyledInput;
