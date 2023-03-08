import React, { useEffect, useRef, useState, forwardRef } from 'react'
import AgentCard from '../AgentCard/AgentCard';
import WeaponCard from '../WeaponCard/WeaponCard';
import GearCard from '../GearCard/GearCard';
import MapCard from '../MapCard/MapCard';
import MultipurposeScreen from '../MultipurposeScreen/MultipurposeScreen';
import downArrow from '../../assets/arrow-down.png'
import './Search.css';

const Search = forwardRef((props, ref) => {

    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(props.searchValue);
    const [searchHint, setSearchHint] = useState("");
    const searchRef = useRef();
    const hintDisplay = useRef();

    let placeHolder = "Click to search the " + props.searchName;
    let options = Object.keys(props.objectName);


    useEffect(() => {
        setSearchHint("");
        if (showMenu && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showMenu]);


    useEffect(() => {
        const showMenuDisplayHandler = (e) => {
            if (hintDisplay.current && !hintDisplay.current.contains(e.target)) {
                setShowMenu(false);
                props.getSearchValue(hintDisplay.current.innerText)
            }
        };

        window.addEventListener("click", showMenuDisplayHandler);
        return () => {
            window.removeEventListener("click", showMenuDisplayHandler);
        };
    });

    const showSearchHint = () => {
        if (!selectedValue || selectedValue.length === 0) {
            return placeHolder;
        }
        return selectedValue;
    };

    const onSearchHintClick = (option) => {
        let newValue;
        newValue = option;
        setSelectedValue(newValue);
    };

    const isSelected = (option) => {
        if (!selectedValue) {
            return false;
        }
        return selectedValue === option;
    };

    const onSearch = (e) => {
        setSearchHint(e.target.value);
    };

    const getSearchHints = () => {
        if (!searchHint) {
            return options;
        }
        return options.filter(
            (option) => {
                return option.toLowerCase().indexOf(searchHint.toLowerCase()) >= 0
            }
        );
    };

    return (
        <div className="main-container">
            <div className="search">
                <select name="Search" id="search-drop" ref={ref} onChange={(e) => {
                    props.handleSearch(e)
                }}>
                    <option value="agents" defaultValue>Agent</option>
                    <option value="weapons" >Weapon</option>
                    <option value="gear" >Gear</option>
                    <option value="maps" >Maps</option>
                </select>
                <div id="search-div">
                    <div ref={hintDisplay} onClick={() => { setShowMenu(!showMenu) }} className="search-input">
                        <div className="search-selected-hint">{showSearchHint()}</div>
                        <div className="dropdown-icon">
                            <img alt='down-arrow' src={downArrow} />
                        </div>
                    </div>
                    {showMenu && (
                        <div className="search-menu">
                            <div className="search-box">
                                <input placeholder={"Search the " + props.searchName + " here"} onChange={onSearch} value={searchHint} ref={searchRef} />
                            </div>
                            {getSearchHints().map((option) => (
                                <div
                                    onClick={() => onSearchHintClick(option)}
                                    key={option}
                                    className={`dropdown-item ${isSelected(option) && "selected"}`}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
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
                                        case "maps":
                                            return <MapCard card={props.resultCard[0]} />
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
