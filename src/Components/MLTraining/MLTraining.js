import React from 'react';
import {Button} from 'reactstrap';
import TimeAgo from 'react-timeago';

const mltraining=(props)=> {
    let time = props.timeStamp;

    return <div>
            <h2>Activity Detected</h2>
            <br/>
            <p>Hi Tiffany, did you run the wachine machine on <TimeAgo date={time}/>?</p>
            <Button>
                <div>
                    <img src='/Assets/washing-machine.png'/>
                    Yes
                </div>
            </Button>
            <Button>
                <div>
                    <img src=''/>
                    No
                </div>
            </Button> 
           </div>
    }

export default mltraining;