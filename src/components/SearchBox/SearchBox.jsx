import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.search}>
      <p className={css.title}>Find contacts by name</p>
      <input
        type="text"
        className={css.input}
        value={value}
        onChange={() => onFilter(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
