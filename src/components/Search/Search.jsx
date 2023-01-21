import React, { useRef, useState, useEffect, forwardRef } from 'react'
import AgentCard from '../AgentCard/AgentCard';
import WeaponCard from '../WeaponCard/WeaponCard';
import ErrorScreen from '../ErrorScreen/ErrorScreen';

const Search = forwardRef((props, ref) => {

    const getSearch = useRef(null);

    const [firstLoad, setFirstLoad] = useState(true);

    // state to use to get value for the url
    const [searchValue, setSearchValue] = useState("raze");

    useEffect(() => {
        if (props.objectName[searchValue.toLowerCase()] != undefined) {
            props.getResult(searchValue);
        }
    }, [searchValue]);

    return (
        <div className="main-container">
            <div className="search">
                <select name="Search" id="search-drop" ref={ref} onChange={(e) => {
                    props.handleSearch(e)
                }}>
                    <option value="agents" selected>Agent</option>
                    <option value="weapons" >Weapon</option>
                </select>
                <div id="input-form">
                    <input id="search-bar" type="text" ref={getSearch} placeholder={"Search the " + props.searchName + " here"} onChange={(e) => {
                        setSearchValue(e.target.value);
                    }} />
                </div>
            </div>
            {
                (() => {
                    if (firstLoad == ) {
                        switch (props.searchType) {
                            case "agents":
                                setFirstLoad(false);
                                return <AgentCard card={props.resultCard[0]} />
                            // return <ErrorScreen />
                            case "weapons":
                                return <WeaponCard card={props.resultCard[0]} />
                            default:
                                return <ErrorScreen />
                        }
                    }
                })()
            }
        </div>
    )
})

export default Search
