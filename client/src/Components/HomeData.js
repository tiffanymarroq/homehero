import React, {Component} from 'react';




class HomeData extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentDidMount(){
        let data = fetch('./data/waterData/homeData114.json')
        .then(response => response.json())
        .then((jsonData) => {
          // jsonData is parsed json object received from url
          console.log(jsonData)
        })
        .catch( err => console.log(err))
        console.log(data);
    }

    render(){
        return(
            <div>
                <h1>Data</h1>
          
            </div>
        )
    }
}

export default HomeData;