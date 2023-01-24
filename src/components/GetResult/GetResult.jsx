import React from 'react'

export default function GetResult() {

    async function generateResult(searchValue) {
        let urlCreated = "https://valorant-api.com/v1/" + searchType + "/" + objectName[searchValue.toLowerCase()]
        const result = await fetch(urlCreated)
            .then(
                (response) => response.json())
            .catch(
                (error) => console.log(error));
        /* const data = await fetch(url);
        const result = await data.json(); */
        console.log([result]);
        return setResultCard([result]);
    }
    return (
        <div>GetResult</div>
    )
}
