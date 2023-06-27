import { useState } from "react";
import ProperTypes from 'prop-types';
import '../components/addCategory.css'; 

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState([])

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
      if( inputValue.trim().length <= 1) return;
        //setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim());
        setInputValue("")
    }

  return (
    <>
    <form onSubmit={ onSubmit } className="input-field">
        <input
        type="text"
        value={inputValue}
        onChange={ onInputChange}
        />
        <label>Buscar Gif</label>
    </form>
    
    </>
  )
}

AddCategory.propTypes = {
  setCategories: ProperTypes.string
}