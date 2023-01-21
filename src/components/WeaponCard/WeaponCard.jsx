import React from 'react'
import './WeaponCard.css'

export default function WeaponCard(props) {
    const displayData = props.card.data
    return (
        <div className="search-result">
            {displayData ?
                <div className="agent-info">
                    <div className="agent-looks">
                        <div id="display-icon">
                            <img src={displayData.displayIcon != null ? displayData.displayIcon : ""} />
                            <p>{displayData.isPlayableCharacter != null ? "Playable Character" : "Non-  Playable Character"}</p>
                        </div>
                        <div id="agent-name">{displayData.displayName != null ? displayData.displayName.toUpperCase() : ""}
                        </div>
                    </div>
                    <div className="agent-description">
                        {displayData.category != null ? <p> {displayData.category}</p> : <p>No Category</p>}
                    </div>
                    <div className="info-items">
                        {/* <p class="sub-heads">ROLES</p>
                        <hr />
                        {displayData.role != null ?
                            <div class="display-item"><img src={displayData.role.displayIcon} /><span>{displayData.role.displayName.toUpperCase()}</span>
                                <p>{displayData.role.description}</p>
                            </div> : <p>No Role</p>
                        }
                        <p class="sub-heads">Abilities</p>
                        <hr />
                        {displayData.abilities != null ?
                            displayData.abilities.map(ability => {
                                return (
                                    <>
                                        <div class="display-item"><img src={ability.displayIcon} />
                                            <span>{ability.displayName.toUpperCase()}</span>
                                            <p>{ability.description}</p>
                                            <p>- SLOT: {ability.slot}</p>
                                        </div>
                                    </>
                                )
                            }) : <p>No Abilities</p>
                        }
                        <div className="display-voice">
                            <p class="sub-heads">Voice</p>
                            {displayData.voiceLine.mediaList != null ?
                                <div class="audioStripe">
                                    <audio controls controlslist="nodownload noplaybackrate" src={displayData.voiceLine.mediaList[0].wave}>Play</audio>
                                </div> : <p>No Voice</p>
                            }
                        </div> */}
                    </div>
                </div>
                : ""}
        </div>
    )
}
