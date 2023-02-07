import React, { useRef, forwardRef } from 'react'
import AgentCard from '../AgentCard/AgentCard';
import WeaponCard from '../WeaponCard/WeaponCard';
import GearCard from '../GearCard/GearCard';
import MultipurposeScreen from '../MultipurposeScreen/MultipurposeScreen';
import './Search.css';

const Search = forwardRef((props, ref) => {

    const getSearchVal = useRef();

    return (
        <div className="main-container">
            <div className="search">
                <select name="Search" id="search-drop" ref={ref} onChange={(e) => {
                    props.handleSearch(e)
                }}>
                    <option value="agents" defaultValue>Agent</option>
                    <option value="weapons" >Weapon</option>
                    <option value="gear" >Gear</option>
                </select>
                <input id="search-bar" type="text" ref={getSearchVal} placeholder={"Search the " + props.searchName + " here"} onChange={(e) => {
                    props.getSearchValue(e.target.value);
                }} />
                <div id="input-form">
                    {/* <ul className='search-hints'>
                        <li>Hi</li>
                    </ul> */}
                    {/* {getSearchVal.current.value.length > 1 && props.objectName.length > 0 && (
                        <ul className="list">
                            {Object.keys(props.objectName).map((item) => (
                                <li onClick={() => this.onClickItem(item)}>{item.name}</li>
                            ))}
                        </ul>
                    )} */}

                </div>
            </div>
            <div className="search-result">
                {
                    (() => {
                        if (props.searchValue !== "") {
                            if (props.resultCard[0].length !== 0) {
                                if (props.resultCard[0] === "in process") {
                                    return <MultipurposeScreen screen="loading" type={props.searchName} />
                                } else {
                                    switch (props.searchType) {
                                        case "agents":
                                            return <AgentCard card={props.resultCard[0]} />
                                        case "weapons":
                                            return <WeaponCard card={props.resultCard[0]} />
                                        case "gear":
                                            return <GearCard card={props.resultCard[0]} />
                                        default:
                                            return <MultipurposeScreen screen="error" />
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
        </div>
    )
})

export default Search
