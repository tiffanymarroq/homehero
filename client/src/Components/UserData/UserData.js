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
                        bathroom : {
                            800 : 6,
                            1200: 30,
                            1500 : 8,
                            18: 40
                        },
                        washingMachine : {
                            600 : 6,
                            1300 : 10,
                            1700: 10
                        },
                        dishwasher : {
                            800 : 15,
                            1200 : 13,
                            1800 : 20,
                        },
                       
                    },
                    'commmunity' : {
                        bathroom : {
                            800 : 6,
                            1200: 20,
                            1500 : 8,
                            18: 25
                        },
                        washingMachine : {
                            600 : 6,
                            1300 : 15,
                            1700: 30

                        },
                        dishwasher : {
                            800 : 10,
                            1200 : 13,

                            1800 : 18,
                        },
                       
                    } 
                }
            }
        }
    }

 

    render(){
        let waterCard = Object.keys(this.state.user.history.personal).map( (data,i) => {
            let title = data;
            let labels = []
            let waterData = Object.keys(this.state.user.history.personal[data]).map( waterData => {
                labels.push(waterData)
                return this.state.user.history.personal[data][waterData]
            })
            console.log(waterData)
            console.log(labels)
            if(data === 'washingMachine'){
                title = 'Washing Machine'
            }
            return (
                <div className="water-card">
                    <p className="bold card-title">{title}</p>
                    <Line
                       data = {{
                            
                            datasets: [{
                                data: waterData,
                                label: 'Water Used (gallon)',
                                borderColor: ['#4A0080'],
                                backgroundColor: ['rgba(74,0,128,.2)']
                            }],
                            labels: labels
                        }}
                     
                        />
                   
                </div> 
            )
        })
        return(
            <div>
                {waterCard}
     
            </div>
        )
    }
}

export default HomeData;