
const request = async (query) => {
    const respond = await fetch(`https://api.unsplash.com/search/photos?query=${query}`, {
        method: 'GET',
        headers: {
            Authorization: 'Client-ID e2ULX12KRBO8M7gYdRl0eiH5OYbd-seN8MWo82rg14E'
        }

    })
    const respond_data = await respond.json();
        return respond_data.results;
}

    export default request;