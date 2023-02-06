import React, { useRef } from 'react'
import ShowImage from '../ShowImage/ShowImage';
import '../css/cards.css'
import playIcon from '../../assets/playicon.png'

export default function AgentCard(props) {

    const displayData = props.card.data

    const voicePlayer = useRef();

    return (
        <>
            {displayData ?
                <div className="info">
                    <div className="looks">
                        <div className="display-data">
                            <div className='img-text' >
                                <div className='img'>
                                    {displayData.displayIcon != null && displayData.displayName != null && displayData.fullPortrait != null ?
                                        <ShowImage className='agent-pic' picType="agent" largePic={displayData.fullPortrait} displayName={displayData.displayName} smallPic={displayData.displayIcon}></ShowImage>
                                        : ""}
                                </div>
                                <div className="character-name">
                                    <div className='name'>
                                        {displayData.displayName != null ? displayData.displayName.toUpperCase() : ""}
                                        {displayData.voiceLine.mediaList != null ?
                                            <>
                                                <img src={playIcon} alt="play voice" onClick={() => { voicePlayer.current.play() }} />
                                                <audio className="audioStripe" ref={voicePlayer} preload="true">
                                                    <source src={displayData.voiceLine.mediaList[0].wave}></source>
                                                </audio>
                                            </> : <p>No Voice Found</p>
                                        }
                                    </div>
                                    <div className='type'>{displayData.isPlayableCharacter != null ? "Playable Character" : "Non - Playable Character"}</div>
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
                    </div>
                </div>
                : ""
            }
        </>
    )
}
