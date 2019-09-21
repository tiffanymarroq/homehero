import React, {Component} from 'react';
import UserData from '../UserData';

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
                <h4 className='page-title' >Dashboard</h4>
                <UserData />
            </div>
        )
    }
}

export default Dashboard;