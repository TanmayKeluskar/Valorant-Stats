import React from 'react'
import { useState, useEffect, useRef } from 'react';
import RenderCard from './RenderCard/RenderCard';

export default function MainUi() {
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

    // search type to be passed in the api url
    const [searchType, setSearchType] = useState("agents");
    const [searchName, setSearchName] = useState("Agent Stats");

    // object to use to get value for the url
    const [objectName, setObjectName] = useState(agentNames);

    // object to use to get value for the url
    const [searchValue, setSearchValue] = useState("raze");
    const [resultCard, setResultCard] = useState([""]);
    const getAttribute = useRef(null);



    async function getResult(url) {
        const result = await fetch(url);
        const data = await result.json();
        console.log([data]);
        return setResultCard([data]);
    }

    const generateApiUrl = (searchValue) => {
        let urlCreated = "https://valorant-api.com/v1/" + searchType + "/" + objectName[searchValue.toLowerCase()]
        return urlCreated
    }

    useEffect(() => {
        if (objectName[searchValue.toLowerCase()] != undefined) {
            getResult(generateApiUrl(searchValue));
        }
    }, [searchValue]);

    const handleSearch = () => {
        setSearchType(getAttribute.current.value);
        setSearchName(getAttribute.current.selectedOptions[0].innerText + " Stats");
        switch (getAttribute.current.value) {
            case "agents":
                setObjectName(agentNames);
                break;
            case "weapons":
                setObjectName(weaponNames);
                break;
            default:
                setObjectName(agentNames);
        }
        // console.log(getAttribute.current.selectedOptions[0].getAttribute('data-obj'));
    }

    return (
        <div className="App">
            <div className="container">
                <div className="outer-overlay">
                    <div className="header">
                        <h1 id="head">vAlorant</h1>
                        <h2 id="head2">{searchName}</h2>
                    </div>
                    <div className="overlay">
                        <div className="main-container">
                            <div className="search">
                                <select name="Search" id="search-drop" ref={getAttribute} onChange={(e) => { handleSearch(e) }}>
                                    <option value="agents" selected>Agent</option>
                                    <option value="weapons" >Weapon</option>
                                </select>
                                <div id="input-form">
                                    <input id="search-bar" type="text" placeholder="Name of the Agent" onChange={(e) => { setSearchValue(e.target.value); }} value={searchValue} />
                                </div>
                            </div>
                            <RenderCard card={resultCard[0]} />
                        </div>
                    </div>
                    <div className="footer">
                        <h4 id="footer-text">Copyright Disclaimer under section 107 of the Copyright Act 1976, allowance is made for “fair use” for purposes such as criticism, comment, news reporting, teaching, scholarship, education and research.</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
