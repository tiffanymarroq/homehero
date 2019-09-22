import React, { Component } from "react";
import NightUpload from "./build/contracts/NightUpload.json";
import getWeb3 from "./utils/getWeb3";
import Dashboard from './Components/Dashboard/Dashboard';
import Wave from './Components/Loading/Wave';
import MLTraining from './Components/MLTraining/MLTraining';
import {Row, Col, Button } from 'reactstrap';

import "./App.css";
class App extends Component {
  state = { 
    loadValue: 0, 
    web3: null, 
    accounts: null, 
    contract: null,
    currentState: 'loading',
    selectedAction: ''
    //loading, dashboard, machine learning, incentives
  };

  componentDidMount = async () => {
    this.setState({
      currentState: 'loading'
    })
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = NightUpload.networks[networkId];
      const instance = new web3.eth.Contract(
        NightUpload.abi,
        deployedNetwork && deployedNetwork.address,
      );
      this.setState({ 
        web3, 
        accounts, 
        contract: instance 
      }, this.runExample)
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  changeAction=(action)=>{
    this.setState({
      selectedAction: action
    })
  }

  runExample = async () => {
    const { accounts, contract } = this.state;
    await contract.methods.set(5).send({ from: accounts[0] });
    const response = await contract.methods.get().call();
    this.setState({ loadValue: response }, ()=>{
      this.setState({
        currentState: 'dashboard'
      })
    });
  };

  render() {

    const navBar = (
      <div className="App-footer">
        <Row>
          <Col sm={{size: 4}}><i onClick={()=>{}}class="fas fa-chart-line"></i></Col>
          <Col sm={{size: 4}}><i class="fas fa-robot"></i></Col>
          <Col sm={{size: 4}}><i class="fas fa-hand-holding-heart"></i></Col>
        </Row>
      </div>
    )

    if (this.state.currentState == 'loading') {
      return (
        <Wave/>
      )
    }
    if (this.state.currentState == 'dashboard') {
      return (
        <div className="App">
          <h1>HOME HERO</h1>
          <Dashboard />
          {navBar}
        </div>
      );
    }
    if (this.state.currentState == 'machineLearning') {
      return (
        <div className="App">
          <MLTraining />
          {navBar}
        </div>
      )
    }
    if (this.state.currentState == 'incentives') {
      return (
        <div className="App">
          <h1>Incentives</h1>
          {navBar}
        </div>
      )
    }
  }

}

export default App;
