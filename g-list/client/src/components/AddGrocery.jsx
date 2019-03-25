import React, { Component } from 'react';

class AddGrocery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const newState = {};
    newState[target.name] = target.value;

    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state, () => {
        this.setState({
          name: '',
          quantity: 0,
        });
    });
  }

  render() {
    return (
      <form>
        <label> Name
          <input
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </label>
        <label> Qunatity
          <input
            name="quantity"
            onChange={this.handleChange}
            value={this.state.quantity}
          />
        </label>
        <button onClick={this.handleSubmit} >Add Grocery</button>
      </form>
    );
  }
}

export default AddGrocery;
