import React from 'react';
import '../css/gearcard.css'

export default function GearCard(props) {

    const displayData = props.card.data

    return (
        <>
            {displayData ?
                <div className="message">
                    <div className='inner-div'>
                        <div className='full-div'>
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
                </div>
                : ""
            }
        </>
    )
}
