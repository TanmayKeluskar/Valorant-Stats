import React, { useRef } from 'react'
import ShowImage from '../ShowImage/ShowImage';
import playIcon from '../../assets/playicon.png'

function DisplayTopData(props) {

  const dataType = props.dataType;

  const displayData = props.displayData;

  const voicePlayer = useRef();

  return (
    <div className="looks">
      <div className="display-data">
        <div className='img-text'>
          <div className='img'>
            <ShowImage className={(dataType ? dataType : "default") + '-pic'}
              picType={dataType}
              smallPic={displayData.displayIcon != null ? displayData.displayIcon : ""}
              largePic={displayData.fullPortrait != null ? displayData.fullPortrait : ""}
              displayName={displayData.displayName != null ? displayData.displayName : ""}
            ></ShowImage>
          </div>
          <div className="character-name">
            <p className='name'>
              {displayData.displayName != null ? displayData.displayName.toUpperCase() : ""}
              {displayData.voiceLine !== undefined ?
                displayData.voiceLine.mediaList != null ?
                  <>
                    <img src={playIcon} alt="play voice" onClick={() => { voicePlayer.current.play() }} />
                    <audio className="audioStripe" ref={voicePlayer} preload="true">
                      <source src={displayData.voiceLine.mediaList[0].wave}></source>
                    </audio>
                  </> : <p>No Voice Found</p>
                : ""
              }
            </p>
            <div className='type'>
              {displayData.isPlayableCharacter != null ? "Playable Character" : ""}
              {displayData.shopData != null ?
                displayData.shopData.categoryText != null ? <p>Category - {displayData.shopData.categoryText}</p> : <p>No Category</p>
                : ""}
            </div>
          </div>
        </div>
        <div className="description weapon-description">
          {displayData.description != null ? <p> {displayData.description}</p> : ""}
          {displayData.shopData != null ? <b>{displayData.shopData.cost != null ? <p>Cost - {displayData.shopData.cost} CREDS</p> : <p>0</p>}</b> : ""
          }
          {displayData.weaponStats != null ? <>
            {displayData.weaponStats.fireRate != null ? <p>Fire Rate - {displayData.weaponStats.fireRate}</p> : ""}
            {displayData.weaponStats.magazineSize != null ? <p>Magazine Size - {displayData.weaponStats.magazineSize}</p> : ""}
            {displayData.weaponStats.reloadTimeSeconds != null ? <p>Reload Speed - {displayData.weaponStats.reloadTimeSeconds} secs</p> : ""}
            {displayData.weaponStats.firstBulletAccuracy != null ? <p>Accuracy - {displayData.weaponStats.firstBulletAccuracy} on first bullet</p> : ""}
            {displayData.weaponStats.equipTimeSeconds != null ? <p>Switching Time - {displayData.weaponStats.equipTimeSeconds} secs</p> : ""}
            {displayData.weaponStats.runSpeedMultiplier != null ? <p>Run Speed - {displayData.weaponStats.runSpeedMultiplier}</p> : ""}
            {displayData.weaponStats.wallPenetration != null ? <p>Wall Penetration - {displayData.weaponStats.wallPenetration.split("::")[1]}</p> : ""}
          </> : ""
          }
        </div>
      </div>
    </div>
  )
}

export default DisplayTopData