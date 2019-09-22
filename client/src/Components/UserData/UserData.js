import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
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
                            601 : 8,
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
                            601 : 8,
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

    componentDidMount = async() => {
        // let data = await fetch('./data/waterData/homeData114.json')
        // .then(response => response.json())
        // .then((jsonData) => {
        //   // jsonData is parsed json object received from url
        //     this.setState({
        //         data: jsonData
        //     }, () => {
                
        //         console.log(this.state.data, 'DATA')
        //         let startTimeStr = jsonData[0].localminute.split(' ');
        //         let endTimeStr = jsonData[jsonData.length - 1].localminute.split(' ');
        //         this.setState({
        //             startTime: startTimeStr[1],
        //             endTime: endTimeStr[1]
        //         })

        //     })
        // })
        // .catch( err => console.log(err))
    }

    render(){
        console.log('state', this.state)
        let waterCard = Object.keys(this.state.user.history.personal).map( (data,i) => {
            console.log(this.state.user.history.personal[data])
            let title = data;
            if(data === 'washingMachine'){
                title = 'Washing Machine'
            }
            return (
                <div className="water-card">
                    <p className="bold card-title">{title}</p>
                    <Bar
                        data={this.state.user.history.personal[data]}
                        width={100}
                        height={50}
                        options={{ maintainAspectRatio: false }}
                    />
                </div> 
            )
        })
        return(
            <div>
                <p className="text-left">6:00 AM - 6:00 PM</p>
                {waterCard}
            </div>
        )
    }
}

export default HomeData;