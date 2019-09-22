import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import './UserData.css';

class HomeData extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                history: {
                    personal: {
                        washingMachine : {
                            600 : 6,
                            100 : 10,
                        },
                        dishwasher : {
                            800 : 15,
                            1800 : 20,
                        },
                        bathroom : {
                            800 : 6,
                            1200: 30,
                            1500 : 8,
                            18: 40
                        },
                    },
                    'commmunity' : {
                        washingMachine : {
                            600 : 6,
                            100 : 15,
                        },
                        dishwasher : {
                            800 : 10,
                            1800 : 18,
                        },
                        bathroom : {
                            800 : 6,
                            1200: 20,
                            1500 : 8,
                            18: 25
                        },
                    } 
                }
            }
        }
    }

 

    render(){
        let waterCard = Object.keys(this.state.user.history.personal).map( (data,i) => {
            let title = data;
            if(data === 'washingMachine'){
                title = 'Washing Machine'
            }
            return (
                <div className="water-card">
                    <p className="bold card-title">{title}</p>
                   
                </div> 
            )
        })
        return(
            <div>
                {waterCard}
                {/* <Line
                        data={ [{
                            x: 10,
                            y: 20
                        }, {
                            x: 15,
                            y: 10
                        }]}
                        width={100}
                        height={50}
                        options={{ maintainAspectRatio: false }}  /> */}
            </div>
        )
    }
}

export default HomeData;