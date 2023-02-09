import React from 'react';
import ShowImage from '../ShowImage/ShowImage';
import '../css/fullwidthcard.css'

export default function MapCard(props) {

    const displayData = props.card.data

    let sortedCallouts = displayData["callouts"].sort((a, b) => {
        return a.superRegionName.localeCompare(b.superRegionName);
    });

    let firstPos = sortedCallouts[0].superRegionName;
    let firstLoad = true

    return (
        <>
            {displayData ?
                <div className="display-fullwidth">
                    <div className='content-div-maps'>
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
                                <p className='map-caption'>Top View</p>
                            </> : "No Data Found"}
                        {displayData.displayIcon != null ?
                            <>
                                <ShowImage className="map-strategic-pic"
                                    picType="map"
                                    smallPic={displayData.displayIcon != null ? displayData.displayIcon : ""}
                                    displayName={displayData.displayName != null ? displayData.displayName + " Strategic View" : ""}
                                ></ShowImage>
                                <p className='map-caption'>Strategic View</p>
                            </> : ""}
                        <p className="image-name">CALLOUTS</p>
                        <div className='map-dats'>
                            {(() => {
                                return (
                                    sortedCallouts.map((callout) => {
                                        if (firstPos !== callout.superRegionName) {
                                            firstPos = callout.superRegionName;
                                            firstLoad = true;
                                        }
                                        return (
                                            <div className="callout-container" key={Math.round(callout.location.x)}>
                                                <div className={"callout-region" + (firstLoad ? " first-border" : "")}>
                                                    {firstLoad ? <><p>{callout.superRegionName}</p></> : ""}

                                                </div>
                                                <div className={"callout-data" + (firstLoad ? " first-border" : "")}>
                                                    {callout.regionName !== null && (callout.location !== null || callout.location !== "")
                                                        ? <p>{callout.regionName} : {Math.round(callout.location.x)}, {Math.round(callout.location.y)}</p>
                                                        : <p>Not Found</p>}
                                                </div>
                                                {firstLoad = false}
                                            </div>
                                        )
                                    })
                                )
                            })()}
                        </div>
                    </div>
                </div>
                : ""
            }
        </>
    )
}
