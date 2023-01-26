import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
const Loader = () => {
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" ,paddingTop:"10%" }} >
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    )
}

export default Loader