import React, { Component } from "react";
import "./App.css";
import Form from "./component/Form/Form";
import FormData from "./component/FormData/FormData";
import { reactLocalStorage } from "reactjs-localstorage";
class App extends Component {
  constructor() {
    super();
    this.documentData = reactLocalStorage.getObject("forms");
    let arr = [];
    for (let i = 0; i < this.documentData.length; i++) {
      arr[i] = this.documentData[i];
    }
    if (localStorage.getItem("forms")) {
      this.state = {
        forms: arr,
        tabValue: "true",
      };
    } else {
      this.state = {
        forms: [],
        tabValue: "false",
      };
    }
  }
  changeTab = (value) => {
    this.setState({
      tabValue: value,
    });
  };
  render() {
    let tabValue = this.state.tabValue;
    const { forms } = this.state;
    return (
      <div>
        <ul className='nav nav-pills '>
          <li className='nav-item' onClick={() => this.changeTab(true)}>
            <a className={`nav-link ${tabValue ? " active" : ""}`} href='#'>
              Form
            </a>
          </li>
          <li className='nav-item' onClick={() => this.changeTab(false)}>
            <a className={`nav-link ${tabValue ? "" : " active"}`} href='#'>
              Table
            </a>
          </li>
        </ul>
        <br />
        <div>
          {tabValue ? <Form forms={forms} /> : <FormData forms={forms} />}
        </div>
      </div>
    );
  }
}

export default App;
