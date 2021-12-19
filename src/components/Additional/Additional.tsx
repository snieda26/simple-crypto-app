import React from 'react'
import logo from '../../images/getApp-logo.png'

import './Additional.scss'


const Additional: React.FC = () => {
    return (
        <div className="additional">
            <p className="additional__title">
                Special for GetApp
            </p>
            <img className="additional__img" src={logo} alt="logo" />
        </div>
    )
}

export default Additional