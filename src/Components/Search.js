import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../Utils/UserContext";

const Search = ({ searchText, setSearchText, handleSubmit }) => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <form className="FormSearch" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search for food"
          value={searchText}
          data-testid="search-input"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button type="submit" data-testid="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      {/* <input
        type="text"
        value={user.name}
        onChange={(e) =>
          setUser({
            ...user,
            name: e.target.value,
          })
        }
      />{" "}
      <input
        type="text"
        value={user.email}
        onChange={(e) =>
          setUser({
            ...user,
            email: e.target.value,
          })
        }
      /> */}
    </div>
  );
};

export default Search;
