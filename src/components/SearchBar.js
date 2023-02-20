import { useState } from "react";
import './SearchBar.css'

const SearchBar = ({onSubmit}) => {
    const [val, changeVal] = useState('');

    const clickHandler = (e) => {
        e.preventDefault();
        onSubmit(val)
    }

    const changeHandler = (e) => {
        changeVal(e.target.value)
    }
    return (
    <div className="form-container">
        <form onSubmit={clickHandler}>
            <label for='value'>Enter Search Term: </label>
            <input name="value" value={val} type='submite' placeholder="Type Your Keyword" onChange={changeHandler}/>
        </form>
    </div>
    )
}

export default SearchBar;