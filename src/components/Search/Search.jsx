import React, { forwardRef } from 'react'
import AgentCard from '../AgentCard/AgentCard';
import WeaponCard from '../WeaponCard/WeaponCard';
import MultipurposeScreen from '../MultipurposeScreen/MultipurposeScreen';

const Search = forwardRef((props, ref) => {

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
                    <input id="search-bar" type="text" placeholder={"Search the " + props.searchName + " here"} onChange={(e) => {
                        props.getSearchValue(e.target.value);
                    }} />
                </div>
            </div>
            {
                (() => {
                    if (props.searchValue !== "") {
                        if (props.resultCard[0].length != 0) {
                            if (props.resultCard[0] == "in process") {
                                return <MultipurposeScreen screen="loading" type={props.searchName} />
                            } else {
                                switch (props.searchType) {
                                    case "agents":
                                        return <AgentCard card={props.resultCard[0]} />
                                    case "weapons":
                                        return <WeaponCard card={props.resultCard[0]} />
                                }
                            }
                        } else {
                            return <MultipurposeScreen screen="error" />
                        }
                    } else {
                        return <MultipurposeScreen type={props.searchName} />
                    }
                })()
            }
        </div>
    )
})

export default Search
