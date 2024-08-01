import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  //для зміни фільтра
  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <label>
      <input
        type="text"
        name="text"
        value={nameFilter}
        onChange={handleChange}
        placeholder="Enter task text..."
        className={css.input}
      />
    </label>
  );
}
