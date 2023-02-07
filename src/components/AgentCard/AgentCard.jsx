import React from 'react'
import DisplayTopData from '../MiniComponents/DisplayTopData';
import '../css/cards.css'

export default function AgentCard(props) {

    const displayData = props.card.data

    return (
        <>
            {displayData ?
                <div className="info">
                    <DisplayTopData dataType="agent" displayData={displayData} />
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
