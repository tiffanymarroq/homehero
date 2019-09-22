import React, {Component} from 'react';
import {Button, Table} from 'reactstrap';
import TimeAgo from 'react-timeago';
import {Line} from 'react-chartjs-2';

class mltraining extends Component {

    constructor(props){
        super(props);
        this.state = {
            statusCheck: false
        }
    }

    onClickHandle = () => {
        this.setState({
            statusCheck: true
        })
    }

    render(){

    let time = this.props.timeStamp;
    let data = {
        washingMachine : {
            600 : 6,
            1000: 10,
            1300 : 15,
            1700: 30,
            1900: 15,

        },
    }

    let labels = []
    let waterData = Object.keys(data.washingMachine).map( water => {
        labels.push(water)
        
        return data.washingMachine[water]
    })

    return (
        <div>
            <h2>Activity { this.state.statusCheck ? 'Recorded' : 'Detected'}</h2>
            {this.state.statusCheck ? 
              
              <div>
              <p><i class="far fa-star" style={{marginRight:'15px', color: 'var(--primary'}}></i>New point was added!</p>
              <Line
                     data = {{
                          datasets: [{
                              data:waterData ,
                              label: 'Personal ',
                              borderColor: ['#0F7FE2'],
                              backgroundColor: ['rgba(15,127,226,0)']
                          }],
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
           : 
            <div>
                <p>Hi Tiffany, did you run the wachine machine on <TimeAgo date={time}/>?</p>
                <img className="ml-img" src='/Assets/washing-machine.png'/>
                <div className="ml-btn">
                    <Button onClick={this.onClickHandle} >
                            Yes
                    </Button>
                    <Button className='destructive-btn'>
                            No
                    </Button>
                </div>
            </div>
           }

           <div>
           <Table style={{marginTop:'30px'}}>
        <thead>
          <tr>
            <th>#</th>
            <th>Activity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Shower</td>
            <td className="success">Confirmed</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Shower</td>
            <td className="success">Confirmed</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Washing machine</td>
            <td className="danger">Unconfirmed</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Dishes</td>
            <td className="success">Confirmed</td>
          </tr>
        </tbody>
      </Table>
           </div>
        </div>
        )
    }
}


export default mltraining;