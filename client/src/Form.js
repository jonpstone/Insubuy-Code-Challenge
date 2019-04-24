import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Policy Maximum:
          <select>
            <option defaultValue="choose">Choose your policy maximum</option>
            <option value="50">50,000</option>
            <option value="100">100,000</option>
            <option value="250">250,000</option>
            <option value="500">500,000</option>
          </select>
        </label>
        <label>
          Age:
          <input 
            type="text" 
            placeholder="Choose your age" 
            onChange={this.handleChange} 
          />
        </label>
        <label>
          Travel Dates (mm/dd/yyy):
          <input type="text" placeholder="Start Date" onChange={this.handleChange} />
          <input type="text" placeholder="End Date" onChange={this.handleChange} />
        </label>
        <label>
          Citizenship:
          <input 
            type="text" 
            placeholder="Choose Your Country of Citizenship" 
            onChange={this.handleChange} 
          />
        </label>
        <label>
          Mailing State:
          <input type="text" placeholder="Choose State" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
