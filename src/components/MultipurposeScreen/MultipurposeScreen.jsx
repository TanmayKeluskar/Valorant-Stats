import React from 'react'
import './MultipurposeScreen.css'
import searchIcon from '../../assets/search-icon.png'
import errorIcon from '../../assets/warning.png'

function MultipurposeScreen(props) {
    return (
        <div className="search-result">
            {
                (() => {
                    switch (props.screen) {
                        case "loading":
                            return <div className="message loader-message">
                                <div className='inner-div'>
                                    <div className="loader">
                                        <span></span>
                                    </div>
                                    <p>
                                        Loading...!
                                    </p>
                                </div>
                            </div>
                        case "error":
                            return <div className="message">
                                <div className='inner-div'>
                                    <img src={errorIcon} alt="" srcSet="" />

                                    <p>
                                        We are facing some Technical Difficulties. Please check your network connection or try again after sometime.
                                    </p>
                                </div>
                            </div>
                        default:
                            return <div className="message">
                                <div className='inner-div'>
                                    <img src={searchIcon} alt="" srcSet="" />
                                    <p>
                                        Specify a {props.type} you want to know about
                                    </p>
                                </div>
                            </div>
                    }
                })()
            }
        </div>
    )
}

export default MultipurposeScreen