import React from 'react'
import './Hero.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Hero() {
    return (
        <div className='hero'>
            <div className="content">
                <h1>All Apple Originals.</h1>
                <h2>Exclusively on Apple TV+. Watch here and on the Apple TV app across your devices.</h2>
                <button className='btn'>Start your free trial</button>
                <span>7 days free, then ₹ 99/month</span>
                <ExpandMoreIcon style={{
                    fontSize: 32,
                    cursor: 'pointer'
                }} />
            </div>
        </div>
    )
}

export default Hero
