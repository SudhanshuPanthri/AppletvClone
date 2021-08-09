import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="left">
                <h4>All Apple Originals.</h4>
                <h5>Start watching with 7 days free. Or 3 months free when you buy an eligible apple device. <a href='#'>Terms apply.</a></h5>
            </div>
            <div className="right">
                <button className='btn1'>Start your free trial</button>
                <span>7 days free, then ₹ 99/month</span>
            </div>
        </div>
    )
}

export default Footer
