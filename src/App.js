import { useState } from 'react'
import SearchBar from './components/SearchBar'
import request from './api'
import ImageList from './components/ImageList'

const App = () => {
    const [rVal, updateRequest] = useState([])
    const searchHandler = async (term) => {
        const requestVal = await request(term)
        updateRequest(requestVal);
    }

    return (
        <div>
            <SearchBar onSubmit={searchHandler}/>
            <ImageList images={rVal} />
        </div>
    )
}

export default App;