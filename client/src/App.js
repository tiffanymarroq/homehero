import React, { Component } from "react";
import NightUpload from "./build/contracts/NightUpload.json";
import getWeb3 from "./utils/getWeb3";
import HomeData from './Components/HomeData';
import Wave from './Components/Loading/Wave';

import "./App.css";
class App extends Component {
  state = { 
    loadValue: 0, 
    web3: null, 
    accounts: null, 
    contract: null,
    loading: true
  };

  componentDidMount = async () => {
    this.setState({
      loading: true
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

  runExample = async () => {
    const { accounts, contract } = this.state;
    await contract.methods.set(5).send({ from: accounts[0] });
    const response = await contract.methods.get().call();
    this.setState({ loadValue: response }, ()=>{
      this.setState({
        loading: false
      })
    });
  };

  render() {
    if (this.state.loading) {
      return (
        <Wave/>
      )
    }
    if (!this.state.web3) {
      return (
        <div>
          HOME HERO.
          <HomeData />
        </div>);
    } 
    return (
      <div className="App">
        <h1>HOME HERO</h1>
      </div>
    );
  }
}

export default App;
