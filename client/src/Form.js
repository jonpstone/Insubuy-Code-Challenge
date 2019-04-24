import React from 'react';

const initialState = {
  value: '',
  // Initial Form values
  maximumPolicy: '',
  age: '',
  startDate: '',
  endDate: '',
  citizenship: '',
  mailingState: '',
  // Initial Error Values
  maximumPolicyError: '',
  ageError: '',
  travelDatesError: '',
  citizenshipError: '',
  mailingStateError: '',
};

class Form extends React.Component {
  state = initialState;

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  ageValidate = () => {
    // age validator
    const parsedAge = parseInt(this.state.age, 10)
    const onlyNumbers = /^\d+$/.test(this.state.age)
    const currentYear = new Date().getFullYear();
    let ageError = '';
    if (!this.state.age === onlyNumbers) {
      ageError = "User input must only be numbers"
    }
    else if (this.state.age.length === 1 || this.state.age.length === 3) {
      ageError = "User input must be two (age) or four (year of birth) characters";
    }
    else if (this.state.age.length === 2 && (parsedAge > 100 || parsedAge < 18)) {
      ageError = "User cannot be more than 100 years old or less than 18 years old"
    }
    else if (this.state.age.length === 4 && (parsedAge < (currentYear - 100) || parsedAge > (currentYear - 18))) {
      ageError = "User must be between 18 and 99 years old"
    }

    if (ageError) {
      this.setState({ ageError });
      return false;
    }
    else {
      this.setState(initialState);
    }
    return true;
  }

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.ageValidate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Policy Maximum
          <select name="maximumPolicy">
            <option defaultValue="choose">Choose your policy maximum</option>
            <option value="50">50,000</option>
            <option value="100">100,000</option>
            <option value="250">250,000</option>
            <option value="500">500,000</option>
          </select>
          <div>{this.state.maximumPolicyError}</div>
        </label>
        <label>
          Age:
          <input
            name="age"
            type="text" 
            placeholder="Choose your age" 
            onChange={this.handleChange} 
          />
          <div>{this.state.ageError}</div>
        </label>
        <label>
          Travel Dates (mm/dd/yyyy)
          <input 
            name="startDate" 
            type="text" 
            placeholder="Start Date" 
            onChange={this.handleChange} 
          />
          <input 
            name="endDate"
            type="text" 
            placeholder="End Date" 
            onChange={this.handleChange}
          />
          <div>{this.state.travelDatesError}</div>
        </label>
        <label>
          Citizenship
          <input
            name="citizenship" 
            type="text" 
            placeholder="Choose Your Country of Citizenship" 
            onChange={this.handleChange} 
          />
          <div>{this.state.citizenshipError}</div>
        </label>
        <label>
          Mailing State
          <input 
            name="maximumPolicy"
            type="text" 
            placeholder="Choose State" 
            onChange={this.handleChange} 
          />
          <div>{this.state.mailingStateError}</div>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
