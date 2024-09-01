import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='footer'>
        <div>
            <Link className='text' to="/helpcenter">Help Center</Link>
            <Link className='text' to="/jobs">Jobs</Link>
            <Link className='text' to="/terms">Term of Use</Link>
            <Link className='text' to="/contact">Contact Us</Link>
        </div>
        <div>
            <Link className='text' to="/acc">Account</Link>
            <Link className='text' to="/rgc">Redeem Gift Cards</Link>
            <Link className='text' to="/p">Privacy</Link>
            <Link className='text' to="/st">Speed Test</Link>
        </div>
        <div>
            <Link className='text' to="/mc">Media Center</Link>
            <Link className='text' to="/bgc">Buy Gift Cards</Link>
            <Link className='text' to="/cf">Cookie Preferences</Link>
            <Link className='text' to="/ln">Legal Notices</Link>
        </div>
    </div>
    <p className='copyright'>&copy; Netflix: All rights reserved.</p>
    </>
  )
}

export default Footer