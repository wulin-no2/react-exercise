import { useState } from "react";
function BetterSignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (evt) => {
    const changeField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currData) => {
      currData[changeField] = newValue;
      return { ...currData };
    });
  };
  const handleSubmit = (evt) => {
    console.log(formData);
  };
  return (
    <div>
      <label htmlFor="firstName">Enter a first name</label>
      <input
        type="text"
        placeholder="first name"
        value={formData.firstName}
        onChange={handleChange}
        name="firstName"
        id="firstName"
      />
      <br />
      <label htmlFor="lastName">Enter a last name</label>
      <input
        type="text"
        placeholder="last name"
        value={formData.lastName}
        name="lastName"
        onChange={handleChange}
        id="lastName"
      />
      <br />
      <label htmlFor="password">password</label>
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
        name="password"
        id="password"
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default BetterSignupForm;
