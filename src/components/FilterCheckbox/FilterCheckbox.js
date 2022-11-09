import './FilterCheckbox.css';

function FilterCheckbox({ name, onCheckedboxClick, onChecked }) {
  return (
      <label className={`checkbox checkbox-${name}`}>
        <input
          type="checkbox"
          className="checkbox__invisible"
          onChange={onCheckedboxClick}
          checked={onChecked}
        />
        <span className="checkbox__visible"></span>
        <span className="checkbox__text">Короткометражки</span>
      </label> 
  );
}

export default FilterCheckbox;