import React, { Component } from 'react';
import axios from 'axios'
import GroceryList from './GroceryList.jsx';
import AddGrocery from './AddGrocery.jsx';

import groceries from '../../../exampleGroceries.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groceries: [],
    };

    this.addGrocery = this.addGrocery.bind(this);
  }

  componentDidMount() {
    this.getGroceries()
  }

  getGroceries() {
    return axios.get('/groceries')
      .then(response => {
        this.setState({ groceries: response.data })
      })
      .catch()
  }
  
  addGrocery(grocery, cb) {
    axios.post('/groceries', grocery)
      .then(response => {
        this.setState({
          groceries: [ ...this.state.groceries, grocery ]
        })
        this.getGroceries().then(cb)
      })
  }

  render() {
    return (
      <div>
        <h1>Grocery List</h1>
        <AddGrocery onSubmit={this.addGrocery} />
        <GroceryList groceries={this.state.groceries} />
      </div>
    );
  }
}

export default App;
