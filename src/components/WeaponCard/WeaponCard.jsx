import React from 'react'
import '../css/cards.css'

export default function WeaponCard(props) {
    const displayData = props.card.data
    return (
        <div className="search-result">
            {displayData ?
                <div className="info">
                    <div className="looks">
                        <div className="display-data">
                            <img className='weapon-pic' src={displayData.displayIcon != null ? displayData.displayIcon : ""} />
                            <div className="name">{displayData.displayName != null ? displayData.displayName.toUpperCase() : ""}
                            </div>
                            {displayData.shopData.categoryText != null ? <p>Category - {displayData.shopData.categoryText}</p> : <p>No Category</p>}
                            <div className="description weapon-description">
                                <b>{displayData.shopData.cost != null ? <p>Cost - {displayData.shopData.cost} CREDS</p> : <p>0</p>}</b>
                                {displayData.weaponStats != null ? <>
                                    {displayData.weaponStats.fireRate != null ? <p>Fire Rate - {displayData.weaponStats.fireRate}</p> : <p>Not Found</p>}
                                    {displayData.weaponStats.magazineSize != null ? <p>Magazine Size - {displayData.weaponStats.magazineSize}</p> : <p>Not Found</p>}
                                    {displayData.weaponStats.reloadTimeSeconds != null ? <p>Reload Speed - {displayData.weaponStats.reloadTimeSeconds} secs</p> : <p>Not Found</p>}
                                    {displayData.weaponStats.firstBulletAccuracy != null ? <p>Accuracy - {displayData.weaponStats.firstBulletAccuracy} on first bullet</p> : <p>Not Found</p>}
                                </> : <p>No Weapon Stats Found</p>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="info-items">
                        <p class="sub-heads">MORE WEAPON STATS</p>
                        <hr />
                        {displayData.weaponStats != null ? <>
                            <div class="display-item">
                                {displayData.weaponStats.equipTimeSeconds != null ? <p>Switching Time - {displayData.weaponStats.equipTimeSeconds} secs</p> : <p>Not Found</p>}
                                {displayData.weaponStats.runSpeedMultiplier != null ? <p>Run Speed - {displayData.weaponStats.runSpeedMultiplier}</p> : <p>Not Found</p>}
                                {displayData.weaponStats.wallPenetration != null ? <p>Wall Penetration - {displayData.weaponStats.wallPenetration.split("::")[1]}</p> : <p>Not Found</p>}
                            </div>
                        </> : <p>No Weapon Stats Found</p>
                        }
                        <p class="sub-heads">After ADS (Aim Down Sight)</p>
                        <hr />
                        {displayData.weaponStats.adsStats != null ? <>
                            <div class="display-item">
                                {displayData.weaponStats.adsStats.zoomMultiplier != null ? <p>Zoom - {displayData.weaponStats.adsStats.zoomMultiplier} secs</p> : <p>Not Found</p>}
                                {displayData.weaponStats.adsStats.fireRate != null ? <p>Fire Rate - {Math.round(displayData.weaponStats.adsStats.fireRate)}</p> : <p>Not Found</p>}
                                {displayData.weaponStats.adsStats.firstBulletAccuracy != null ? <p>Accuracy - {displayData.weaponStats.adsStats.firstBulletAccuracy} on first bullet</p> : <p>Not Found</p>}
                                {displayData.weaponStats.adsStats.runSpeedMultiplier != null ? <p>Run Speed - {displayData.weaponStats.adsStats.runSpeedMultiplier}</p> : <p>Not Found</p>}
                            </div>
                        </> : <p>No Weapon Stats on ADS Found</p>
                        }
                        <p class="sub-heads">DAMAGE RANGES</p>
                        <hr />
                        {displayData.weaponStats.damageRanges != [] ?
                            displayData.weaponStats.damageRanges.map(parameter => {
                                return (
                                    <div class="display-item">
                                        {parameter.rangeStartMeters != null && parameter.rangeEndMeters != null ? <span>Range from {parameter.rangeStartMeters} to {parameter.rangeEndMeters}</span> : <p>Not Found</p>}
                                        {parameter.headDamage != null ? <p>- Head Damage: {Math.round(parameter.headDamage)}</p> : <p>Not Found</p>}
                                        {parameter.bodyDamage != null ? <p>- Body Damage: {Math.round(parameter.bodyDamage)}</p> : <p>Not Found</p>}
                                        {parameter.legDamage != null ? <p>- Leg Damage: {Math.round(parameter.legDamage)}</p> : <p>Not Found</p>}
                                    </div>
                                )
                            }) : <p>No Damage Ranges Found</p>
                        }
                        <p class="sub-heads">SKINS</p>
                        <hr />
                        <div className="display-weapon">
                            {displayData.skins != [] ?
                                displayData.skins.map(skin => {
                                    return (
                                        skin.displayIcon != null && skin.displayName != null && !skin.displayName.toLowerCase().includes("standard") && !skin.displayName.toLowerCase().includes("random") ?
                                            <div class="display-item">
                                                <img className='weapon-skin' src={skin.displayIcon} />
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
