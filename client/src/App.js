import React, { Component } from "react";
import NightUpload from "./build/contracts/NightUpload.json";
import getWeb3 from "./utils/getWeb3";
import Dashboard from './Components/Dashboard/Dashboard';
import Wave from './Components/Loading/Wave';
import MLTraining from './Components/MLTraining/MLTraining';
import {Row, Col, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import * as date from './Components/Date';

import "./App.css";
class App extends Component {
  state = { 
    loadValue: 0, 
    web3: null, 
    accounts: null, 
    contract: null,
    currentState: 'loading',
    selectedAction: '',
    timeStamp: null
  };

  componentDidMount = async () => {
    this.setState({
      currentState: 'loading'
    })
    let now = date.fullDateTime();
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
        contract: instance,
        timeStamp: now
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

  changeView=(state)=>{
    this.setState({
      currentState: state
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
        <ButtonToolbar className="App-toolbar">
          <ButtonGroup>
            <Button onClick={()=>{this.changeView('dashboard')}}><i class="fas fa-chart-line"></i></Button>
            <Button onClick={()=>{this.changeView('machineLearning')}}><i class="fas fa-robot"></i></Button>
            <Button onClick={()=>{this.changeView('incentives')}}><i class="fas fa-hand-holding-heart"></i></Button>
          </ButtonGroup>
        </ButtonToolbar>
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
          <h1>MACHINE LEARNING</h1>
          <MLTraining timeStamp={this.state.timeStamp}/>
          {navBar}
        </div>
      )
    }
    if (this.state.currentState == 'incentives') {
      return (
        <div className="App">
          <h1>INCENTIVES</h1>
          {navBar}
        </div>
      )
    }
  }
}

export default App;
