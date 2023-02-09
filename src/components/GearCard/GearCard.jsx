import React from 'react';
import '../css/fullwidthcard.css'

export default function GearCard(props) {

    const displayData = props.card.data

    return (
        <>
            {displayData ?
                <div className="display-fullwidth">
                    <div className='content-div-gear'>
                        <img className="gear-pic" alt={displayData.displayName != null ? displayData.displayName : ""}
                            src={displayData.displayIcon != null ? displayData.displayIcon : ""}
                        />
                        <p className='image-name'>
                            {displayData.displayName != null ? displayData.displayName.toUpperCase() : ""}
                        </p>
                        {displayData.description != null ? <p> {displayData.description}</p> : ""}
                        {displayData.shopData != null ? <b>{displayData.shopData.cost != null ? <p>Cost - {displayData.shopData.cost} CREDS</p> : <p>0</p>}</b> : ""
                        }
                    </div>
                </div>
                : ""
            }
        </>
    )
}
