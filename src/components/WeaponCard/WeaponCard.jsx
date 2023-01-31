import React from 'react'
import '../css/cards.css'

export default function WeaponCard(props) {
    const displayData = props.card.data

    const skinArray = /standard|random|luxe knife/;

    return (
        <div className="search-result">
            {displayData ?
                <div className="info">
                    <div className="looks">
                        <div className="display-data">
                            <img alt="weapon-pic" className='weapon-pic' src={displayData.displayIcon != null ? displayData.displayIcon : ""} />
                            <div className="name">{displayData.displayName != null ? displayData.displayName.toUpperCase() : ""}
                            </div>
                            {displayData.shopData != null ?
                                displayData.shopData.categoryText != null ? <p>Category - {displayData.shopData.categoryText}</p> : <p>No Category</p> : ""
                            }
                            <div className="description weapon-description">
                                {displayData.shopData != null ? <b>{displayData.shopData.cost != null ? <p>Cost - {displayData.shopData.cost} CREDS</p> : <p>0</p>}</b> : ""
                                }
                                {displayData.weaponStats != null ? <>
                                    {displayData.weaponStats.fireRate != null ? <p>Fire Rate - {displayData.weaponStats.fireRate}</p> : ""}
                                    {displayData.weaponStats.magazineSize != null ? <p>Magazine Size - {displayData.weaponStats.magazineSize}</p> : ""}
                                    {displayData.weaponStats.reloadTimeSeconds != null ? <p>Reload Speed - {displayData.weaponStats.reloadTimeSeconds} secs</p> : ""}
                                    {displayData.weaponStats.firstBulletAccuracy != null ? <p>Accuracy - {displayData.weaponStats.firstBulletAccuracy} on first bullet</p> : ""}
                                </> : ""
                                }
                            </div>
                        </div>
                    </div>
                    <div className="info-items">
                        {displayData.weaponStats != null ? <>
                            <p className="sub-heads">MORE WEAPON STATS</p>
                            <hr />
                            <div className="display-item">
                                {displayData.weaponStats.equipTimeSeconds != null ? <p>Switching Time - {displayData.weaponStats.equipTimeSeconds} secs</p> : ""}
                                {displayData.weaponStats.runSpeedMultiplier != null ? <p>Run Speed - {displayData.weaponStats.runSpeedMultiplier}</p> : ""}
                                {displayData.weaponStats.wallPenetration != null ? <p>Wall Penetration - {displayData.weaponStats.wallPenetration.split("::")[1]}</p> : ""}
                            </div>
                            <p className="sub-heads">After ADS (Aim Down Sight)</p>
                            <hr />
                            {displayData.weaponStats.adsStats != null ?
                                <div className="display-item">
                                    {displayData.weaponStats.adsStats.zoomMultiplier != null ? <p>Zoom - {displayData.weaponStats.adsStats.zoomMultiplier} secs</p> : ""}
                                    {displayData.weaponStats.adsStats.fireRate != null ? <p>Fire Rate - {Math.round(displayData.weaponStats.adsStats.fireRate)}</p> : ""}
                                    {displayData.weaponStats.adsStats.firstBulletAccuracy != null ? <p>Accuracy - {displayData.weaponStats.adsStats.firstBulletAccuracy} on first bullet</p> : ""}
                                    {displayData.weaponStats.adsStats.runSpeedMultiplier != null ? <p>Run Speed - {displayData.weaponStats.adsStats.runSpeedMultiplier}</p> : ""}
                                </div> : <p>No Weapon Stats on ADS Found</p>
                            }
                            <p className="sub-heads">DAMAGE RANGES</p>
                            <hr />
                            {displayData.weaponStats.damageRanges !== [] ?
                                displayData.weaponStats.damageRanges.map(parameter => {
                                    return (
                                        <div className="display-item" key={parameter.rangeStartMeters}>
                                            {parameter.rangeStartMeters != null && parameter.rangeEndMeters != null ? <span>Range from {parameter.rangeStartMeters} to {parameter.rangeEndMeters}</span> : ""}
                                            {parameter.headDamage != null ? <p>- Head Damage: {Math.round(parameter.headDamage)}</p> : ""}
                                            {parameter.bodyDamage != null ? <p>- Body Damage: {Math.round(parameter.bodyDamage)}</p> : ""}
                                            {parameter.legDamage != null ? <p>- Leg Damage: {Math.round(parameter.legDamage)}</p> : ""}
                                        </div>
                                    )
                                }) : <p>No Damage Ranges Found</p>
                            }</> : ""
                        }
                        <p className="sub-heads">SKINS</p>
                        <hr />
                        <div className="display-weapon">
                            {displayData.skins !== [] ?
                                displayData.skins.map(skin => {
                                    return (
                                        skin.displayIcon != null && skin.displayName != null && !skinArray.test(skin.displayName.toLowerCase()) ?
                                            <div className="display-item" key={skin.displayName}>
                                                <img alt="skin-icon" className='weapon-skin' src={skin.displayIcon} />
                                                <p><span>{skin.displayName}</span></p>
                                            </div> : ""
                                    )
                                }) : <p>No Skins Found</p>
                            }
                        </div>
                    </div>
                </div>
                : ""}
        </div>
    )
}
