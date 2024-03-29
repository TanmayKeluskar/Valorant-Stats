import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Search from './components/Search/Search';

export default function MainComponent() {
    let agentNames = {
        "breach": "5f8d3a7f-467b-97f3-062c-13acf203c006",
        "raze": "f94c3b30-42be-e959-889c-5aa313dba261",
        "kay/o": "601dbbe7-43ce-be57-2a40-4abd24953621",
        "skye": "6f2a04ca-43e0-be17-7f36-b3908627744d",
        "cypher": "117ed9e3-49f3-6512-3ccf-0cada7e3823b",
        "sova": "ded3520f-4264-bfed-162d-b080e2abccf9",
        "killjoy": "1e58de9c-4950-5125-93e9-a0aee9f98746",
        "viper": "707eab51-4836-f488-046a-cda6bf494859",
        "phoenix": "eb93336a-449b-9c1b-0a54-a891f7921d69",
        "astra": "41fb69c1-4189-7b37-f117-bcaf1e96f1bf",
        "brimstone": "9f0d8ba9-4140-b941-57d3-a7ad57c6b417",
        "yoru": "7f94d92c-4234-0a36-9646-3a87eb8b5c89",
        "sage": "569fdd95-4d10-43ab-ca70-79becc718b46",
        "reyna": "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc",
        "omen": "8e253930-4c05-31dd-1b6c-968525494517",
        "jett": "add6443a-41bd-e414-f6ad-e58d267f4e95"
    }

    let weaponNames = {
        "odin": "63e6c2b6-4a8e-869c-3d4c-e38355226584",
        "ares": "55d8a0f4-4274-ca67-fe2c-06ab45efdf58",
        "vandal": "9c82e19d-4575-0200-1a81-3eacf00cf872",
        "bulldog": "ae3de142-4d85-2547-dd26-4e90bed35cf7",
        "phantom": "ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a",
        "judge": "ec845bf4-4f79-ddda-a3da-0db3774b2794",
        "bucky": "910be174-449b-c412-ab22-d0873436b21b",
        "frenzy": "44d4e95c-4157-0037-81b2-17841bf2e8e3",
        "classic": "29a0cfab-485b-f5d5-779a-b59f85e204a8",
        "ghost": "1baa85b4-4c70-1284-64bb-6481dfc3bb4e",
        "sheriff": "e336c6b8-418d-9340-d77f-7a9e4cfe0702",
        "shorty": "42da8ccc-40d5-affc-beec-15aa47b42eda",
        "operator": "a03b24d3-4319-996d-0f8c-94bbfba1dfc7",
        "guardian": "4ade7faa-4cf1-8376-95ef-39884480959b",
        "marshal": "c4883e50-4494-202c-3ec3-6b8a9284f00b",
        "spectre": "462080d1-4035-2937-7c09-27aa2a5c27a7",
        "stinger": "f7e1b454-4ad4-1063-ec0a-159e56b58941",
        "melee": "2f59173c-4bed-b6c3-2191-dea9b58be9c7"
    }

    let gearNames = {
        "heavy shield": "822bcab2-40a2-324e-c137-e09195ad7692",
        "light shield": "4dec83d5-4902-9ab3-bed6-a7a390761157"
    }

    let mapNames = {
        "ascent": "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319",
        "fracture": "b529448b-4d60-346e-e89e-00a4c527a405",
        "lotus": "2fe4ed3a-450a-948b-6d6b-e89a78e680a9",
        "pearl": "fd267378-4d1d-484f-ff52-77821ed10dc2",
        "the range": "ee613ee9-28b7-4beb-9666-08db13bb2244",
        "icebox": "e2ad5c54-4114-a870-9641-8ea21279579a",
        "bind": "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba",
        "breeze": "2fb9a4fd-47b8-4e7d-a969-74b4046ebd53",
        "haven": "2bee0dc9-4ffe-519b-1cbd-7fbe763a6047",
        "split": "d960549e-485c-e861-8d71-aa9d1aed12a2"
    }

    // search type to be passed in the api url
    const [searchType, setSearchType] = useState("agents");
    const [searchName, setSearchName] = useState("Agent");

    // state to use to get value for the url
    const [searchValue, setSearchValue] = useState("raze");

    // state object to use to get value for the url
    const [objectName, setObjectName] = useState(agentNames);

    // state array to store the result array
    const [resultCard, setResultCard] = useState([{}]);

    // ref attribute to get data of the selected option
    const getSelected = useRef(null);

    const handleSearch = () => {
        setSearchValue("");
        setSearchType(getSelected.current.value);
        setSearchName(getSelected.current.selectedOptions[0].innerText);
        switch (getSelected.current.value) {
            case "agents":
                setObjectName(agentNames);
                break;
            case "weapons":
                setObjectName(weaponNames);
                break;
            case "gear":
                setObjectName(gearNames);
                break;
            case "maps":
                setObjectName(mapNames);
                break;
            default:
                setObjectName(agentNames);
        }
        // console.log(getSelected.current.selectedOptions[0].getSelected('data-obj'));
    }

    const getSearchValue = (searchVal) => {
        setSearchValue(searchVal);
    }

    useEffect(() => {

        async function getResult(searchValue) {
            let urlCreated = "https://valorant-api.com/v1/" + searchType + "/" + objectName[searchValue.toLowerCase()]
            const result = await fetch(urlCreated)
                .then(
                    (response) => {
                        if (response.status === 200) {
                            return response.json();
                        } else throw new Error(response.status);
                    }
                )
                .catch(
                    (error) => {
                        console.log("Error: ", error)
                        return "";
                    }
                );
            console.log("Response: ", result);
            setResultCard([result]);
        }

        setResultCard(["in process"]);
        if (objectName[searchValue.toLowerCase()] !== undefined) {

            getResult(searchValue);
        } else {
            setSearchValue("");

        }
    }, [searchValue, objectName, searchType]);


    const props = {
        objectName: objectName,
        handleSearch: handleSearch,
        getSearchValue: getSearchValue,
        searchType: searchType,
        searchName: searchName,
        searchValue: searchValue,
        resultCard: resultCard
    }

    return (
        <div className="container">
            <div className="outer-overlay">
                <div className="header">
                    <h1 id="head">vAlorant</h1>
                    <h2 id="head2">{searchName} Stats</h2>
                </div>
                <div className="overlay">
                    <Search {...props} ref={getSelected} />
                </div>
                <div className="footer">
                    <h4 id="footer-text">Copyright Disclaimer under section 107 of the Copyright Act 1976, allowance is made for “fair use” for purposes such as criticism, comment, news reporting, teaching, scholarship, education and research.</h4>
                </div>
            </div>
        </div>
    );
}
