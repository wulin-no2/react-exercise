import { useState } from "react";
function UsernameForm() {
  const [username, setUsername] = useState("");
  const updateUsername = (evt) => setUsername(evt.target.value);
  return (
    <div>
      <label htmlFor="username">Enter a username</label>
      <input
        type="text"
        placeholder="user name"
        value={username}
        onChange={updateUsername}
      />
      <button>Submit</button>
    </div>
  );
}
export default UsernameForm;
