import React from 'react'
import BridgeSkillzLogo from "../../assets/images/BridgeSkillzLogo.png"
import "./BridgeSkillzWaterMark.css"

const BridgeSkillzWaterMark = () => {
    return (
        <div className='WaterMark'>
            <img src={BridgeSkillzLogo} alt="BridgeSkillzLogo" />
            <div className="TitleAndTagline">
                <h2>BridgeSkillz</h2>
                <p>Destination For Your Digital Success</p>
            </div>
        </div>
    )
}

export default BridgeSkillzWaterMark