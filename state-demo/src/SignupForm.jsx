import { useState } from "react";
function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const updateFirstName = (evt) => setFirstName(evt.target.value);
  const updateLastName = (evt) => setLastName(evt.target.value);
  const handleSubmit = () => {};
  return (
    <div>
      <label htmlFor="firstName">Enter a first name</label>
      <input
        type="text"
        placeholder="first name"
        value={firstName}
        onChange={updateFirstName}
      />
      <br />
      <label htmlFor="lastName">Enter a last name</label>
      <input
        type="text"
        placeholder="last name"
        value={lastName}
        onChange={updateLastName}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default SignupForm;
