import React, { Component } from "react";
import NightUpload from "./build/contracts/NightUpload.json";
import getWeb3 from "./utils/getWeb3";
import Dashboard from './Components/Dashboard/Dashboard';
import Wave from './Components/Loading/Wave';
import MLTraining from './Components/MLTraining/MLTraining';
import Incentives from './Components/Incentives/Incentives';
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

  purchase = async () => {
    let web3 = this.state.web3;
    let contract = this.state.contract;
    let accounts = this.state.accounts;
    await contract.methods.set(5).send({ from: accounts[0] });
    this.setState({
      notification: "purchase confirmed"
    })
  }

  render() {
    const navBar = (
      <div className="App-footer">
        <div className="App-toolbar">
          <ButtonGroup>
            <Button onClick={()=>{this.changeView('dashboard')}}><i class="fas fa-chart-line"></i></Button>
            <Button onClick={()=>{this.changeView('machineLearning')}}><i class="fas fa-robot"></i></Button>
            <Button onClick={()=>{this.changeView('incentives')}}><i class="fas fa-hand-holding-heart"></i></Button>
          </ButtonGroup>
        </div>
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
          <h1 className='page-title'>Tiffany's Home</h1>
          <Dashboard />
          {navBar}
        </div>
      );
    }
    if (this.state.currentState == 'machineLearning') {
      return (
        <div className="App">
          <h1 className='page-title'>Tiffany's Habits</h1>
          <MLTraining timeStamp={this.state.timeStamp}/>
          {navBar}
        </div>
      )
    }
    if (this.state.currentState == 'incentives') {
      return (
        <div className="App">
          <h1 className='page-title'>Tiffany's Rewards</h1>
          <Incentives return={()=>this.changeView('dashboard_final')} notification={this.state.notification} purchase={()=>this.purchase()}/>
          {navBar}
        </div>
      )
    }
    if (this.state.currentState == 'dashboard_final') {
      return (
        <div className="App">
          <h1 className='page-title'>Tiffany's Home</h1>
          <h3>Great work Tiffany<br/> <span className="primary">A+ </span> Efficiency Rating<br/> <span className="success" >10%</span> higher than your neighbors</h3>
          <Dashboard />
          {navBar}
        </div>
      );
    }
  }
}

export default App;
