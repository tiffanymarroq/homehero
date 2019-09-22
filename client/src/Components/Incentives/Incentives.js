import React from 'react';
import {Button} from 'reactstrap';

const Incentives = (props) => {

    return (
        <div className='rewards'>
            <p>You've earned 40 points!</p>
            <div className="water-card">
            <div className='card-title'>
                 <p className="bold">Tide pods</p>
                <p className="bold value"> 30pts</p>
            </div>
        
                <img className="img-product" src="/Assets/tide-pods.webp"/>
                <Button>Claim it!</Button>
            </div>
            <div className="water-card">
            <div className='card-title'>

                <p className="bold">Cascade</p>
                <p className="bold value"> 25pts</p>
                </div>

                
                <img  className="img-product" src="/Assets/cascasde.png"/>
                <Button>Claim it!</Button>
            </div>
            <div className="water-card">
                <div className='card-title'>
                    <p className="bold">Dawn</p>
                    <p className="bold value"> 10pts</p>
                </div>
                <img className="img-product" src="/Assets/dawn.webp"/>
                <Button>Claim it!</Button>
            </div>

        </div>
    )
}
export default Incentives;