import React, { Component } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
class Form extends Component {
  state = {
    textField: "",
    email: "",
    phone: "",
    rating: "Excellent",
    name: "",
  };
  onRadioChange = (e) => {
    this.setState({
      rating: e.target.value,
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { forms } = this.props;
    forms.push(this.state);
    reactLocalStorage.setObject("forms", forms);
    let notification = document.getElementById("notification");
    notification.style.display = "block";
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
    setTimeout(() => {
      notification.style.display = "none";
    }, 500);
  };
  render() {
    return (
      <div className='container'>
        <div>
          <h5 className='text-primary'>Aromatic Bar</h5>
          <p className='grey-text text-darken-2'>
            We are committed to providing you with the best dining experience
            possible, so we welcome your comments.Please fill the
            questionnaire.Thank you
          </p>
        </div>
        <div className='row'>
          <form className='row g-3' onSubmit={this.handleSubmit}>
            <div className='row'>
              <div className='col-md-6'>
                <label className='form-label'>Text Field</label>
                <input
                  id='textField'
                  type='text'
                  className='form-control '
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className='col-md-6'>
                <label className='form-label'>Email Field</label>
                <input
                  id='email'
                  type='email'
                  className='form-control '
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6'>
                <label className='form-label'>Phone Field</label>
                <input
                  id='phone'
                  type='tel'
                  onChange={this.handleChange}
                  class='form-control '
                  required
                  pattern='[0-9]{10}'
                />
              </div>

              <br />

              <div className=' col-md-6 mt-2'>
                <label class='form-check-label'>Radio Button</label>
                <br />
                <div class='form-check form-check-inline'>
                  <input
                    type='radio'
                    value='Excellent'
                    class='form-check-input'
                    checked={this.state.rating === "Excellent"}
                    onChange={this.onRadioChange}
                    required
                  />
                  <label class='form-check-label'>Excellent</label>
                </div>

                <div class='form-check form-check-inline'>
                  <input
                    type='radio'
                    value='Good'
                    class='form-check-input'
                    checked={this.state.rating === "Good"}
                    onChange={this.onRadioChange}
                    required
                  />
                  <label class='form-check-label'>Good</label>
                </div>

                <div class='form-check form-check-inline'>
                  <input
                    type='radio'
                    value='Fair'
                    class='form-check-input'
                    checked={this.state.rating === "Fair"}
                    onChange={this.onRadioChange}
                    required
                  />
                  <label class='form-check-label'>Fair</label>
                </div>

                <div class='form-check form-check-inline'>
                  <input
                    type='radio'
                    value='Bad'
                    class='form-check-input'
                    checked={this.state.rating === "Bad"}
                    onChange={this.onRadioChange}
                    required
                  />
                  <label class='form-check-label'>Bad</label>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6'>
                <label className='form-label'>Name</label>
                <input
                  id='name'
                  type='text'
                  class='form-control '
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>

            <div className='input-group'>
              <button className='btn btn-success lighten-1 z-depth-0'>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div id='notification' className='center-align'>
          User added successfully
        </div>
      </div>
    );
  }
}

export default Form;
