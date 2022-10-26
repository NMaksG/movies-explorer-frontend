import './FilterCheckbox.css';

function FilterCheckbox({ name }) {
  return (
      <label className={`checkbox checkbox-${name}`}>
        <input type="checkbox" class="checkbox__invisible"/>
        <span class="checkbox__visible"></span>
        <span class="checkbox__text">Короткометражки</span>
      </label> 
  );
}

export default FilterCheckbox;