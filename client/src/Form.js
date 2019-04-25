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

  ageValidate = () => {
    const parsedAge = parseInt(this.state.age, 10)
    const currentYear = new Date().getFullYear();
    let ageError = '';
    if (!this.state.age) {
      ageError = "Cannot be blank";
    }
    else if (!/^\d+$/.test(this.state.age)) {
      ageError = "User input must only be numbers";
    }
    else if (this.state.age.length === 1 || this.state.age.length === 3) {
      ageError = "User input must be two (age) or four (year of birth) characters";
    }
    else if (this.state.age.length === 2 && (parsedAge > 100 || parsedAge < 18)) {
      ageError = "User cannot be more than 100 years old or less than 18 years old";
    }
    else if (this.state.age.length === 4 && 
        (parsedAge < (currentYear - 100) || parsedAge > (currentYear - 18))) {
      ageError = "User must be between 18 and 99 years old";
    }
    if (ageError) {
      this.setState({ ageError });
      return false;
    }
    return true;
  }

  citizenshipValidate = () => {
    let citizenshipError = '';
    if (!/^[a-zA-Z\s]*$/g.test(this.state.citizenship)) {
      citizenshipError = "Cannot include special characters or numbers";
    }
    if (citizenshipError) {
      this.setState({ citizenshipError });
      return false;
    }
    return true;
  }

  mailingStateValidate = () => {
    let mailingStateError = "";
    if (!/^[a-zA-Z\s]*$/g.test(this.state.mailingState)) {
      mailingStateError = "Cannot include special characters or numbers";
    }
    if (mailingStateError) {
      this.setState({ mailingStateError });
      return false;
    }
    return true;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.ageValidate() && 
                    this.citizenshipValidate() &&
                    this.mailingStateValidate();
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
          <select name="maximumPolicy" 
            value={this.state.maximumPolicy} 
            onChange={this.handleChange}
          >
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
            value={this.state.age}
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
            value={this.state.startDate}
            type="text" 
            placeholder="Start Date" 
            onChange={this.handleChange} 
          />
          <input 
            name="endDate"
            value={this.state.endDate}
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
            value={this.state.citizenship}
            type="text" 
            placeholder="Choose Your Country of Citizenship" 
            onChange={this.handleChange} 
          />
          <div>{this.state.citizenshipError}</div>
        </label>
        <label>
          Mailing State
          <input 
            name="mailingState"
            value={this.state.mailingState}
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
