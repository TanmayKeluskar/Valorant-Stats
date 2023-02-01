import React from 'react'
import '../css/cards.css'

export default function AgentCard(props) {
    const displayData = props.card.data
    return (
        <div className="search-result">
            {displayData ?
                <div className="info">
                    <div className="looks">
                        <div className="display-data">
                            <div className='img-text' >
                                <div className='img'>
                                    <img alt="agent-pic" className='agent-pic' src={displayData.displayIcon != null ? displayData.displayIcon : ""} />
                                </div>
                                <div className="name">
                                    <p className='character-name'>
                                        {displayData.displayName != null ? displayData.displayName.toUpperCase() : ""}
                                    </p>
                                    <p>{displayData.isPlayableCharacter != null ? "Playable Character" : "Non - Playable Character"}</p>
                                </div>
                            </div>
                            <div className="description">
                                {displayData.description != null ? <p> {displayData.description}</p> : <p>No Roles Found</p>}
                            </div>
                        </div>
                    </div>
                    <div className="info-items">
                        <p className="sub-heads">ROLES</p>
                        <hr />
                        {displayData.role != null ?
                            <div className="display-item"><img alt="role-icon" src={displayData.role.displayIcon} /><span>{displayData.role.displayName.toUpperCase()}</span>
                                <p>{displayData.role.description}</p>
                            </div> : <p>No Roles Found</p>
                        }
                        <p className="sub-heads">ABILITIES</p>
                        <hr />
                        {displayData.abilities != null ?
                            displayData.abilities.map((ability) => {
                                return (
                                    <div className="display-item" key={ability.displayName} >
                                        {ability.displayIcon != null ? <img alt="ability-icon" src={ability.displayIcon} /> : <p>Not Found</p>}
                                        {ability.displayName != null ? <span>{ability.displayName.toUpperCase()}</span> : <p>Not Found</p>}
                                        {ability.description != null ? <p>{ability.description}</p> : <p>Not Found</p>}
                                        {ability.slot != null ? <p>- SLOT: {ability.slot}</p> : <p>Not Found</p>}
                                    </div>
                                )
                            }) : <p>No Abilities Found</p>
                        }
                        <div className="display-voice">
                            <p className="sub-heads">VOICE</p>
                            {displayData.voiceLine.mediaList != null ?
                                <div className="audioStripe">
                                    <audio controls controlsList="nodownload noplaybackrate" src={displayData.voiceLine.mediaList[0].wave}>Play</audio>
                                </div> : <p>No Voice Found</p>
                            }
                        </div>
                    </div>
                </div>
                : ""}
        </div>
    )
}
