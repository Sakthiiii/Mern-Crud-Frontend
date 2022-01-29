import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllUsers, getUserByName } from "../actions";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Search = () => {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div className="text-center">
      <input
        value={inputVal}
        type="text"
        placeholder="search by name"
        className="form-control rounded-pill w-75 m-auto mb-4"
        onChange={(e) => {
          setInputVal(e.target.value);
          if (e.target.value.length === 0 || !e.target.value ) {
            dispatch(getAllUsers());
          } else {
            dispatch(getUserByName(e.target.value));
          }
        }}
      />
    </div>
  );
};
export default Search;
