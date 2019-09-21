import React, { Component } from "react";
import NightUpload from "./build/contracts/NightUpload.json";
import getWeb3 from "./utils/getWeb3";

import "./App.css";

class App extends Component {
  state = { 
    loadValue: 0, 
    web3: null, 
    accounts: null, 
    contract: null
  };

  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = NightUpload.networks[networkId];
      const instance = new web3.eth.Contract(
        NightUpload.abi,
        deployedNetwork && deployedNetwork.address,
      );
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    console.log(this.state.contract);
    const { accounts, contract } = this.state;
    await contract.methods.set(5).send({ from: accounts[0] });
    const response = await contract.methods.get().call();
    this.setState({ loadValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          Try changing the value stored on <strong>line 40</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.loadValue}</div>
      </div>
    );
  }
}

export default App;
