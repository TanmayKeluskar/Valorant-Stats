import React, { useState, useEffect } from 'react'

const ShowImage = ({ picType, smallPic, largePic, displayName, ...params }) => {
    const [zoomed, isZoomed] = useState(false)

    const [isDesktop, setDesktop] = useState(false);

    const zoomedIn = () => {
        isZoomed(true)
    }

    const zoomedOut = () => {
        isZoomed(false)
    }

    useEffect(() => {
        if (window.innerWidth > 1024) {
            setDesktop(true);
        } else {
            setDesktop(false);
        }

        const updateMedia = () => {
            if (window.innerWidth > 1024) {
                setDesktop(true);
            } else {
                setDesktop(false);
            }
        };
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, []);

    if (isDesktop) {
        if (zoomed) {
            return (
                <>
                    <img src={smallPic} alt={displayName} {...params} />
                    <div className='zoom-modal show'>
                        <div className='zoom-container'>
                            <img src={largePic ? largePic : smallPic} alt={displayName} {...params} className={'zoom-item-' + (picType ? picType : "default")} />
                            <span className='close-item' onClick={zoomedOut}>&#10006;</span>
                            <p>{displayName}</p>
                        </div>
                    </div>
                </>
            )
        } else {
            return <img src={smallPic} alt={displayName} {...params} onClick={zoomedIn} />
        }
    } else {
        return <img src={smallPic} alt={displayName} {...params} />
    }
}

export default ShowImage