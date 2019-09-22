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
                            1300: 10,
                            1500 : 8,
                            1800: 30
                        },
                        washingMachine : {
                            600 : 6,
                            1000: 10,
                            1300 : 10,
                            1700: 10,
                        },
                        dishwasher : {
                            800 : 15,
                            1200 : 13,
                            1800 : 20,
                            1900 : 8,
                        },
                       
                    },
                    commmunity : {
                        bathroom : {
                            800 : 6,
                            1200: 20,
                            1300: 10,
                            1500 : 30,
                            1800: 40
                        },
                        washingMachine : {
                            600 : 6,
                            1000: 15,
                            1300 : 15,
                            1700: 30,
                        },
                        dishwasher : {
                            800 : 10,
                            1200 : 13,
                            1800 : 18,
                            1900 : 20,

                        },
                       
                    } 
                }
            }
        }
    }

 

    render(){
        let waterCard = Object.keys(this.state.user.history.personal).map( (data,i) => {
            let title = data;
            let labels = [];
            let waterSum = 0;
            let comSum = 0
            let waterData = Object.keys(this.state.user.history.personal[data]).map( waterData => {
                labels.push(waterData)
                waterSum+=this.state.user.history.personal[data][waterData]
                return this.state.user.history.personal[data][waterData]
            })
            let commmunityData = Object.keys(this.state.user.history.commmunity[data]).map( comData => {
                comSum += this.state.user.history.commmunity[data][comData];
                return this.state.user.history.commmunity[data][comData]
            })

            let waterAvg = Math.ceil(waterSum/(waterData.length)) *3.5;
            let comAvg = Math.ceil(comSum/(commmunityData.length)) *3.5;
            let valueText = waterAvg + ' liters ';
            
            if(data === 'washingMachine'){
                title = 'Washing Machine'
            }

            if(data === 'bathroom'){
                 valueText = 'Avg ' + waterAvg + ' mins ';

            }

            return (
                <div className="water-card">
                    <div className="card-title">
                        <p className="bold card-title">{title} </p>
                        <p className="value"> {valueText} </p>

                    </div>
                    <Line
                       data = {{
                            datasets: [{
                                data:waterData ,
                                label: 'Personal ',
                                borderColor: ['#0F7FE2'],
                                backgroundColor: ['rgba(15,127,226,0)']
                            },
                            {
                                data: commmunityData ,
                                label: 'Community',
                                borderColor: ['#db4537'],
                                backgroundColor: ['rgba(15,127,226,0)']
                            }
                            ],
                            labels: labels,
                            options: {
                                scales: {
                                    xAxes: [{
                                       gridLines: {
                                        show: false
                                      }
                                    }],
                                    yAxes: [{
                                        gridLines: {
                                            show: false
                                        }
                                    }]
                                }
                            }
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