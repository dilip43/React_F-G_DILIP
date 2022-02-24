import React, { Component } from "react";
import "./FormData.module.css";
class FormData extends Component {
  render() {
    const { forms } = this.props;
    return (
      <>
        <h1>All Feedback </h1>
        <div className='App'>
          <table>
            <thead>
              <tr>
                <th>From Name</th>
                <th>Test Field</th>
                <th>Phone Field</th>
                <th>Email Field</th>
                <th>Radio Buttons</th>
                <th>Name</th>
              </tr>
            </thead>
            {forms.map((form, id) => {
              return (
                <tbody key={id}>
                  <tr>
                    <td>Aromatic Bar</td>
                    <td>{form.textField}</td>
                    <td>{form.phone}</td>
                    <td>{form.email}</td>
                    <td>{form.rating}</td>
                    <td>{form.name}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </>
    );
  }
}

export default FormData;
