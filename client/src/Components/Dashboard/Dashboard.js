import React, {Component} from 'react';
import UserData from '../UserData/UserData';

class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    render(){
        return(
            <div>
                {/* <h2 className='page-title' >Dashboard</h2> */}
                <UserData />
            </div>
        )
    }
}

export default Dashboard;