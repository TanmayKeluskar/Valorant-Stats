import React from 'react'

export default function RenderCard(props) {
    return (
        <div className="search-result">
            {props.card.data ?
                <div className="agent-info">
                    <div className="agent-looks">
                        <div id="display-icon">
                            <img src={props.card.data.displayIcon != null ? props.card.data.displayIcon : ""} />
                            <p>{props.card.data.isPlayableCharacter != null ? "Playable Character" : "Non-  Playable Character"}</p>
                        </div>
                        <div id="agent-name">{props.card.data.displayName != null ? props.card.data.displayName.toUpperCase() : ""}
                        </div>
                    </div>
                    <div className="info-items">
                        {props.card.data.description != null ? <p> {props.card.data.description}</p> : ""}
                        <p class="sub-heads">ROLES</p>
                        {props.card.data.role != null ? <img src={props.card.data.role.displayIcon} /> : ""}
                        {props.card.data.role != null ? <p><u>{props.card.data.role.displayName}</u></p> : ""}
                        {props.card.data.role != null ? <p>{props.card.data.role.description}</p> : <p>No Role</p>}
                    </div>
                </div>
                : ""}
        </div>
    )
}
