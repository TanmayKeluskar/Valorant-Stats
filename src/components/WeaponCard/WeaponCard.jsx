import React from 'react'
import ShowImage from '../ShowImage/ShowImage';
import DisplayTopData from '../MiniComponents/DisplayTopData';
import '../css/cards.css'

export default function WeaponCard(props) {
    const displayData = props.card.data

    const skinArray = /standard|random|luxe knife/;

    return (
        <>
            {displayData ?
                <div className="info">
                    <DisplayTopData dataType="weapon" displayData={displayData} />
                    <div className="info-items">
                        {displayData.weaponStats != null ? <>
                            {displayData.weaponStats != null ? <div className="weapon-mobile-view">
                                <p className="sub-heads">WEAPON STATS</p>
                                <hr />
                                <div className="display-item">
                                    {displayData.weaponStats.fireRate != null ? <p>Fire Rate - {displayData.weaponStats.fireRate}</p> : ""}
                                    {displayData.weaponStats.magazineSize != null ? <p>Magazine Size - {displayData.weaponStats.magazineSize}</p> : ""}
                                    {displayData.weaponStats.reloadTimeSeconds != null ? <p>Reload Speed - {displayData.weaponStats.reloadTimeSeconds} secs</p> : ""}
                                    {displayData.weaponStats.firstBulletAccuracy != null ? <p>Accuracy - {displayData.weaponStats.firstBulletAccuracy} on first bullet</p> : ""}
                                    {displayData.weaponStats.equipTimeSeconds != null ? <p>Switching Time - {displayData.weaponStats.equipTimeSeconds} secs</p> : ""}
                                    {displayData.weaponStats.runSpeedMultiplier != null ? <p>Run Speed - {displayData.weaponStats.runSpeedMultiplier}</p> : ""}
                                    {displayData.weaponStats.wallPenetration != null ? <p>Wall Penetration - {displayData.weaponStats.wallPenetration.split("::")[1]}</p> : ""}
                                </div>
                            </div> : ""
                            }
                            <p className="sub-heads">WEAPON STATS After ADS (Aim Down Sight)</p>
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
                                                <ShowImage className='weapon-skin' displayName={skin.displayName} smallPic={skin.displayIcon}></ShowImage>
                                                <p>{skin.displayName}</p>
                                            </div> : ""
                                    )
                                }) : <p>No Skins Found</p>
                            }
                        </div>
                    </div>
                </div>
                : ""}
        </>
    )
}
