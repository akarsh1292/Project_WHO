import React from 'react'
import BridgeSkillzWaterMark from '../atoms/BridgeSkillzWaterMark'
import "./Header.css"
import LiveFeedImg from '../../assets/images/Rectangle.png'
const Header = () => {
  return (
      <div className='header'>
        <BridgeSkillzWaterMark/>
        <div className='LiveFeed'>
            <img src={LiveFeedImg} alt="/" className='LiveFeedImg'/>
        </div>
      </div>
  )
}

export default Header

