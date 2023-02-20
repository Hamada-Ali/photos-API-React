import { useState } from "react";


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
        <form onSubmit={clickHandler}>
            <input value={val} type='search' placeholder="Type Your Keyword" onChange={changeHandler}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;