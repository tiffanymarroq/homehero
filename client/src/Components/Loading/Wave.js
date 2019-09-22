import React from 'react';
import './wave.css';

const wave =() => {
    return (<div className='App'>
                <img className="logo-image" src='/Assets/logo.png'/>
                <div className="ocean">
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div>
           </div>)
    }

export default wave;