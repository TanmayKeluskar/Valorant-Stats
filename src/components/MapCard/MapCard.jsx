import React from 'react';
import ShowImage from '../ShowImage/ShowImage';
import '../css/fullwidthcard.css'

export default function MapCard(props) {

    const displayData = props.card.data

   /*  let sortedCallouts = displayData["callouts"].sort((a, b) => {
        return a.superRegionName.localeCompare(b.superRegionName);
    });
    console.log(sortedCallouts);

    let firstPos = sortedCallouts[0].superRegionName;
    let firstLoad = true */

    return (
        <>
            {displayData ?
                <div className="display-fullwidth">
                    <div className='content-div'>
                        <p className='image-name'>
                            {displayData.displayName != null ? displayData.displayName.toUpperCase() : ""}
                        </p>
                        {displayData.splash != null ?
                            <>
                                <ShowImage className="map-color-pic"
                                    picType="map"
                                    smallPic={displayData.splash != null ? displayData.splash : ""}
                                    displayName={displayData.displayName != null ? displayData.displayName + " Topview" : ""}
                                ></ShowImage>
                                <p>Top View</p>
                            </> : "No Data Found"}
                        {displayData.displayIcon != null ?
                            <>
                                <ShowImage className="map-strategic-pic"
                                    picType="map"
                                    smallPic={displayData.displayIcon != null ? displayData.displayIcon : ""}
                                    displayName={displayData.displayName != null ? displayData.displayName + " Strategic View" : ""}
                                ></ShowImage>
                                <p>Strategic View</p>
                            </> : ""}
                        {/* {(() => {
                            return (
                                sortedCallouts.map((callout) => {
                                    if (firstPos === callout.superRegionName) {
                                        return (
                                            <div className='map-dats'>
                                                {firstLoad ? <><p className="sub-heads">{callout.superRegionName}</p><hr /></> : ""}
                                                {firstLoad = false}
                                                <div className="display-item" key={callout.regionName} >
                                                    {callout.regionName != null && callout.location != null || callout.location != "" ? <p>{callout.regionName} : {callout.location.x}, {callout.location.y}</p> : <p>Not Found</p>}
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        firstPos = callout.superRegionName;
                                        firstLoad = false;
                                        return (
                                            <div className='map-dats'>
                                                {firstLoad ? <p className="sub-heads">{callout.superRegionName}</p> : ""}
                                                {firstLoad = true}
                                                <hr />
                                                <div className="display-item" key={callout.regionName} >
                                                    {callout.regionName != null ? <p>{callout.regionName}</p> : <p>Not Found</p>}
                                                    {callout.regionName != null ? <p>{callout.regionName}</p> : <p>Not Found</p>}
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            )
                        })()} */}
                    </div>
                </div>
                : ""
            }
        </>
    )
}
