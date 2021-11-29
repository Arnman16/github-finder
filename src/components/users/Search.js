import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const { searchUsers, clearUsers, users } = useContext(GithubContext);
  const { setAlert, removeAlert } = useContext(AlertContext);
  const showClear = users.length > 0;
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      removeAlert();
      searchUsers(text);
      setText("");
    }
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};
export default Search;
