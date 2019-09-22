import React from 'react';
import {Button} from 'reactstrap';

const Incentives = (props) => {

    return (
        <div className='rewards'>
            <p>You've earned 40 points!</p>
            <div className="water-card">
                <p className="bold">Tide pods</p>
                IMAGE
                <Button>Claim it!</Button>
            </div>
            <div className="water-card">
                <p className="bold">Gain</p>
                IMAGE
                <Button>Claim it!</Button>
            </div>
            <div className="water-card">
                <p className="bold">Tide Detergent</p>
                IMAGE
                <Button>Claim it!</Button>
            </div>

        </div>
    )
}
export default Incentives;